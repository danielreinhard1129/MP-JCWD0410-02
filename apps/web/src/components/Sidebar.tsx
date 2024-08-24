"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconDashboard,
  IconCalendarEvent,
  IconReceipt2,
  IconChartBar,
  IconUsers,
  IconLogout,
} from "@tabler/icons-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { href: "/dashboard?tab=events", label: "Events", icon: IconCalendarEvent },
  {
    href: "/dashboard?tab=transactions",
    label: "Transactions",
    icon: IconReceipt2,
  },
  {
    href: "/dashboard?tab=statistics",
    label: "Statistics",
    icon: IconChartBar,
  },
  { href: "/dashboard?tab=attendees", label: "Attendees", icon: IconUsers },
  { href: "dashboard?tab=profilepage", label: "ProfilePage", icon: IconUsers },
  {
    href: "dashboard?tab=reset-password",
    label: "Reset-Password",
    icon: IconUsers,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    // Implement your logout logic here
    // For example:
    // await auth.signOut();
    console.log("Logging out...");
    // Redirect to login page or home page after logout
    router.push("/login");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "16rem" }}
      className="h-screen border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="flex h-full flex-col">
        <div className="flex-grow space-y-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 rounded-lg px-2 py-2 transition-colors",
                pathname === link.href ||
                  (pathname === "/dashboard" && link.href.includes(pathname))
                  ? "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
              )}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-2 rounded-lg px-2 py-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <IconLogout className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
