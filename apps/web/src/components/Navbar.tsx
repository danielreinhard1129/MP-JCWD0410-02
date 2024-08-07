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
          <ShimmerButton
            className={`bg-white shadow-2xl ${
              pathname === "/" ? "hidden" : ""
            } sm:block`}
            onClick={handleClick}
          >
            <span
              className={`md:text-md whitespace-pre-wrap text-sm font-extrabold italic tracking-widest lg:text-lg`}
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
