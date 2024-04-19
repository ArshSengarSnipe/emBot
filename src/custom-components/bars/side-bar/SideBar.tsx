import Logo from "./Logo";
import SideBarList from "./SideBarList";
import Promotion from "./Promotion";

function SideBar() {
  return (
    <div className="w-full h-full py-4 flex flex-col justify-between bg-background_color-gray_2">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-row justify-center items-center">
          <Logo />
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <SideBarList />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <Promotion />
      </div>
    </div>
  );
}

export default SideBar;
