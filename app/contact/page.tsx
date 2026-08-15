import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us - HEXAD Engineering",
  description: "Get in touch with HEXAD Engineering for any inquiries about our engineering and design services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      <section className="relative bg-[#07152f] pb-32 pt-20 text-center sm:pb-40 sm:pt-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mx-auto mb-5 h-1 w-24 bg-brand-primary" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Start a Conversation</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Let&apos;s Build What&apos;s Next</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">
            Share your engineering challenge with us. Our team is ready to understand your goals and help define the
            right path forward.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-20 pb-20 sm:-mt-24 sm:pb-24">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_30px_80px_-35px_rgba(7,21,47,0.4)] sm:w-[calc(100%-3rem)] lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative isolate overflow-hidden bg-blue-950 px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
            <div className="absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-brand-primary/25 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Contact Details</p>
            <h2 className="mt-3 text-3xl font-bold">Talk with our team</h2>
            <p className="mt-4 max-w-md leading-relaxed text-blue-100/70">
              Reach us directly or use the project form. We&apos;ll connect you with the right engineering expertise.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-blue-100/60">Email</p>
                  <a href="mailto:info@hexadengg.com" className="mt-1 block font-semibold hover:text-blue-300">
                    info@hexadengg.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-blue-100/60">Phone</p>
                  <a href="tel:+17133473054" className="mt-1 block font-semibold hover:text-blue-300">
                    +1 713 347 3054
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-blue-100/60">Business Hours</p>
                  <p className="mt-1 font-semibold">Monday – Friday, 9 AM – 6 PM</p>
                </div>
              </div>

              <div className="flex gap-4 border-t border-white/10 pt-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-blue-100/60">Registered Office</p>
                  <address className="mt-1 max-w-sm text-sm font-medium not-italic leading-relaxed text-white/90">
                    1st Floor, No. 12 &amp; 13, Nanda Gokula Complex, 16th A Cross Road, Hebbal Kempapura, Bengaluru,
                    Karnataka 560024, India
                  </address>
                </div>
              </div>
            </div>
          </aside>

          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">Project Inquiry</p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950">Send us a message</h2>
            <p className="mt-3 text-gray-600">Tell us a little about your needs and we&apos;ll get back to you soon.</p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-semibold text-blue-950">First name</label>
                  <Input id="first-name" name="firstName" autoComplete="given-name" placeholder="John" required className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-semibold text-blue-950">Last name</label>
                  <Input id="last-name" name="lastName" autoComplete="family-name" placeholder="Doe" required className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-blue-950">Work email</label>
                <Input id="email" name="email" autoComplete="email" placeholder="john.doe@company.com" type="email" required className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-blue-950">Subject</label>
                <Input id="subject" name="subject" placeholder="How can we help you?" required className="h-12 border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-blue-950">Project details</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." required className="min-h-40 resize-y border-blue-100 bg-blue-50/30 focus-visible:ring-brand-primary" />
              </div>

              <Button type="submit" className="group mt-2 h-12 w-full bg-brand-primary text-white hover:bg-blue-800 sm:w-fit sm:px-7">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
