import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";
import styles from "./styles.module.css";

const CONTENT_PAGE_PATTERN = /\/(docs|blog)\//;

export default function ReadingProgressBar(): JSX.Element | null {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const isContentPage = CONTENT_PAGE_PATTERN.test(location.pathname);

  useEffect(() => {
    if (!isContentPage) {
      setProgress(0);
      return undefined;
    }

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isContentPage, location.pathname]);

  if (!isContentPage) {
    return null;
  }

  return (
    <div className={styles.track}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
