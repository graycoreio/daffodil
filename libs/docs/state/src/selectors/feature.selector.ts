import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffDocsItem } from '@daffodil/docs-utils';

import {
  DaffDocsStateRootSlice,
  DaffDocsReducersState,
  DAFF_DOCS_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffDocsFeatureSelector<T extends DaffDocsItem = DaffDocsItem> {
  selectDocsFeatureState: MemoizedSelector<DaffDocsStateRootSlice<T>, DaffDocsReducersState<T>>;
}

export const getDaffDocsReducersStateSelector = (() => {
  let cache: any;
  return <T extends DaffDocsItem = DaffDocsItem>(): DaffDocsFeatureSelector<T> =>
    cache = cache || {
      selectDocsFeatureState: createFeatureSelector<DaffDocsReducersState<T>>(DAFF_DOCS_STORE_FEATURE_KEY),
    };
})();
