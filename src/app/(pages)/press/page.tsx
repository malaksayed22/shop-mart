import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Press & Media</CardTitle>
            <p className="text-gray-600 mt-2">
              Latest news, updates, and media resources from ShopMart
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Press Contact</h3>
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <p className="text-gray-600">
                  <strong>Media Relations:</strong> press@shopmart.com
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> (+20) 01093313333
                </p>
                <p className="text-gray-600">
                  <strong>Business Hours:</strong> Sunday - Thursday, 9:00 AM -
                  5:00 PM EET
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Recent News</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">February 10, 2026</p>
              <h4 className="font-semibold mt-1">
                ShopMart Launches New Mobile App Experience
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Enhanced shopping features with AI-powered recommendations and
                faster checkout process.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">January 15, 2026</p>
              <h4 className="font-semibold mt-1">
                ShopMart Expands Same-Day Delivery Service
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Now covering 15 major cities across Egypt with delivery in under
                3 hours.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">December 1, 2025</p>
              <h4 className="font-semibold mt-1">
                Holiday Season Record Sales Announced
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                ShopMart achieves 150% growth in online sales during 2025
                holiday season.
              </p>
            </div>

            <div className="pb-4">
              <p className="text-sm text-gray-500">November 20, 2025</p>
              <h4 className="font-semibold mt-1">
                Partnership with Local Artisans Program
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Supporting Egyptian craftsmanship with dedicated marketplace
                section.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Media Kit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Download our media kit for logos, brand guidelines, and official
              images.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-1">Brand Guidelines</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Logo usage and brand colors
                </p>
                <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Download PDF
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-1">Product Images</h4>
                <p className="text-sm text-gray-600 mb-2">
                  High-resolution photos
                </p>
                <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Download ZIP
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-1">Company Fact Sheet</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Key statistics and milestones
                </p>
                <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Download PDF
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-1">Executive Photos</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Leadership team headshots
                </p>
                <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Download ZIP
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Featured In</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-700">TechCrunch</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-700">
                  Forbes Middle East
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-700">Al Ahram</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-700">Enterprise</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
