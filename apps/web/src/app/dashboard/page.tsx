"use client";

// src/app/dashboard/page.tsx
import Dashboard from "@/features/dashboard/Dashboard";

export default function DashboardPage() {

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="mb-6 text-3xl font-bold">Event Organizer Dashboard</h1>
      <Dashboard />
    </div>
  );
}
