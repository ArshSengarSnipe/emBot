"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SideBarLayout from "@/containers/SideBarLayout";

function MainWithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);
  return (
    <main className="w-screen min-h-screen max-h-max">
      <SideBarLayout>{children}</SideBarLayout>
    </main>
  );
}

export default MainWithSidebarLayout;
