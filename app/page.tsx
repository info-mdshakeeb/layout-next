import { env } from "@/env"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      {env.NODE_ENV}
    </div>
  )
}
