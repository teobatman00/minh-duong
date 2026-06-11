import React, { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@site/src/lib/icons/registry";
import { isBookmarked, toggleBookmark } from "@site/integration/bookmarks";

export default function ButtonBookmark({ permalink }) {
  const [active, setActive] = useState(() => isBookmarked(permalink));

  return (
    <button
      type="button"
      title={active ? "Bỏ lưu bài viết" : "Lưu bài viết"}
      aria-label={active ? "Bỏ lưu bài viết" : "Lưu bài viết"}
      onClick={() => {
        toggleBookmark(permalink);
        setActive((prev) => !prev);
      }}
      className={clsx(
        "tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-border tw-transition-colors",
        active
          ? "tw-border-accent tw-bg-accent tw-text-accent-contrast"
          : "tw-border-gray-300 tw-text-gray-500 dark:tw-border-gray-700 dark:tw-text-gray-400 hover:tw-border-accent hover:tw-text-accent"
      )}
    >
      <FontAwesomeIcon icon={[active ? "fas" : "far", "bookmark"]} />
    </button>
  );
}
