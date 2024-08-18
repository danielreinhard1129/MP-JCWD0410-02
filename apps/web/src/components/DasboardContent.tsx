'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Dashboard from '@/features/dashboard/Dashboard';
import EventManagement from '@/features/dashboard/EventManagement';
import TransactionManagement from '@/features/dashboard/TransactionManagement';
import Statistics from '../features/dashboard/Statistic';
import AttendeeList from '@/features/dashboard/AttendeeList';
import ProtectedRoute from '../components/ProtectedRoute';

export const DashboardContent = ()=>  {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab'); 

  const renderContent = () => {
    switch (tab) {
      case 'events':
        return <EventManagement />;
      case 'transactions':
        return <TransactionManagement />;
      case 'statistics':
        return <Statistics />;
      case 'attendees':
        return <AttendeeList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ProtectedRoute allowedRoles={['organizer']}>
      {renderContent()}
    </ProtectedRoute>
  );
}

export default DashboardContent