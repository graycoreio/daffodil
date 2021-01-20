import { MemoizedSelector } from '@ngrx/store';
import { DaffBestSellersReducerState } from '../../reducers/best-sellers/best-sellers-reducer-state.interface';
import { DaffProduct } from '../../models/product';
export interface DaffBestSellersMemoizedSelectors<T extends DaffProduct = DaffProduct> {
    selectBestSellersState: MemoizedSelector<object, DaffBestSellersReducerState>;
    selectBestSellersLoadingState: MemoizedSelector<object, boolean>;
    selectBestSellersIdsState: MemoizedSelector<object, string[]>;
    selectBestSellersProducts: MemoizedSelector<object, T[]>;
}
export declare const getDaffBestSellersSelectors: <T extends DaffProduct>() => DaffBestSellersMemoizedSelectors<T>;
