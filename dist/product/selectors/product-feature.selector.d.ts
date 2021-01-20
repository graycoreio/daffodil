import { MemoizedSelector } from '@ngrx/store';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';
export interface DaffProductFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
    selectProductState: MemoizedSelector<object, DaffProductReducersState<T>>;
}
export declare const getDaffProductFeatureSelector: <T extends DaffProduct>() => DaffProductFeatureMemoizedSelector<T>;
