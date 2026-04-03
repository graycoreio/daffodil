import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { getDaffDocsReducersStateSelector } from './feature.selector';
import {
  DaffDocsStateRootSlice,
  DaffDocsReducerState,
} from '../reducers/public_api';

export interface DaffDocsSelectors<T extends DaffDocsItem = DaffDocsItem> extends DaffOperationStateSelectors<DaffDocsStateRootSlice<T>, DaffDocsReducerState> {
  selectDocsState: MemoizedSelector<DaffDocsStateRootSlice, DaffDocsReducerState>;
}

const createDocsSelectors = <T extends DaffDocsItem = DaffDocsItem>() => {
  const { selectDocsFeatureState } = getDaffDocsReducersStateSelector<T>();
  const selectDocsState = createSelector(
    selectDocsFeatureState,
    state => state.docs,
  );

  return {
    ...daffOperationStateSelectorFactory(selectDocsState),
    selectDocsState,
  };
};

export const getDocsSelectors = (() => {
  let cache: any;
  return <T extends DaffDocsItem = DaffDocsItem>(): DaffDocsSelectors<T> =>
    cache = cache || createDocsSelectors<T>();
})();
