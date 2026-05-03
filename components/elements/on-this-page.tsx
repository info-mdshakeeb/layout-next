"use client"

import { AlignLeftIcon, ArrowRightIcon } from "lucide-react"
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react"

import { Button } from "@/components/ui/button"
import { TransitionLink } from "@/components/transition-link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export type OnThisPageItem = {
  id: string
  text: string
  level: 2 | 3
}

export type SuggestedPageItem = {
  href: string
  title: string
  description?: string
}

export type OnThisPageProps = {
  items: OnThisPageItem[]
  suggestedPages?: SuggestedPageItem[]
  variant?: "list" | "dropdown"
  className?: string
}

const TOP_OFFSET = 25

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      }
    }
  }, [itemIds])

  return activeId
}

export function OnThisPage({
  items,
  suggestedPages = [],
  variant = "list",
  className,
}: OnThisPageProps) {
  const [open, setOpen] = useState(false)
  const itemIds = useMemo(() => items.map((item) => item.id), [items])
  const activeId = useActiveItem(itemIds)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    if (!activeId) return
    itemRefs.current[activeId]?.scrollIntoView({
      block: "nearest",
    })
  }, [activeId])

  const handleClick =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()

      const element = document.getElementById(id)
      if (!element) return

      const top =
        element.getBoundingClientRect().top + window.scrollY - TOP_OFFSET

      window.scrollTo({
        top,
        behavior: "smooth",
      })

      window.history.replaceState(null, "", `#${id}`)
    }

  if (!items.length && !suggestedPages.length) return null

  if (variant === "dropdown") {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn("h-8 gap-1.5 md:h-7", className)}
          >
            <AlignLeftIcon className="size-3.5" />
            On This Page
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="no-scrollbar max-h-[70svh]"
        >
          {items.map((item) => (
            <DropdownMenuItem
              key={item.id}
              asChild
              onClick={() => setOpen(false)}
              data-depth={item.level}
              className="data-[depth=3]:pl-6"
            >
              <a href={`#${item.id}`} onClick={handleClick(item.id)}>
                {item.text}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <aside className={cn("hidden lg:block", className)}>
      <div className="sticky top-[calc(var(--header-height)+1.5rem)] self-start">
        {items.length > 0 && (
          <>
            <h2 className="text-sm font-medium text-foreground">
              On This Page
            </h2>

            <nav className="mt-4">
              <ul className="space-y-2 border-l border-border pl-4">
                {items.map((item) => {
                  const isActive = activeId === item.id

                  return (
                    <li key={item.id}>
                      <a
                        ref={(element) => {
                          itemRefs.current[item.id] = element
                        }}
                        href={`#${item.id}`}
                        onClick={handleClick(item.id)}
                        aria-current={isActive ? "location" : undefined}
                        title={item.text}
                        className={cn(
                          "-ml-[17px] block border-l border-transparent pl-4 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
                          item.level === 3 && "pl-7 text-[13px]",
                          isActive && "border-primary text-foreground"
                        )}
                      >
                        <span className="line-clamp-3 overflow-hidden">
                          {item.text}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </>
        )}

        {suggestedPages.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="text-sm font-medium text-foreground">
              Suggested Pages
            </h2>

            <ul className="mt-4 space-y-3">
              {suggestedPages.map((page) => (
                <li key={page.href}>
                  <TransitionLink
                    href={page.href}
                    className="group block border-l border-border pl-4 transition-colors hover:border-primary"
                  >
                    <span className="flex items-center justify-between gap-3 text-sm font-medium text-foreground">
                      <span className="line-clamp-2">{page.title}</span>
                      <ArrowRightIcon className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </span>
                    {page.description && (
                      <span className="mt-1 line-clamp-2 block text-xs leading-5 text-muted-foreground">
                        {page.description}
                      </span>
                    )}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </aside>
  )
}
