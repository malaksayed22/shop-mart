// Custom event system for wishlist updates
export const WISHLIST_UPDATED_EVENT = "wishlist-updated";

export function dispatchWishlistUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(WISHLIST_UPDATED_EVENT));
  }
}

export function onWishlistUpdate(callback: () => void) {
  if (typeof window !== "undefined") {
    window.addEventListener(WISHLIST_UPDATED_EVENT, callback);
    return () => window.removeEventListener(WISHLIST_UPDATED_EVENT, callback);
  }
  return () => {};
}
