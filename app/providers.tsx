"use client"

import { ReactNode, useEffect } from "react"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
      })
    }
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
