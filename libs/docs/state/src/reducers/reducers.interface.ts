import { DaffDocsItem } from '@daffodil/docs-utils';

import { DaffDocsReducerState } from './docs/reducer.interface';
import { DaffDocsEntityState } from './entities/public_api';
import { DAFF_DOCS_STORE_FEATURE_KEY } from './store-feature-key';

export interface DaffDocsReducersState<T extends DaffDocsItem = DaffDocsItem> {
  docs: DaffDocsReducerState;
  docsEntities: DaffDocsEntityState<T>;
}

export interface DaffDocsStateRootSlice<T extends DaffDocsItem = DaffDocsItem> {
  [DAFF_DOCS_STORE_FEATURE_KEY]: DaffDocsReducersState<T>;
}
