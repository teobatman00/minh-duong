import * as React from "react";
import {
  getReactionStateLocal,
  setReactionStateLocal,
  updateReactionsDB,
} from "@site/integration/reactions";
import styles from "./styles.module.css";

export default function ButtonReaction({
  slug,
  title,
  reaction,
  reactionCounts,
  setReactionCounts,
}) {
  const isActive = getReactionStateLocal(slug, reaction);

  return (
    <button
      title={title}
      className={isActive ? styles.activeButton : styles.inactiveButton}
      onClick={() => {
        const newReactions = { ...reactionCounts };
        if (isActive) {
          newReactions[reaction] = newReactions[reaction] - 1;
          setReactionStateLocal(slug, reaction, false);
        } else {
          newReactions[reaction] = newReactions[reaction] + 1;
          setReactionStateLocal(slug, reaction, true);
        }
        setReactionCounts(() => newReactions);
        updateReactionsDB(slug, newReactions);
      }}
      type="button"
    >
      {`${reaction} ${reactionCounts[reaction]}`}
    </button>
  );
}