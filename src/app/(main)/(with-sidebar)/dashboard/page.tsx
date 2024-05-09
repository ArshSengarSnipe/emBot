"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import SearchBar from "@/custom-components/bars/nav-bar/SearchBar";
import AlertIcon from "@/custom-components/icons/AlertIcon";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import ChatIcon from "@/assets/icons/chat-icon.svg";
import UserIcon from "@/custom-components/icons/UserIcon";
import DummyUserIcon from "@/assets/icons/dummy-user-icon.svg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import DropDownIcon from "@/assets/icons/drop-down-icon.svg";
import Image from "next/image";
import UpwardTrendIcon from "@/assets/icons/upward-trend-icon.svg";
import SplineChart from "@/custom-components/charts/SplineChart";
import HappyFaceIcon from "@/assets/icons/happy-face-icon.svg";
import NeutralFaceIcon from "@/assets/icons/neutral-face-icon.svg";
import AngryFaceIcon from "@/assets/icons/angry-face-icon.svg";
import SadFaceIcon from "@/assets/icons/sad-face-icon.svg";
import StackedDoughnutChart from "@/custom-components/charts/StackedDoughnutChart";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function DashboardPage() {
  const { user, logOut } = useAuth();
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await logOut();
      console.log("Loged Out!");
      router.push("/");
    } catch (error) {
      console.log("Failed to Log Out! Please try again.");
    }
  };
  const [date, setDate] = useState<undefined | Date>(new Date());
  return (
    <section className="w-full min-h-screen max-h-max p-8 flex flex-col gap-4">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-full flex flex-row justify-between items-center gap-4">
          <div className="w-4/5 flex flex-row items-center">
            <SearchBar onClick={() => {}} />
          </div>
          <div className="w-fit flex flex-row items-center gap-2">
            <AlertIcon src={NotificationIcon.src} alt="notification icon" />
            <AlertIcon src={ChatIcon.src} alt="chat icon" />
          </div>
          <div className="w-fit flex flex-row items-center gap-2">
            <UserIcon src={user?.photoURL ?? DummyUserIcon.src} />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-4 focus:outline-none">
                <pre className="text-base text-text_color-white_2 font-normal">
                  {user?.email ?? "user@example.com"}
                </pre>
                <Image
                  src={DropDownIcon.src}
                  alt="drop down icon"
                  width={10}
                  height={5}
                  priority
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="cursor-pointer">
                <DropdownMenuLabel className="text-xs text-text_color-white_2 font-extralight">
                  Action
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel
                  className="text-xs text-text_color-white_1 font-extralight"
                  onClick={handleLogOut}
                >
                  Log Out
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-fit">
            <h1 className="text-4xl text-text_color-white_1 font-extrabold">
              Hi, {user?.displayName ?? "User"}!
            </h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="w-fit">
              <p className="text-xs text-text_color-white_2 font-extralight">
                Welcome to emBot, your own Email Copilot!
              </p>
            </div>
            <div className="w-fit flex flex-row items-center gap-4">
              <p className="text-xs text-text_color-white_2 font-extralight">
                Emails are synced from {"18.01.2023"} to {"08.04.2024"}
              </p>
              <button
                className="rounded-3xl px-5 py-1 bg-button_color-green_1 text-center text-sm text-text_color-black_1 font-medium cursor-pointer hover:bg-button_color-green_2"
                onClick={() => {}}
              >
                Resync
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between gap-4">
        <div className="w-2/3 flex flex-col items-center gap-4">
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="w-[30%] rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
              <div className="w-full flex flex-row justify-between items-center gap-8">
                <pre className="text-base text-text_color-white_2 font-normal">
                  Unread Emails
                </pre>
                <div className="w-fit flex flex-row items-center">
                  <pre className="text-base text-text_color-green_2 font-normal">
                    {"+125%"}
                  </pre>
                  <Image
                    src={UpwardTrendIcon.src}
                    alt="upward trend arrow icon"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </div>
              <div className="w-fit">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"60.7k"}
                </h2>
              </div>
              <div className="w-full">
                <SplineChart
                  label="unread emails"
                  data={[
                    { monthIndex: 0, value: 70 },
                    { monthIndex: 1, value: 80 },
                    { monthIndex: 2, value: 90 },
                    { monthIndex: 3, value: 100 },
                    { monthIndex: 4, value: 110 },
                    { monthIndex: 5, value: 120 },
                    { monthIndex: 6, value: 10 },
                    { monthIndex: 7, value: 20 },
                    { monthIndex: 8, value: 30 },
                    { monthIndex: 9, value: 40 },
                    { monthIndex: 10, value: 50 },
                    { monthIndex: 11, value: 60 },
                  ]}
                  background_colors={[
                    "rgba(188, 226, 158, 1)",
                    "rgba(188, 226, 158, 0.5)",
                    "rgba(188, 226, 158, 0)",
                  ]}
                  border_color="#BCE29E"
                />
              </div>
            </div>
            <div className="w-[30%] rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
              <div className="w-full flex flex-row justify-between items-center gap-8">
                <pre className="text-base text-text_color-white_2 font-normal">
                  Spam Emails
                </pre>
                <div className="w-fit flex flex-row items-center">
                  <pre className="text-base text-text_color-green_2 font-normal">
                    {"+125%"}
                  </pre>
                  <Image
                    src={UpwardTrendIcon.src}
                    alt="upward trend arrow icon"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </div>
              <div className="w-fit">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"40.2k"}
                </h2>
              </div>
              <div className="w-full">
                <SplineChart
                  label="spam emails"
                  data={[
                    { monthIndex: 0, value: 10 },
                    { monthIndex: 1, value: 30 },
                    { monthIndex: 2, value: 40 },
                    { monthIndex: 3, value: 20 },
                    { monthIndex: 4, value: 50 },
                    { monthIndex: 5, value: 70 },
                    { monthIndex: 6, value: 80 },
                    { monthIndex: 7, value: 60 },
                    { monthIndex: 8, value: 90 },
                    { monthIndex: 9, value: 110 },
                    { monthIndex: 10, value: 120 },
                    { monthIndex: 11, value: 100 },
                  ]}
                  background_colors={[
                    "rgba(229, 235, 178, 1)",
                    "rgba(229, 235, 178, 0.5)",
                    "rgba(229, 235, 178, 0)",
                  ]}
                  border_color="#E5EBB2"
                />
              </div>
            </div>
            <div className="w-[30%] rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
              <div className="w-full flex flex-row justify-between items-center gap-8">
                <pre className="text-base text-text_color-white_2 font-normal">
                  Clutter Score
                </pre>
                <div className="w-fit flex flex-row items-center">
                  <pre className="text-base text-text_color-green_2 font-normal">
                    {"+125%"}
                  </pre>
                  <Image
                    src={UpwardTrendIcon.src}
                    alt="upward trend arrow icon"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </div>
              <div className="w-fit">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"20%"}
                </h2>
              </div>
              <div className="w-full">
                <SplineChart
                  label="clutter score"
                  data={[
                    { monthIndex: 0, value: 30 },
                    { monthIndex: 1, value: 40 },
                    { monthIndex: 2, value: 50 },
                    { monthIndex: 3, value: 60 },
                    { monthIndex: 4, value: 70 },
                    { monthIndex: 5, value: 10 },
                    { monthIndex: 6, value: 20 },
                    { monthIndex: 7, value: 80 },
                    { monthIndex: 8, value: 90 },
                    { monthIndex: 9, value: 100 },
                    { monthIndex: 10, value: 110 },
                    { monthIndex: 11, value: 120 },
                  ]}
                  background_colors={[
                    "rgba(248, 196, 180, 1)",
                    "rgba(248, 196, 180, 0.5)",
                    "rgba(248, 196, 180, 0)",
                  ]}
                  border_color="#F8C4B4"
                />
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl p-4 flex flex-col gap-1 bg-background_color-gray_2">
            <div className="w-fit">
              <pre className="text-base text-text_color-white_2 font-normal">
                Sentiment Analysis
              </pre>
            </div>
            <div className="w-full flex flex-row justify-between gap-8">
              <div className="w-[44.5%] flex flex-row justify-between items-center gap-1">
                <div className="w-fit flex flex-col items-center gap-1">
                  <Image
                    src={HappyFaceIcon.src}
                    alt="happy face icon"
                    width={60}
                    height={60}
                    priority
                  />
                  <pre className="text-lg text-text_color-white_1 font-semibold">
                    {"60%"}
                  </pre>
                </div>
                <div className="w-fit flex flex-col items-center gap-1">
                  <Image
                    src={NeutralFaceIcon.src}
                    alt="neutral face icon"
                    width={60}
                    height={60}
                    priority
                  />
                  <pre className="text-lg text-text_color-white_1 font-semibold">
                    {"30%"}
                  </pre>
                </div>
                <div className="w-fit flex flex-col items-center gap-1">
                  <Image
                    src={AngryFaceIcon.src}
                    alt="angry face icon"
                    width={60}
                    height={60}
                    priority
                  />
                  <pre className="text-lg text-text_color-white_1 font-semibold">
                    {"8%"}
                  </pre>
                </div>
                <div className="w-fit flex flex-col items-center gap-1">
                  <Image
                    src={SadFaceIcon.src}
                    alt="sad face icon"
                    width={60}
                    height={60}
                    priority
                  />
                  <pre className="text-lg text-text_color-white_1 font-semibold">
                    {"2%"}
                  </pre>
                </div>
              </div>
              <div className="w-1 rounded-lg bg-bar_color-green_1" />
              <div className="w-[44.5%] flex flex-col justify-between items-center gap-1">
                <p className="text-xs text-text_color-white_2 font-extralight">
                  Corporate can be harsh, but keep your emotions in control
                  :&#41;
                </p>
                <p className="text-xs text-text_color-white_2 font-extralight">
                  emBot can help you write &#34;nicer&#34; emails from your
                  WhatsApp!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
            <div className="w-fit">
              <pre className="text-base text-text_color-white_2 font-normal">
                emBot did what?
              </pre>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="w-fit flex flex-col items-center gap-1">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"5k"}
                </h2>
                <pre className="text-xs text-text_color-white_2 font-extralight">
                  Emails Ignored
                </pre>
              </div>
              <div className="w-fit flex flex-col items-center gap-1">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"10k"}
                </h2>
                <pre className="text-xs text-text_color-white_2 font-extralight">
                  Notifications
                </pre>
              </div>
              <div className="w-fit flex flex-col items-center gap-1">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"200 hr"}
                </h2>
                <pre className="text-xs text-text_color-white_2 font-extralight">
                  Time Saved
                </pre>
              </div>
              <div className="w-fit flex flex-col items-center gap-1">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"5 min"}
                </h2>
                <pre className="text-xs text-text_color-white_2 font-extralight">
                  Response Time
                </pre>
              </div>
              <div className="w-fit flex flex-col items-center gap-1">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"5k"}
                </h2>
                <pre className="text-xs text-text_color-white_2 font-extralight">
                  Emails Summarised
                </pre>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="w-[45%] rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
              <div className="w-fit">
                <pre className="text-base text-text_color-white_2 font-normal">
                  Top Email Senders
                </pre>
              </div>
            </div>
            <div className="w-[45%] rounded-2xl p-4 flex flex-col justify-between gap-1 bg-background_color-gray_2">
              <div className="w-fit">
                <pre className="text-base text-text_color-white_2 font-normal">
                  Frequent Topics
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-col items-center gap-4">
          <div className="w-full rounded-2xl p-4 flex flex-col justify-between items-center gap-1 bg-background_color-gray_2">
            <div className="relative w-full flex flex-col items-center">
              <div className="absolute w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-2xl text-text_color-white_1 font-semibold">
                  {"174k"}
                </h2>
                <pre className="text-base text-text_color-white_2 font-normal">
                  Views
                </pre>
              </div>
              <StackedDoughnutChart
                label="Views"
                data={[
                  { emailType: "Work", views: 47495 },
                  { emailType: "Social", views: 40495 },
                  { emailType: "Personal", views: 37505 },
                  { emailType: "Promotions", views: 30505 },
                ]}
                background_colors={["#FF8787", "#E5EBB2", "#F8C4B4", "#E5EBB2"]}
                border_colors={["#FF8787", "#E5EBB2", "#F8C4B4", "#E5EBB2"]}
              />
            </div>
            <div className="w-full flex flex-row justify-between gap-8">
              <div className="w-fit flex flex-col gap-2">
                <div className="w-fit flex flex-row items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-bullet_color-red_1" />
                  <pre className="text-base text-text_color-white_2 font-normal">
                    Work
                  </pre>
                </div>
                <div className="w-fit flex flex-row items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-bullet_color-green_1" />
                  <pre className="text-base text-text_color-white_2 font-normal">
                    Social
                  </pre>
                </div>
              </div>
              <div className="w-fit flex flex-col gap-2">
                <div className="w-fit flex flex-row items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-bullet_color-orange_1" />
                  <pre className="text-base text-text_color-white_2 font-normal">
                    Personal
                  </pre>
                </div>
                <div className="w-fit flex flex-row items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-bullet_color-green_1" />
                  <pre className="text-base text-text_color-white_2 font-normal">
                    Promotions
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl p-4 flex flex-row justify-center items-center bg-background_color-gray_2">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
