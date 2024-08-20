import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconDashboard, IconCalendarEvent, IconReceipt2, IconChartBar, IconUsers } from '@tabler/icons-react';

const sidebarLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: IconDashboard },
  { href: '/dashboard?tab=events', label: 'Events', icon: IconCalendarEvent },
  { href: '/dashboard?tab=transactions', label: 'Transactions', icon: IconReceipt2 },
  { href: '/dashboard?tab=statistics', label: 'Statistics', icon: IconChartBar },
  { href: '/dashboard?tab=attendees', label: 'Attendees', icon: IconUsers },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '16rem' }}
      className="h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex flex-col h-full">
        <div className="space-y-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 px-2 py-2 rounded-lg transition-colors",
                pathname === link.href || (pathname === '/dashboard' && link.href.includes(pathname))
                  ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;