import { DaffProductImage } from './product-image';

export enum DaffProductTypeEnum {
	Simple = 'simple',
	Composite = 'composite'
}

/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct {
	id: string;
	__typename?: DaffProductTypeEnum;
  price?: string;
  name?: string;
  brand?: string;
  description?: string;
  images?: DaffProductImage[];
}
