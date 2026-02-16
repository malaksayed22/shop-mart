"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { onCartUpdate } from "@/lib/cartEvents";

export default function CartBadge({ token }: { token: string }) {
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  const fetchCartCount = async () => {
    if (!token) {
      setCartCount(0);
      return;
    }

    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: { token },
          cache: "no-store",
        },
      );
      if (response.ok) {
        const data = await response.json();
        // Calculate total quantity by summing all item counts
        const totalQuantity =
          data.data?.products?.reduce(
            (sum: number, item: any) => sum + item.count,
            0,
          ) || 0;
        setCartCount(totalQuantity);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      setCartCount(0);
    }
  };

  // Fetch on mount and pathname change
  useEffect(() => {
    fetchCartCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, token]);

  // Listen to cart update events
  useEffect(() => {
    const cleanup = onCartUpdate(fetchCartCount);
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="size-6 text-inherit" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
