import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { DaffConfigurableCartItemAttribute, DaffCompositeCartItemOption, DaffCart, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartItemStateEnum, DaffStatefulCartItem } from '../../models/stateful-cart-item';
export interface DaffCartItemEntitiesMemoizedSelectors<T extends DaffStatefulCartItem = DaffStatefulCartItem> {
    selectCartItemEntitiesState: MemoizedSelector<object, EntityState<T>>;
    selectCartItemIds: MemoizedSelector<object, EntityState<T>['ids']>;
    selectCartItemEntities: MemoizedSelector<object, EntityState<T>['entities']>;
    selectAllCartItems: MemoizedSelector<object, T[]>;
    selectCartItemTotal: MemoizedSelector<object, number>;
    selectCartItem: MemoizedSelectorWithProps<object, object, T>;
    selectTotalNumberOfCartItems: MemoizedSelector<object, number>;
    selectCartItemConfiguredAttributes: MemoizedSelectorWithProps<object, object, DaffConfigurableCartItemAttribute[]>;
    selectCartItemCompositeOptions: MemoizedSelectorWithProps<object, object, DaffCompositeCartItemOption[]>;
    selectIsCartItemOutOfStock: MemoizedSelectorWithProps<object, object, boolean>;
    selectCartItemMutating: MemoizedSelector<object, boolean>;
    selectCartItemState: MemoizedSelectorWithProps<object, object, DaffCartItemStateEnum>;
}
export declare const getDaffCartItemEntitiesSelectors: <T extends DaffCart = DaffCart, V extends DaffCartOrderResult = DaffCartOrderResult, U extends DaffStatefulCartItem = DaffStatefulCartItem>() => DaffCartItemEntitiesMemoizedSelectors<U>;
