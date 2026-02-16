"use client";
import React, { useState, useEffect } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Heart, ShoppingCartIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { addToCartAction } from "@/actions/addToCart.action";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "@/actions/wishlist.actions";
import { useRouter } from "next/navigation";
import { dispatchCartUpdate } from "@/lib/cartEvents";
import { dispatchWishlistUpdate, onWishlistUpdate } from "@/lib/wishlistEvents";

export default function AddToCart({
  productId,
  initialWishlistState = false,
}: {
  productId: string;
  initialWishlistState?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(initialWishlistState);
  const router = useRouter();

  useEffect(() => {
    setInWishlist(initialWishlistState);
  }, [initialWishlistState]);

  useEffect(() => {
    // Fetch wishlist status on mount if not already set
    if (!initialWishlistState) {
      fetchWishlistStatus();
    }

    const cleanup = onWishlistUpdate(() => {
      // Refresh wishlist status when wishlist is updated
      fetchWishlistStatus();
    });
    return cleanup;
  }, [productId]);

  async function fetchWishlistStatus() {
    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: {
            token: localStorage.getItem("token") || "",
          },
          cache: "no-store",
        },
      );
      if (response.ok) {
        const data = await response.json();
        const isInList = data.data?.some((item: any) => item._id === productId);
        setInWishlist(isInList);
      }
    } catch (error) {
      // Silent fail
    }
  }

  async function addToCart(productId: string) {
    try {
      setLoading(true);

      const res = await addToCartAction(productId);
      if (res == null) {
        router.push("/login");
      } else {
        dispatchCartUpdate();
        toast.success("Product added successfully", {
          className: "text-center justify-center",
          icon: (
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              ✓
            </span>
          ),
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleWishlist() {
    try {
      setWishlistLoading(true);

      if (inWishlist) {
        const result = await removeFromWishlistAction(productId);
        if (result.success) {
          setInWishlist(false);
          dispatchWishlistUpdate();
          toast.success("Removed from wishlist", {
            className: "text-center justify-center",
            icon: (
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                ✓
              </span>
            ),
          });
        } else {
          if (result.error === "Not authenticated") {
            router.push("/login");
          } else {
            toast.error(result.error || "Failed to remove from wishlist");
          }
        }
      } else {
        const result = await addToWishlistAction(productId);
        if (result.success) {
          setInWishlist(true);
          dispatchWishlistUpdate();
          toast.success("Added to wishlist", {
            className: "text-center justify-center",
            icon: (
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                ✓
              </span>
            ),
          });
        } else {
          if (result.error === "Not authenticated") {
            router.push("/login");
          } else {
            toast.error(result.error || "Failed to add to wishlist");
          }
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setWishlistLoading(false);
    }
  }

  return (
    <>
      <CardFooter className="gap-2">
        <Button
          onClick={() => addToCart(productId)}
          className="cursor-pointer grow"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> Loading...
            </>
          ) : (
            <>
              <ShoppingCartIcon /> Add to cart
            </>
          )}
        </Button>
        <button
          onClick={toggleWishlist}
          disabled={wishlistLoading}
          className={`p-2 rounded-md transition-colors ${
            wishlistLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <Heart
            className={`w-6 h-6 transition-all ${
              inWishlist ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </CardFooter>
    </>
  );
}
