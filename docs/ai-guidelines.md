# AI Coding Guidelines

Shared source of truth for AI coding assistants in this repository.

## Project context
- Repository: `cbr-mit-togo-fe`
- Product: MIT workflow application in the IKEA ecosystem
- Stack: Next.js App Router, React, TypeScript (strict), SCSS modules, SWR, NextAuth, `@ingka/*`
- Import alias: `@/*` maps to `src/*`

## Architecture and layering
- `src/app/`: Next.js routing files only (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, route handlers)
- `src/component-pages/`: route-level composition and page structure
- `src/component-containers/`: business logic, orchestration, stateful behavior
- `src/components/`: reusable presentational UI
- `src/hooks/`: custom hooks
- `src/server-actions/`: server actions and server-side request flows
- `src/interfaces/`: shared contracts and types
- `src/constants/`, `src/mappers/`, `src/utils/`: shared domain constants and pure logic

Rule: keep `src/app/**` thin and move complex composition to `src/component-pages/**`.

## Import boundaries
Files in `src/components/**` must not import from:
- `src/component-containers/**`
- `src/server-actions/**`
- `src/contexts/**`
- `src/app/**`
- `src/mappers/**`

Rule: domain/data orchestration belongs in containers/hooks, not presentational components.

## Data fetching and state
- Prefer server actions in `src/server-actions/` for server communication.
- Client-side fetching should live in hooks (commonly under `src/hooks/server-hooks/`), often with SWR.
- Reuse request helpers in `src/utils/base-request/` for request policy, auth, and error behavior.

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
- Use SCSS modules (`*.module.scss`) and keep styles colocated.
- Reuse existing `@ingka/*` patterns before introducing new primitives.
- Preserve or add `data-analytics-id` on key interactive elements.

## Naming and file structure
- Directories and non-component files: kebab-case.
- React component files: PascalCase.
- React component files should export a single React component.
- App Router files in `src/app/**`: only Next.js reserved names.
- Main component from a component folder should be exported from `index.tsx`.
- Helpers/hooks/tests can live inside a component folder when only used within that component.
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
    /__tests__
      index.test.tsx
      get-header.test.ts
```

## Imports and formatting
- Follow repository ESLint + Prettier config.
- Respect `import/order` grouping and alphabetical sorting.
- Keep import groups separated by blank lines when lint expects it.

## Errors and user messaging
- Use typed/actionable errors when useful (for example `ApiError`).
- Normalize unknown errors with `getErrorMessage` (`src/utils/error-utils.ts`).
- Do not swallow errors silently.
- Add user-facing text in `src/constants/user-messages.ts` when introducing new messages.

## Constants rules
- Do not hardcode reusable constants in business logic.
- Define reusable constants in centralized constant objects or enums and reference via dot notation.
- Prefer object constants with `as const` (or `Object.freeze`) and uppercase keys.

Example:
```ts
export const INPUT_TYPES = {
  TYPE_1: "type_1",
  TYPE_2: "type_2",
} as const;

// Usage
if (inputType === INPUT_TYPES.TYPE_1) {
  // ...
}
```

## Testing expectations
- Add or update tests for changed business logic.
- Every new or changed helper/utility should have an accompanying unit test in the closest `__tests__/` folder.
- When modifying an existing untested helper, add test coverage if practical.
- Use Jest + Testing Library conventions already used in this repo.

## AI context notes
- For large refactors or features, add a short context entry in `.llm/changelog.md`.
- If the work is feature-specific and needs durable context, add a focused note under `.llm/features/`.

## Completion checklist
1. Keep change scope focused on the request.
2. Run `npm run lint`.
3. Run `npm run type-check`.
4. Run relevant tests.
5. Confirm no architecture boundary violations.

## Supporting references
- `.github/.docs/DEVELOPMENT_REFERENCE.md`
