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

export function PageHeader({
  label,
  title,
  backgroundImage = "/assets/images/b2bhomeMap.png",
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container flex h-30 items-end justify-start gap-4 pb-7 sm:h-48 lg:h-48 lg:pb-8">
        {/* Vertical accent bar */}
        <span className="block h-12 w-0.75 shrink-0 bg-primary sm:h-14" />

        <div>
          {label && (
            <p className="text-sm font-medium tracking-[0.2em] text-primary/80 uppercase">
              {label}
            </p>
          )}
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
