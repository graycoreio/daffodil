import { ID } from '@daffodil/core';

/**
 * Interface for an image on a DaffProduct.
 */
export interface DaffProductImage {
  id: ID;
  url: string;
  label: string;
}
