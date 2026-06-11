const STORAGE_KEY = "@minhduong-blog-bookmarks";

export function getBookmarks() {
  if (typeof window === "undefined") {
    return [];
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function isBookmarked(permalink) {
  return getBookmarks().includes(permalink);
}

export function toggleBookmark(permalink) {
  const current = getBookmarks();
  const next = current.includes(permalink)
    ? current.filter((p) => p !== permalink)
    : [...current, permalink];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
