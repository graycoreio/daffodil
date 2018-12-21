import { ProductImage } from "./product-image";

export interface Product {
  id: string;
  price?: string;
  name?: string;
  brand?: string;
  description?: string;
  images?: ProductImage[];
}
