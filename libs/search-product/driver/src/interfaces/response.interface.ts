import { DaffCollectionMetadata } from '@daffodil/core';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';
import { DaffSearchProductResult } from '@daffodil/search-product';

export interface DaffSearchProductDriverResponse<T extends DaffSearchProductResult = DaffSearchProductResult> extends DaffSearchDriverResponse<T> {
  metadata: DaffCollectionMetadata;
}
