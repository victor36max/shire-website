import type { ReactNode } from "react";
import {
  ShieldCheck,
  Puzzle,
  MessageSquare,
  BookOpen,
  FolderOpen,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollFadeUp } from "@/components/scroll-animation";

interface Feature {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Secure Cloud Sandboxes",
    description: (
      <>
        Each agent runs in an isolated cloud VM —{" "}
        <a
          href="https://sprites.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 decoration-1 hover:text-foreground transition-colors"
        >
          Fly.io Sprites
        </a>
        , any Linux VPS via SSH, or local for development. Agents pick up
        exactly where they left off.
      </>
    ),
  },
  {
    icon: Puzzle,
    title: "Works With Any Model",
    description:
      "Not locked to one AI provider. Supports Claude Code, Pi Agent, and more coming soon. Shire is the infrastructure layer — bring whatever model fits your workflow.",
  },
  {
    icon: MessageSquare,
    title: "Autonomous Agent Communication",
    description:
      "Agents discover peers and collaborate on their own — no orchestrator required. Direct messaging, shared context, real teamwork between agents.",
  },
  {
    icon: BookOpen,
    title: "Agent Catalog",
    description: (
      <>
        Browse and deploy from a community-maintained library of pre-built
        agents. Powered by{" "}
        <a
          href="https://github.com/msitarzewski/agency-agents"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 decoration-1 hover:text-foreground transition-colors"
        >
          agency-agents
        </a>
        . Get a capable team running in seconds.
      </>
    ),
  },
  {
    icon: FolderOpen,
    title: "Shared Drive",
    description:
      "A communal filesystem synced across all agents for collaborative work on shared artifacts.",
  },
  {
    icon: Clock,
    title: "Scheduled Tasks",
    description:
      "Automate agent work with one-time or recurring scheduled messages. Set custom intervals and let agents run on autopilot.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-16 py-16 md:py-20 lg:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeUp>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <h2
              id="features-heading"
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Everything your team needs to thrive
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Persistent workspaces, real infrastructure, seamless
              collaboration.
            </p>
          </div>
        </ScrollFadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollFadeUp key={feature.title} delay={i * 80}>
              <Card className="h-full p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm lg:p-8">
                <feature.icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
