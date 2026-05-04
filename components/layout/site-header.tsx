"use client"

import { ArrowRightIcon, ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"
import * as React from "react"
import { RemoveScroll } from "react-remove-scroll"

import { TransitionLink } from "@/components/transition-link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { footerNavigation, siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Logo } from "../../components/layout/logo"
import { ModeSwitcher } from "../../components/layout/mood-switcher"

type MegaLink = {
  label: string
  href: string
  external?: boolean
}

type MegaColumn = {
  title: string
  links: MegaLink[]
}

type MegaMenu = {
  eyebrow?: string
  primary?: MegaLink[]
  columns?: MegaColumn[]
}

type NavItem = {
  label: string
  href: string

  /**
   * If menu exists, this nav item opens mega menu on hover.
   * If menu does not exist, this nav item is a normal single link.
   */
  menu?: MegaMenu

  external?: boolean
}

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("//")

const toMegaLink = (link: { label: string; href: string }): MegaLink => ({
  ...link,
  external: isExternalHref(link.href),
})

const navItems: NavItem[] = [
  ...footerNavigation.map((column): NavItem => {
    const primary = column.links.slice(0, 2).map(toMegaLink)
    const secondary = column.links.slice(2).map(toMegaLink)

    return {
      label: column.title,
      href: column.links[0]?.href ?? "#",
      menu: {
        eyebrow: `${column.title} links`,
        primary,
        columns: secondary.length
          ? [
              {
                title: "More",
                links: secondary,
              },
            ]
          : undefined,
      },
    }
  }),
]

function MegaMenuLink({
  link,
  className,
  children,
  onNavigate,
}: {
  link: MegaLink
  className?: string
  children?: React.ReactNode
  onNavigate?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <TransitionLink
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      className={className}
      onClick={onNavigate}
    >
      {children ?? (
        <>
          <span>{link.label}</span>
          {link.external ? (
            <ArrowUpRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : null}
        </>
      )}
    </TransitionLink>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [activeLabel, setActiveLabel] = React.useState<string | null>(null)
  const [activePathname, setActivePathname] = React.useState(pathname)
  const [renderedLabel, setRenderedLabel] = React.useState<string | null>(
    navItems.find((item) => item.menu)?.label ?? null
  )

  const [panelHeight, setPanelHeight] = React.useState(0)

  const panelRef = React.useRef<HTMLDivElement | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeItem = navItems.find((item) => item.label === activeLabel)
  const renderedItem = navItems.find((item) => item.label === renderedLabel)

  const isOpen = Boolean(activeItem?.menu) && activePathname === pathname
  const menu = renderedItem?.menu ?? null

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const closeNow = React.useCallback(() => {
    clearCloseTimer()
    setActiveLabel(null)
  }, [clearCloseTimer])

  const openMenu = React.useCallback(
    (item: NavItem) => {
      clearCloseTimer()

      if (!item.menu) {
        closeNow()
        return
      }

      setRenderedLabel(item.label)
      setActivePathname(pathname)
      setActiveLabel(item.label)
    },
    [clearCloseTimer, closeNow, pathname]
  )

  const startClose = React.useCallback(() => {
    clearCloseTimer()

    closeTimer.current = setTimeout(() => {
      setActiveLabel(null)
    }, 120)
  }, [clearCloseTimer])

  React.useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  const handleNavItemClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      if (item.menu) {
        event.preventDefault()
      }

      closeNow()
    },
    [closeNow]
  )

  /**
   * Dynamic dropdown height.
   * This replaces fixed classes like h-[270px].
   * The dropdown grows/shrinks based on real content.
   */
  React.useEffect(() => {
    const node = panelRef.current

    if (!node) return

    const updateHeight = () => {
      const navbarHeight = 64
      const maxDropdownHeight = Math.max(window.innerHeight - navbarHeight, 0)
      const nextHeight = Math.min(node.scrollHeight, maxDropdownHeight)

      setPanelHeight(nextHeight)
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(node)

    window.addEventListener("resize", updateHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateHeight)
    }
  }, [renderedLabel])

  return (
    <RemoveScroll
      enabled={isOpen}
      allowPinchZoom
      removeScrollBar={true}
      className="[--navbar-height:4rem]"
    >
      <div
        onClick={closeNow}
        className={cn(
          "fixed inset-x-0 top-(--navbar-height) bottom-0 z-40",
          "bg-background/10 backdrop-blur-xs",
          "transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          RemoveScroll.classNames.fullWidth,
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <header
        onMouseEnter={clearCloseTimer}
        onMouseLeave={startClose}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeNow()
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "bg-background text-foreground",
          RemoveScroll.classNames.fullWidth
        )}
      >
        <nav className="container flex h-(--navbar-height) items-center justify-between [--container-max:1400px]">
          <div className="flex items-center gap-8">
            <TransitionLink
              href="/"
              onClick={closeNow}
              onMouseEnter={closeNow}
              onFocus={closeNow}
              className="group flex min-w-0 items-center rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Logo className="size-6" />
              <svg height="32" viewBox="0 0 32 32" width="32">
                <path
                  d="M22 5L9 28"
                  stroke="var(--accent)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex min-w-0 flex-col leading-none">
                <span className="truncate text-lg font-semibold">
                  {siteConfig.name}
                </span>
              </span>
            </TransitionLink>

            <NavigationMenu className="hidden max-w-none flex-none justify-start lg:flex">
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => {
                  const active = isOpen && activeLabel === item.label

                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        asChild
                        data-active={active ? "true" : undefined}
                        className={cn(
                          "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
                          "bg-transparent text-muted-foreground",
                          "hover:bg-none! hover:text-accent-foreground"
                        )}
                      >
                        <TransitionLink
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          aria-haspopup={item.menu ? "true" : undefined}
                          aria-expanded={item.menu ? active : undefined}
                          onMouseEnter={() => openMenu(item)}
                          onFocus={() => openMenu(item)}
                          onClick={(event) => handleNavItemClick(event, item)}
                          className="inline-flex items-center gap-1.5"
                        >
                          <span>{item.label}</span>

                          {item.external ? (
                            <ArrowUpRight className="size-3 shrink-0" />
                          ) : null}
                        </TransitionLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div
            onMouseEnter={closeNow}
            className="hidden items-center gap-2 md:flex"
          >
            <ModeSwitcher />

            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <TransitionLink href="/auth/login" onClick={closeNow}>
                Log in
              </TransitionLink>
            </Button>

            <Button asChild size="sm" className="rounded-full">
              <TransitionLink
                href={siteConfig.footerCta.href}
                onClick={closeNow}
                className="inline-flex items-center gap-1.5"
              >
                Get started
                <ArrowRightIcon data-icon="inline-end" />
              </TransitionLink>
            </Button>
          </div>
        </nav>

        <div
          aria-hidden={!isOpen}
          style={{
            height: isOpen ? panelHeight : 0,
          }}
          className={cn(
            "overflow-hidden bg-background text-popover-foreground",
            "transition-[height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {menu ? (
            <div
              ref={panelRef}
              className="max-h-[calc(100dvh-var(--navbar-height))] overflow-y-auto"
            >
              <div
                className={cn(
                  "mx-auto grid max-w-7xl gap-10 px-6 py-7",
                  "md:grid-cols-[minmax(180px,260px)_1fr] md:gap-20",
                  "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                )}
              >
                <div>
                  {menu.eyebrow ? (
                    <p className="mb-4 text-xs font-medium text-muted-foreground">
                      {menu.eyebrow}
                    </p>
                  ) : null}

                  {menu.primary?.length ? (
                    <ul className="flex flex-col gap-3">
                      {menu.primary.map((link) => (
                        <li key={link.label}>
                          <MegaMenuLink
                            link={link}
                            onNavigate={closeNow}
                            className={cn(
                              "group inline-flex items-center gap-2",
                              "text-3xl leading-none font-medium tracking-tight",
                              "transition-colors hover:text-muted-foreground"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {menu.columns?.length ? (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {menu.columns.map((column) => (
                      <div key={column.title}>
                        <p className="mb-3 text-xs font-medium text-muted-foreground">
                          {column.title}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <MegaMenuLink
                                link={link}
                                onNavigate={closeNow}
                                className={cn(
                                  "group inline-flex items-center gap-1.5",
                                  "text-sm leading-tight font-medium",
                                  "text-popover-foreground/85",
                                  "transition-colors hover:text-muted-foreground"
                                )}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </RemoveScroll>
  )
}
