"use client"

import { EdgeFade } from "@/components/elements/edge-fade"
import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import Link from "next/link"
import { useCallback, useRef, useState } from "react"

type FlightStep = {
  eyebrow: string
  title: string
  description: string
  cta?: string
  href?: string
}

const STICKY_NUMBER_TOP_RATIO = 0.2

const STEPS: FlightStep[] = [
  {
    eyebrow: "Step 1",
    title: "Search the route that fits your trip.",
    description:
      "Start with the basics: choose your origin, destination, travel date, trip type, and passengers. Booking Expert turns those details into a focused list of live flight options so you can begin with routes that actually match your plan.",
    cta: "Search flights",
    href: "/?tab=flights",
  },
  {
    eyebrow: "Step 2",
    title: "Compare fares with clear details.",
    description:
      "Review each option with the details travelers usually need before booking: airline, departure time, transit duration, baggage allowance, refund rules, and total fare. The goal is to make price comparison clear without hiding important conditions.Add passenger information, save traveler profiles for future bookings, and check the itinerary before payment. The checkout flow keeps the important details visible so names, dates, routes, and fare rules can be reviewed before confirmation.Add passenger information, save traveler profiles for future bookings, and check the itinerary before payment. The checkout flow keeps the important details visible so names, dates, routes, and fare rules can be reviewed before confirmation.",
  },
  {
    eyebrow: "Step 3",
    title: "Add travelers and confirm safely.",
    description:
      "Add passenger information, save traveler profiles for future bookings, and check the itinerary before payment. The checkout flow keeps the important details visible so names, dates, routes, and fare rules can be reviewed before confirmation.",
  },
  {
    eyebrow: "Step 4",
    title: "Receive booking updates quickly.",
    description:
      "After checkout, follow payment status, booking progress, ticket updates, and invoices from your account. You can return later to find the same booking details without searching through messages or scattered documents.",
  },
  {
    eyebrow: "Step 5",
    title: "Manage changes from one place.",
    description:
      "Travel plans can change, so your dashboard keeps booking history, traveler data, invoices, support tickets, and change requests together. It gives you a single place to track what happened and what action is still pending.",
  },
  {
    eyebrow: "Step 6",
    title: "Plan the rest of the journey.",
    description:
      "Once flights are handled, continue planning with hotel search, visa support, holiday packages, Umrah options, and AI-assisted trip ideas. Booking Expert is designed to keep the full travel workflow connected instead of split across separate tools.",
  },
]

