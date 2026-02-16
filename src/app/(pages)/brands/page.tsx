import { BrandsResponse } from "@/Interfaces/brandInterfaces";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default async function BrandsPage() {
  const response = await fetch(`${process.env.API_URL}/brands`);
  const brandsData: BrandsResponse = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Brands</h1>
        <p className="text-gray-600">
          Explore {brandsData.results || 0} premium brands
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {brandsData.data?.map((brand) => (
          <Link key={brand._id} href={`/brands/${brand._id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-center font-semibold text-sm">
                  {brand.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
