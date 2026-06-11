import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@site/src/lib/icons/registry";
import {
  initializeViewCountFromDB,
  incrementViewCountDB,
  hasViewedThisSession,
  markViewedThisSession,
} from "@site/integration/views";

export default function ViewCounter({ slug }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    initializeViewCountFromDB(slug, (dbCount) => {
      if (hasViewedThisSession(slug)) {
        setCount(dbCount);
      } else {
        incrementViewCountDB(slug);
        markViewedThisSession(slug);
        setCount(dbCount + 1);
      }
    });
  }, [slug]);

  if (count === null) {
    return null;
  }

  return (
    <span className="tw-inline-flex tw-items-center tw-gap-1">
      <FontAwesomeIcon icon={["fas", "eye"]} />
      {count}
    </span>
  );
}
