// Custom event system for cart updates
export const CART_UPDATED_EVENT = "cart-updated";

export function dispatchCartUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
  }
}

export function onCartUpdate(callback: () => void) {
  if (typeof window !== "undefined") {
    window.addEventListener(CART_UPDATED_EVENT, callback);
    return () => window.removeEventListener(CART_UPDATED_EVENT, callback);
  }
  return () => {};
}
