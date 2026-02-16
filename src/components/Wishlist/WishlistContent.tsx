"use client";

import { WishlistProduct } from "@/Interfaces/wishlistInterfaces";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCartIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { removeFromWishlistAction } from "@/actions/wishlist.actions";
import { addToCartAction } from "@/actions/addToCart.action";
import { dispatchWishlistUpdate } from "@/lib/wishlistEvents";
import { dispatchCartUpdate } from "@/lib/cartEvents";
import { useRouter } from "next/navigation";

interface WishlistContentProps {
  initialItems: WishlistProduct[];
  token: string;
}

export default function WishlistContent({
  initialItems,
  token,
}: WishlistContentProps) {
  const [items, setItems] = useState(initialItems || []);
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  async function removeItem(productId: string) {
    setLoading(productId);
    const result = await removeFromWishlistAction(productId);

    if (result.success) {
      setItems((items || []).filter((item) => item._id !== productId));
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
      toast.error(result.error || "Failed to remove item");
    }
    setLoading(null);
  }

  async function addToCart(productId: string) {
    setLoading(productId);
    const result = await addToCartAction(productId);

    if (result) {
      dispatchCartUpdate();
      toast.success("Added to cart", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
    } else {
      router.push("/login");
    }
    setLoading(null);
  }

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96 text-center">
          <CardContent className="p-8">
            <div className="flex justify-center mb-4">
              <Heart className="w-24 h-24 text-gray-800" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-6">
              Add items you love to your wishlist!
            </p>
            <Button onClick={() => (window.location.href = "/products")}>
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {items?.length || 0} {(items?.length || 0) === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items?.map((item) => (
            <Card
              key={item._id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={item.imageCover}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => removeItem(item._id)}
                  disabled={loading === item._id}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.brand.name}</p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">
                    {item.ratingsAverage.toFixed(1)}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({item.ratingsQuantity})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold text-xl text-blue-600">
                    {item.price} EGP
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => addToCart(item._id)}
                    disabled={loading === item._id}
                    className="flex-1"
                  >
                    <ShoppingCartIcon className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
