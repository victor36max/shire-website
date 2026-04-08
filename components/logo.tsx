import Image from "next/image";

interface LogoProps {
  className?: string;
  /** Use "auto" for theme-adaptive (navbar), "light" to force white (footer on dark bg) */
  variant?: "auto" | "light";
}

export function Logo({ className = "h-8 w-auto", variant = "auto" }: LogoProps) {
  const filterClass =
    variant === "light"
      ? "brightness-0 invert"
      : "dark:brightness-0 dark:invert";

  return (
    <Image
      src="/logo.svg"
      alt=""
      width={249}
      height={265}
      aria-hidden="true"
      className={`${className} ${filterClass}`}
      unoptimized
    />
  );
}
