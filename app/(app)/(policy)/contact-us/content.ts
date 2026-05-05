import {
  CheckCircle2Icon,
  HeadphonesIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RouteIcon,
} from "lucide-react"

import { siteConfig } from "@/lib/config"

export const contactUsContent = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for booking support, tour planning, corporate travel, and general assistance.`,
  lastUpdated: "April 30, 2026",
  summaryItems: [
    {
      title: "Fast response",
      value:
        "Send your trip details and our team will help with the next step.",
      icon: HeadphonesIcon,
    },
    {
      title: "Travel support",
      value: "Bookings, tour plans, visa guidance, and corporate requests.",
      icon: RouteIcon,
    },
    {
      title: "Direct channels",
      value: "Reach us by email, phone, or through the contact form below.",
      icon: CheckCircle2Icon,
    },
  ],
  intro:
    "Use this page to reach our team for travel bookings, itinerary planning, visa-related guidance, corporate travel support, or general questions. Include the important trip details so we can respond with the right context.",
  contactMethods: [
    {
      id: "email",
      label: "Email",
      value: siteConfig.emails[0],
      href: `mailto:${siteConfig.emails[0]}`,
      icon: MailIcon,
    },
    {
      id: "phone",
      label: "Hotline",
      value: siteConfig.phones[0],
      href: `tel:${siteConfig.phones[0]}`,
      icon: PhoneIcon,
    },
    {
      id: "address",
      label: "Office",
      value: siteConfig.address,
      href: "https://maps.google.com/?q=House%2024%2C%20Road%208%2C%20Dhaka%2C%20Bangladesh",
      icon: MapPinIcon,
    },
  ],
  supportSteps: [
    [
      "01",
      "Share your request",
      "Tell us the destination, travel dates, passenger count, and support you need.",
    ],
    [
      "02",
      "We review details",
      "Our team checks availability, route options, and the most relevant next action.",
    ],
    [
      "03",
      "Confirm the plan",
      "You receive clear follow-up details before booking, payment, or documentation.",
    ],
  ],
  onThisPageItems: [
    { id: "contact-form", text: "Contact Form", level: 2 as const },
    { id: "direct-contact", text: "Direct Contact", level: 2 as const },
    { id: "support-process", text: "Support Process", level: 2 as const },
    { id: "office-hours", text: "Office Hours", level: 2 as const },
  ],
  suggestedPages: [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
      description: "Learn how contact and support data is handled.",
    },
    {
      href: "/refund-policy",
      title: "Refund Policy",
      description: "Check refund eligibility before sending a request.",
    },
    {
      href: "/terms-of-service",
      title: "Terms of Service",
      description: "Review service terms for bookings and support.",
    },
  ],
  officeHours:
    "Standard support is available Saturday to Thursday, 10:00 AM to 7:00 PM Bangladesh time. Emergency travel requests should include a phone number so the team can prioritize the response.",
  officeHourBadges: [
    "Saturday-Thursday",
    "10:00 AM-7:00 PM",
    "Dhaka, Bangladesh",
  ],
}
