import { siteConfig } from "@/lib/config"
import { ArrowRightIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "./logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="container-wrapper px-0 group-has-data-[slot=designer]/layout:max-w-none">
        <div className="group-has-data-[slot=designer]/layout:fixed:max-w-none container flex h-(--header-height) items-center gap-3 **:data-[slot=separator]:h-5!">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span className="">
              <Logo className="size-6" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-sm font-semibold">
                {siteConfig.name}
              </span>
              <span className="hidden text-[11px] text-muted-foreground sm:block">
                Interface system
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
            <div className="hidden items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground xl:flex">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Template ready</span>
            </div>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden h-9 px-3 sm:flex"
            >
              <Link href="#signin">Sign in</Link>
            </Button>
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
