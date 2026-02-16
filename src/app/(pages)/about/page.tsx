import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About ShopMart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020, ShopMart has grown from a small online store to
                a leading e-commerce platform serving thousands of customers
                worldwide. Our mission is to provide high-quality products at
                competitive prices with exceptional customer service.
              </p>
              <p className="text-gray-600">
                We believe shopping should be convenient, affordable, and
                enjoyable. That's why we carefully curate our product selection,
                partner with trusted brands, and constantly improve our services
                to exceed your expectations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quality First</h4>
                  <p className="text-sm text-gray-600">
                    Every product is carefully selected to meet our high
                    standards.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Customer Focus</h4>
                  <p className="text-sm text-gray-600">
                    Your satisfaction is our top priority in everything we do.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">
                    We continuously improve our platform and services.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Sustainability</h4>
                  <p className="text-sm text-gray-600">
                    Committed to environmentally responsible practices.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Wide selection of quality products</li>
                <li>Competitive prices and regular discounts</li>
                <li>Fast and reliable shipping</li>
                <li>Secure payment processing</li>
                <li>Excellent customer support</li>
                <li>Easy returns and exchanges</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
              <p className="text-gray-600">
                At ShopMart, we're committed to providing you with the best
                online shopping experience. From browsing to delivery, we ensure
                every step is seamless and satisfying. Thank you for choosing
                ShopMart as your trusted shopping destination.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
