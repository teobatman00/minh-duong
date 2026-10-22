import { useEffect, useRef, useState, type MutableRefObject } from "react";

type UseInViewOptions = {
  /** Extra margin around the root so work can start before the element is fully visible. */
  rootMargin?: string;
  /** Once true, stays true and the observer disconnects. */
  once?: boolean;
};

/**
 * Observe when an element enters (near) the viewport.
 * Safe for SSR: returns inView=false until the client observes intersection.
 */
export default function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): { ref: MutableRefObject<T | null>; inView: boolean } {
  const { rootMargin = "200px 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && inView)) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }
        setInView(true);
        if (once) {
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, once, rootMargin]);

  return { ref, inView };
}
