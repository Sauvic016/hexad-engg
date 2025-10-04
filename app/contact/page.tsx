import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import Image from "next/image";

export const metadata = {
  title: "Contact Us - HEXAD Engineering",
  description: "Get in touch with HEXAD Engineering for any inquiries about our engineering and design services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col  space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Get in Touch
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                We&apos;d love to hear from you. Our team is always ready to connect and assist with your inquiries.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-none shadow-sm bg-white dark:bg-zinc-800">
                <CardHeader className="">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-zinc-500" />
                    <CardTitle className="text-base">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-900 dark:text-zinc-100">info@hexadengg.com</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white dark:bg-zinc-800">
                <CardHeader className="">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-zinc-500" />
                    <CardTitle className="text-base">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-900 dark:text-zinc-100">+1 713 347 3054 </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white dark:bg-zinc-800">
                <CardHeader className="">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-zinc-500" />
                    <CardTitle className="text-base">Office</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 ">
                  <CardDescription className="text-zinc-700 dark:text-zinc-100 rounded-xl p-2 ">
                    <b> Operational address</b>: 22nd Floor, World Trade Center, 26/1, Brigade Gateway, Bengaluru,
                    Karnataka, 560055, India
                  </CardDescription>

                  <CardDescription className="text-zinc-700 dark:text-zinc-100 rounded-xl p-2">
                    <b>Registered address </b>: 164, Yelahanka, Bengaluru, Karnataka, 560064, India
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white dark:bg-zinc-800">
                <CardHeader className="">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-zinc-500" />
                    <CardTitle className="text-base">Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-900 dark:text-zinc-100">
                    Monday - Friday: 9AM - 6PM
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            {/* <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-900/40 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Office location map"
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-white dark:bg-zinc-800 px-3 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-medium">Our Headquarters</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col gap-4">
            <Card className="border-none shadow-lg bg-white dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl ">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        className="border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        className="border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                      className="border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you need assistance with..."
                      className="min-h-[150px] border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400"
                    />
                  </div>
                  <Button className="w-full group bg-brand-primary text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
