'use client';

import * as React from 'react';

import { CalendarIcon } from '@/assets/icons/calendar';
import { DashboardIcon } from '@/assets/icons/dashboard';
import { Logo } from '@/assets/icons/logo';
import { RegistrationsIcon } from '@/assets/icons/registrations';
import { TeamsIcon } from '@/assets/icons/teams';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const navLinks = [
  {
    title: 'Dashboard',
    url: '#',
    icon: DashboardIcon,
  },
  {
    title: 'Eventos',
    url: '#',
    icon: CalendarIcon,
    isActive: true,
  },
  {
    title: 'Equipes',
    url: '#',
    icon: TeamsIcon,
  },
  {
    title: 'Inscrições',
    url: '#',
    icon: RegistrationsIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent className='px-4'>
        <SidebarGroup>
          <SidebarGroupContent className='flex flex-col gap-2'>
            <SidebarMenu>
              {navLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    variant={item.isActive ? 'active' : 'default'}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className='flex flex-col gap-9 px-6'>
        <SidebarSeparator />

        <SidebarFooter className='pb-6'>
          <NavUser />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
