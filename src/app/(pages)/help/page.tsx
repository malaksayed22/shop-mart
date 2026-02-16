import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Help Center</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Find answers to commonly asked questions and get help with your
                orders.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">
                      How do I place an order?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Browse our products, add items to your cart, and proceed
                      to checkout. You'll need to create an account or log in to
                      complete your purchase.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">
                      What payment methods do you accept?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We accept all major credit cards, debit cards, and secure
                      online payment methods.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">
                      How long does shipping take?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Standard shipping typically takes 3-5 business days.
                      Express shipping is available for faster delivery.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">
                      Can I track my order?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! Once your order ships, you'll receive a tracking
                      number via email. You can also track your order from your
                      account dashboard.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">
                      What is your return policy?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We offer a 30-day return policy for most items. Products
                      must be in original condition with tags attached.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Still need help?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our customer support team is here to assist you.
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  support@shopmart.com
                  <br />
                  <span className="font-medium">Phone:</span> (+20) 01093313333
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
