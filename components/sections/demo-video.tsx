"use client";

import { useRef, useEffect } from "react";
import { ScrollFadeUp } from "@/components/scroll-animation";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) {
      video.pause();
      return;
    }

    // Play/pause based on viewport visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo"
      className="scroll-mt-16 bg-secondary py-16 md:py-20 lg:py-24"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ScrollFadeUp>
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
            <h2
              id="demo-heading"
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              See it in action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A team of agents communicate and collaborate in real time —
              no orchestrator needed.
            </p>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="overflow-hidden rounded-lg border border-border shadow-lg md:rounded-xl">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Demo of a team of AI agents communicating and collaborating in Shire"
              className="h-auto w-full"
            >
              <source src="/demo-web.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile fullscreen hint */}
          <p className="mt-3 text-center text-xs text-muted-foreground md:hidden">
            Tap the video for controls · use fullscreen for the best view
          </p>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
