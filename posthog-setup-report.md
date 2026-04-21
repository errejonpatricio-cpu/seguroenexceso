<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Seguro en Exceso Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the Next.js 15.3+ instrumentation pattern. Configured with a reverse proxy (`/ingest`) for reliable event delivery, exception capture enabled, and debug mode in development.
- **`next.config.mjs`** (updated): Added PostHog reverse proxy rewrites (`/ingest/static/*`, `/ingest/array/*`, `/ingest/*`) and `skipTrailingSlashRedirect: true` to support PostHog API requests.
- **`.env.local`** (new): Stores `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` as environment variables (`.gitignore`-covered).
- **`app/page.tsx`** (updated): Added `posthog-js` import and five event tracking calls (see table below). Also extracted the FAQ items to a module-level `faqItems` const to allow rich event properties on accordion opens.

## Events instrumented

| Event Name | Description | File |
|---|---|---|
| `schedule_appointment_clicked` | User clicks "Agendar Cita" button; includes `source` property (`floating_button` or `hero_button`) | `app/page.tsx` |
| `learn_more_clicked` | User clicks "Saber más" to scroll to candidate requirements | `app/page.tsx` |
| `faq_item_opened` | User expands a FAQ accordion item; includes `question_index` and `question` text | `app/page.tsx` |
| `calendar_section_viewed` | User scrolls to the Cal.com scheduling section (fires once per session via IntersectionObserver) | `app/page.tsx` |
| `contact_email_clicked` | User clicks the `seguros@ebya.mx` email link in the footer | `app/page.tsx` |

## Next steps

We've built a dashboard and five insights to monitor user behavior based on the events just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/391678/dashboard/1494082
- **Appointment Scheduling Funnel** (calendar viewed → clicked): https://us.posthog.com/project/391678/insights/F7vm8Qgl
- **Schedule Appointment Clicks Over Time** (by source): https://us.posthog.com/project/391678/insights/trhHg8X7
- **Top FAQ Questions Opened**: https://us.posthog.com/project/391678/insights/gsVh9y9w
- **Page Engagement Overview** (all events): https://us.posthog.com/project/391678/insights/hmqvgICB
- **Unique Users Who Clicked Schedule Appointment**: https://us.posthog.com/project/391678/insights/DG3VKcMQ

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
