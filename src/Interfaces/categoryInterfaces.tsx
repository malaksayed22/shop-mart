export interface CategoriesResponse {
  results: number;
  metadata: Metadata;
  data: Category[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  data: Category;
}
