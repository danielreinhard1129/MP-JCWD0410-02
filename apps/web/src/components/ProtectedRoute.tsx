'use client';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: ('customer' | 'organizer')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      // User is not authenticated, redirect to login
      router.push('/login');
    } else if (status === 'authenticated' && session?.user?.role && !allowedRoles.includes(session.user.role as any)) {
      // User is authenticated but doesn't have the required role
      router.push('/unauthorized');
    }
  }, [status, session, router, allowedRoles]);

  if (status === 'loading') {
    // Session is still loading
    return <div>Loading...</div>;
  }

  if (!session || !session.user || !allowedRoles.includes(session.user.role as any)) {
    return null; // Don't render if not authorized
  }

  // User is authenticated and authorized
  return <>{children}</>;
};

export default ProtectedRoute;