import React, { useEffect, useState } from "react";
import {
  initializeReactionCountsFromDB,
  zeroReactions,
} from "@site/integration/reactions";
import ButtonReaction from "@site/components/ButtonReaction";

export default function BlogReactions({ reactions, slug }) {
    const [reactionCounts, setReactionCounts] = useState(
      zeroReactions(Object.keys(reactions))
    );
  
    useEffect(() => {
      initializeReactionCountsFromDB(slug, reactionCounts, setReactionCounts);
    }, []);
  
    return (
      <footer className="row">
        <div className="col">
          <b>{Object.keys(reactions).length > 0 ? "Reactions:  " : ""}</b>
          {Object.keys(reactions).map((char) => (
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
      </footer>
    );
  }