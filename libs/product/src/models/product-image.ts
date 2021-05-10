import {
  ID,
  DaffLocatable,
} from '@daffodil/core';

/**
 * Interface for an image on a DaffProduct.
 */
export interface DaffProductImage extends DaffLocatable {
  id: ID;
  label: string;
}
