import { DaffProduct } from '@daffodil/product';

/**
 * Describes how configurable product configured attributes are stored in rxjs entity state.
 */
export interface DaffConfigurableProductEntity {
	/**
	 * The id of the configurable product.
	 */
	id: DaffProduct['id'];
	/**
	 * The attributes chosen for the configurable product.
	 */
	attributes: DaffConfigurableProductEntityAttribute[];
}

/**
 * The attributes chosen for a configurable product.
 */
export interface DaffConfigurableProductEntityAttribute {
	/**
	 * The type of attribute.
	 */
	code: string;
	/**
	 * The value chosen for the attribute.
	 */
	value: string;
}
