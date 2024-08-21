"use client";
import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Dashboard from "@/features/dashboard/Dashboard";
import Sidebar from '../../components/Sidebar';
import DashboardContent from '@/components/DasboardContent';
import MobileMenu from '@/components/Mobilemenu';

export default function DashboardPage() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   console.log('Session status:', status);
  //   console.log('Session data:', session);

  //   if (status === 'unauthenticated') {
  //     console.log('Redirecting to login...');
  //     router.push('/login');
  //   }
  // }, [status, session, router]);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  //apa saja yg di protect, adjust di middleware

  // if (status === 'authenticated') {
    return (
      <div className="flex h-screen">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Event Organizer Dashboard</h1>
              <MobileMenu />
            </div>
            <DashboardContent />
          </div>
        </div>
      </div>
    );
  }

  // This will be shown briefly before redirecting if unauthenticated
  // return <div>Access Denied. Redirecting to login...</div>;
// }