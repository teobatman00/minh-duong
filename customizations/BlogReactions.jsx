import React, { useEffect, useState } from "react";
import { zeroReactions } from "@site/integration/reactionsLocal";
import ButtonReaction from "@site/components/ButtonReaction";
import styles from "./BlogReactions.module.css";
import useInView from "@site/src/lib/hooks/useInView";

export default function BlogReactions({ reactions, slug }) {
  const reactionKeys = Object.keys(reactions);
  const [reactionCounts, setReactionCounts] = useState(() =>
    zeroReactions(reactionKeys)
  );
  const { ref, inView } = useInView({ rootMargin: "180px 0px" });

  useEffect(() => {
    if (!inView || reactionKeys.length === 0) {
      return;
    }

    let cancelled = false;

    // Defer Firebase/Firestore until the reactions UI is near the viewport.
    import("@site/integration/reactions").then(
      ({ initializeReactionCountsFromDB }) => {
        if (cancelled) {
          return;
        }
        initializeReactionCountsFromDB(
          slug,
          reactionCounts,
          setReactionCounts
        );
      }
    );

    return () => {
      cancelled = true;
    };
    // Fetch once when the footer enters view (placeholder zeros are intentional).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, slug]);

  if (reactionKeys.length === 0) {
    return null;
  }

  return (
    <div className={styles.root} aria-label="Reactions" ref={ref}>
      <span className={styles.label}>Reactions</span>
      <div className={styles.list}>
        {reactionKeys.map((char) => (
          <ButtonReaction
            key={char}
            slug={slug}
            reaction={char}
            title={reactions[char]}
            reactionCounts={reactionCounts}
            setReactionCounts={setReactionCounts}
          />
        ))}
      </div>
    </div>
  );
}
