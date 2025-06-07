'use client';

import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';
import { LoaderCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { EventsTable } from './_components/EventsTable';

export default function Page() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      redirect('/login');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className='flex h-screen items-center justify-center bg-application'>
        <LoaderCircle className='h-8 w-8 animate-spin text-semidark' />
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant='inset' />

      <SidebarInset>
        <SidebarTrigger />

        <span className='text-base leading-6 text-black/60'>
          Bem vindo de volta,
          <strong className='text-semidark font-bold'> Kaique Steck</strong>
        </span>

        <EventsTable />
      </SidebarInset>
    </SidebarProvider>
  );
}
