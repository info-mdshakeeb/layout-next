# Layout Next

A Next.js layout starter built with the App Router, Tailwind CSS, shadcn/ui, and theme support.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- next-themes

## Layout Structure

- `app/layout.tsx` defines the root HTML layout, Google fonts, global styles, and theme provider.
- `app/page.tsx` contains the starter page for adding layout content and UI components.
- `styles/globals.css` contains the global Tailwind and design token styles.
- `components/ui/button.tsx` provides the shadcn/ui button component.
- `providers/theme-provider.tsx` wraps the app with dark mode support.
- `lib/utils.ts` contains shared utility helpers.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run checks:

```bash
pnpm lint
pnpm typecheck
```

## GitHub

Repository:

```bash
https://github.com/info-mdshakeeb/layout-next.git
```
