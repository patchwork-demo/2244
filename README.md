# 2244

**2244** is the name of this repository and package (see `package.json`). It is a small web app: an [Express](https://expressjs.com/) server that renders [Pug](https://pugjs.org/) templates and serves static assets from `public/`.

## Prerequisites

- [Bun](https://bun.com) — JavaScript runtime and package manager (this repo was bootstrapped with `bun init`; Bun v1.3.10 was used at creation time).
- [TypeScript](https://www.typescriptlang.org/) — listed as a `peerDependency`; Bun runs `.ts` files directly.

## Stack

- **Runtime / language:** Bun, TypeScript
- **Server:** Express 5 (`server.ts`)
- **Templates:** Pug (`src/templates`)
- **Static files:** `public/` (e.g. compiled CSS)
- **CSS:** Tailwind CSS v4 — `@tailwindcss/cli` compiles `src/input.css` → `public/main.css`
- **Development:** `concurrently` runs the server under `nodemon` (watches `src/` and `server.ts`) and Tailwind in watch mode

## Development

Install dependencies:

```bash
bun install
```

Start the app with auto-reload and CSS watch:

```bash
bun run dev
```

Then open [http://localhost:3333](http://localhost:3333) (port is set in `server.ts`).

To run the server with the Bun inspector (attach a debugger to port **3344**):

```bash
bun run dev:debug
```

