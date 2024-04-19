import { SideBarListItems } from "@/store/SideBarListItems";
import SideBarListItem from "./SideBarListItem";

function SideBarList() {
  return (
    <ul className="w-full flex flex-col items-center gap-2">
      {SideBarListItems.map((item, index, items) => (
        <SideBarListItem
          key={item.key}
          route={item.route}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </ul>
  );
}

export default SideBarList;
