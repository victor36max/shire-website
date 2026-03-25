import React from "react";
import { BookOpen, Rocket, MessagesSquare, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollFadeUp } from "@/components/scroll-animation";

const steps = [
  {
    number: "01",
    title: "Choose",
    icon: BookOpen,
    description:
      "Browse the agent catalog and pick a pre-built template — or write your own YAML recipe from scratch.",
  },
  {
    number: "02",
    title: "Deploy",
    icon: Rocket,
    description:
      "Push to Shire. Each agent gets a VM with its own filesystem, tools, and network — ready in seconds.",
  },
  {
    number: "03",
    title: "Collaborate",
    icon: MessagesSquare,
    description:
      "Agents discover peers, exchange messages via mailboxes, and share files through the shared drive.",
  },
  {
    number: "04",
    title: "Sleep & Resume",
    icon: Zap,
    description:
      "Idle agents auto-sleep preserving all state. They wake in ~300ms, right where they left off.",
  },
];

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-lg border border-border bg-secondary p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            agent-catalog
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-60" />
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-foreground">📊 researcher</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
              popular
            </span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-foreground">💻 frontend-dev</span>
            <span className="text-muted-foreground">by community</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-foreground">📝 content-writer</span>
            <span className="text-muted-foreground">by community</span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-lg border border-border bg-secondary p-4">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Each agent receives
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Compute</span>
            <span className="font-medium text-foreground">
              Up to 8 CPU / 16 GB RAM
            </span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Storage</span>
            <span className="font-medium text-foreground">100 GB NVMe</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Startup</span>
            <span className="font-medium text-foreground">&lt; 3 seconds</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Isolation</span>
            <span className="font-medium text-foreground">
              Firecracker microVM
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="rounded-lg border border-border bg-secondary p-4">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Agent mailbox
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">→</span>
            <div>
              <span className="text-muted-foreground">to:</span>{" "}
              <span className="text-foreground">researcher</span>
              <p className="text-muted-foreground">
                &quot;Summarize findings on Q3 trends&quot;
              </p>
            </div>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">←</span>
            <div>
              <span className="text-muted-foreground">from:</span>{" "}
              <span className="text-foreground">researcher</span>
              <p className="text-muted-foreground">
                &quot;Report saved to /shared/q3-trends.md&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-secondary p-4">
      <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        State preserved
      </div>
      <div className="space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-[8px] text-primary">
            ●
          </span>
          <span className="text-muted-foreground">
            Agent sleeping — 0 CPU, 0 RAM
          </span>
        </div>
        <div className="flex items-center justify-center py-1">
          <span className="text-muted-foreground">↓ ~300ms ↓</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/40 text-[8px] text-primary">
            ●
          </span>
          <span className="text-foreground">
            Agent awake — full state restored
          </span>
        </div>
        <div className="mt-1 h-px bg-border" />
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Files</span>
          <span className="text-foreground">✓ preserved</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Packages</span>
          <span className="text-foreground">✓ preserved</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Context</span>
          <span className="text-foreground">✓ preserved</span>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 bg-secondary py-16 md:py-20 lg:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeUp>
          <h2
            id="how-it-works-heading"
            className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:mb-16"
            style={{ letterSpacing: "-0.02em" }}
          >
            How it works
          </h2>
        </ScrollFadeUp>

        {/* Desktop flow indicator */}
        <ScrollFadeUp>
          <div className="mb-10 hidden items-center justify-center gap-3 md:flex">
            {steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {step.number}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px w-8 bg-border lg:w-12" />
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollFadeUp>

        {/* Card grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <ScrollFadeUp key={step.number} delay={i * 100}>
              <Card className="flex h-full flex-col p-6 lg:p-8">
                {/* Step badge */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.number}
                </span>

                {/* Icon + Title */}
                <div className="mt-4 flex items-center gap-2.5">
                  <step.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground lg:text-xl">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Visual element */}
                <div className="mt-auto pt-4">
                  <StepVisual index={i} />
                </div>
              </Card>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
