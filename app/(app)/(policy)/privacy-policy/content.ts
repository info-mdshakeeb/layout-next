import { CheckCircle2Icon, DatabaseIcon, UserCheckIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"

export const privacyPolicyContent = {
  title: "Privacy Policy",
  description: `Learn how ${siteConfig.name} collects, uses, protects, and manages personal information across its website, templates, and support services.`,
  lastUpdated: "April 29, 2026",
  summaryItems: [
    {
      title: "Data we collect",
      value: "Account, contact, billing, usage, support, and device data.",
      icon: DatabaseIcon,
    },
    {
      title: "Why we use it",
      value:
        "To provide services, secure accounts, process payments, and improve products.",
      icon: UserCheckIcon,
    },
    {
      title: "Your choices",
      value:
        "You can request access, correction, deletion, or marketing opt-out.",
      icon: CheckCircle2Icon,
    },
  ],
  intro:
    "This policy explains what personal information we collect, how we use it, who we share it with, and the choices available to people who use our website, templates, dashboard layouts, and support services.",
  policySections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      body: [
        "We collect information you provide directly, including your name, email address, phone number, company details, project requirements, support messages, and payment-related details needed to complete a purchase.",
        "We also collect limited technical information automatically, such as IP address, browser type, device identifiers, pages visited, referring URLs, session timestamps, and approximate location derived from network data.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Information",
      body: [
        "We use personal information to deliver templates and services, respond to requests, manage accounts, process transactions, prevent abuse, improve site performance, and send service-related notices.",
        "When you opt in or where permitted by law, we may send product updates, release notes, offers, and educational content. You can unsubscribe from non-essential marketing messages at any time.",
      ],
    },
    {
      id: "legal-bases",
      title: "3. Legal Bases for Processing",
      body: [
        "Where applicable privacy laws require a legal basis, we process information to perform a contract, comply with legal obligations, protect legitimate business interests, protect users from fraud or misuse, and honor consent-based preferences.",
        "Examples include using billing data to complete a purchase, support messages to resolve a request, and analytics data to keep the website reliable and useful.",
      ],
    },
    {
      id: "sharing",
      title: "4. How We Share Information",
      body: [
        "We do not sell personal information. We may share limited data with service providers that help us operate the website, process payments, host services, send email, provide analytics, prevent fraud, or deliver customer support.",
        `We may disclose information if required by law, court order, regulatory request, or to protect the rights, safety, and security of ${siteConfig.name}, our users, or the public.`,
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention",
      body: [
        "We keep personal information only as long as needed for the purpose collected, including account administration, legal compliance, dispute resolution, fraud prevention, accounting, and security.",
        "Support and account records are periodically reviewed. When information is no longer needed, we delete it, anonymize it, or securely archive it according to operational and legal requirements.",
      ],
    },
    {
      id: "security",
      title: "6. Security",
      body: [
        "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, alteration, disclosure, or destruction.",
        "No online service can guarantee absolute security. If we learn of a security incident that affects your information, we will take appropriate steps and notify affected users where required.",
      ],
    },
    {
      id: "international-transfers",
      title: "7. International Data Transfers",
      body: [
        `${siteConfig.name} is based in Dhaka, Bangladesh, and may use providers or infrastructure located in other countries. Your information may be processed outside your region.`,
        "When required, we use appropriate safeguards for cross-border transfers, such as contractual commitments and security controls from trusted service providers.",
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Privacy Rights",
      body: [
        "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information.",
        "You may also request a copy of your data or withdraw consent where processing is based on consent. We may need to verify your identity before completing a request.",
      ],
    },
    {
      id: "children",
      title: "9. Children",
      body: [
        "Our services are intended for business and professional use. We do not knowingly collect personal information from children under 13.",
        "If you believe a child has provided personal information to us, contact us and we will take appropriate steps to delete it.",
      ],
    },
    {
      id: "changes",
      title: "10. Changes to This Policy",
      body: [
        "We may update this Privacy Policy to reflect product changes, legal requirements, or operational improvements. The latest version will always show the effective update date.",
        "If a change materially affects your rights or how we use information, we will provide notice through the website, email, or another reasonable channel.",
      ],
    },
  ],
  dataCategories: [
    ["Contact data", "Name, email, phone, company, and support messages"],
    [
      "Transaction data",
      "Order records, invoices, payment status, and plan details",
    ],
    [
      "Usage data",
      "Pages viewed, feature usage, timestamps, and referral source",
    ],
    ["Device data", "IP address, browser, operating system, and device type"],
  ],
  suggestedPages: [
    {
      href: "/terms-of-service",
      title: "Terms of Service",
      description: "Review the rules for using our products and services.",
    },
    {
      href: "/cookie-policy",
      title: "Cookie Policy",
      description: "See how cookies and similar technologies are used.",
    },
    {
      href: "/refund-policy",
      title: "Refund Policy",
      description: "Check refund eligibility, timing, and support steps.",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
      description: "Send privacy questions or support requests to our team.",
    },
  ],
}
