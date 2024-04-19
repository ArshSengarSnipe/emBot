import type { Metadata } from "next";
import Head from "next/head";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "emBot",
  authors: [{ name: "Snipe", url: "https://snipeit.ai" }],
  description: "Welcome to emBot, your own Email Copilot!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="copyright" content="Copyright - Snipe©" />
        <meta name="revised" content="Wednesday, April 17th, 2024, 12:00 am" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta httpEquiv="content-language" content="english" />
        <meta httpEquiv="cache-control" content="cache" />
        <meta httpEquiv="refresh" content="3600" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="english" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="rating" content="safe for kids" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:title" content="emBot" />
        <meta
          property="description"
          content="Welcome to emBot, your own Email Copilot!"
        />
        <meta property="og:image" content="favicon.ico" />
      </Head>
      <body className="w-screen min-h-screen max-h-max">{children}</body>
    </html>
  );
}
