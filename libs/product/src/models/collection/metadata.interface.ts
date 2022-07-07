import { DaffCollectionMetadata } from '@daffodil/core';

import { DaffProductFilterable } from '../filters/public_api';

/**
 * The `DaffProductCollectionMetadata` describes the state of an abstract collection of products.
 * It supports filtering, sorting, and pagination.
 */
export interface DaffProductCollectionMetadata extends DaffCollectionMetadata, DaffProductFilterable {}
