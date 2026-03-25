import {
  Home,
  MessageSquare,
  FolderOpen,
  BookOpen,
  Clock,
  Server,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollFadeUp } from "@/components/scroll-animation";

const features = [
  {
    icon: Home,
    title: "Persistent Workspaces",
    description:
      "Each agent gets its own filesystem, inbox/outbox, scripts, and documents. Backed by VMs with up to 100GB NVMe storage.",
  },
  {
    icon: MessageSquare,
    title: "Inter-Agent Communication",
    description:
      "File-based mailbox system. Agents discover peers and collaborate through structured messaging.",
  },
  {
    icon: FolderOpen,
    title: "Shared Drive",
    description:
      "A communal filesystem synced across all agents for collaborative work on shared artifacts.",
  },
  {
    icon: BookOpen,
    title: "Agent Catalog",
    description:
      "Browse and deploy from a library of pre-built agent templates. Get started in seconds without writing configs from scratch.",
  },
  {
    icon: Clock,
    title: "Scheduled Tasks",
    description:
      "Automate agent work with one-time or recurring scheduled messages. Set custom intervals and let agents run on autopilot.",
  },
  {
    icon: Server,
    title: "Flexible Deployment",
    description:
      "Deploy anywhere: Fly.io Sprites (Firecracker microVMs), any Linux VPS via SSH, or your local machine for development.",
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
              Everything agents need to thrive
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
              <Card className="p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm lg:p-8">
                <feature.icon className="mb-4 h-6 w-6 text-muted-foreground" />
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
