import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-7 w-7" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width={28}
      height={28}
      aria-hidden="true"
      className={`${className} dark:invert`}
      unoptimized
    />
  );
}
