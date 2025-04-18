import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

export const metadata = {
  title: "Contact Us - HEXAD Engineering",
  description: "Get in touch with HEXAD Engineering for any inquiries about our engineering and design services.",
};

export default function ContactPage() {
  return (
    <div className="max-w-full container mx-auto">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-blue-500">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                We&apos;d love to hear from you. Reach out to us for any inquiries about our engineering services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 mx-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <div className="flex ">
                        <p className="text-muted-foreground">
                          Ground Floor,E1 Block (Beech),
                          <br />
                          Manyata Embassy Business Park, Outer Ring Road, Bangalore
                          <br />
                          560045, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <div className="mb-2 last:mb-0">
                        <p className="text-sm text-muted-foreground"> Office Phone</p>
                        <p className="text-foreground">+91-9577291349 </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <a
                        href="mailto:info@HEXADeng.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        info@HEXADeng.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* <Card className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="mb-2 last:mb-0">
                        <p className="text-sm font-medium">Monday - Friday</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                      </div>
                      <div className="mb-2 last:mb-0">
                        <p className="text-sm font-medium">Saturday</p>
                        <p className="text-muted-foreground">9:00 AM - 1:00 PM IST</p>
                      </div>
                      <div className="mb-2 last:mb-0">
                        <p className="text-sm font-medium">Sunday</p>
                        <p className="text-muted-foreground">Closed</p>
                      </div>
                    </div>
                  </div>
                </Card> */}

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/HEXAD-eng-llp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white dark:bg-gray-800 text-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/invites/contact/?igsh=1sl54ksi67lea&utm_content=vzay5wm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white dark:bg-gray-800 text-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg ">
                  <h3 className="font-semibold text-lg mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block" htmlFor="firstName">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" className="w-full" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block" htmlFor="lastName">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" className="w-full" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block" htmlFor="email">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" className="w-full" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block" htmlFor="company">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Enter your company name" className="w-full" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block" htmlFor="region">
                        Region
                      </label>
                      <select
                        id="region"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background h-10"
                      >
                        <option value="">Select your region</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="north-america">North America</option>
                        <option value="south-america">South America</option>
                        <option value="africa">Africa</option>
                        <option value="australia">Australia/Oceania</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block" htmlFor="service">
                        Service
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background h-10"
                      >
                        <option value="">Select a service</option>
                        <option value="engineering">Engineering Services</option>
                        <option value="design">Design Services</option>
                        <option value="web-app">Web and App Development</option>
                        <option value="analysis">Analysis Services</option>
                        <option value="development">Development Services</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block" htmlFor="message">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message here" className="w-full h-32" />
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
