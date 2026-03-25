import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollFadeUp } from "@/components/scroll-animation";

const techBadges = [
  "Elixir",
  "Phoenix",
  "React",
  "Tailwind",
  "Firecracker",
  "Bun",
];

export function OpenSourceCta() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
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
          <p className="mt-4 text-lg text-muted-foreground">
            Shire is open-source and community-driven. We&apos;d love your
            help.
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
