import { useEffect, useRef, useCallback } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Lightweight scroll-reveal hook using Intersection Observer.
 * Attach the returned ref to a container, and all children with
 * `.scroll-reveal`, `.scroll-reveal-left`, `.scroll-reveal-right`,
 * or `.scroll-reveal-scale` classes will animate when scrolled into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const containerRef = useRef<T>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.removeAttribute("data-revealed");
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    const revealElements = container.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersection]);

  return containerRef;
}
