import { DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductGridReducerState } from './product-grid-reducer-state.interface';
import { DaffProduct } from '../../models/product';
/**
 * Initial values of the product grid state.
 */
export declare const initialState: DaffProductGridReducerState<any>;
/**
 * Reducer function that catches actions and changes/overwrites product grid state.
 *
 * @param state current State of the redux store
 * @param action a product grid action
 * @returns Product grid state
 */
export declare function daffProductGridReducer<T extends DaffProduct>(state: DaffProductGridReducerState<any>, action: DaffProductGridActions<T>): DaffProductGridReducerState<T>;
