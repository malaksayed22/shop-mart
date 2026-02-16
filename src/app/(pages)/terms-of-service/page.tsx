import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Terms of Service
            </CardTitle>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: February 10, 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                By accessing and using ShopMart, you agree to be bound by these
                Terms of Service. Please read them carefully.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Use of Service
                </h3>
                <p className="text-gray-600">
                  You must be at least 18 years old to use our services. You
                  agree to provide accurate information and maintain the
                  security of your account credentials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Orders and Payments
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment must be received before order processing</li>
                  <li>We reserve the right to refuse any order</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  3. Product Information
                </h3>
                <p className="text-gray-600">
                  We strive to provide accurate product descriptions and images.
                  However, we do not guarantee that descriptions, colors, or
                  other content are completely accurate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  4. Intellectual Property
                </h3>
                <p className="text-gray-600">
                  All content on ShopMart, including text, graphics, logos, and
                  images, is the property of ShopMart or its content suppliers
                  and protected by copyright laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  5. Limitation of Liability
                </h3>
                <p className="text-gray-600">
                  ShopMart shall not be liable for any indirect, incidental,
                  special, or consequential damages arising from your use of our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Modifications</h3>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms of Service at any
                  time. Continued use of our services constitutes acceptance of
                  the modified terms.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Important Notice</h4>
                <p className="text-sm text-gray-600">
                  By using ShopMart, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
