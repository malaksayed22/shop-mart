import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: February 10, 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                At ShopMart, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, and protect your personal
                information.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Information We Collect
                </h3>
                <p className="text-gray-600 mb-2">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Name and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information</li>
                  <li>Order history and preferences</li>
                  <li>Communications with customer service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  How We Use Your Information
                </h3>
                <p className="text-gray-600 mb-2">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about orders and services</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional materials (with your consent)</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your
                  personal information. All payment transactions are encrypted
                  and processed through secure payment gateways.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                <p className="text-gray-600 mb-2">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain data processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Cookies</h3>
                <p className="text-gray-600">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. You can control cookie
                  preferences through your browser settings.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600">
                  If you have questions about this Privacy Policy, please
                  contact us at privacy@shopmart.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
