"use client";

import Image from "next/image";
import { BookOpen, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

export function Hero() {
  return (
    <section
      className="py-20 md:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      {/* Text content — narrow container */}
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-heading"
          className="animate-fade-up text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          style={{ letterSpacing: "-0.025em" }}
        >
          Agents that work with you,
          <br className="hidden sm:inline" /> not for you{" "}
          <span role="img" aria-label="leaf">
            🌿
          </span>
        </h1>

        <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:leading-relaxed">
          Most AI tools run one‑off tasks. Shire gives you a team of persistent
          AI agents you actually work alongside — for coding, content, ops, or
          whatever your team is building together. They persist, they
          communicate, they pick up where they left off — and you can self‑host
          it today from GitHub.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/victor36max/shire"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <GitHubIcon className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </a>
          <a
            href="https://github.com/victor36max/shire#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <BookOpen className="mr-2 h-5 w-5" />
              Read the Docs
            </Button>
          </a>
        </div>
      </div>

      {/* Product screenshot with lightbox */}
      <div className="animate-fade-up-delay-3 mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="group relative w-full cursor-zoom-in overflow-hidden rounded-xl border border-border shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Expand screenshot"
            >
              <Image
                src="/dashboard-screenshot.png"
                alt="Shire dashboard showing multiple AI agents collaborating — a product manager coordinates reviews from UI designer, SEO specialist, and frontend developer agents"
                width={1278}
                height={839}
                unoptimized
                priority
                className="w-full h-auto"
              />
              {/* Mobile hint */}
              <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-foreground/70 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm transition-opacity group-hover:opacity-80 lg:hidden">
                <ZoomIn className="h-3 w-3" />
                Tap to expand
              </span>
            </button>
          </DialogTrigger>

          <DialogContent
            className="max-h-[100dvh] max-w-[100vw] gap-0 border-none bg-transparent p-0 shadow-none lg:max-w-6xl lg:p-6 [&>button]:hidden"
          >
            <DialogTitle className="sr-only">
              Shire dashboard screenshot
            </DialogTitle>

            {/* Custom close button */}
            <DialogClose asChild>
              <button
                className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/70 text-background backdrop-blur-sm transition-opacity hover:opacity-80 lg:right-0 lg:top-0 lg:-translate-y-full lg:-mt-2"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>

            {/* Expanded image */}
            <div className="overflow-auto lg:overflow-hidden lg:rounded-xl lg:border lg:border-border">
              <Image
                src="/dashboard-screenshot.png"
                alt="Shire dashboard showing multiple AI agents collaborating"
                width={1278}
                height={839}
                unoptimized
                className="h-auto w-full min-w-[640px] lg:min-w-0"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
