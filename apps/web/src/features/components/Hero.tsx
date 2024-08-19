"use client";

import { usePathname } from "next/navigation";
import { InputSearchBar } from "./InputSearchBar";

const Hero = () => {
  const pathname = usePathname();

  return (
    <section>
      <div className="bg-[#070f26]">
        <div className="mx-auto flex flex-col items-center gap-y-6 py-12 sm:py-14 md:gap-y-0">
          <div className="mb-5 w-11/12 flex-col items-center justify-center font-mochiy sm:mb-10 sm:w-2/3 lg:flex">
            <h1 className="text-center text-4xl font-black leading-[55px] tracking-wide text-gray-800 sm:text-5xl md:text-5xl md:leading-snug lg:text-5xl xl:text-6xl dark:text-white">
              <span className="mr-1 text-pink-500">Live.</span> Dont't Just
              Exist
            </h1>
            <p className="mt-6 text-center text-xl font-normal text-gray-600 sm:mt-10 lg:w-10/12 dark:text-gray-300">
              Discover the Most happening events around you
            </p>
          </div>
          <div
            className={`flex w-11/12 md:w-8/12 xl:w-6/12 ${pathname === "/landingpage" ? "hidden" : ""}`}
          >
            <InputSearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
