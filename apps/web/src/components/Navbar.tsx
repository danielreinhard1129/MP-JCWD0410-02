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
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-4 pt-2 sm:p-6 lg:px-4">
        <div className="relative mt-4 flex w-full flex-col items-center justify-between px-0 py-3 max-lg:pb-11 sm:px-8 lg:flex-1 lg:flex-row lg:justify-around">
          <Link
            href="/"
            className="absolute left-0 cursor-pointer lg:left-1 lg:top-5"
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
            className={`mx-auto mt-28 flex-col justify-center gap-y-9 text-center text-lg font-bold text-slate-900 lg:bg-none dark:text-white/75 ${isOpen ? "flex" : "hidden"} ${isAnimating ? "animate-fade" : ""} lg:flex`}
          >
            <div
              className={`flex flex-col lg:-mt-36 lg:ml-16 lg:flex-row lg:justify-center lg:px-4 ${pathname === "/" ? "hidden" : ""}`}
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
            className={`ml-[1px] hidden w-full ${isOpen ? "flex" : "hidden"} bg-white shadow-2xl lg:absolute lg:right-1 lg:top-[14px] lg:max-w-44 ${
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
              className="h-10 w-10"
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
              className="h-10 w-10"
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

// components/Navbar.tsx

// import { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="absolute inset-x-0 top-0 z-50">
//       <nav className="relative bg-white shadow dark:bg-gray-800">
//         <div className="container mx-auto px-6 py-3 md:flex">
//           <div className="flex items-center justify-between">
//             <a href="#">
//               <img
//                 className="h-6 w-auto sm:h-7"
//                 src="https://merakiui.com/images/full-logo.svg"
//                 alt="Logo"
//               />
//             </a>

//             {/* Mobile menu button */}
//             <div className="flex lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="text-gray-500 hover:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400"
//                 aria-label="toggle menu"
//               >
//                 {isOpen ? (
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16m-7 6h7"
//                     ></path>
//                   </svg>
//                 ) : (
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16m-7 6h7"
//                     ></path>
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

{
  /* Mobile Menu open: "block", Menu closed: "hidden" */
}
{
  /* <div
            className={`absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:items-center md:justify-between md:p-0 dark:bg-gray-800 ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="-mx-4 flex flex-col px-2 md:mx-10 md:flex-row md:py-0">
              <a
                href="#"
                className="transform rounded-lg px-2.5 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 md:mx-2 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="#"
                className="transform rounded-lg px-2.5 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 md:mx-2 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#"
                className="transform rounded-lg px-2.5 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 md:mx-2 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </div>

            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full rounded-lg border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; */
}

{
  /* Mobile menu button */
}
{
  /* <div className="flex lg:hidden">
<button
  onClick={() => setIsOpen(!isOpen)}
  type="button"
  className="text-gray-500 hover:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400"
  aria-label="toggle menu"
>
  {isOpen ? (
    <svg
      className="h-6 w-6"
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
  ) : (
    <svg
      className="h-6 w-6"
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
  )}
</button>
</div> */
}
