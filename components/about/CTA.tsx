import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="mx-10 md:mx-30 pb-8 md:pb-12 lg:pb-16 mt-12 bg-gray-50">
      <div className="w-full bg-gray-50">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/70 via-blue-700/20 to-teal-500/20" />
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-white/5" />
          <div className="relative flex flex-col items-center justify-center space-y-6 px-6 py-16 text-center md:px-10 md:py-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Growing Team</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We&apos;re looking for passionate individuals who want to make an impact. Discover opportunities that
              match your skills and ambitions.
            </p>
            <Link href={"/careers"}>
              <Button size="lg" className="group mt-2 cursor-pointer">
                Explore Careers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
