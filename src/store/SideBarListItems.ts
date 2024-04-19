import { SideBarListItemProps } from "@/types/Props";
import DashboardIcon from "@/assets/icons/dashboard-icon.svg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import AnalyticsIcon from "@/assets/icons/analytics-icon.svg";
import PitchIcon from "@/assets/icons/pitch-icon.svg";
import SettingsIcon from "@/assets/icons/settings-icon.svg";

export const SideBarListItems: SideBarListItemProps[] = [
  {
    key: "dashboard-page",
    route: "/dashboard",
    icon: DashboardIcon.src,
    text: "Dashboard",
  },
  {
    key: "calendar-page",
    route: "/calendar",
    icon: CalendarIcon.src,
    text: "Calendar",
  },
  {
    key: "analytics-page",
    route: "/analytics",
    icon: AnalyticsIcon.src,
    text: "Analytics",
  },
  {
    key: "pitch-page",
    route: "/pitch",
    icon: PitchIcon.src,
    text: "Pitch",
  },
  {
    key: "settings-page",
    route: "/settings",
    icon: SettingsIcon.src,
    text: "Settings",
  },
];
