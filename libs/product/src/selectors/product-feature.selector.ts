import { createFeatureSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';

/**
 * Product Feature State
 */
export const selectProductState = createFeatureSelector<DaffProductReducersState>('product');
