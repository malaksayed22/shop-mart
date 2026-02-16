import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Shipping Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                We offer fast and reliable shipping to ensure your orders arrive
                safely and on time.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Shipping Methods</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-1">Standard Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Delivery in 3-5 business days
                    </p>
                    <p className="text-sm text-gray-600">
                      Free on orders over 500 EGP
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-1">Express Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Delivery in 1-2 business days
                    </p>
                    <p className="text-sm text-gray-600">
                      Additional fee applies
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-1">Same-Day Delivery</h4>
                    <p className="text-sm text-gray-600">
                      Available in select areas
                    </p>
                    <p className="text-sm text-gray-600">Order before 2 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
                <p className="text-gray-600 mb-2">
                  Orders are typically processed within 1-2 business days.
                  You'll receive a confirmation email once your order ships with
                  tracking information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Shipping Locations
                </h3>
                <p className="text-gray-600 mb-2">
                  We currently ship to all addresses within Egypt. International
                  shipping is coming soon!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Tracking Your Order
                </h3>
                <p className="text-gray-600">
                  Once your order ships, you'll receive a tracking number via
                  email. You can also track your order status from your account
                  dashboard.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Shipping FAQs</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">
                      Q: Do you ship to P.O. boxes?
                    </p>
                    <p className="text-gray-600">
                      A: Yes, we ship to P.O. boxes with standard shipping.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">
                      Q: What if my order is delayed?
                    </p>
                    <p className="text-gray-600">
                      A: Contact our customer service team and we'll investigate
                      the delay.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">
                      Q: Can I change my shipping address?
                    </p>
                    <p className="text-gray-600">
                      A: Contact us immediately. We can update the address if
                      the order hasn't shipped yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
