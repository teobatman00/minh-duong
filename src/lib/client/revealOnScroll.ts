/**
 * IntersectionObserver helper for `.md-reveal` / `.md-reveal--in` (see custom.css).
 * Used by plugins/site-motion — no React dependency.
 */

export type RevealOnScrollOptions = {
  selector: string;
  /** Skip marking targets already in (or near) the viewport to avoid FOUC. */
  skipInView?: boolean;
  rootMargin?: string;
  threshold?: number;
  maxStagger?: number;
  staggerMs?: number;
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isDescendantOfMatch(el: Element, matches: Element[]): boolean {
  return matches.some((other) => other !== el && other.contains(el));
}

export function collectRevealTargets(
  root: ParentNode,
  selector: string
): Element[] {
  const matches = Array.from(root.querySelectorAll(selector));
  return matches.filter((el) => !isDescendantOfMatch(el, matches));
}

export function createRevealOnScroll(
  options: RevealOnScrollOptions
): IntersectionObserver | null {
  if (typeof window === "undefined" || prefersReducedMotion()) {
    return null;
  }

  const {
    selector,
    skipInView = true,
    rootMargin = "0px 0px -8% 0px",
    threshold = 0.12,
    maxStagger = 5,
    staggerMs = 45,
  } = options;

  const targets = collectRevealTargets(document, selector);
  if (targets.length === 0) {
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        entry.target.classList.add("md-reveal--in");
        observer.unobserve(entry.target);
      }
    },
    { root: null, rootMargin, threshold }
  );

  let staggerIndex = 0;

  for (const el of targets) {
    if (skipInView) {
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 40;
      if (inView) {
        continue;
      }
    }

    el.classList.add("md-reveal");
    (el as HTMLElement).style.setProperty(
      "--md-reveal-delay",
      `${Math.min(staggerIndex, maxStagger) * staggerMs}ms`
    );
    staggerIndex += 1;
    observer.observe(el);
  }

  return observer;
}
