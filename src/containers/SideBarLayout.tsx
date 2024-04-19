"use client";

import { SideBarLayoutProps } from "@/types/Props";
import SideBar from "../custom-components/bars/side-bar/SideBar";

function SidebarLayout({ children }: SideBarLayoutProps) {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="sticky top-0 w-1/6 h-screen">
        <SideBar />
      </div>
      <div className="w-5/6 h-full">{children}</div>
    </div>
  );
}

export default SidebarLayout;
