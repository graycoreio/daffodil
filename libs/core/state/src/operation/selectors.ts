import {
  createSelector,
  MemoizedSelector,
  Selector,
} from '@ngrx/store';

import { DaffState } from '../states/public_api';
import { DaffOperationState } from './state';

/**
 * Selectors for an operation state.
 */
export interface DaffOperationStateSelectors<
  TRootState,
  TState extends DaffOperationState = DaffOperationState
> {
  /**
   * Selects the loading state enum.
   */
  selectLoadingState: MemoizedSelector<TRootState, TState['daffState']>;
  /**
   * Selects whether the operation state is in any of the loading states.
   */
  selectLoading: MemoizedSelector<TRootState, boolean>;
  /**
   * Selects whether the operation state is resolving.
   */
  selectResolving: MemoizedSelector<TRootState, boolean>;
  /**
   * Selects whether the operation state is mutating.
   */
  selectMutating: MemoizedSelector<TRootState, boolean>;
  /**
   * Selects the errors in the operation state.
   */
  selectErrors: MemoizedSelector<TRootState, TState['daffErrors']>;
  /**
   * Selects whether the operation state has any errors.
   * If so, it should be considered to be in an "error" state.
   */
  selectHasErrors: MemoizedSelector<TRootState, boolean>;
}

/**
 * Creates a set of selectors for an operation state.
 *
 * @param selectState The feature selector for the operation state.
 */
export function daffOperationStateSelectorFactory <
  TRootState,
  TState extends DaffOperationState = DaffOperationState
>(
  selectState: Selector<TRootState, TState>,
): DaffOperationStateSelectors<TRootState, TState> {
  const selectLoadingState = createSelector(
    selectState,
    state => state.daffState,
  );
  const selectLoading = createSelector(
    selectLoadingState,
    loadingState => loadingState !== DaffState.Stable,
  );
  const selectResolving = createSelector(
    selectLoadingState,
    loadingState => loadingState === DaffState.Resolving,
  );
  const selectMutating = createSelector(
    selectLoadingState,
    loadingState => loadingState === DaffState.Mutating,
  );
  const selectErrors = createSelector(
    selectState,
    state => state.daffErrors,
  );
  const selectHasErrors = createSelector(
    selectErrors,
    errors => errors.length > 0,
  );

  return {
    selectLoadingState,
    selectLoading,
    selectResolving,
    selectMutating,
    selectErrors,
    selectHasErrors,
  };
};
