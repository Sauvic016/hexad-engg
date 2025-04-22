"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary">
              HEXAD Engineering LLP
            </h2>
          </div>

          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Critical Error
          </h1>

          <p className="text-lg text-gray-600 max-w-md mb-8">
            A critical error has occurred. We apologize for the inconvenience
            and are working to fix the issue.
          </p>

          <Button
            onClick={() => reset()}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-md"
          >
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
