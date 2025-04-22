import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <Image src="/logo.png" alt="HEXAD Engineering LLP" width={180} height={65} className="mx-auto mb-8" priority />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-brand-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved to another location.
      </p>

      <div className="space-x-4">
        <Link href="/">
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">Back to Home</Button>
        </Link>

        <Link href="/contact">
          <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
