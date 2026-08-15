"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <Image
          src="/logo-1.png"
          alt="HEXAD Engineering LLP"
          width={180}
          height={65}
          className="mx-auto mb-8"
          priority
        />
      </div>

      <div className="flex items-center justify-center mb-6">
        <AlertTriangle className="h-12 w-12 text-red-500 mr-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Something went wrong</h1>
      </div>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        We apologize for the inconvenience. Our team has been notified of this issue.
      </p>

      <div className="space-x-4">
        <Button onClick={() => reset()} className="bg-brand-primary hover:bg-brand-primary/90 text-white">
          Try Again
        </Button>

        <Link href="/">
          <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
