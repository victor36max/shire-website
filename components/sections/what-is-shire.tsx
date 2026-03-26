import { ScrollFadeUp } from "@/components/scroll-animation";

export function WhatIsShire() {
  return (
    <section
      id="what-is-shire"
      className="scroll-mt-16 bg-secondary py-16 md:py-20 lg:py-24"
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
          {/* For You */}
          <ScrollFadeUp>
            <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
              <h3 className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                For You
              </h3>
              <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  Most AI agent tools follow the same pattern — you give an
                  instruction, an agent executes it, you get the output. The
                  agent disappears. Next time, you start from scratch.
                </p>
                <p>
                  It&apos;s powerful for one-off tasks. But it&apos;s not
                  collaboration — it&apos;s delegation.
                </p>
              </div>
            </div>
          </ScrollFadeUp>

          {/* With You */}
          <ScrollFadeUp delay={100}>
            <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
              <h3 className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                With You
              </h3>
              <div className="space-y-3 text-base text-foreground">
                <p>
                  Shire is different. Your agents persist between sessions. They
                  communicate with each other autonomously. They build on
                  yesterday&apos;s work.
                </p>
                <p>
                  You give feedback, iterate, adjust direction — like working
                  with a real team.
                </p>
                <p className="font-semibold">
                  Not a tool you use. A team you work with.
                </p>
              </div>
            </div>
          </ScrollFadeUp>
        </div>
      </div>
    </section>
  );
}
