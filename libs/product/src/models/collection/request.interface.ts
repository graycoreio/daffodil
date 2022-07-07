import { DaffCollectionRequest } from '@daffodil/core';

import { DaffProductFilterRequest } from '../filters/public_api';

export interface DaffProductCollectionRequest extends DaffCollectionRequest {
  /**
   * The properties by which to filter the items of the product collection being requested.
   */
  filterRequests?: DaffProductFilterRequest[];
}
