"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { MailIcon } from "lucide-react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import z from "zod"

import { PasswordInput } from "@/components/forms/password-input"

import { ShimmerButton } from "@/components/loader/loader-button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
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
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const loginFormSchema = z.object({
  email: z
    .email("Invalid email address")
    .max(255, "Email must be at most 255 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password must be at most 128 characters"),
  rememberMe: z.boolean().optional(),
})
export type ILoginFormValues = z.infer<typeof loginFormSchema>

export function LoginForm({
  className,
  callback,
}: {
  className?: string
  callback?: string | string[] | undefined
}) {
  const form = useForm<ILoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "shakeeb.m360ict@gmail.com",
      password: "11111111",
    },
  })

  async function onSubmit(data: ILoginFormValues) {}

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("", className)}>
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
                    aria-invalid={fieldState.invalid}
                    placeholder="m@example.com"
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
                    We&apos;ll never share your email with anyone else.
                  </FieldDescription>
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldContent className="flex-row items-center justify-between">
                  <FieldLabel required htmlFor={field.name}>
                    Password
                  </FieldLabel>
                  {/* remember me */}
                  <Link className="underline" href={`/auth/recover`}>
                    Forgot password?
                  </Link>
                </FieldContent>

                <PasswordInput
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                />
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <div className="flex items-center justify-between">
                    <Controller
                      name="rememberMe"
                      control={form.control}
                      render={({ field }) => (
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="remember_me"
                            checked={!!field.value}
                            onCheckedChange={(v) => field.onChange(v === true)}
                          />
                          <Label htmlFor="remember_me">Remember me</Label>
                        </div>
                      )}
                    />
                    <FieldDescription>
                      Must be at least 8 characters.
                    </FieldDescription>
                  </div>
                )}
              </Field>
            )}
          />
          <Field>
            <ShimmerButton
              type="submit"
              text="Login"
              loading={form.formState.isSubmitting}
            />
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  )
}
