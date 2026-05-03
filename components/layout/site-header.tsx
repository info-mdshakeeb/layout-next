import { siteConfig } from "@/lib/config"
import { ArrowRightIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "./logo"
import { ModeSwitcher } from "./mood-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-1000 flex h-full w-full translate-z-0 flex-col items-center justify-around border-b bg-background py-3">
      <div className="container flex items-center gap-3 [--container-max:1400px]">
        <Link
          href="/"
          className="group flex min-w-0 items-center rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="">
            <Logo className="size-6" />
          </span>
          <svg height="32" viewBox="0 0 32 32" width="32">
            <path
              d="M22 5L9 28"
              stroke="var(--accent)"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-lg font-semibold">
              {siteConfig.name}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className="h-9 px-3 text-muted-foreground hover:text-foreground"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeSwitcher />
          <Button asChild size="sm" className="">
            <Link href="#templates">
              Get started
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 lg:hidden"
            aria-label="Open navigation"
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  )
}
