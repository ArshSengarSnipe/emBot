import { SideBarListItemProps } from "@/types/Props";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function SideBarListItem({ route, icon, text }: SideBarListItemProps) {
  const activepathname = usePathname();
  return (
    <li
      className={`relative w-full py-4 flex flex-row justify-center ${
        activepathname === route
          ? "bg-background_color-black_1 text-text_color-green_1 sidebar-list-item-active"
          : "text-text_color-white_2 hover:text-text_color-green_1"
      }`}
    >
      <div className="w-1/3">
        <Link className="cursor-pointer" href={route}>
          <div className="w-full flex flex-row items-center gap-2">
            <Image
              src={icon}
              alt={`${text.toLowerCase()} icon`}
              width={25}
              height={25}
              priority
            ></Image>
            <pre className="text-base font-normal">{text}</pre>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default SideBarListItem;
