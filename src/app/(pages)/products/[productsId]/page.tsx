import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Products } from "@/Interfaces/productInterface";
import { log } from "console";
import { Params } from "next/dist/server/request/params";
import React from "react";
import { Heart, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/Slider/Slider";
import AddToCart from "@/components/AddToCart/AddToCart";
import { getWishlistProductIds } from "@/actions/wishlist.actions";

export default async function productDetails({ params }: { params: Params }) {
  const { productsId } = await params;

  const response = await fetch(`${process.env.API_URL}/products/` + productsId);

  const { data: product }: { data: Products } = await response.json();

  // Get wishlist product IDs
  const wishlistProductIds = await getWishlistProductIds();

  return (
    <div className="flex items-center justify-center mt-20">
      <Card className="grid grid-cols-1 md:grid-cols-3 items-center w-3/4">
        <div className="ps-20">
          <Slider images={product.images} title={product.title} />
        </div>

        <div className="col-span-2 ms-10 space-y-5">
          <CardHeader className="mt-2">
            <CardDescription>{product.brand.name}</CardDescription>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.category.name}</CardDescription>
            <CardDescription>{product.description}</CardDescription>
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
            <p>{product.price} EGP</p>
          </CardContent>
          <AddToCart
            productId={product.id}
            initialWishlistState={wishlistProductIds.includes(product.id)}
          />
        </div>
      </Card>
    </div>
  );
}
