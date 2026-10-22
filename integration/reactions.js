import { firestore } from "@site/integration/firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";

export {
  zeroReactions,
  getReactionStateLocal,
  setReactionStateLocal,
} from "@site/integration/reactionsLocal";

const collectionName = "reactions";

export function initializeReactionCountsFromDB(
  slug,
  reactionCounts,
  setReactionCounts
) {
  getDoc(doc(firestore, collectionName, slug))
    .then((res) => {
      if (res.exists()) {
        const dataDB = res.data();
        Object.keys(reactionCounts).forEach((r) => {
          if (!Object.keys(dataDB).includes(r)) {
            dataDB[r] = 0;
          }
        });
        setReactionCounts(dataDB);
      } else {
        updateReactionsDB(slug, reactionCounts);
      }
    })
    .catch((err) => {
      console.log("[initializeReactionCountsFromDB] error:", err);
    });
}

export function updateReactionsDB(slug, reactionCounts) {
  const newDocRef = doc(firestore, collectionName, slug);
  setDoc(newDocRef, reactionCounts).catch((err) => {
    console.log(err);
  });
}
