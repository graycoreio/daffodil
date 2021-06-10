import {
  ID,
  DaffLocatable,
} from '@daffodil/core';

/**
 * Interface for an image on a DaffProduct.
 */
export interface DaffProductImage extends DaffLocatable {
	/**
	 * The id of the product image.
	 */
  id: ID;
	/**
	 * A label describing the image.
	 */
  label: string;
}
