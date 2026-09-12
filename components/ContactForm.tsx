"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import Script from "next/script";

import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = { status: "idle", message: "" };

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }

    if (state.status !== "idle") {
      window.turnstile?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-semibold text-blue-950">First name</label>
          <Input id="first-name" name="firstName" autoComplete="given-name" placeholder="John" required maxLength={80} className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-semibold text-blue-950">Last name</label>
          <Input id="last-name" name="lastName" autoComplete="family-name" placeholder="Doe" required maxLength={80} className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-blue-950">Work email</label>
        <Input id="email" name="email" autoComplete="email" placeholder="john.doe@company.com" type="email" required maxLength={254} className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-blue-950">Subject</label>
        <Input id="subject" name="subject" placeholder="How can we help you?" required maxLength={150} className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-blue-950">Project details</label>
        <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." required minLength={10} maxLength={5000} className="min-h-40 resize-y border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <Input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-size="flexible"
      />

      {state.status !== "idle" && (
        <p
          role="status"
          aria-live="polite"
          className={state.status === "success" ? "text-sm font-medium text-green-700" : "text-sm font-medium text-red-700"}
        >
          {state.message}
        </p>
      )}

      <Button disabled={isPending} type="submit" className="group mt-2 h-12 w-full bg-brand-primary text-white hover:bg-blue-800 sm:w-fit sm:px-7">
        {isPending ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Button>
    </form>
  );
}
