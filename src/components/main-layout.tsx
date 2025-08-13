"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset
} from '@/components/ui/sidebar';
import { Home, Search, Map, CreditCard, User, Bell, LogOut } from 'lucide-react';
import { RoamReadyLogo } from '@/components/roam-ready-logo';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/search', icon: Search, label: 'Search Ride' },
  { href: '/route', icon: Map, label: 'Live Route' },
  { href: '/confirm', icon: CreditCard, label: 'Payment' },
  { href: '/history', icon: Bell, label: 'History' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar>
          <SidebarHeader>
            <Link href="/dashboard" className="flex items-center gap-2">
              <RoamReadyLogo className="size-8 text-primary" />
              <h1 className="text-xl font-semibold font-headline text-primary group-data-[collapsible=icon]:hidden">
                RoamReady
              </h1>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} passHref legacyBehavior>
                    <SidebarMenuButton 
                      tooltip={item.label}
                      isActive={pathname === item.href}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <Link href="/" passHref legacyBehavior>
              <SidebarMenuButton tooltip="Logout">
                <LogOut/>
                <span>Logout</span>
              </SidebarMenuButton>
            </Link>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <div className="md:hidden">
                    <SidebarTrigger asChild>
                        <Button variant="outline" size="icon"><Home className="h-5 w-5"/></Button>
                    </SidebarTrigger>
                </div>
            </header>
          <div className="p-4 sm:p-6 lg:p-8 pt-0 sm:pt-0 lg:pt-0">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
