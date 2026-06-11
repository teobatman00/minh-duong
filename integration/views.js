import { firestore } from "@site/integration/firebase";
import { getDoc, setDoc, doc, increment, updateDoc } from "firebase/firestore";

const collectionName = "views";

export function initializeViewCountFromDB(slug, setViewCount) {
  getDoc(doc(firestore, collectionName, slug))
    .then((res) => {
      if (res.exists()) {
        setViewCount(res.data().count ?? 0);
      } else {
        setDoc(doc(firestore, collectionName, slug), { count: 0 });
        setViewCount(0);
      }
    })
    .catch((err) => {
      console.log("[initializeViewCountFromDB] error:", err);
    });
}

export function incrementViewCountDB(slug) {
  const docRef = doc(firestore, collectionName, slug);
  updateDoc(docRef, { count: increment(1) }).catch(() => {
    // Document may not exist yet.
    setDoc(docRef, { count: 1 }).catch((err) => {
      console.log("[incrementViewCountDB] error:", err);
    });
  });
}

const localStorageKey = (slug) => "@minhduong-blog-view-" + slug;

export function hasViewedThisSession(slug) {
  return sessionStorage.getItem(localStorageKey(slug)) === "true";
}

export function markViewedThisSession(slug) {
  sessionStorage.setItem(localStorageKey(slug), "true");
}
