import { UserIconProps } from "@/types/Props";
import Image from "next/image";

function UserIcon({ src }: UserIconProps) {
  return (
    <div className="w-fit rounded-full cursor-pointer">
      <Image src={src} alt="user icon" width={30} height={30} />
    </div>
  );
}

export default UserIcon;
