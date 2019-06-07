import { DaffProduct } from "@daffodil/product";

/**
 * A helper function to verify that a model is a Product.
 * @param product
 */
export function isProduct(product: DaffProduct): boolean {
  return !!product.id 
    && !!product.price 
    && !!product.name 
    && !!product.brand 
    && !!product.description 
    && !!product.images;
}
