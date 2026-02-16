"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Order } from "@/Interfaces/orderInterfaces";
import {
  Package,
  MapPin,
  CreditCard,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import { format } from "date-fns";

interface OrdersContentProps {
  orders: Order[];
}

export default function OrdersContent({ orders }: OrdersContentProps) {
  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        <Card>
          <CardContent className="py-12 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500 text-lg">No orders yet</p>
            <p className="text-gray-400 text-sm mt-2">
              Start shopping to create your first order!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <p className="text-gray-600 mb-6">Total Orders: {orders?.length || 0}</p>

      <div className="space-y-6">
        {orders?.map((order) => (
          <Card key={order._id} className="overflow-hidden">
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg mb-2">
                    Order #{order.id}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(order.createdAt), "PPP 'at' p")}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {order.isPaid ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        <Clock className="w-4 h-4 mr-1" />
                        Pending Payment
                      </span>
                    )}
                    {order.isDelivered ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Delivered
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        <Package className="w-4 h-4 mr-1" />
                        In Transit
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        Shipping Address
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.shippingAddress?.details || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.shippingAddress?.city || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Phone: {order.shippingAddress?.phone || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        Payment Method
                      </p>
                      <p className="text-sm text-gray-600 capitalize">
                        {order.paymentMethodType}
                      </p>
                      {order.paidAt && (
                        <p className="text-xs text-gray-500 mt-1">
                          Paid on {format(new Date(order.paidAt), "PPP")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-3">
                  Order Items ({order.cartItems?.length || 0})
                </p>
                <div className="space-y-2">
                  {order.cartItems?.map((item, index) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center text-sm py-2 border-b last:border-0"
                    >
                      <span className="text-gray-600">Item x {item.count}</span>
                      <span className="font-medium">
                        EGP {(item.price * item.count).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">
                    EGP {order.taxPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    EGP {order.shippingPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-green-600">
                    EGP {order.totalOrderPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
