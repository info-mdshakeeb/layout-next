import { CheckCircle2Icon, DatabaseIcon, UserCheckIcon } from "lucide-react"

export const refundPolicyContent = {
  title: "Refund Policy",
  description:
    "Learn about our refund policy and how we handle refunds for digital products and subscriptions.",
  lastUpdated: "April 29, 2026",
  summaryItems: [
    {
      title: "Money-Back Guarantee",
      value: "We offer a 14-day money-back guarantee on all our products.",
      icon: CheckCircle2Icon,
    },
    {
      title: "Digital Products",
      value:
        "Refunds for digital products are assessed on a case-by-case basis.",
      icon: DatabaseIcon,
    },
    {
      title: "Support",
      value: "Please contact our support team before requesting a refund.",
      icon: UserCheckIcon,
    },
  ],
  intro:
    "We are committed to providing the best products and support to our customers. Please read our refund policy below to understand how we handle refunds for digital products and subscriptions.",
  policySections: [
    {
      id: "general-refund-terms",
      title: "1. General Refund Terms",
      body: [
        "We want you to be completely satisfied with your purchase. If you are not satisfied with your purchase, you may be eligible for a refund.",
        "All refund requests must be made within 14 days of the original purchase date.",
      ],
    },
    {
      id: "digital-downloads",
      title: "2. Digital Downloads",
      body: [
        "Due to the nature of digital products, refunds are generally not provided once a product has been downloaded.",
        "However, if you experience technical issues that prevent you from using the product, we will work with you to resolve the issue. If the issue cannot be resolved, a refund may be issued at our discretion.",
      ],
    },
    {
      id: "subscriptions",
      title: "3. Subscriptions",
      body: [
        "Subscription fees are non-refundable. You may cancel your subscription at any time, and you will continue to have access to the service through the end of your billing period.",
        "We do not provide refunds or credits for any partial subscription periods.",
      ],
    },
    {
      id: "how-to-request",
      title: "4. How to Request a Refund",
      body: [
        "To request a refund, please contact our support team with your order number and a detailed explanation of why you are requesting a refund.",
        "We aim to process all refund requests within 5-7 business days.",
      ],
    },
  ],
  definitions: [
    ["Eligibility", "Refunds must be requested within 14 days of purchase."],
    [
      "Digital Goods",
      "Generally non-refundable once downloaded, unless defective.",
    ],
    [
      "Processing Time",
      "Refunds are typically processed within 5-7 business days.",
    ],
    ["Method", "Refunds will be issued to the original payment method."],
  ],
  suggestedPages: [
    {
      href: "/terms-of-service",
      title: "Terms of Service",
      description: "Review the rules for purchases, accounts, and service use.",
    },
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
      description: "Learn how order and support data is handled.",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
      description: "Send refund questions or support requests to our team.",
    },
  ],
}
