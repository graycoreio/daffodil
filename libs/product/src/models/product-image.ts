import {
  DaffIdentifiable,
  DaffLocatable,
} from '@daffodil/core';

/**
 * Interface for an image on a DaffProduct.
 */
export interface DaffProductImage extends DaffLocatable, DaffIdentifiable {
  /**
   * A label describing the image.
   */
  label: string;
}
