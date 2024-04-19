import { AlertIconProps } from "@/types/Props";
import Image from "next/image";

function AlertIcon({ src, alt }: AlertIconProps) {
  return (
    <div className="w-fit rounded-lg p-2 bg-background_color-gray_2 cursor-pointer">
      <Image src={src} alt={alt} width={15} height={15} priority />
    </div>
  );
}

export default AlertIcon;
