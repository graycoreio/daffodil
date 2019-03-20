import { ProductImage } from "./product-image";

/**
 * An interface for a product object.
 */
export interface Product {
  id: string;
  price?: string;
  name?: string;
  brand?: string;
  description?: string;
  images?: ProductImage[];
}
