'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import avatar from '@/assets/avatar.png';
import { Logout } from '@/assets/icons/logout';
import { UserIcon } from '@/assets/icons/user';
import { useAuth } from '@/contexts/AuthContext';

export function NavUser() {
  const { logout } = useAuth();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
          <Avatar className='h-10 w-10 rounded-2xl border border-primary'>
            <AvatarImage src={avatar.src} alt='Kaique Steck' />
          </Avatar>
          <div className='grid flex-1 text-left text-sm'>
            <span className='truncate font-medium leading-[15px] text-sm'>
              Kaique Steck
            </span>
            <span className='truncate text-xs text-black/50'>
              Administrador
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton>
          <UserIcon />
          Alterar Dados
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton
          className='cursor-pointer hover:text-primary transition-all'
          onClick={logout}
        >
          <Logout />
          Sair
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
