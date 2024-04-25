"use client";

function Promotion() {
  return (
    <div className="w-fit rounded-xl p-4 flex flex-col gap-4 bg-background_color-gray_1">
      <p className="text-xs text-text_color-white_1 font-extralight">
        Get 10% off for all features!
      </p>
      <button
        className="rounded-3xl px-4 py-2 bg-button_color-green_1 text-center text-base text-text_color-black_1 font-semibold cursor-pointer hover:bg-button_color-green_2"
        onClick={() => {}}
      >
        Upgrade Now
      </button>
    </div>
  );
}

export default Promotion;
