# AI Coding Guidelines

Shared source of truth for AI coding assistants in this repository.

## Project context

- Repository: `sale-liatorp`
- Stack: Next.js App Router, React, TypeScript (strict), Tailwind, ShadCN
- Import alias: `@/*` maps to `src/*`

## Architecture and layering

- `src/app/`: Next.js routing files only (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, route handlers)
- `src/components/`: reusable presentational UI and other UI logic
- `src/types/`: shared contracts and types
- `src/utils/`: shared pure logic

Rule: keep `src/app/**` thin and move complex composition to `src/components/**`.

## Data fetching and state

- Prefer server actions in `src/server-actions/` for server communication.
- Client-side fetching should live in hooks (commonly under `src/hooks/server-hooks/`), often with SWR.
- Reuse request helpers in `src/utils/base-request/` for request policy, auth, and error behavior.

## Text and translation

- All text will be static, but should be stored in an object that we can easily swap out for an object of another language later on. No loose strings, keep all strings in a neatly organized object(s)

## TypeScript standards

- Use TypeScript for all new code.
- Do not use `any` in application types.
- `unknown` is allowed only at trust boundaries (for example caught errors, API responses, parsed/deserialized data, or other external inputs), and must be narrowed immediately before further use.
- For caught errors and other untrusted inputs, narrow immediately and convert to a typed error/message or validated shape instead of propagating raw `unknown` values.
- Use `import type` for type-only imports.
- Add explicit return types for exported or non-trivial functions.
- Prefer `interface` for object contracts when consistent with existing code.

## Function and file rules

- Maximum one exported function per file for helper/utility modules.
- Helper/utility file name should match the exported function name.
- Local non-exported helper functions in the same file are allowed when only used internally.
- Maximum 150 lines per function.
- If logic grows beyond 150 lines, split into focused helper functions/files.

## Styling and UI

- Use Tailwind styling for styling
  - https://tailwindcss.com/docs/installation/using-vite
- Use ShadCN components for UI components like buttons, radio, accordions, context menus, etc. as much as possible
  - https://ui.shadcn.com/llms.txt

## Naming and file structure

- Directories and non-component files: kebab-case.
- React component files: PascalCase.
- React component files should export a single React component.
- App Router files in `src/app/**`: only Next.js reserved names.
- Main component from a component folder should be exported from `index.tsx`.
- Helpers/hooks can live inside a component folder when only used within that component.
- If a helper or hook is reused across features, move it to shared `src/utils/` or `src/hooks/`.

Example component folder:

```text
/components
  Button.tsx
  Text.tsx
  /data-table
    index.tsx
    index.module.scss
    Header.tsx
    Header.module.scss
    /utils
      get-header.ts
```

## Imports and formatting

- Follow repository ESLint + Prettier config.
- Keep import groups separated by blank lines when lint expects it.

## Completion checklist

1. Keep change scope focused on the request.
2. Run `npm run lint`.
3. Run `npm run type-check`.
4. Confirm no architecture boundary violations.
