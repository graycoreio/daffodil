import { DaffCollection } from '@daffodil/core';

import { DaffProduct } from '../product';
import { DaffProductCollectionMetadata } from './metadata.interface';

/**
 * A product collection.
 *
 * @inheritdoc
 */
export interface DaffProductCollection extends DaffCollection<DaffProduct> {
  /**
   * The metadata for this product collection.
   */
  metadata: DaffProductCollectionMetadata;
}
