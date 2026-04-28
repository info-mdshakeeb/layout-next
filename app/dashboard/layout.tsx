import DecorativeBorder from "@/components/layout/dashboard/decorative-border-svg"
import DashboardHeader from "@/components/layout/dashboard/header"
import { DashboardSidebar } from "@/components/layout/dashboard/sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { cn } from "@/lib/utils"
import React from "react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className={cn("w-full bg-sidebar", "p-0")}>
        <DecorativeBorder />
        <div
          className={cn(
            "h-full bg-background sm:border"
            // "sm:rounded-tl-md sm:rounded-br-xl sm:rounded-bl-md"
          )}
        >
          <SidebarInset>
            <DashboardHeader />
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
