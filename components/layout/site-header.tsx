import { siteConfig } from "@/lib/config"
import { ArrowRightIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "./logo"
import { ModeSwitcher } from "./mood-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="container-wrapper px-0 group-has-data-[slot=designer]/layout:max-w-none">
        <div className="group-has-data-[slot=designer]/layout:fixed:max-w-none container flex h-(--header-height) items-center gap-3 **:data-[slot=separator]:h-5!">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-1 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span className="">
              <Logo className="size-6" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-lg font-semibold">
                {siteConfig.name.slice(1)}
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
            <Button asChild size="sm" className="h-9 px-3 shadow-sm">
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
      </div>
    </header>
  )
}
