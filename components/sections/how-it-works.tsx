import { ScrollFadeUp } from "@/components/scroll-animation";

const steps = [
  {
    number: "01",
    title: "Define",
    description:
      "Write a YAML recipe describing your agent: its name, model, prompt, and setup scripts.",
  },
  {
    number: "02",
    title: "Deploy",
    description:
      "Push to Shire. Each agent gets a Firecracker VM with its own filesystem and tools, ready in seconds.",
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Agents discover peers, exchange messages via mailboxes, and share files through the shared drive.",
  },
  {
    number: "04",
    title: "Sleep & Resume",
    description:
      "Idle agents auto-sleep preserving all state. They wake in ~300ms, right where they left off.",
  },
];

const yamlExample = `name: researcher
agent: claude
prompt: "Research market trends"
setup:
  - pip install requests`;

export function HowItWorks() {
  return (
    <section
      className="bg-secondary py-16 md:py-20 lg:py-24"
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

        {/* Desktop: horizontal grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-4">
          {steps.map((step, i) => (
            <ScrollFadeUp key={step.number} delay={i * 100}>
              <div className="relative">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-6 hidden h-px w-full translate-x-1/2 border-t border-dashed border-border md:block" />
                )}
                <span className="text-4xl font-bold text-border">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {/* YAML snippet under Define step */}
                {i === 0 && (
                  <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
                    <code>{yamlExample}</code>
                  </pre>
                )}
              </div>
            </ScrollFadeUp>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-8 border-l-2 border-dashed border-border pl-6 md:hidden">
          {steps.map((step, i) => (
            <ScrollFadeUp key={step.number} delay={i * 100}>
              <div>
                <span className="text-3xl font-bold text-border">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {i === 0 && (
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-background p-3 font-mono text-xs leading-relaxed text-foreground">
                    <code>{yamlExample}</code>
                  </pre>
                )}
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
