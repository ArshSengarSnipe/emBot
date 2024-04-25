"use client";

import { SearchBarProps } from "@/types/Props";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search-icon.svg";

function SearchBar({ onClick }: SearchBarProps) {
  return (
    <div className="w-full rounded-lg flex flex-row justify-between items-center bg-background_color-gray_2">
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        className="w-full rounded-l-lg pl-4 py-2 bg-background_color-gray_2 text-xs text-text_color-white_2 font-extralight focus:outline-none focus:text-text_color-white_1"
        id="search"
        type="text"
        placeholder="Search anything"
        required
      />
      <button
        className="rounded-r-lg pr-4 py-2 cursor-pointer"
        onClick={onClick}
      >
        <Image
          src={SearchIcon.src}
          alt="search icon"
          width={15}
          height={15}
          priority
        />
      </button>
    </div>
  );
}

export default SearchBar;
