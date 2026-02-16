import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Investor Relations
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Financial information and updates for ShopMart stakeholders
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Company Overview</h3>
              <p className="text-gray-600">
                ShopMart is Egypt's leading e-commerce platform, committed to
                delivering exceptional value to customers and shareholders.
                Since our founding, we've grown to serve millions of customers
                across the region.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600">2M+</p>
                <p className="text-sm text-gray-600 mt-1">Active Customers</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">50K+</p>
                <p className="text-sm text-gray-600 mt-1">Products Listed</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">15+</p>
                <p className="text-sm text-gray-600 mt-1">Cities Covered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Financial Highlights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Q4 2025 Results</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Revenue Growth</p>
                  <p className="text-2xl font-bold text-green-600">+45%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Customer Retention</p>
                  <p className="text-2xl font-bold text-blue-600">87%</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2025 Annual Performance</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Revenue increased by 60% year-over-year</li>
                <li>• Expanded to 5 new cities</li>
                <li>• Launched mobile app with 500K+ downloads</li>
                <li>• Achieved 95% customer satisfaction rating</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Reports & Filings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Annual Report 2025</h4>
                  <p className="text-sm text-gray-600">
                    Published: January 2026
                  </p>
                </div>
                <p className="text-blue-600 text-sm">Download PDF</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Q4 2025 Earnings Report</h4>
                  <p className="text-sm text-gray-600">
                    Published: January 2026
                  </p>
                </div>
                <p className="text-blue-600 text-sm">Download PDF</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Q3 2025 Earnings Report</h4>
                  <p className="text-sm text-gray-600">
                    Published: October 2025
                  </p>
                </div>
                <p className="text-blue-600 text-sm">Download PDF</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Corporate Governance Report</h4>
                  <p className="text-sm text-gray-600">
                    Published: December 2025
                  </p>
                </div>
                <p className="text-blue-600 text-sm">Download PDF</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Contact Investor Relations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> investors@shopmart.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> (+20) 01093313333 ext. 100
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Business District, Cairo, Egypt
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Upcoming Events</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Q1 2026 Earnings Call - April 15, 2026</li>
                <li>• Annual Shareholder Meeting - May 20, 2026</li>
                <li>• Investor Day - June 10, 2026</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
