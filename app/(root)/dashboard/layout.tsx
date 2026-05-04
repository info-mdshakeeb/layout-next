import { DashboardSidebar } from "@/components/layout/dashboard/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

import React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col bg-background px-2">
      <SidebarProvider
        className="container min-h-min flex-1 items-start px-3 [--container-max:1400px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)]"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
          } as React.CSSProperties
        }
      >
        <DashboardSidebar />
        <div className="h-full w-full">{children}</div>
      </SidebarProvider>
    </div>
  )
}
