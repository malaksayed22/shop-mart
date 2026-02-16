export interface WishlistRes {
  status: string;
  count: number;
  data: WishlistProduct[];
}

export interface WishlistProduct {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface AddToWishlistRes {
  status: string;
  message: string;
  data: string[];
}

export interface RemoveFromWishlistRes {
  status: string;
  message: string;
  data: string[];
}
