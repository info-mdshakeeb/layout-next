import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { DashboardSearch } from "./search"

const DashboardHeader = () => {
  return (
    <SidebarHeader className="pointer-events-none fixed top-0 z-50 flex h-12 w-full flex-row justify-between border-b bg-background p-0 sm:sticky sm:border-b-0 sm:bg-transparent">
      <div className="pointer-events-auto flex items-center pl-3">
        <SidebarTrigger className="md:[[data-slot=sidebar][data-state=expanded]_~_*_&]:hidden" />
        <DashboardSearch className="" />
      </div>
      <div className="pointer-events-auto relative z-10 flex h-full items-center gap-2 pl-6">
        {/* <ThemeSwitcher /> */}
        <Link href="" target="_blank">
          <Button className="group" size="sm" variant="ghost">
            <span className="text-xs text-muted-foreground group-hover:text-primary">
              {" "}
              Built by @Shakeeb
            </span>
          </Button>
        </Link>
      </div>
    </SidebarHeader>
  )
}

export default DashboardHeader
