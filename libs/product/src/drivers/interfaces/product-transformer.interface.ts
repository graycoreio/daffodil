import { DaffProduct } from '../../models/product';

export interface DaffProductTransformerInterface {
  transform(product: any): DaffProduct;
  transformMany(products: any[]): DaffProduct[];
}
