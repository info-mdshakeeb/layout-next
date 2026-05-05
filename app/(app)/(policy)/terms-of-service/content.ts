import { DatabaseIcon, ShieldCheckIcon, UserCheckIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"

export const termsOfServiceContent = {
  title: "Terms of Service",
  description: `Read our Terms of Service to understand the rules and guidelines for using ${siteConfig.name} products.`,
  lastUpdated: "April 29, 2026",
  summaryItems: [
    {
      title: "Account Rules",
      value: "You must be 18+ and provide accurate information.",
      icon: UserCheckIcon,
    },
    {
      title: "Payments & Subscriptions",
      value: "All payments are processed securely. Subscriptions auto-renew.",
      icon: DatabaseIcon,
    },
    {
      title: "Termination",
      value: "We may suspend accounts that violate our usage policies.",
      icon: ShieldCheckIcon,
    },
  ],
  intro: `These Terms of Service govern your use of ${siteConfig.name} website and products. By accessing or using our services, you agree to comply with and be bound by these terms. Please read them carefully.`,
  policySections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      body: [
        "By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        "These terms apply to all visitors, users, and others who access or use the Service.",
      ],
    },
    {
      id: "user-accounts",
      title: "2. User Accounts",
      body: [
        "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.",
        "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
      ],
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property",
      body: [
        `The Service and its original content, features, and functionality are and will remain the exclusive property of ${siteConfig.name} and its licensors.`,
        `Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ${siteConfig.name}.`,
      ],
    },
    {
      id: "termination",
      title: "4. Termination",
      body: [
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "5. Limitation of Liability",
      body: [
        `In no event shall ${siteConfig.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.`,
        'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.',
      ],
    },
  ],
  definitions: [
    [
      "Service",
      `The website, applications, and any other offerings by ${siteConfig.name}`,
    ],
    ["User", "Any individual or entity who accesses or uses the Service"],
    [
      "Content",
      "Text, images, or other information that can be posted, uploaded, linked to, or otherwise made available by you",
    ],
    [
      "Account",
      "A unique account created for you to access our Service or parts of our Service",
    ],
  ],
  suggestedPages: [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
      description: "Learn how personal information is collected and protected.",
    },
    {
      href: "/refund-policy",
      title: "Refund Policy",
      description: "Check refund eligibility, timing, and support steps.",
    },
    {
      href: "/cookie-policy",
      title: "Cookie Policy",
      description: "See how cookies and similar technologies are used.",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
      description: "Reach support for legal or account questions.",
    },
  ],
}
