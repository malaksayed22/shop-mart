import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Join Our Team</CardTitle>
            <p className="text-gray-600 mt-2">
              Build your career with ShopMart - where innovation meets
              opportunity
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Why Work With Us?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    🚀 Growth Opportunities
                  </h4>
                  <p className="text-sm text-gray-600">
                    Continuous learning and advancement paths for all team
                    members
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    💰 Competitive Benefits
                  </h4>
                  <p className="text-sm text-gray-600">
                    Attractive salary packages, health insurance, and bonuses
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🌍 Flexible Work</h4>
                  <p className="text-sm text-gray-600">
                    Remote options and flexible hours to suit your lifestyle
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Impact-Driven</h4>
                  <p className="text-sm text-gray-600">
                    Work on projects that matter and make a real difference
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Open Positions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold">Senior Full Stack Developer</h4>
              <p className="text-sm text-gray-600">
                Engineering • Full-time • Remote
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Lead development of scalable e-commerce solutions
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-semibold">Product Manager</h4>
              <p className="text-sm text-gray-600">
                Product • Full-time • Cairo, Egypt
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Drive product strategy and roadmap execution
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold">UI/UX Designer</h4>
              <p className="text-sm text-gray-600">
                Design • Full-time • Hybrid
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Create intuitive and beautiful user experiences
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold">Customer Success Manager</h4>
              <p className="text-sm text-gray-600">
                Support • Full-time • Cairo, Egypt
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Ensure customer satisfaction and retention
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-semibold">Marketing Specialist</h4>
              <p className="text-sm text-gray-600">
                Marketing • Full-time • Remote
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Drive brand awareness and customer acquisition
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">How to Apply</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Ready to join our team? Send your resume and portfolio to:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">📧 careers@shopmart.com</p>
              <p className="text-sm text-gray-600 mt-2">
                Please include the position title in the subject line
              </p>
            </div>
            <Button className="w-full md:w-auto">Apply Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
