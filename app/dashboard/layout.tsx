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
      <div className="w-full">
        <DecorativeBorder />
        <div
          className={cn(
            "h-[calc(100vh)] overflow-hidden bg-background sm:border"
          )}
        >
          <SidebarInset>
            <DashboardHeader />
            <div className="">{children}</div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
