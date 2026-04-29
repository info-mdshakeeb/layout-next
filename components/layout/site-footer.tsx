import LinkLoadingIndicator from "@/components/link-loading-indicator"
import { siteConfig } from "@/lib/config"
import {
  Code2Icon,
  CreditCardIcon,
  LandmarkIcon,
  LucideIcon,
  MailIcon,
  MapPinIcon,
  NetworkIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
} from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import { Logo } from "./logo"

const airplanes = [
  { delay: 0, duration: 26, y: "12%", scale: 0.65, opacity: 0.12 },
  { delay: 8, duration: 30, y: "34%", scale: 0.55, opacity: 0.1 },
  { delay: 14, duration: 34, y: "56%", scale: 0.48, opacity: 0.09 },
  { delay: 20, duration: 38, y: "76%", scale: 0.42, opacity: 0.08 },
]

const socialLinks = [
  {
    key: "twitter",
    href: siteConfig.links.twitter,
    label: "Twitter",
    icon: SendIcon,
    hover: "hover:bg-sky-500",
  },
  {
    key: "github",
    href: siteConfig.links.github,
    label: "GitHub",
    icon: Code2Icon,
    hover: "hover:bg-zinc-900 dark:hover:bg-zinc-100",
  },
  {
    key: "linkedin",
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: NetworkIcon,
    hover: "hover:bg-blue-600",
  },
]

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Templates", href: "#templates" },
      { label: "Components", href: "#components" },
      { label: "Layouts", href: "#layouts" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Examples", href: "#examples" },
      { label: "Guides", href: "#guides" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Refund Policy", href: "#refund" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#customers" },
      { label: "Contact", href: "#contact" },
      { label: "Status", href: "#status" },
    ],
  },
]

const paymentMethods = [
  { label: "SSLCommerz", type: "gateway" },
  { label: "Visa", type: "card" },
  { label: "Mastercard", type: "wallet" },
]

const footerBottomLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Cookies", href: "#cookies" },
]

const paymentIcons = {
  gateway: ShieldCheckIcon,
  card: CreditCardIcon,
  wallet: LandmarkIcon,
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-background text-foreground">
      <div className="relative z-10 container-wrapper px-0">
        <div className="container pt-10">
          <div className="flex flex-col gap-8 pb-10 xl:flex-row xl:items-center xl:justify-between">
            <div className="grid gap-6 md:grid-cols-3 xl:flex xl:flex-wrap xl:gap-10">
              <ContactItem
                icon={MapPinIcon}
                title="Address"
                value={siteConfig.address}
              />
              <ContactItem
                icon={MailIcon}
                title="Email"
                value={siteConfig.emails[0]}
                href={`mailto:${siteConfig.emails[0]}`}
              />
              <ContactItem
                icon={PhoneIcon}
                title="Hotline"
                value={siteConfig.phones[0]}
                href={`tel:${siteConfig.phones[0]}`}
              />
            </div>

            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} opens in a new tab`}
                    className={`group flex size-11 items-center justify-center rounded-full border bg-background/75 text-muted-foreground shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-md dark:hover:text-background ${item.hover}`}
                  >
                    <Icon className="size-5 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2.4fr_1fr_1fr_1fr_1fr]">
            <FooterSection title={siteConfig.name}>
              <Link href="/" className="mb-4 flex items-center gap-3">
                <span className="">
                  <Logo className="size-18" />
                </span>
              </Link>
              <p className="text-sm leading-6 text-muted-foreground">
                {siteConfig.description}
              </p>
            </FooterSection>

            <FooterSection title="Company">
              <FooterLinkList
                links={
                  footerSections.find((group) => group.title === "Company")
                    ?.links ?? []
                }
              />
            </FooterSection>

            <FooterSection title="Resources">
              <FooterLinkList
                links={
                  footerSections.find((group) => group.title === "Resources")
                    ?.links ?? []
                }
              />
            </FooterSection>

            <FooterSection title="Policies">
              <FooterLinkList
                links={
                  footerSections.find((group) => group.title === "Policies")
                    ?.links ?? []
                }
              />
            </FooterSection>

            <FooterSection title="Secure Payment">
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method) => {
                  const Icon =
                    paymentIcons[method.type as keyof typeof paymentIcons] ??
                    CreditCardIcon

                  return (
                    <div
                      key={method.label}
                      className="flex h-10 items-center gap-2 rounded-lg border bg-background/70 px-3 text-xs font-medium text-muted-foreground shadow-sm"
                    >
                      <Icon className="size-4 text-foreground" />
                      {method.label}
                    </div>
                  )
                })}
              </div>
            </FooterSection>
          </div>

          <div className="py-6">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {footerBottomLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    <LinkLoadingIndicator title={link.label} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <h2 className="mb-5 text-base font-semibold tracking-tight">{title}</h2>
      {children}
    </div>
  )
}

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  return (
    <nav>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkLoadingIndicator title={link.label} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium transition-colors group-hover:text-primary">
          {title}
        </p>
        <p className="truncate text-xs text-muted-foreground">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className="group flex min-w-0 items-center gap-4">
        {content}
      </a>
    )
  }

  return <div className="group flex min-w-0 items-center gap-4">{content}</div>
}
