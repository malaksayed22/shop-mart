import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Cookie Policy</CardTitle>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: February 10, 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                This Cookie Policy explains how ShopMart uses cookies and
                similar technologies to recognize you when you visit our
                website.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  What are Cookies?
                </h3>
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help websites remember your
                  actions and preferences over time, making your browsing
                  experience more efficient and personalized.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Types of Cookies We Use
                </h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-1">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Required for the website to function properly. These
                      cookies enable basic features like page navigation and
                      access to secure areas.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-1">Performance Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website
                      by collecting anonymous information about pages visited
                      and errors encountered.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-1">
                      Functionality Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      Remember your preferences and choices (like language or
                      region) to provide a more personalized experience.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Used to track visitors across websites to display relevant
                      advertisements and measure campaign effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  How We Use Cookies
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your shopping cart items</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance</li>
                  <li>Personalize your experience</li>
                  <li>Show relevant advertisements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Managing Cookies</h3>
                <p className="text-gray-600 mb-3">
                  Most web browsers allow you to control cookies through their
                  settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Delete existing cookies</li>
                  <li>Block future cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Note that disabling cookies may affect the functionality of
                  our website.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Third-Party Cookies</h4>
                <p className="text-sm text-gray-600">
                  Some cookies on our site are set by third-party services like
                  analytics providers and advertising partners. We don't control
                  these cookies directly.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Questions?</strong> If you have questions about our
                  use of cookies, please contact us at privacy@shopmart.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
