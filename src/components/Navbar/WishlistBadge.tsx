"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { onWishlistUpdate } from "@/lib/wishlistEvents";

export default function WishlistBadge({ token }: { token: string }) {
  const [wishlistCount, setWishlistCount] = useState(0);
  const pathname = usePathname();

  const fetchWishlistCount = async () => {
    if (!token) {
      setWishlistCount(0);
      return;
    }

    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: { token },
          cache: "no-store",
        },
      );
      if (response.ok) {
        const data = await response.json();
        setWishlistCount(data.count || 0);
      } else {
        setWishlistCount(0);
      }
    } catch (error) {
      setWishlistCount(0);
    }
  };

  // Fetch on mount and pathname change
  useEffect(() => {
    fetchWishlistCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, token]);

  // Listen to wishlist update events
  useEffect(() => {
    const cleanup = onWishlistUpdate(fetchWishlistCount);
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link href="/wishlist" className="relative">
      <Heart className="size-6 text-inherit" />
      {wishlistCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {wishlistCount}
        </span>
      )}
    </Link>
  );
}
