import { DaffProductCollectionMetadata } from '@daffodil/product';
import { DaffSearchProductResult } from '@daffodil/search-product';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';

export interface DaffSearchProductDriverResponse<T extends DaffSearchProductResult = DaffSearchProductResult> extends DaffSearchDriverResponse<T> {
  metadata: DaffProductCollectionMetadata;
}
