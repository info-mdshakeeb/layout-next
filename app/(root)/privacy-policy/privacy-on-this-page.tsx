"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"

import { cn } from "@/lib/utils"

type OnThisPageItem = {
  id: string
  text: string
  level: 2 | 3
}

type PrivacyOnThisPageProps = {
  items: OnThisPageItem[]
}

const TOP_OFFSET = 120
const END_THRESHOLD = 48

export function PrivacyOnThisPage({ items }: PrivacyOnThisPageProps) {
  const [activeId, setActiveId] = useState("")
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    if (!items.length) {
      setActiveId("")
      return
    }

    const getHeadingElements = () =>
      items
        .map((item) => document.getElementById(item.id))
        .filter((element): element is HTMLElement => element !== null)

    let ticking = false
    let rafId: number | null = null

    const updateActiveId = () => {
      try {
        const headingElements = getHeadingElements()

        if (!headingElements.length) {
          setActiveId("")
          return
        }

        const scrollPosition = window.scrollY + TOP_OFFSET
        const isNearBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - END_THRESHOLD

        let nextActiveId = headingElements[0].id

        if (isNearBottom) {
          nextActiveId = headingElements[headingElements.length - 1].id
        } else {
          for (const heading of headingElements) {
            if (heading.offsetTop <= scrollPosition) {
              nextActiveId = heading.id
            } else {
              break
            }
          }
        }

        setActiveId((prev) => (prev === nextActiveId ? prev : nextActiveId))
      } finally {
        ticking = false
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafId = window.requestAnimationFrame(updateActiveId)
    }

    updateActiveId()

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateActiveId)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateActiveId)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [items])

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

      setActiveId(id)

      window.scrollTo({
        top,
        behavior: "smooth",
      })

      window.history.replaceState(null, "", `#${id}`)
    }

  if (!items.length) return null

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[calc(var(--header-height)+1.5rem)] self-start">
        <h2 className="text-sm font-medium text-foreground">On This Page</h2>

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
                      isActive && "border-primary text-foreground",
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
      </div>
    </aside>
  )
}
