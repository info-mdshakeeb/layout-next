import { cn } from "@/lib/utils"

type PageHeaderProps = {
  /** Small uppercase eyebrow text above the title (e.g. "Legal document") */
  label?: string
  /** Main page title — rendered as <h1> */
  title: string
  /** Background image URL. Defaults to the shared map graphic. */
  backgroundImage?: string
  className?: string
}

/**
 * PageHeader
 *
 * Full-width hero banner used at the top of interior pages.
 * Features the site's branded map background, a left-side accent bar,
 * an optional eyebrow label, and a prominent h1 title.
 *
 * Usage:
 *   <PageHeader label="Legal document" title="Privacy Policy" />
 *   <PageHeader label="Company" title="About Us" backgroundImage="/assets/images/custom-bg.png" />
 */
export function PageHeader({
  label,
  title,
  backgroundImage = "/assets/images/b2bhomeMap.png",
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn("bg-cover bg-fixed bg-center bg-no-repeat", className)}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="border-b border-border/60">
        <div className="container-wrapper">
          <div className="container flex h-36 items-end justify-start gap-4 pb-6 lg:h-48 lg:pb-8">
            {/* Vertical accent bar */}
            <span className="block h-10 w-[3px] shrink-0 bg-primary lg:h-14" />

            <div>
              {label && (
                <p className="text-xs font-medium tracking-[0.2em] text-primary/80 uppercase lg:text-sm">
                  {label}
                </p>
              )}
              <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