function StepPanel({
  step,
  index,
  activeIndex,
  setStepNode,
}: {
  step: FlightStep
  index: number
  activeIndex: number
  setStepNode: (index: number, node: HTMLDivElement | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const setPanelNode = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node
      setStepNode(index, node)
    },
    [index, setStepNode]
  )
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 62%", "end 42%"],
  })
  const width = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"])
  const isActive = activeIndex === index
  const stepNumber = `${index + 1}`.padStart(2, "0")

  return (
    <div
      ref={setPanelNode}
      className="relative flex flex-col items-start justify-center py-10"
    >
      <div className="mb-5 flex text-7xl leading-none font-bold text-primary lg:hidden">
        {stepNumber}
      </div>

      <div className="mb-8 hidden h-0.5 w-full bg-border lg:block">
        <motion.div
          className="h-full bg-primary"
          style={{ width }}
          aria-hidden="true"
        />
      </div>

      <div
        className={cn(
          "text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-300",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {step.eyebrow}
      </div>

      <h2 className="mt-3 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-foreground md:text-4xl">
        {step.title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 font-medium text-muted-foreground md:text-lg">
        {step.description}
      </p>

      {step.cta && step.href && (
        <div className="mt-8">
          <Button size="sm" asChild>
            <Link href={step.href}>
              <LinkLoadingIndicator title={step.cta} />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export function StickySteps() {
  const numberSlotRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const syncFrameRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const stepProgress = useMotionValue(0)
  const numberTrackY = useTransform(
    stepProgress,
    (latest) => `-${latest * (100 / STEPS.length)}%`
  )

  const syncStepNumber = useCallback(() => {
    const numberSlot = numberSlotRef.current
    const numberSlotBounds = numberSlot?.getBoundingClientRect()
    const hasDesktopStickySlot =
      numberSlot &&
      numberSlotBounds &&
      window.matchMedia("(min-width: 1024px)").matches
    let nextProgress = 0

    if (hasDesktopStickySlot) {
      const stickyTop = window.innerHeight * STICKY_NUMBER_TOP_RATIO
      const slotTop = Math.max(numberSlotBounds.top, stickyTop)
      const slotHeight = Math.max(numberSlot.offsetHeight, 1)
      const slotBottom = slotTop + slotHeight

      for (let index = 1; index < STEPS.length; index += 1) {
        const node = stepRefs.current[index]

        if (!node) continue

        const { top } = node.getBoundingClientRect()

        if (top <= slotTop) {
          nextProgress = index
          continue
        }

        if (top < slotBottom) {
          const stepHandoffProgress = (slotBottom - top) / slotHeight
          nextProgress = Math.max(nextProgress, index - 1 + stepHandoffProgress)
        }
      }
    } else {
      const activationLine = window.innerHeight * 0.5

      stepRefs.current.forEach((node, index) => {
        if (!node) return

        const { top } = node.getBoundingClientRect()

        if (top <= activationLine) {
          nextProgress = index
        }
      })
    }

    const clampedProgress = Math.min(
      STEPS.length - 1,
      Math.max(0, nextProgress)
    )
    const displayProgress = shouldReduceMotion
      ? Math.round(clampedProgress)
      : clampedProgress
    const nextIndex = Math.round(clampedProgress)

    stepProgress.set(displayProgress)
    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex
    )
  }, [shouldReduceMotion, stepProgress])

  const scheduleStepNumberSync = useCallback(() => {
    if (syncFrameRef.current !== null) return

    syncFrameRef.current = window.requestAnimationFrame(() => {
      syncFrameRef.current = null
      syncStepNumber()
    })
  }, [syncStepNumber])

  const setStepNode = useCallback(
    (index: number, node: HTMLDivElement | null) => {
      stepRefs.current[index] = node
      scheduleStepNumberSync()
    },
    [scheduleStepNumberSync]
  )

  const setNumberSlotNode = useCallback(
    (node: HTMLDivElement | null) => {
      numberSlotRef.current = node
      scheduleStepNumberSync()
    },
    [scheduleStepNumberSync]
  )

  useMotionValueEvent(scrollY, "change", () => {
    scheduleStepNumberSync()
  })

  return (
    <section className="relative isolate overflow-clip bg-background py-16 md:py-24">
      <div className="z-10 container">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Book smarter.
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground md:text-lg">
              A clear travel workflow for searching flights, comparing fares,
              confirming bookings, and managing every trip detail in one place.
            </p>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[max-content_minmax(0,1fr)] lg:gap-20">
          <div
            ref={setNumberSlotNode}
            className="sticky top-[20vh] hidden h-56 items-start overflow-visible lg:flex"
            aria-hidden="true"
          >
            <div
              className="pointer-events-none absolute top-[-20vh] z-0 h-dvh w-screen bg-contain bg-center bg-no-repeat opacity-80 dark:opacity-25"
              style={{
                left: "calc((min(var(--container-max, calc(1200px + (24px * 2))), 100vw) - 100vw) / 2 - 1rem)",
                backgroundImage: "url('assets/images/Index__hero.svg')",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-56 items-start overflow-hidden">
              <span className="text-[14rem] leading-none font-bold text-foreground">
                0
              </span>
              <motion.div
                className="flex flex-col text-center text-[14rem] leading-none font-bold text-foreground"
                style={{ y: numberTrackY }}
              >
                {STEPS.map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="grid gap-0">
            {STEPS.map((step, index) => (
              <StepPanel
                key={step.eyebrow}
                step={step}
                index={index}
                activeIndex={activeIndex}
                setStepNode={setStepNode}
              />
            ))}
          </div>
        </div>
      </div>
      <EdgeFade edges={["bottom"]} ySizeClass="h-24 md:h-32" zClass="z-20" />
    </section>
  )
}
