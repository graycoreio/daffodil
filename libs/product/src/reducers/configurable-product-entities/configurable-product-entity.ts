import { DaffProduct } from '../../models/product';

export interface DaffConfigurableProductEntity {
	id: DaffProduct['id'];
	attributes: DaffConfigurableProductEntityAttribute[];
}

export interface DaffConfigurableProductEntityAttribute {
	code: string;
	value: string;
}
