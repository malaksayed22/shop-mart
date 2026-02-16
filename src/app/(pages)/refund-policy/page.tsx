import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Refund Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                We want you to be completely satisfied with your purchase. If
                you're not happy, we're here to help with refunds and exchanges.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Refund Eligibility
                </h3>
                <p className="text-gray-600 mb-2">
                  You're eligible for a refund if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>You return the item within 30 days of delivery</li>
                  <li>The item is in its original condition with tags</li>
                  <li>You provide proof of purchase</li>
                  <li>The item is not on our non-returnable list</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Refund Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Initiate a return from your account</li>
                  <li>Ship the item back using the provided label</li>
                  <li>We inspect the returned item (1-3 business days)</li>
                  <li>Refund is processed to your original payment method</li>
                  <li>You'll receive confirmation via email</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Refund Timeline</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <strong>Credit/Debit Cards:</strong> 5-7 business days
                    </li>
                    <li>
                      <strong>Bank Transfer:</strong> 7-10 business days
                    </li>
                    <li>
                      <strong>Wallet:</strong> 1-3 business days
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Partial Refunds</h3>
                <p className="text-gray-600 mb-2">
                  Partial refunds may be granted in these cases:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Item with obvious signs of use</li>
                  <li>Missing parts or accessories</li>
                  <li>Damaged packaging</li>
                  <li>Items returned after 30 days (case-by-case basis)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Non-Refundable Items</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Gift cards</li>
                  <li>Downloadable products</li>
                  <li>Personal care items</li>
                  <li>Customized products</li>
                  <li>Perishable goods</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Exchanges</h3>
                <p className="text-gray-600">
                  For exchanges, we recommend returning the item for a refund
                  and placing a new order. This ensures you get the replacement
                  item as quickly as possible.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600">
                  If you have questions about refunds, contact our support team
                  at support@shopmart.com or call (+20) 01093313333
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
