import { CategoriesResponse } from "@/Interfaces/categoryInterfaces";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default async function CategoriesPage() {
  const response = await fetch(`${process.env.API_URL}/categories`);
  const categoriesData: CategoriesResponse = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Categories</h1>
        <p className="text-gray-600">
          Explore {categoriesData.results || 0} categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categoriesData.data?.map((category) => (
          <Link key={category._id} href={`/categories/${category._id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-center font-semibold text-sm">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
