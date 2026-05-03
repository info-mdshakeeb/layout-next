import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { siteConfig } from "@/lib/config"

type AuthCardShellProps = {
  title: string
  children: React.ReactNode
  footerText?: string
  footerLinkLabel?: string
  footerLinkHref?: string
  showTermsNotice?: boolean
}

export function AuthCardShell({
  title,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
  showTermsNotice = false,
}: AuthCardShellProps) {
  return (
    <section className="w-full space-y-8">
      {/* Header */}
      <header className="space-y-3 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
          {title}
        </h1>

        {footerText && footerLinkLabel && footerLinkHref ? (
          <p className="text-sm text-muted-foreground">
            {footerText}{" "}
            <Link
              href={footerLinkHref}
              className="font-semibold text-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground/70 hover:underline"
            >
              <LinkLoadingIndicator title={footerLinkLabel} />
            </Link>
          </p>
        ) : null}
      </header>

      {/* Form content */}
      <div className="space-y-5">
        {children}

        {showTermsNotice ? (
          <div className="pt-4">
            <p className="text-center text-[0.75rem] leading-relaxed text-muted-foreground/60">
              By proceeding, you agree to {siteConfig.name}&apos;s{" "}
              <Link
                href="/terms"
                className="text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                <LinkLoadingIndicator title="Terms of Service" />
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                <LinkLoadingIndicator title="Privacy Policy" />
              </Link>
              .
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
