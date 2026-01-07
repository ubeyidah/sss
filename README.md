# SSS (Single Source Structure)

One organized workspace where everything has a place.

## What is SSS?

SSS is a standardized folder structure for organizing all your work. It eliminates decision fatigue about where to place new projects by providing a predictable structure across Personal, Work, OpenSource, Playgrounds, and Categories.

## How to Use

### Web Playground

Visit [https://sss-cli.vercel.app](https://sss-cli.vercel.app) to customize and preview your workspace structure. Add custom folders, enable year-based organization, and get installation commands that match your preferences.

### CLI Installation

**Linux/Mac:**
```bash
curl -fsSL https://sss-cli.vercel.app/scripts/install.sh | bash -s -- --year-based "Personal" "Work" "OpenSource" "Playground" "Courses"
```

**Windows (PowerShell):**
```powershell
irm https://sss-cli.vercel.app/scripts/install.ps1 | iex -Args -YearBased -Folders "Personal,Work,OpenSource,Playground,Courses"
```

## Features

- **Standardized Structure**: Consistent organization across all projects
- **Custom Folders**: Add, edit, or remove folder categories
- **Year-Based Organization**: Optional grouping by year (e.g., Personal/2026/)
- **Cross-Platform**: Works on Linux, macOS, and Windows
- **Interactive Preview**: Visualize your structure before installation

## Philosophy

Clarity creates focus. When your workspace has one clear structure, you stop wasting time deciding where things go and start spending that time building.

Learn more about the philosophy: [Medium Article](https://medium.com)

## Tech Stack

- **Web**: Next.js 16, React 19, Tailwind CSS 4, shadcn/ui
- **CLI**: Bash (Unix) and PowerShell (Windows) scripts

## Credits

Created by [Ubeyidah](https://github.com/ubeyidah)

## License

MIT License - see [LICENSE](LICENSE) for details
