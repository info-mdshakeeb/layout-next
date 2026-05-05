import { CheckCircle2Icon, CookieIcon, DatabaseIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"

export const cookiePolicyContent = {
  title: "Cookie Policy",
  description: `Learn about how ${siteConfig.name} uses cookies to improve your experience and how you can manage your preferences.`,
  lastUpdated: "April 29, 2026",
  summaryItems: [
    {
      title: "Essential Cookies",
      value: "Required for the website to function properly.",
      icon: CookieIcon,
    },
    {
      title: "Analytics",
      value: "Help us understand how visitors interact with the site.",
      icon: DatabaseIcon,
    },
    {
      title: "Your Preferences",
      value: "You can manage your cookie preferences at any time.",
      icon: CheckCircle2Icon,
    },
  ],
  intro: `This Cookie Policy explains how ${siteConfig.name} uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.`,
  policySections: [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies",
      body: [
        "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
        'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.',
      ],
    },
    {
      id: "how-we-use-cookies",
      title: "2. How We Use Cookies",
      body: [
        'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
        "We may use essential cookies to authenticate users and prevent fraudulent use of user accounts. We may also use analytics cookies to track information how the Website is used so that we can make improvements.",
      ],
    },
    {
      id: "managing-cookies",
      title: "3. Managing Your Cookies",
      body: [
        "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.",
        "If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.",
      ],
    },
  ],
  definitions: [
    [
      "Essential Cookies",
      "Necessary for the website to function properly and cannot be switched off in our systems.",
    ],
    [
      "Performance Cookies",
      "Allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    ],
    [
      "Functional Cookies",
      "Enable the website to provide enhanced functionality and personalization.",
    ],
    [
      "Targeting Cookies",
      "May be set through our site by our advertising partners to build a profile of your interests.",
    ],
  ],
  suggestedPages: [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
      description: "Learn how personal information is collected and protected.",
    },
    {
      href: "/terms-of-service",
      title: "Terms of Service",
      description: "Review the rules for using our products and services.",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
      description: "Ask questions about cookies or account preferences.",
    },
  ],
}
