"use client";

import Link from "next/link";

function ErrorPage() {
  return (
    <main className="w-screen min-h-screen max-h-max flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl font-extrabold">Error!</h1>
      <Link
        className="rounded-lg px-8 py-2 bg-button_color-gray_1 text-center text-base text-text_color-white_1 no-underline hover:bg-button_color-gray_2"
        href="/"
      >
        Go Back To Home
      </Link>
    </main>
  );
}

export default ErrorPage;
