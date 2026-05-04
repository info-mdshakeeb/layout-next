"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { MailIcon } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { TextShimmer } from "@/components/text-shimmer"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { cn } from "@/lib/utils"

const forgetPasswordSchema = z.object({
  email: z.email("Please enter a valid email address."),
})

type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>

interface ForgetPasswordFormProps {
  onSuccess?: () => void
  redirectTo?: string
}

export function ForgetPasswordForm({
  onSuccess,
  redirectTo,
}: ForgetPasswordFormProps) {
  const form = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: ForgetPasswordFormValues) => {}

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <fieldset disabled={form.formState.isSubmitting}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel required htmlFor={field.name}>
                  Email
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    type="email"
                    placeholder="m@example.com"
                    aria-invalid={fieldState.invalid}
                    autoComplete="email"
                  />
                  <InputGroupAddon>
                    <MailIcon
                      className={cn("", {
                        "text-destructive": fieldState.invalid,
                      })}
                    />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>
                    We&apos;ll send a reset link to this email.
                  </FieldDescription>
                )}
              </Field>
            )}
          />
          <Field>
            <Button
              className="w-full"
              type="submit"
              variant={form.formState.isSubmitting ? "outline" : "default"}
            >
              {form.formState.isSubmitting ? (
                <TextShimmer>Send reset link</TextShimmer>
              ) : (
                "Send reset link"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  )
}
