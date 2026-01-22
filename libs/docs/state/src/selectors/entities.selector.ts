import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffDocsItem } from '@daffodil/docs-utils';

import { getDaffDocsReducersStateSelector } from './feature.selector';
import {
  DaffDocsStateRootSlice,
  daffGetDocsAdapter,
  DaffDocsEntityState,
} from '../reducers/public_api';

export interface DaffDocsEntitySelectors<T extends DaffDocsItem = DaffDocsItem> {
  selectDocsEntitiesState: MemoizedSelector<DaffDocsStateRootSlice<T>, DaffDocsEntityState<T>>;
  /**
   * Selector for docs IDs.
   */
  selectDocsIds: MemoizedSelector<DaffDocsStateRootSlice<T>, Array<T['id']>>;
  /**
   * Selector for docs entities.
   */
  selectDocsEntities: MemoizedSelector<DaffDocsStateRootSlice<T>, Dictionary<T>>;
  /**
   * Selector for all docsEntities.
   */
  selectAllDocsEntities: MemoizedSelector<DaffDocsStateRootSlice<T>, Array<T>>;
  /**
   * Selector for total number of docsEntities.
   */
  selectDocsTotal: MemoizedSelector<DaffDocsStateRootSlice<T>, number>;
  selectDocs: (docsId: T['id']) => MemoizedSelector<DaffDocsStateRootSlice<T>, T | null>;

}

const createDocsEntitySelectors = <T extends DaffDocsItem = DaffDocsItem>() => {
  const { selectDocsFeatureState } = getDaffDocsReducersStateSelector<T>();
  const selectDocsEntitiesState = createSelector(
    selectDocsFeatureState,
    state => state.docsEntities,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetDocsAdapter<T>().getSelectors(selectDocsEntitiesState);

  const selectDocs: (docsId: T['id']) => MemoizedSelector<DaffDocsStateRootSlice<T>, T | null> =
    defaultMemoize((docsId: T['id']) => createSelector(
      selectEntities,
      (docsEntities: Dictionary<T>) => docsEntities[docsId] || null,
    )).memoized;

  return {
    selectDocsEntitiesState,
    selectDocsIds: selectIds,
    selectDocsEntities: selectEntities,
    selectAllDocsEntities: selectAll,
    selectDocsTotal: selectTotal,

    selectDocs,
  };
};

export const getDaffDocsEntitySelectors = (() => {
  let cache: any;
  return <T extends DaffDocsItem = DaffDocsItem>(): DaffDocsEntitySelectors<T> =>
    cache = cache || createDocsEntitySelectors<T>();
})();

