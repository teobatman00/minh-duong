import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@site/src/lib/icons/registry";

const SHOW_AFTER_PX = 300;

export default function BackToTopButton(): JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={clsx(
        "tw-fixed tw-bottom-6 tw-right-6 tw-z-[1500] tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center",
        "tw-rounded-full tw-bg-accent tw-text-accent-contrast tw-shadow-md",
        "tw-transition-opacity tw-duration-300 hover:tw-bg-accent-dark",
        visible ? "tw-opacity-100" : "tw-opacity-0 tw-pointer-events-none"
      )}
    >
      <FontAwesomeIcon icon={["fas", "arrow-up"]} />
    </button>
  );
}
