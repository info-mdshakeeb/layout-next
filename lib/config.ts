export const siteConfig = {
  name: "Synth-Co",
  url: "demo.com",
  ogImage: "demo.com/og.jpg",
  description:
    "This is a demo description for a Next.js project using the shadcn UI components.",
  address: "House 24, Road 8, Dhaka, Bangladesh",
  emails: ["hello@synth-co.demo"],
  phones: ["+880 1700 000000"],
  footerCta: {
    title: "Start with a cleaner layout today",
    description:
      "Use Synth-Co as a polished starter for product pages, dashboards, and modern web interfaces.",
    href: "#templates",
    label: "Browse templates",
  },
  links: {
    twitter: "#twitter",
    github: "#github",
    linkedin: "#linkedin",
  },
  author: {
    name: "@info.mdshakeeb",
    url: "",
  },
}

export const footerNavigation = [
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "#templates" },
      { label: "Components", href: "#components" },
      { label: "Layouts", href: "#layouts" },
      { label: "Changelog", href: "#changelog" },
      { label: "Documentation", href: "#docs" },
      { label: "Guides", href: "#guides" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Examples", href: "#examples" },
      { label: "Support", href: "#support" },
      { label: "Community", href: "#community" },
      { label: "GitHub", href: siteConfig.links.github },
      { label: "Status", href: "#status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#customers" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
]

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
