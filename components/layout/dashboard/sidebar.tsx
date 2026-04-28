import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import * as React from "react"

export function DashboardSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      className={cn(
        "bg-sidebar",
        "group-data-[side=left]:border-r-0!",
        className
      )}
    >
      <SidebarHeader className="p-4 pt-6">
        <span className="text-lg font-bold">Dashboard</span>
      </SidebarHeader>
      <SidebarContent
        className={cn("docs-sidebar-top-fade", "pt-2 pb-14")}
      ></SidebarContent>
    </Sidebar>
  )
}
