import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { EventsTable } from './_components/EventsTable';

export default function Page() {
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
