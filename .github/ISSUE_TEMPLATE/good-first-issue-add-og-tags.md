---
name: Good First Issue - Add Open Graph Meta Tags
about: Improve social media sharing by adding Open Graph meta tags to the layout
title: 'Add Open Graph meta tags for better social media sharing'
labels: 'good first issue, enhancement, seo'
assignees: ''
---

## 📋 Issue Description

When the SSS website is shared on social media platforms (Twitter, Facebook, LinkedIn, Discord, etc.), it doesn't display a rich preview with an image, title, and description. This is because the site is missing Open Graph meta tags.

## 🎯 Goal

Add Open Graph meta tags to improve how the website appears when shared on social media platforms.

## 📍 Location

File: `/app/layout.tsx`

## 🔍 Current State

The current metadata only includes basic title and description:

```tsx
export const metadata: Metadata = {
  title: "SSS - Single Source Structure",
  description: "One organized workspace where everything has a place. Organize your projects with predictable folder structure.",
};
```

## ✅ Expected Enhancement

Add Open Graph tags to the metadata object:

```tsx
export const metadata: Metadata = {
  title: "SSS - Single Source Structure",
  description: "One organized workspace where everything has a place. Organize your projects with predictable folder structure.",
  openGraph: {
    title: "SSS - Single Source Structure",
    description: "One organized workspace where everything has a place. Organize your projects with predictable folder structure.",
    url: "https://sss-cli.vercel.app",
    siteName: "SSS",
    images: [
      {
        url: "https://sss-cli.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "SSS - Single Source Structure Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSS - Single Source Structure",
    description: "One organized workspace where everything has a place. Organize your projects with predictable folder structure.",
    images: ["https://sss-cli.vercel.app/logo.png"],
  },
};
```

## 🛠️ Technical Details

### What needs to be changed:

1. Open `/app/layout.tsx`
2. Locate the `metadata` export
3. Add the `openGraph` and `twitter` properties as shown above
4. Make sure the URLs point to the correct production domain

### Notes:

- The logo image exists at `/public/logo.png` and will be accessible at `https://sss-cli.vercel.app/logo.png`
- You may want to create a dedicated Open Graph image (1200x630px) for better social media previews in the future, but using the logo is a good start
- The `twitter` metadata ensures proper display on X (formerly Twitter)

### Testing your changes:

1. Run the development server: `bun dev`
2. Open http://localhost:3000 in your browser
3. View page source (Right-click → View Page Source)
4. Search for "og:" to verify the Open Graph tags are present
5. Use online tools to test:
   - [OpenGraph.xyz](https://www.opengraph.xyz/)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
6. You can also test locally by viewing the page source

## 📚 Helpful Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Open Graph Image Dimensions](https://iamturns.com/open-graph-image-size/)

## 💡 Acceptance Criteria

- [ ] Open Graph meta tags are added to the metadata object
- [ ] Twitter card meta tags are added to the metadata object
- [ ] All URLs point to the correct production domain
- [ ] The site builds without errors (`bun run build`)
- [ ] Meta tags are visible in the page source
- [ ] No TypeScript errors are introduced
- [ ] The changes follow the existing code style

## 🏷️ Labels

- `good first issue` - Perfect for first-time contributors
- `enhancement` - Adding new functionality
- `seo` - Search Engine Optimization and social sharing

## 🎓 What You'll Learn

By working on this issue, you'll learn about:
- Open Graph protocol and social media meta tags
- Next.js metadata API
- SEO best practices
- TypeScript types in Next.js

## 💬 Questions?

Feel free to ask questions in the comments! We're here to help you succeed.

---

**Happy coding! 🚀**
