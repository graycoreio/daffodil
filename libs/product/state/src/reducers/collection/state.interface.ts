import { DaffProductCollectionMetadata } from '@daffodil/product';

/**
 * The product collection state.
 */
export type DaffProductCollectionReducerState<T extends DaffProductCollectionMetadata = DaffProductCollectionMetadata> = T;
