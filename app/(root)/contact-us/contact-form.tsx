"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/config"
import { SendIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type ContactFormValues = {
  name: string
  email: string
  phone: string
  topic: string
  message: string
}

const topicOptions = [
  { value: "booking", label: "Booking support" },
  { value: "tour", label: "Tour planning" },
  { value: "visa", label: "Visa assistance" },
  { value: "corporate", label: "Corporate travel" },
  { value: "general", label: "General question" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  })

  const [topic, setTopic] = useState("")

  const onSubmit = handleSubmit((values) => {
    setIsSubmitting(true)

    const selectedTopic =
      topicOptions.find((option) => option.value === values.topic)?.label ??
      "Contact request"

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      `Topic: ${selectedTopic}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n")

    window.location.assign(
      `mailto:${siteConfig.emails[0]}?subject=${encodeURIComponent(
        selectedTopic
      )}&body=${encodeURIComponent(body)}`
    )

    toast.success("Your email app is ready with the message details.")
    reset()
    setTopic("")
    setIsSubmitting(false)
  })

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <FieldGroup>
        <div className="grid gap-5 md:grid-cols-2">
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              {...register("name", {
                required: "Enter your name.",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters.",
                },
              })}
            />
            <FieldError errors={[errors.name]} />
          </Field>

          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            <FieldError errors={[errors.email]} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="phone">Phone number</FieldLabel>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+880 1XXX XXXXXX"
              aria-invalid={!!errors.phone}
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-\s()]{7,20}$/,
                  message: "Enter a valid phone number.",
                },
              })}
            />
            <FieldDescription>
              Optional, but useful for urgent trips.
            </FieldDescription>
            <FieldError errors={[errors.phone]} />
          </Field>

          <Field data-invalid={!!errors.topic}>
            <FieldLabel htmlFor="topic">Request type</FieldLabel>
            <Select
              value={topic}
              onValueChange={(value) => {
                setTopic(value)
                setValue("topic", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }}
            >
              <SelectTrigger
                id="topic"
                className="w-full"
                aria-invalid={!!errors.topic}
              >
                <SelectValue placeholder="Choose a request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {topicOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <input
              type="hidden"
              {...register("topic", {
                required: "Choose a request type.",
              })}
            />
            <FieldError errors={[errors.topic]} />
          </Field>
        </div>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            rows={7}
            placeholder="Tell us your destination, dates, traveler count, and anything we should know."
            aria-invalid={!!errors.message}
            {...register("message", {
              required: "Write a short message.",
              minLength: {
                value: 12,
                message: "Message must be at least 12 characters.",
              },
            })}
          />
          <FieldError errors={[errors.message]} />
        </Field>

        <div className="flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-muted-foreground">
            Submitting opens your email app so you can review before sending.
          </p>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <SendIcon data-icon="inline-start" />
            )}
            Send message
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}
