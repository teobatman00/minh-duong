import clsx from "clsx";
import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./styles.module.css";

export type RevealProps = {
  children: ReactNode;
  /** Extra delay before the reveal transition starts (ms). */
  delay?: number;
  className?: string;
  as?: React.ElementType;
  /** IntersectionObserver threshold (0..1). */
  threshold?: number;
  /** IntersectionObserver rootMargin. */
  rootMargin?: string;
  style?: CSSProperties;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Reveal-on-scroll wrapper.
 *
 * - SSR-safe: the server markup is fully visible; the hidden initial state is
 *   applied only after mount (via the `ready` class), so content is never
 *   stuck hidden if JS fails or is disabled.
 * - Uses IntersectionObserver; when it is unavailable (or the user prefers
 *   reduced motion) the element is shown immediately with no animation.
 * - Reveals once, then stops observing.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Component = "div",
  threshold = 0.15,
  rootMargin = "0px 0px -6% 0px",
  style,
}: Readonly<RevealProps>): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return undefined;
    }

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (typeof IntersectionObserver === "undefined" || reduceMotion) {
      setReady(true);
      setVisible(true);
      return undefined;
    }

    setReady(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const mergedStyle: CSSProperties | undefined =
    delay > 0
      ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties)
      : style;

  return (
    <Component
      ref={ref}
      className={clsx(
        styles.reveal,
        ready && styles.ready,
        visible && styles.visible,
        className
      )}
      style={mergedStyle}
    >
      {children}
    </Component>
  );
}
