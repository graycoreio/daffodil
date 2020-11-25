import { DaffProductImage } from './product-image';
import { DaffProductPrice } from './pricing/public_api';

export enum DaffProductTypeEnum {
	Simple = 'simple',
	Composite = 'composite',
	Configurable = 'configurable',
}

/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct {
	id: string;
	type?: DaffProductTypeEnum;
	url?: string;
	name?: string;
	brand?: string;
	description?: string;
	images: DaffProductImage[];
	in_stock?: boolean;
	price?: DaffProductPrice;
}
