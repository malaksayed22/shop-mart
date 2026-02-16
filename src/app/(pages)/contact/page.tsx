import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? We're here to help! Reach out
                to us through any of the following channels:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-gray-600">(+20) 01093313333</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM - 6PM</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">support@shopmart.com</p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-gray-600">
                    123 Shop Street
                    <br />
                    October City, DC 12345
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
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
