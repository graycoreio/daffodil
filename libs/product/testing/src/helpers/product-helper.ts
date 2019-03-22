import { Product } from "@daffodil/product";

/**
 * A helper function to verify that a model is a Product.
 * 
 * @param product
 * @returns A boolean
 */
export function isProduct(product: Product): boolean {
  return !!product.id 
    && !!product.price 
    && !!product.name 
    && !!product.brand 
    && !!product.description 
    && !!product.images;
}
