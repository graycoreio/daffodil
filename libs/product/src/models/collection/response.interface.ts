import { DaffProductCollectionMetadata } from './metadata.interface';

/**
 * The response of a product collection.
 */
export interface DaffProductCollectionResponse {
  /**
   * The metadata for this product collection.
   */
  productCollectionMetadata: DaffProductCollectionMetadata;
}
