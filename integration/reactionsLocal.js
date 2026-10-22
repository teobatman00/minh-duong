/** Local-only reaction helpers (no Firebase). Safe to import on first paint. */

export function zeroReactions(reactions) {
  const objReactions = {};
  reactions.forEach((r) => (objReactions[r] = 0));
  return objReactions;
}

const localStorageKey = (slug) => `@ovisly-blog-reactions-${slug}`;

export function getReactionStateLocal(slug, reaction) {
  const key = localStorageKey(slug);
  const item = localStorage.getItem(key);
  if (item === null) {
    const itemObj = {};
    itemObj[reaction] = false;
    localStorage.setItem(key, JSON.stringify(itemObj));
    return false;
  }
  const itemObj = JSON.parse(item);
  if (Object.keys(itemObj).includes(reaction)) {
    return itemObj[reaction];
  }
  itemObj[reaction] = false;
  localStorage.setItem(key, JSON.stringify(itemObj));
  return false;
}

export function setReactionStateLocal(slug, reaction, value) {
  const key = localStorageKey(slug);
  const item = localStorage.getItem(key);
  const itemObj = item === null ? {} : JSON.parse(item);
  itemObj[reaction] = value;
  localStorage.setItem(key, JSON.stringify(itemObj));
}
