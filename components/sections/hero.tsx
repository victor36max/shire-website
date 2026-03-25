import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      className="py-20 md:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-heading"
          className="animate-fade-up text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          style={{ letterSpacing: "-0.025em" }}
        >
          Persistent Cloud Workspaces
          <br className="hidden sm:inline" /> for AI Agents{" "}
          <span role="img" aria-label="leaf">
            🌿
          </span>
        </h1>

        <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:leading-relaxed">
          An open-source platform that gives every AI agent a persistent home
          — with filesystem, tools, and a mailbox — running on real cloud
          infrastructure.
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
    </section>
  );
}
