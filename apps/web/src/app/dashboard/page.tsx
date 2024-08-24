import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Dashboard from "@/features/dashboard/Dashboard";
import Sidebar from "../../components/Sidebar";
import DashboardContent from "@/components/DasboardContent";
import MobileMenu from "@/components/Mobilemenu";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (session?.user.role !== "EVENT_ORGANIZER") {
    return redirect("/login");
  }
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
        </div>
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-7xl p-4">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Event Organizer Dashboard</h1>
            <MobileMenu />
          </div>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
