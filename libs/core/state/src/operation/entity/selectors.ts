import type { EntitySelectors } from '@ngrx/entity/src/models';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';

import { DaffOperationEntity } from './type';

/**
 * Selectors for an operation state.
 */
export interface DaffOperationEntityStateSelectors<
  TRootState,
  T extends DaffIdentifiable = DaffIdentifiable
> extends EntitySelectors<DaffOperationEntity<T>, TRootState> {
  /**
   * Selects an entity by ID.
   */
  selectEntity: (id: T['id']) => MemoizedSelector<TRootState, DaffOperationEntity<T>>;

  /**
   * Optimistically selects the list of entities.
   * This excludes temporary entities with errors.
   */
  selectOptimisticList: MemoizedSelector<TRootState, DaffOperationEntity<T>[]>;
}

/**
 * Creates a set of selectors for an entity operation state.
 *
 * @param selectState The feature selector for the entity operation state.
 */
export function daffOperationEntityStateSelectorFactory<
  TRootState,
  T extends DaffIdentifiable = DaffIdentifiable
>(
  entitySelectors: EntitySelectors<DaffOperationEntity<T>, TRootState>,
): DaffOperationEntityStateSelectors<TRootState, T> {
  const selectEntity: (id: T['id']) => MemoizedSelector<TRootState, DaffOperationEntity<T>>
    = defaultMemoize((id) => createSelector(
      entitySelectors.selectEntities,
      entities => entities[id],
    )).memoized;

  const selectOptimisticList = createSelector(
    entitySelectors.selectAll,
    (entities) => entities.filter(entity =>
      // ignore entities that are deleting
      // entity.daffState !== DaffState.Deleting &&
    // ignore placeholders with errors
      !(entity.daffTemp && entity.daffErrors.length > 0),
    ),
  );

  return {
    ...entitySelectors,
    selectEntity,
    selectOptimisticList,
  };
};
