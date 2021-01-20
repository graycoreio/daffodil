import { MemoizedSelector } from '@ngrx/store';
import { DaffProductGridReducerState } from '../../reducers/product-grid/product-grid-reducer-state.interface';
import { DaffProduct } from '../../models/product';
export interface DaffProductGridMemoizedSelectors<T extends DaffProduct = DaffProduct> {
    selectProductGridState: MemoizedSelector<object, DaffProductGridReducerState<T>>;
    selectProductGridLoadingState: MemoizedSelector<object, boolean>;
}
export declare const getDaffProductGridSelectors: <T extends DaffProduct>() => DaffProductGridMemoizedSelectors<T>;
