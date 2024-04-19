import Link from "next/link";
import Image from "next/image";
import emBotLogo from "@/assets/logos/emBot-logo.svg";

function Logo() {
  return (
    <Link className="inline-block cursor-pointer" href="/">
      <div className="w-fit flex flex-row items-center gap-2">
        <Image
          src={emBotLogo.src}
          alt="emBot logo"
          width={50}
          height={50}
          priority={true}
        />
        <pre className="text-xl text-text_color-white_1 font-semibold hover:text-text_color-green_1">
          emBot
        </pre>
      </div>
    </Link>
  );
}

export default Logo;
