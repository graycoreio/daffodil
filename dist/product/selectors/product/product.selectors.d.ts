import { MemoizedSelector } from '@ngrx/store';
import { DaffProductReducerState } from '../../reducers/product/product-reducer-state.interface';
import { DaffProduct } from '../../models/product';
export interface DaffProductPageMemoizedSelectors<T extends DaffProduct = DaffProduct> {
    selectSelectedProductState: MemoizedSelector<object, DaffProductReducerState>;
    selectSelectedProductId: MemoizedSelector<object, string>;
    selectSelectedProductQty: MemoizedSelector<object, number>;
    selectSelectedProductLoadingState: MemoizedSelector<object, boolean>;
    selectSelectedProduct: MemoizedSelector<object, T>;
}
export declare const getDaffProductPageSelectors: <T extends DaffProduct>() => DaffProductPageMemoizedSelectors<T>;
