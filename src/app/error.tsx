"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function ErrorPage() {
  return (
    <main className="w-screen min-h-screen max-h-max flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl font-extrabold">Error Page</h1>
      <Button variant="link">
        <Link href="/">Go Back To Landing Page</Link>
      </Button>
    </main>
  );
}

export default ErrorPage;
