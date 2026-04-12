import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteUrl = "https://www.agents-shire.sh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shire — Agents That Work With You, Not For You | Open Source",
  description:
    "An open-source platform where AI agents collaborate with you continuously — like teammates, not tools. Persistent workspaces, inter-agent messaging, shared filesystems.",
  keywords: [
    "AI agent platform",
    "persistent AI agent workspace",
    "open source AI agents",
    "AI agent infrastructure",
    "multi-agent collaboration",
    "AI agent orchestration",
    "AI agent workspace",
    "stateful AI agents",
  ],
  authors: [
    {
      name: "Shire Contributors",
      url: "https://github.com/victor36max/shire",
    },
  ],
  creator: "Shire Contributors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shire",
    title: "Shire — Agents That Work With You, Not For You",
    description:
      "An open-source platform where AI agents collaborate with you continuously — like teammates, not tools. Persistent workspaces, inter-agent messaging, shared filesystems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shire — Agents that work with you, not for you. Open-source persistent workspaces for AI agents.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shire — Agents That Work With You, Not For You",
    description:
      "An open-source platform where AI agents collaborate with you continuously — like teammates, not tools. Persistent workspaces, inter-agent messaging, shared filesystems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#252525" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  name: "Shire — Agents That Work With You, Not For You | Open Source",
                  description:
                    "An open-source platform where AI agents collaborate with you continuously — like teammates, not tools. Persistent workspaces, inter-agent messaging, shared filesystems.",
                  url: "https://www.agents-shire.sh/",
                  isPartOf: {
                    "@type": "WebSite",
                    name: "Shire",
                    url: "https://www.agents-shire.sh/",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Shire",
                  description:
                    "Open-source platform where AI agents work with you, not for you. Persistent workspaces with filesystem, inter-agent messaging, shared drive, and real-time monitoring.",
                  url: "https://www.agents-shire.sh/",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Linux, macOS, Windows",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  author: {
                    "@type": "Organization",
                    name: "Shire Contributors",
                    url: "https://github.com/victor36max/shire",
                  },
                  codeRepository:
                    "https://github.com/victor36max/shire",
                  license:
                    "https://github.com/victor36max/shire/blob/main/LICENSE",
                  programmingLanguage: [
                    "TypeScript",
                    "React",
                  ],
                  featureList: [
                    "Persistent dedicated workspaces for each agent",
                    "Autonomous inter-agent messaging system",
                    "Shared filesystem across agents",
                    "Community agent catalog with pre-built templates",
                    "Real-time monitoring dashboard with browser terminal",
                    "Sleep and resume with full state preservation",
                    "Scheduled task automation (one-time or recurring)",
                    "Supports Claude Code, OpenCode, Pi Agent and more",
                    "Install globally via npm, run on macOS, Linux, or Windows",
                  ],
                },
                {
                  "@type": "Organization",
                  name: "Shire",
                  url: "https://www.agents-shire.sh/",
                  sameAs: [
                    "https://github.com/victor36max/shire",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
