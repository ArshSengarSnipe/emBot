"use client";

import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import Link from "next/link";

export default function HomePage() {
  const { token, signInWithGoogle } = useAuth();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      setShowSpinner(true);
      await signInWithGoogle();
      router.push("/dashboard");
      return NextResponse.json(
        { message: "Signed In!", success: true },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to Sign In. Please try again.", success: false },
        { status: 400 }
      );
    } finally {
      setShowSpinner(false);
    }
  };
  return (
    <main className="w-screen min-h-screen max-h-max flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl font-extrabold">
        Welcome to emBot, your own Email Copilot!
      </h1>
      {!token ? (
        <button
          className="rounded-lg px-8 py-2 flex flex-row justify-center items-center gap-2 bg-button_color-gray_1 hover:bg-button_color-gray_2"
          onClick={handleSignIn}
        >
          <pre className="text-base text-text_color-white_1">
            Sign In With Google
          </pre>
          {showSpinner && (
            <div className="w-fit">
              <div className="spinner" />
            </div>
          )}
        </button>
      ) : (
        <Link
          className="rounded-lg px-8 py-2 bg-button_color-gray_1 text-center text-base text-text_color-white_1 no-underline hover:bg-button_color-gray_2"
          href="/dashboard"
        >
          Go To Dashboard
        </Link>
      )}
    </main>
  );
}
