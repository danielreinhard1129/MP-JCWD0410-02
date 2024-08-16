"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ShimmerButton from "./magicui/shimmerButton";
import Logo from "/public/event-ally.svg";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) {
    return null;
  }

  const handleClick = () => {
    router.push("/login");
  };

  const handleOpen = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 bg-[#070f26] ${pathname === "/" ? "absolute h-0 bg-[#fff]" : ""}`}
    >
      <nav
        className={`flex items-center justify-between px-4 pb-6 sm:p-6 md:pb-10 lg:px-4 lg:pb-0 lg:pt-7 ${pathname === "/" ? "pt-6 md:pt-12 lg:px-8 lg:pt-24 2xl:px-14" : ""} lg:h-28`}
      >
        <div className="relative flex w-full flex-col items-center justify-between px-0 py-3 max-lg:pb-11 sm:px-8 lg:flex-1 lg:flex-row lg:justify-around lg:pb-0">
          <Link
            href="/"
            className="absolute left-0 cursor-pointer lg:left-1 lg:top-4"
          >
            <Image
              className="h-auto w-60"
              src={Logo}
              height={0}
              width={0}
              alt="eventally-logo"
              priority
            />
          </Link>
          <div
            className={`mx-auto mt-20 flex-col justify-center gap-y-9 text-center text-lg font-bold text-slate-900 lg:mt-28 lg:bg-none dark:text-white/75 ${isOpen ? "flex" : "hidden"} ${isAnimating ? "animate-fade" : ""} lg:flex`}
          >
            <div
              className={`flex flex-col font-bold text-white lg:-mt-36 lg:ml-16 lg:flex-row lg:justify-center lg:px-4 ${pathname === "/" ? "hidden" : ""}`}
            >
              <Link
                href="/events"
                className="mr-10 mt-4 w-full min-w-32 rounded-md border-t-4 border-pink-500 py-7 text-xl tracking-wider lg:underline-animation-nav lg:mt-0 lg:inline-block lg:py-3 lg:text-lg"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="mr-10 mt-4 w-full min-w-32 rounded-md border-t-4 border-pink-500 py-7 text-xl tracking-wider lg:underline-animation-nav lg:mt-0 lg:inline-block lg:py-3 lg:text-lg"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="mt-4 w-full min-w-32 rounded-md border-t-4 border-pink-500 py-7 text-xl tracking-wider lg:underline-animation-nav lg:mt-0 lg:inline-block lg:py-3 lg:text-lg"
              >
                FAQ
              </Link>
            </div>
          </div>
          <ShimmerButton
            className={`ml-[1px] hidden w-full ${isOpen ? "flex" : "hidden"} bg-white shadow-2xl lg:absolute lg:right-1 lg:top-4 lg:max-w-44 ${
              pathname === "/" ? "hidden" : ""
            } lg:flex`}
            onClick={handleClick}
          >
            <span
              className={`md:text-md whitespace-pre-wrap text-sm font-bold italic tracking-widest lg:text-lg`}
            >
              Get Tickets
            </span>
          </ShimmerButton>
          <button
            className={`absolute right-0 top-5 cursor-pointer lg:hidden ${isOpen ? "hidden" : ""} ${pathname === "/" ? "hidden" : ""}`}
            onClick={handleOpen}
          >
            <svg
              className="d h-10 w-10 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <button
            className={`absolute right-0 top-5 cursor-pointer lg:hidden ${isOpen ? "block" : "hidden"} ${pathname === "/" ? "hidden" : ""}`}
            onClick={handleOpen}
          >
            <svg
              className="h-10 w-10 text-slate-500"
              x-show="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
