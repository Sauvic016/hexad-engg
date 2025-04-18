import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Careers = () => {
  return (
    <section id="careers" className="  bg-white">
      <div className="w-full">
        <div className="mx-10 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Join Our Team</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            We&apos;re always looking for talented individuals to join our growing team. Discover exciting career
            opportunities and be part of our journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8 w-full max-w-4xl">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Senior Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lead development of complex software solutions for enterprise clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>UX/UI Designer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create intuitive and engaging user experiences for web and mobile applications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Cloud Solutions Architect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Design and implement scalable cloud infrastructure for our clients.</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/careers">
              <Button className="bg-blue-600 hover:bg-blue-700">View All Positions</Button>
            </Link>
            <Link href="/careers#life_at_hexad">
              <Button variant="outline">Life at HEXAD</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
