"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Building,
  CreditCard,
  Wallet,
  ArrowLeft,
} from "lucide-react";
import {
  createCashOrderAction,
  createCheckoutSessionAction,
} from "@/actions/order.actions";
import { Data } from "@/Interfaces/cartInterfaces";

interface CheckoutContentProps {
  cart: Data;
}

export default function CheckoutContent({ cart }: CheckoutContentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const [shippingAddress, setShippingAddress] = useState({
    details: "",
    phone: "",
    city: "",
  });

  const handleCashOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !shippingAddress?.details?.trim() ||
      !shippingAddress?.phone?.trim() ||
      !shippingAddress?.city?.trim()
    ) {
      toast.error("Please fill in all shipping address fields");
      return;
    }

    setLoading("cash");
    const result = await createCashOrderAction(cart._id, shippingAddress);

    if (result.success) {
      toast.success(result.message || "Order created successfully!", {
        className: "text-center justify-center",
        icon: (
          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>
        ),
      });

      // Small delay to ensure order is fully processed
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Navigate to orders page and force refresh
      router.push("/orders");
      setTimeout(() => {
        router.refresh();
      }, 100);
    } else {
      toast.error(result.error || "Failed to create order", {
        duration: 5000,
        action: {
          label: "Retry",
          onClick: () => handleCashOrder(e),
        },
      });
    }
    setLoading(null);
  };

  const handleOnlinePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    // For online payment, we'll use default shipping address
    // and go directly to Stripe checkout in test mode
    const defaultShippingAddress = {
      details: shippingAddress?.details?.trim() || "Default Address",
      phone: shippingAddress?.phone?.trim() || "0000000000",
      city: shippingAddress?.city?.trim() || "Cairo",
    };

    setLoading("online");
    const result = await createCheckoutSessionAction(
      cart._id,
      defaultShippingAddress,
    );

    if (result.success && result.data?.session?.url) {
      toast.success("Redirecting to secure payment gateway...", {
        className: "text-center justify-center",
      });
      // Redirect to payment gateway
      window.location.href = result.data.session.url;
    } else {
      toast.error(result.error || "Failed to create checkout session");
      setLoading(null);
    }
  };

  const totalPrice = cart.totalPriceAfterDiscount || cart.totalCartPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/cart")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Button>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Method Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                onClick={() => setPaymentMethod("cash")}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  paymentMethod === "cash"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "cash"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "cash" && (
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <Wallet className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Cash on Delivery</p>
                    <p className="text-sm text-gray-600">
                      Pay when you receive your order
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod("online")}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  paymentMethod === "online"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "online"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "online" && (
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-semibold">Visa / Credit Card Payment</p>
                    <p className="text-sm text-gray-600">
                      Pay securely with Visa, Mastercard, or any credit/debit
                      card
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-semibold">
                        VISA
                      </span>
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded font-semibold">
                        MC
                      </span>
                      <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded font-semibold">
                        AMEX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address Form */}
          {paymentMethod === "cash" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCashOrder} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="details"
                      className="flex items-center gap-2"
                    >
                      <Building className="w-4 h-4" />
                      Street Address
                    </Label>
                    <Input
                      id="details"
                      type="text"
                      placeholder="Enter your full address"
                      value={shippingAddress?.details || ""}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          details: e.target.value,
                        })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      City
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Enter your city"
                      value={shippingAddress?.city || ""}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          city: e.target.value,
                        })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={shippingAddress?.phone || ""}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          phone: e.target.value,
                        })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading === "cash"}
                  >
                    {loading === "cash" ? "Processing..." : "Place Order"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "online" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  Visa / Credit Card Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 mb-2">
                      🔒 <strong>Secure Payment Gateway</strong>
                    </p>
                    <p className="text-sm text-blue-700">
                      You will be redirected to our secure payment partner to
                      complete your purchase. Your card details will be
                      encrypted and processed securely.
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center py-2">
                    <div className="px-3 py-2 bg-blue-600 text-white rounded text-xs font-bold">
                      VISA
                    </div>
                    <div className="px-3 py-2 bg-red-600 text-white rounded text-xs font-bold">
                      MASTERCARD
                    </div>
                    <div className="px-3 py-2 bg-gray-700 text-white rounded text-xs font-bold">
                      AMEX
                    </div>
                    <div className="px-3 py-2 bg-orange-500 text-white rounded text-xs font-bold">
                      DISCOVER
                    </div>
                  </div>

                  <Button
                    onClick={(e) => handleOnlinePayment(e as any)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={loading === "online"}
                  >
                    {loading === "online" ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Redirecting to Payment Gateway...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Proceed to Secure Payment
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By clicking "Proceed to Secure Payment", you agree to our
                    terms and will be redirected to complete your payment
                    securely.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Items ({cart.products?.length || 0}):
                  </p>
                  <div className="space-y-1.5">
                    {cart.products?.map((item) => (
                      <div
                        key={item._id}
                        className="flex justify-between text-xs"
                      >
                        <span className="text-gray-600 flex-1">
                          {item.product.title} x {item.count}
                        </span>
                        <span className="font-medium text-gray-700">
                          EGP {(item.price * item.count).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm border-t pt-2">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="font-medium">
                    EGP {cart.totalCartPrice.toFixed(2)}
                  </span>
                </div>
                {cart.totalPriceAfterDiscount && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">
                      -EGP{" "}
                      {(
                        cart.totalCartPrice - cart.totalPriceAfterDiscount
                      ).toFixed(2)}
                    </span>
                  </div>
                )}
                {cart.coupon && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <span className="px-2 py-1 bg-green-100 rounded">
                      {cart.coupon}
                    </span>
                    <span>applied</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    EGP {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <p className="font-semibold mb-1">Order Details:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    •{" "}
                    {cart.products?.reduce((sum, item) => sum + item.count, 0)}{" "}
                    product(s) in cart
                  </li>
                  <li>• Free shipping on orders over EGP 500</li>
                  <li>• 30-day return policy</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
