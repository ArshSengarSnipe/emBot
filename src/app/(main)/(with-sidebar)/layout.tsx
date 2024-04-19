import SideBarLayout from "@/containers/SideBarLayout";

function MainWithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen min-h-screen max-h-max">
      <SideBarLayout>{children}</SideBarLayout>
    </main>
  );
}

export default MainWithSidebarLayout;
