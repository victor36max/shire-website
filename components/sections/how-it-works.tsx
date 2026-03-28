import React from "react";
import { Users, Rocket, MessagesSquare, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollFadeUp } from "@/components/scroll-animation";

interface Step {
  number: string;
  title: string;
  icon: typeof Rocket;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Install",
    icon: Rocket,
    description:
      "Run npm install -g agents-shire and start with a single command. Deploy on any Linux VPS or run locally. Ready in minutes.",
  },
  {
    number: "02",
    title: "Build Your Team",
    icon: Users,
    description:
      "Pick agents from the community catalog or create your own. Define roles, give them context — assemble the team you want to work with.",
  },
  {
    number: "03",
    title: "Collaborate",
    icon: MessagesSquare,
    description:
      "Work alongside your agents — give feedback, adjust direction. Agents talk to each other autonomously, sharing files and coordinating without you routing every message.",
  },
  {
    number: "04",
    title: "Sleep & Resume",
    icon: Zap,
    description:
      "When you're done for the day, agents sleep preserving all state. Come back tomorrow — they wake in ~300ms, right where you left off. No context lost.",
  },
];

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-lg border border-border bg-secondary p-4">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Quick start
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> npm install -g agents-shire
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> shire
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Server running on</span>
            <span className="font-medium text-foreground">localhost:8080</span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
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
                {/* Icon + Title */}
                <div className="flex items-center gap-2.5">
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
