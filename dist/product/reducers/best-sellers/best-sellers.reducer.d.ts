import { DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffBestSellersReducerState } from './best-sellers-reducer-state.interface';
export declare const initialState: DaffBestSellersReducerState;
export declare const resetState: DaffBestSellersReducerState;
export declare function daffBestSellersReducer<T extends DaffProduct>(state: DaffBestSellersReducerState, action: DaffBestSellersActions<T>): DaffBestSellersReducerState;
