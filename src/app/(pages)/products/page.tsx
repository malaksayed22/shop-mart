import { ProductsResponse } from "@/Interfaces/productInterface";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddToCart from "@/components/AddToCart/AddToCart";
import { getWishlistProductIds } from "@/actions/wishlist.actions";

export default async function page() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products",
  );
  const data: ProductsResponse = await response.json();

  // Get wishlist product IDs
  const wishlistProductIds = await getWishlistProductIds();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
        {data.data?.map((product) => (
          <div key={product.id}>
            <Card className="overflow-hidden pt-0 h-full flex flex-col">
              <Link href={"/products/" + product.id}>
                <div className="-m-1 -mt-6">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    width={200}
                    height={150}
                    className="relative z-20 w-full object-cover"
                  />
                </div>

                <CardHeader className="mt-2">
                  <CardDescription className="text-blue-600">
                    {product.category.name}
                  </CardDescription>
                  <CardTitle className="line-clamp-1 hover:text-blue-600">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-2">
                  <div className="flex">
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <StarHalf className="text-amber-400 fill-amber-400" />
                    <p>{product.ratingsAverage}</p>
                  </div>
                  <p className="text-lg font-bold text-blue-600">
                    {product.price} EGP
                  </p>
                </CardContent>
              </Link>

              <AddToCart
                productId={product.id}
                initialWishlistState={wishlistProductIds.includes(product.id)}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
