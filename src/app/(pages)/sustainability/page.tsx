import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Sustainability</CardTitle>
            <p className="text-gray-600 mt-2">
              Building a better future through responsible business practices
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
              <p className="text-gray-600">
                At ShopMart, we believe in conducting business responsibly.
                We're committed to minimizing our environmental impact,
                supporting local communities, and creating long-term value for
                all stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🌱 Environmental</h4>
                <p className="text-sm text-gray-600">
                  Reducing carbon footprint and waste through sustainable
                  operations
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🤝 Social</h4>
                <p className="text-sm text-gray-600">
                  Supporting communities and ensuring fair labor practices
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Governance</h4>
                <p className="text-sm text-gray-600">
                  Maintaining transparency and ethical business standards
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">♻️ Circular Economy</h4>
                <p className="text-sm text-gray-600">
                  Promoting reuse, recycling, and responsible consumption
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Environmental Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold mb-1">Eco-Friendly Packaging</h4>
              <p className="text-sm text-gray-600">
                Transitioning to 100% recyclable and biodegradable packaging
                materials by 2027
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold mb-1">Carbon Neutral Delivery</h4>
              <p className="text-sm text-gray-600">
                Electric vehicle fleet for last-mile delivery in major cities
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold mb-1">Waste Reduction</h4>
              <p className="text-sm text-gray-600">
                Partnering with recycling programs to minimize warehouse waste
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold mb-1">Energy Efficiency</h4>
              <p className="text-sm text-gray-600">
                Solar-powered warehouses reducing energy consumption by 40%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Social Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Community Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Supporting 50+ local artisans and small businesses</li>
                <li>
                  • Providing job training programs for 1000+ youth annually
                </li>
                <li>• Donating 2% of profits to education initiatives</li>
                <li>• Partnering with food banks for surplus redistribution</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Fair Labor Practices</h4>
              <p className="text-sm text-gray-600">
                We ensure fair wages, safe working conditions, and equal
                opportunities for all employees and partners throughout our
                supply chain.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              2025 Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">65%</p>
                <p className="text-sm text-gray-600 mt-1">Waste Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">30%</p>
                <p className="text-sm text-gray-600 mt-1">
                  Carbon Emissions Cut
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">80%</p>
                <p className="text-sm text-gray-600 mt-1">
                  Renewable Energy Use
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Future Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold">2026: Net Zero Warehouses</h4>
                <p className="text-sm text-gray-600">
                  All warehouses powered by renewable energy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold">2027: Zero Plastic Packaging</h4>
                <p className="text-sm text-gray-600">
                  Complete elimination of single-use plastics
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold">
                  2030: Carbon Neutral Operations
                </h4>
                <p className="text-sm text-gray-600">
                  Achieving net-zero carbon emissions across all operations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Get Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Join us in building a sustainable future. Learn more about our
              initiatives or share your ideas.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Contact:</strong> sustainability@shopmart.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
