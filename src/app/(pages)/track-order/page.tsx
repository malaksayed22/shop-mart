import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Track Your Order
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Enter your order number and email to track your shipment.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Order Tracking</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Order Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your order number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Track Order
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">
                Where to find your order number?
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Check your order confirmation email</li>
                <li>Log in to your account and view order history</li>
                <li>Look at your shipping confirmation email</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Tracking information may take 24-48 hours
                to appear after your order is shipped.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
