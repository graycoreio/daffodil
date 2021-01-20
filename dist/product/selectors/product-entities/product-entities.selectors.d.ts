import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { DaffProduct } from '../../models/product';
export interface DaffProductEntitiesMemoizedSelectors<T extends DaffProduct = DaffProduct> {
    selectProductEntitiesState: MemoizedSelector<object, EntityState<T>>;
    selectProductIds: MemoizedSelector<object, EntityState<T>['ids']>;
    selectProductEntities: MemoizedSelector<object, EntityState<T>['entities']>;
    selectAllProducts: MemoizedSelector<object, T[]>;
    selectProductTotal: MemoizedSelector<object, number>;
    selectProduct: MemoizedSelectorWithProps<object, object, T>;
    selectProductPrice: MemoizedSelectorWithProps<object, object, number>;
    selectProductDiscountAmount: MemoizedSelectorWithProps<object, object, number>;
    selectProductDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
    selectProductDiscountPercent: MemoizedSelectorWithProps<object, object, number>;
    selectProductHasDiscount: MemoizedSelectorWithProps<object, object, boolean>;
    selectIsProductOutOfStock: MemoizedSelectorWithProps<object, object, boolean>;
}
export declare const getDaffProductEntitiesSelectors: <T extends DaffProduct>() => DaffProductEntitiesMemoizedSelectors<T>;
