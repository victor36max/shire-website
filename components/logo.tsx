"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  /** "auto" swaps dark/light based on theme; "light" always shows white variant */
  variant?: "auto" | "light";
}

export function Logo({ className = "h-8 w-auto", variant = "auto" }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before hydration, show dark version to avoid flash (matches SSR default)
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const showWhite = variant === "light" || isDark;

  return (
    <Image
      src={showWhite ? "/logo-head-white.svg" : "/logo-head-dark.svg"}
      alt=""
      width={176}
      height={130}
      aria-hidden="true"
      className={className}
      unoptimized
    />
  );
}
