import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DaffPaymentStateRootSlice } from '../reducers/public_api';
import { getDaffPaymentReducersStateSelector } from './feature.selector';

/**
 * Selectors for the main part of payment state.
 */
export interface DaffPaymentSelectors {
  /**
   * Selects whether there is a pending payment operation.
   */
  selectPaymentLoading: MemoizedSelector<DaffPaymentStateRootSlice, boolean>;
  /**
   * Selects the list of payment errors, if any.
   */
  selectPaymentErrors: MemoizedSelector<DaffPaymentStateRootSlice, DaffStateError[]>;
}

/**
 * Creates a group of selectors for {@link DaffPaymentReducerState} that use the passed state selector as the basis.
 */
const daffPaymentCreateSelectors = () => {
  const { selectPaymentFeatureState } = getDaffPaymentReducersStateSelector();
  const selectPaymentState = createSelector(
    selectPaymentFeatureState,
    state => state.payment,
  );

  const selectPaymentLoading = createSelector(
    selectPaymentState,
    state => state.loading,
  );

  const selectPaymentErrors = createSelector(
    selectPaymentState,
    state => state.errors,
  );

  return {
    selectPaymentLoading,
    selectPaymentErrors,
  };
};


export const daffPaymentGetSelectors = (() => {
  let cache;
  return (): DaffPaymentSelectors =>
    cache = cache || daffPaymentCreateSelectors();
})();

