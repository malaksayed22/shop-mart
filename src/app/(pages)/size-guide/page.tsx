import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Size Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Find the perfect fit with our comprehensive size guide.
                Measurements are in centimeters.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Men's Clothing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">Size</th>
                        <th className="border p-3 text-left">Chest (cm)</th>
                        <th className="border p-3 text-left">Waist (cm)</th>
                        <th className="border p-3 text-left">Hip (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">S</td>
                        <td className="border p-3">86-91</td>
                        <td className="border p-3">71-76</td>
                        <td className="border p-3">91-96</td>
                      </tr>
                      <tr>
                        <td className="border p-3">M</td>
                        <td className="border p-3">96-101</td>
                        <td className="border p-3">81-86</td>
                        <td className="border p-3">101-106</td>
                      </tr>
                      <tr>
                        <td className="border p-3">L</td>
                        <td className="border p-3">106-111</td>
                        <td className="border p-3">91-96</td>
                        <td className="border p-3">111-116</td>
                      </tr>
                      <tr>
                        <td className="border p-3">XL</td>
                        <td className="border p-3">116-121</td>
                        <td className="border p-3">101-106</td>
                        <td className="border p-3">121-126</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Women's Clothing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">Size</th>
                        <th className="border p-3 text-left">Bust (cm)</th>
                        <th className="border p-3 text-left">Waist (cm)</th>
                        <th className="border p-3 text-left">Hip (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">XS</td>
                        <td className="border p-3">81-84</td>
                        <td className="border p-3">61-64</td>
                        <td className="border p-3">86-89</td>
                      </tr>
                      <tr>
                        <td className="border p-3">S</td>
                        <td className="border p-3">86-89</td>
                        <td className="border p-3">66-69</td>
                        <td className="border p-3">91-94</td>
                      </tr>
                      <tr>
                        <td className="border p-3">M</td>
                        <td className="border p-3">91-94</td>
                        <td className="border p-3">71-74</td>
                        <td className="border p-3">96-99</td>
                      </tr>
                      <tr>
                        <td className="border p-3">L</td>
                        <td className="border p-3">96-99</td>
                        <td className="border p-3">76-79</td>
                        <td className="border p-3">101-104</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">How to Measure</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <strong>Chest/Bust:</strong> Measure around the fullest part
                  </li>
                  <li>
                    <strong>Waist:</strong> Measure around the natural waistline
                  </li>
                  <li>
                    <strong>Hip:</strong> Measure around the fullest part of the
                    hips
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Need help?</strong> If you're between sizes, we
                  recommend ordering the larger size. Contact our customer
                  service team for personalized sizing assistance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
