"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ShimmerButton from "./magicui/shimmerButton";
import Logo from "/public/event-ally.svg";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) {
    return null;
  }

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-4 pt-2 sm:p-6 lg:px-8">
        <div className="mt-4 flex w-full items-center justify-between px-0 py-3 sm:justify-between sm:px-8 lg:flex-1">
          <Link href="/" className="cursor-pointer">
            <Image
              className="h-auto w-60"
              src={Logo}
              height={0}
              width={0}
              alt="eventally-logo"
              priority
            />
          </Link>
          <div className="mx-3 mt-1 flex justify-center text-center text-lg font-bold text-slate-900 lg:flex-grow">
            <Link
              href="#"
              className="underline-animation-nav mr-12 mt-4 min-w-28 rounded-md border-t-4 border-pink-500 px-5 py-3 tracking-wider lg:mt-0 lg:inline-block"
            >
              Events
            </Link>
            <Link
              href="#"
              className="underline-animation-nav mr-12 mt-4 min-w-28 rounded-md border-t-4 border-pink-500 px-5 py-3 tracking-wider lg:mt-0 lg:inline-block"
            >
              About
            </Link>
            <Link
              href="#"
              className="underline-animation-nav mr-12 mt-4 min-w-28 rounded-md border-t-4 border-pink-500 px-5 py-3 tracking-wider lg:mt-0 lg:inline-block"
            >
              FAQ
            </Link>
          </div>
          <ShimmerButton
            className={`bg-white shadow-2xl ${
              pathname === "/" ? "hidden" : ""
            } sm:block`}
            onClick={handleClick}
          >
            <span
              className={`md:text-md whitespace-pre-wrap text-sm font-bold italic tracking-widest lg:text-lg`}
            >
              Get Tickets
            </span>
          </ShimmerButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
