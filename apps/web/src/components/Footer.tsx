"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "/public/event-ally.svg";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/" ||
    pathname === "/dashboard";

  if (isAuthPage) {
    return null;
  }
  return (
    <footer className="w-full bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-4 max-md:gap-y-1 sm:flex-row sm:space-y-0 md:px-7 lg:px-14 2xl:px-20">
        <Link href="#">
          <Image
            className="h-[30px] w-auto"
            src={Logo}
            height={0}
            width={0}
            alt="eventally-logo"
            priority
          />
        </Link>

        <p className="text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-300">
          © Copyright 2024. All Rights Reserved.
        </p>

        <div className="-mx-2 flex gap-x-1 lg:gap-x-3">
          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="h-[27px] w-[27px]" />
          </Link>

          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-slate-400 dark:text-gray-300 dark:hover:text-slate-400"
            aria-label="Twitter"
          >
            <FaXTwitter className="h-[27px] w-[27px]" />
          </Link>

          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-[#C13584] dark:text-gray-300 dark:hover:text-[#C13584]"
            aria-label="Instagram"
          >
            <SiInstagram className="h-[27px] w-[27px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
