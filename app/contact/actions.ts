"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { z } from "zod";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(150).refine((value) => !/[\r\n]/.test(value)),
  message: z.string().trim().min(10).max(5000),
  companyWebsite: z.string().max(0),
  turnstileToken: z.string().min(1).max(2048),
});

let contactRateLimit: Ratelimit | undefined;

function getContactRateLimit() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  contactRateLimit ??= new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    prefix: "ratelimit:contact",
  });

  return contactRateLimit;
}

async function verifyTurnstileToken(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
      cache: "no-store",
    });
    const result = (await response.json()) as { success?: boolean };

    return response.ok && result.success === true;
  } catch {
    return false;
  }
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    companyWebsite: formData.get("companyWebsite"),
    turnstileToken: formData.get("cf-turnstile-response"),
  });

  if (!parsed.success) {
    return { status: "error", message: "Please check the form fields and try again." };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("cf-connecting-ip")
    ?? requestHeaders.get("x-real-ip")
    ?? requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
  const rateLimit = getContactRateLimit();

  if (!rateLimit) {
    console.error("Contact form rate limiting settings are missing.");
    return { status: "error", message: "Please try again later." };
  }

  try {
    const { success } = await rateLimit.limit(ip);

    if (!success) {
      return { status: "error", message: "Please try again later." };
    }
  } catch {
    console.error("Contact form rate limiting is unavailable.");
    return { status: "error", message: "Please try again later." };
  }

  const turnstileIsValid = await verifyTurnstileToken(parsed.data.turnstileToken, ip);

  if (!turnstileIsValid) {
    return { status: "error", message: "Verification failed. Please try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@hexadengg.com";

  if (!apiKey || !from) {
    console.error("Contact form email settings are missing.");
    return { status: "error", message: "Email is temporarily unavailable. Please contact us directly." };
  }

  const { firstName, lastName, email, subject, message } = parsed.data;
  const emailText = [
    `Name: ${firstName} ${lastName}`,
    `Work email: ${email}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Website inquiry] ${subject}`,
        text: emailText,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Resend rejected a contact form email.", response.status);
      return { status: "error", message: "We could not send your message. Please try again shortly." };
    }

    return { status: "success", message: "Thanks—your message has been sent. We'll be in touch soon." };
  } catch {
    console.error("The contact form could not reach Resend.");
    return { status: "error", message: "We could not send your message. Please try again shortly." };
  }
}
