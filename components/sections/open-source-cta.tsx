import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollFadeUp } from "@/components/scroll-animation";

const techBadges = [
  "Bun",
  "Hono",
  "React 19",
  "Tailwind 4",
  "SQLite",
  "TypeScript",
];

export function OpenSourceCta() {
  return (
    <section
      id="open-source"
      className="scroll-mt-16 py-16 md:py-20 lg:py-24"
      aria-labelledby="open-source-heading"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollFadeUp>
          <h2
            id="open-source-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Built in the open
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Agent infrastructure should be transparent, auditable, and
            community-owned. Not locked to one runtime. Not locked to one platform.
            Your agents, your workspace, your rules.
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/victor36max/shire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <Star className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Licensed under MIT — free to use, modify, and distribute.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
