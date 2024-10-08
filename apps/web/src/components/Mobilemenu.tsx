import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { IconCalendarEvent, IconChartBar, IconDashboard, IconMenu2, IconReceipt2, IconUsers, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from "framer-motion";

const sidebarLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: IconDashboard },
  { href: '/dashboard?tab=events', label: 'Events', icon: IconCalendarEvent },
  { href: '/dashboard?tab=transactions', label: 'Transactions', icon: IconReceipt2 },
  { href: '/dashboard?tab=statistics', label: 'Statistics', icon: IconChartBar },
  { href: '/dashboard?tab=attendees', label: 'Attendees', icon: IconUsers },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300"
      >
        {isOpen ? <IconX /> : <IconMenu2 />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
          >
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700",
                  pathname === link.href || (pathname === '/dashboard' && link.href.includes(pathname))
                    ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;