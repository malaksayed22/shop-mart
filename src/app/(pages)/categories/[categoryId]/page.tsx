import { CategoryResponse } from "@/Interfaces/categoryInterfaces";
import { ProductsResponse } from "@/Interfaces/productInterface";
import Image from "next/image";
import Link from "next/link";
import { Params } from "next/dist/server/request/params";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import AddToCart from "@/components/AddToCart/AddToCart";
import { getWishlistProductIds } from "@/actions/wishlist.actions";

export default async function CategoryProductsPage({
  params,
}: {
  params: Params;
}) {
  const { categoryId } = await params;

  // Fetch category details
  const categoryResponse = await fetch(
    `${process.env.API_URL}/categories/${categoryId}`,
  );
  const categoryData: CategoryResponse = await categoryResponse.json();

  // Fetch products by category
  const productsResponse = await fetch(
    `${process.env.API_URL}/products?category=${categoryId}`,
  );
  const productsData: ProductsResponse = await productsResponse.json();

  // Get wishlist product IDs
  const wishlistProductIds = await getWishlistProductIds();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8 flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm">
        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
          <Image
            src={categoryData.data?.image || "/placeholder.png"}
            alt={categoryData.data?.name || "Category"}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {categoryData.data?.name || "Category"}
          </h1>
          <p className="text-gray-600">
            {productsData.results || 0} products available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {productsData.results === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products available for this category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {productsData.data?.map((product) => (
            <Card
              key={product._id}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${product._id}`}>
                <CardHeader className="p-0">
                  <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </CardHeader>
              </Link>

              <CardContent className="flex-1 p-4">
                <Link href={`/products/${product._id}`}>
                  <CardDescription className="text-blue-600 text-xs mb-1">
                    {product.category.name}
                  </CardDescription>
                  <CardTitle className="text-sm mb-2 line-clamp-2 hover:text-blue-600">
                    {product.title}
                  </CardTitle>
                </Link>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => {
                    const rating = product.ratingsAverage;
                    if (i < Math.floor(rating)) {
                      return (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      );
                    } else if (i < rating) {
                      return (
                        <StarHalf
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      );
                    } else {
                      return <Star key={i} className="w-4 h-4 text-gray-300" />;
                    }
                  })}
                  <span className="text-xs text-gray-600 ml-1">
                    ({product.ratingsAverage})
                  </span>
                </div>

                <p className="text-lg font-bold text-blue-600">
                  {product.price} EGP
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <AddToCart
                  productId={product._id}
                  initialWishlistState={wishlistProductIds.includes(
                    product._id,
                  )}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
