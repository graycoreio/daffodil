import { DaffCollectionMetadata } from '@daffodil/core';
import { DaffSearchProductResult } from '@daffodil/search-product';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';

export interface DaffSearchProductDriverResponse<T extends DaffSearchProductResult = DaffSearchProductResult> extends DaffSearchDriverResponse<T> {
  metadata: DaffCollectionMetadata;
}
