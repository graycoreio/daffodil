import { DaffProductReducerState } from './product-reducer-state.interface';
import { DaffProductActions } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
/**
 * Initial values of the product state.
 */
export declare const initialState: DaffProductReducerState;
/**
 * Reducer function that catches actions and changes/overwrites product state.
 *
 * @param state current State of the redux store
 * @param action a product action
 * @returns product state
 */
export declare function daffProductReducer<T extends DaffProduct>(state: DaffProductReducerState, action: DaffProductActions<T>): DaffProductReducerState;
