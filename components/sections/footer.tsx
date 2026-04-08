import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Logo & tagline */}
        <div>
          <span className="flex items-center gap-2 text-xl font-semibold">
            <Logo className="h-8 w-auto" variant="light" />
            Shire
          </span>
          <p className="mt-1 text-sm opacity-60">
            Your team. Always on.
          </p>
        </div>

        {/* Links */}
        <nav className="mt-6 flex gap-6" aria-label="Footer navigation">
          <a
            href="https://github.com/victor36max/shire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline-offset-4 opacity-70 transition-opacity hover:opacity-100 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://github.com/victor36max/shire#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline-offset-4 opacity-70 transition-opacity hover:opacity-100 hover:underline"
          >
            Docs
          </a>
          <a
            href="https://github.com/victor36max/shire/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline-offset-4 opacity-70 transition-opacity hover:opacity-100 hover:underline"
          >
            License
          </a>
        </nav>

        {/* Copyright */}
        <p className="mt-8 text-xs opacity-50">
          &copy; 2026 Shire. Licensed under MIT.
        </p>
        <p className="mt-2 text-xs opacity-40">
          Shire is an open-source persistent workspace platform for AI agents.
        </p>
      </div>
    </footer>
  );
}
