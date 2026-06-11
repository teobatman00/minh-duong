import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ReadingProgressBar from "@site/src/components/ReadingProgressBar";
import BackToTopButton from "@site/src/components/BackToTopButton";

// Global wrapper rendered around every page. Used to mount site-wide UI
// (reading progress bar, back-to-top button) without touching every layout.
export default function Root({ children }) {
  return (
    <>
      {children}
      <BrowserOnly>{() => <ReadingProgressBar />}</BrowserOnly>
      <BrowserOnly>{() => <BackToTopButton />}</BrowserOnly>
    </>
  );
}
