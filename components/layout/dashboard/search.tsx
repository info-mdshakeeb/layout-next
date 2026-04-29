"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
}

export function DashboardSearch({ className = "" }: Props) {
  return (
    <Button
      variant={"secondary"}
      className={cn(
        "relative h-8 w-36 justify-start pl-2.5 font-normal text-muted-foreground shadow-none sm:w-40 sm:pr-12 lg:w-56",
        className
      )}
    >
      <span className="hidden lg:inline-flex">Search Here...</span>
      <span className="inline-flex lg:hidden">Search...</span>

      <div className="absolute top-1.5 right-1.5 flex gap-1">
        <kbd className="pointer-events-none flex h-5 items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3">
          Ctrl
        </kbd>
        <kbd className="pointer-events-none flex aspect-square h-5 items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3">
          K
        </kbd>
      </div>
    </Button>
  )
}
