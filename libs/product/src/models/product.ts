import { DaffProductImage } from './product-image';

export enum DaffProductTypeEnum {
	Simple = 'simple',
	Composite = 'composite',
	Configurable = 'configurable'
}

/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct {
	id: string;
	type?: DaffProductTypeEnum;
	url?: string;
	price?: string;
	discount?: DaffProductDiscount;
  name?: string;
  brand?: string;
  description?: string;
  images?: DaffProductImage[];
}

export interface DaffProductDiscount {
	amount: number;
	percent: number;
}
