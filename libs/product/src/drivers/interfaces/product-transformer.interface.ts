import { DaffProduct } from '../../models/product';

export interface DaffProductTransformerInterface<T extends DaffProduct> {
  transform(product: any): T;
  transformMany(products: any[]): T[];
}
