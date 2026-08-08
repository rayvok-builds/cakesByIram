import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-display text-5xl font-semibold text-plum mb-4">404</h1>
      <h2 className="font-display text-2xl text-plum mb-3">Page Not Found</h2>
      <p className="font-body text-ink opacity-85 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btnPrimary">
        Return Home
      </Link>
    </div>
  );
}
