# Layout Next

A Next.js layout starter built with the App Router, Tailwind CSS, shadcn/ui, and theme support.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- next-themes
- @t3-oss/env-nextjs

## Layout Structure

- `app/layout.tsx` defines the root HTML layout, Google fonts, global styles, and theme provider.
- `app/page.tsx` contains the starter page for adding layout content and UI components.
- `styles/globals.css` contains the global Tailwind and design token styles.
- `components/ui/button.tsx` provides the shadcn/ui button component.
- `env.ts` validates environment variables with `@t3-oss/env-nextjs`.
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

## Versioning

This project uses Changesets to decide when `package.json` should get a new version and what should go into `CHANGELOG.md`.

For each meaningful change, create a changeset:

```bash
pnpm changeset
```

Choose the version bump:

- `patch`: bug fixes and tiny changes, for example `0.0.1` to `0.0.2`
- `minor`: new features that do not break existing usage, for example `0.0.1` to `0.1.0`
- `major`: breaking changes, for example `0.1.0` to `1.0.0`

When you are ready to release/version the project, run:

```bash
pnpm version-packages
```

That command consumes the files in `.changeset`, updates the package version, and writes `CHANGELOG.md`. Commit those generated changes.

## GitHub

Repository:

```bash
https://github.com/info-mdshakeeb/layout-next.git
```
