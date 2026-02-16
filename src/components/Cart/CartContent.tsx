"use client";

import { CartItem } from "@/Interfaces/cartInterfaces";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, X, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  updateCartQuantityAction,
  removeFromCartAction,
  clearCartAction,
  applyCouponAction,
} from "@/actions/cart.actions";
import { dispatchCartUpdate } from "@/lib/cartEvents";

interface CartContentProps {
  initialItems: CartItem[];
  numOfCartItems: number;
  totalCartPrice: number;
  totalPriceAfterDiscount?: number;
  appliedCoupon?: string;
  token: string;
}

export default function CartContent({
  initialItems,
  numOfCartItems,
  totalCartPrice,
  totalPriceAfterDiscount,
  appliedCoupon,
  token,
}: CartContentProps) {
  const [items, setItems] = useState(initialItems || []);
  const [total, setTotal] = useState(totalCartPrice);
  const [discountedTotal, setDiscountedTotal] = useState(
    totalPriceAfterDiscount,
  );
  const [coupon, setCoupon] = useState(appliedCoupon || "");
  const [couponInput, setCouponInput] = useState("");
  // Calculate total quantity from all items
  const [itemCount, setItemCount] = useState(
    (initialItems || []).reduce((sum, item) => sum + item.count, 0),
  );
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  async function updateQuantity(productId: string, count: number) {
    if (count < 1) return;

    setLoading(productId);
    const result = await updateCartQuantityAction(productId, count);

    if (result.success && result.data?.data?.products) {
      const newItems = result.data.data.products;
      setItems(newItems);
      setTotal(result.data.data.totalCartPrice || 0);
      setItemCount(
        newItems.reduce((sum: number, item: CartItem) => sum + item.count, 0),
      );
      dispatchCartUpdate();
    } else {
      toast.error(result.error || "Failed to update quantity");
    }
    setLoading(null);
  }

  async function removeItem(productId: string) {
    setLoading(productId);
    const result = await removeFromCartAction(productId);

    if (result.success && result.data?.data?.products) {
      const newItems = result.data.data.products;
      setItems(newItems);
      setTotal(result.data.data.totalCartPrice || 0);
      setItemCount(
        newItems.reduce((sum: number, item: CartItem) => sum + item.count, 0),
      );
      dispatchCartUpdate();
      toast.success("Item removed from cart", {
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

  async function clearCart() {
    setLoading("clear");
    const result = await clearCartAction();

    if (result.success) {
      setItems([]);
      setTotal(0);
      setItemCount(0);
      dispatchCartUpdate();
      toast.success("Cart cleared", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
    } else {
      toast.error(result.error || "Failed to clear cart");
    }
    setLoading(null);
  }

  async function applyCoupon() {
    if (!couponInput.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setLoading("coupon");
    const result = await applyCouponAction(couponInput.trim());

    if (result.success && result.data?.data) {
      const newItems = result.data.data.products || [];
      setItems(newItems);
      setTotal(result.data.data.totalCartPrice || 0);
      setDiscountedTotal(result.data.data.totalPriceAfterDiscount || 0);
      setCoupon(couponInput.trim());
      dispatchCartUpdate();
      toast.success("Coupon applied successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });
      setCouponInput("");
    } else {
      toast.error(result.error || "Failed to apply coupon");
    }
    setLoading(null);
  }

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96 text-center">
          <CardContent className="p-8">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started!</p>
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items?.map((item) => (
              <Card
                key={item._id}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded shrink-0 overflow-hidden">
                      <Image
                        src={item.product.imageCover}
                        alt={item.product.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {item.product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.product.brand.name} · {item.product.category.name}
                      </p>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateQuantity(item.product._id, item.count - 1)
                          }
                          disabled={
                            item.count <= 1 || loading === item.product._id
                          }
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">
                          {item.count}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateQuantity(item.product._id, item.count + 1)
                          }
                          disabled={loading === item.product._id}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <p className="font-bold text-xl text-blue-600">
                        {item.price} EGP
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.product._id)}
                        disabled={loading === item.product._id}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}
                      )
                    </span>
                    <span className="font-semibold text-black">
                      {total} EGP
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>

                  {discountedTotal && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span className="font-semibold">
                        -{(total - discountedTotal).toFixed(2)} EGP
                      </span>
                    </div>
                  )}

                  <div className="border-t-2 pt-4 mt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">
                        {discountedTotal ? discountedTotal : total} EGP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="mb-6 pb-6 border-b-2">
                  {coupon ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-green-700">
                        <Tag className="w-4 h-4" />
                        <span className="font-semibold">
                          Coupon Applied: {coupon}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Have a coupon code?
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          disabled={loading === "coupon"}
                          className="flex-1"
                        />
                        <Button
                          onClick={applyCoupon}
                          disabled={loading === "coupon" || !couponInput.trim()}
                          variant="outline"
                          className="shrink-0"
                        >
                          {loading === "coupon" ? "Applying..." : "Apply"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full h-12 text-lg"
                  size="lg"
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </Button>

                <Button
                  variant="outline"
                  className="w-full mt-3"
                  onClick={() => router.push("/products")}
                >
                  Continue Shopping
                </Button>

                <Button
                  variant="outline"
                  onClick={clearCart}
                  disabled={loading === "clear"}
                  className="w-full mt-3 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
