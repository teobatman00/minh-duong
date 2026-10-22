import siteConfig from "@generated/docusaurus.config";
import {
  createRevealOnScroll,
  prefersReducedMotion,
} from "@site/src/lib/client/revealOnScroll";

/**
 * Soft page enter + below-fold reveal for non-Home routes.
 * Home keeps its own staggered hero motion — do not attach here.
 * Does not edit theme components; uses global CSS classes only.
 */

const REVEAL_SELECTOR = [
  "[data-md-reveal]",
  ".main-wrapper > header",
  ".main-wrapper > main",
  ".main-wrapper main > section",
  'article[itemprop="blogPost"]',
  ".theme-doc-markdown",
].join(",");

const PAGE_ENTER_SELECTOR = ".main-wrapper";

let observer: IntersectionObserver | null = null;

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "";
  }
  return pathname.replace(/\/+$/, "");
}

function isHomePath(pathname: string): boolean {
  const base = normalizePath(siteConfig.baseUrl || "/");
  const path = normalizePath(pathname);
  return path === base;
}

function disconnectObserver(): void {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

function setupReveal(): void {
  disconnectObserver();

  if (prefersReducedMotion() || isHomePath(window.location.pathname)) {
    return;
  }

  observer = createRevealOnScroll({ selector: REVEAL_SELECTOR });
}

function setupPageEnter(): void {
  if (prefersReducedMotion() || isHomePath(window.location.pathname)) {
    return;
  }

  const el = document.querySelector(PAGE_ENTER_SELECTOR);
  if (!el) {
    return;
  }

  el.classList.remove("md-page-enter");
  void (el as HTMLElement).offsetWidth;
  el.classList.add("md-page-enter");
}

function runMotion(): void {
  setupPageEnter();
  setupReveal();
}

export default (function () {
  if (typeof window === "undefined") {
    return null;
  }

  setTimeout(runMotion, 0);

  return {
    onRouteUpdate({ location, previousLocation }) {
      if (
        previousLocation &&
        location.pathname === previousLocation.pathname
      ) {
        return;
      }

      disconnectObserver();
      setTimeout(runMotion, 40);
    },
  };
})();
