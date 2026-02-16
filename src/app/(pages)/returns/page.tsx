import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Returns & Exchanges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                We want you to be completely satisfied with your purchase. If
                you're not happy with your order, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Return Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Returns accepted within 30 days of delivery</li>
                  <li>
                    Items must be in original condition with tags attached
                  </li>
                  <li>Original packaging should be included</li>
                  <li>Proof of purchase required</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  How to Return an Item
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Log in to your account and go to Order History</li>
                  <li>
                    Select the order containing the item you want to return
                  </li>
                  <li>Click "Return Item" and follow the instructions</li>
                  <li>Pack the item securely with all original materials</li>
                  <li>Ship the return using the provided label</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Exchange Policy</h3>
                <p className="text-gray-600 mb-2">
                  If you need a different size or color, we're happy to help!
                  Exchanges are processed as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Return the original item</li>
                  <li>Place a new order for the replacement item</li>
                  <li>You'll be refunded once we receive the returned item</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Non-Returnable Items</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Personal care items</li>
                  <li>Customized or personalized products</li>
                  <li>Gift cards</li>
                  <li>Downloadable software or digital products</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Refund Processing
                </h3>
                <p className="text-gray-600">
                  Refunds will be processed within 5-7 business days after we
                  receive your return. The refund will be issued to your
                  original payment method.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
