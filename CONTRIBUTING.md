# Contributing

Thanks for your interest in contributing to SSS!

## Finding an Issue to Work On

Looking for a place to start? Check out our [good first issues](https://github.com/ubeyidah/sss/labels/good%20first%20issue)! These are beginner-friendly tasks with detailed instructions.

We also have issue templates to help you report bugs or suggest features:
- 🐛 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- 💡 [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)

## Development Setup

1. Clone the repository
2. Install dependencies using Bun:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Icons**: Hugeicons
- **Package Manager**: Bun

## Code Style

- Follow existing code conventions in the codebase
- Use TypeScript for type safety
- Components use React hooks (useState, useMemo, useEffect)
- Tailwind utility classes for styling
- No comments unless necessary (as per project style)

## Running Checks

Before submitting PRs, run:
```bash
bun run lint
```

## Building

```bash
bun run build
bun run start
```

## Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

Keep PRs focused and small. Describe what changes you're making and why.
