import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://www.agents-shire.sh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shire — Work with AI Agents, Not Just Use Them | Open Source",
  description:
    "Most AI tools let you assign a task and walk away. Shire gives you a team of AI agents you work alongside — continuously, like colleagues. Open-source persistent workspaces with filesystem, inter-agent messaging, and real infrastructure.",
  keywords: [
    "AI agent platform",
    "persistent AI agent workspace",
    "open source AI agents",
    "AI agent infrastructure",
    "multi-agent collaboration",
    "AI agent orchestration",
    "AI agent cloud workspace",
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
    title: "Shire — Work with AI Agents, Not Just Use Them | Open Source",
    description:
      "Most AI tools let you assign a task and walk away. Shire gives you a team of AI agents you work alongside — continuously, like colleagues. Open source, persistent workspaces, real infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shire — Work with AI agents, not just use them. Open-source persistent workspaces with real infrastructure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shire — Work with AI Agents, Not Just Use Them | Open Source",
    description:
      "Most AI tools let you assign a task and walk away. Shire gives you a team of AI agents you work alongside — continuously, like colleagues. Open source.",
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
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#252525" />
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
                  name: "Shire — Work with AI Agents, Not Just Use Them | Open Source",
                  description:
                    "Most AI tools let you assign a task and walk away. Shire gives you a team of AI agents you work alongside — continuously, like colleagues.",
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
                    "Open-source platform that provides persistent cloud workspaces for AI agents with filesystem, inter-agent messaging, shared drive, and real-time monitoring.",
                  url: "https://www.agents-shire.sh/",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Linux",
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
                    "Elixir",
                    "TypeScript",
                    "React",
                  ],
                  featureList: [
                    "Persistent agent workspaces with up to 100GB NVMe storage",
                    "Inter-agent file-based messaging system",
                    "Shared filesystem across agents",
                    "Agent catalog with pre-built templates",
                    "Real-time monitoring dashboard with browser terminal",
                    "Sub-second sleep and resume (~300ms)",
                    "Scheduled task automation (one-time or recurring)",
                    "Flexible deployment: Fly.io Sprites, SSH VPS, or local",
                    "Interactive terminal access to agent VMs",
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
