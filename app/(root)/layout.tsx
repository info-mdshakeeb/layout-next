import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-slot="layout"
      className="group/layout relative z-10 flex min-h-svh flex-col bg-background has-data-[slot=designer]:h-svh has-data-[slot=designer]:overflow-hidden"
    >
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <div className="bottom-0 -z-10 shrink-0 bg-background md:sticky">
        <SiteFooter />
      </div>
    </div>
  )
}
