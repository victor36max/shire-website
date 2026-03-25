import { ScrollFadeUp } from "@/components/scroll-animation";

export function WhatIsShire() {
  return (
    <section
      className="bg-secondary py-16 md:py-20 lg:py-24"
      aria-labelledby="what-is-shire-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeUp>
          <h2
            id="what-is-shire-heading"
            className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:mb-16"
            style={{ letterSpacing: "-0.02em" }}
          >
            What is Shire?
          </h2>
        </ScrollFadeUp>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* The Problem */}
          <ScrollFadeUp>
            <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The Problem
              </span>
              <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  Most agent platforms treat agents as stateless functions —
                  spin up, execute, tear down. No persistent memory, no
                  workspace, no way for agents to collaborate.
                </p>
                <p>
                  Every run starts from scratch. Context is lost. Files
                  disappear. Agents can&apos;t build on previous work or
                  coordinate with peers.
                </p>
              </div>
            </div>
          </ScrollFadeUp>

          {/* The Shire Way */}
          <ScrollFadeUp delay={100}>
            <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The Shire Way
              </span>
              <div className="space-y-3 text-base text-foreground">
                <p>
                  Shire gives each agent a persistent cloud workspace: a
                  filesystem, a mailbox, shared storage, and real compute.
                  Agents don&apos;t just run — they live, collaborate, and
                  resume where they left off.
                </p>
                <p className="font-semibold">
                  Agents don&apos;t just execute. They inhabit.
                </p>
              </div>
            </div>
          </ScrollFadeUp>
        </div>
      </div>
    </section>
  );
}
