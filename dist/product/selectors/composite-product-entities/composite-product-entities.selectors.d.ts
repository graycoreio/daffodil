import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState, Dictionary } from '@ngrx/entity';
import { DaffProduct } from '../../models/product';
import { DaffCompositeProductEntity } from '../../reducers/composite-product-entities/composite-product-entity';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductItemOption, DaffCompositeProductItem } from '../../models/composite-product-item';
export interface DaffCompositeProductEntitiesMemoizedSelectors {
    selectCompositeProductAppliedOptionsEntitiesState: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>>;
    selectCompositeProductIds: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>['ids']>;
    selectCompositeProductAppliedOptionsEntities: MemoizedSelector<object, EntityState<DaffCompositeProductEntity>['entities']>;
    selectCompositeProductTotal: MemoizedSelector<object, number>;
    selectCompositeProductAppliedOptions: MemoizedSelectorWithProps<object, object, Dictionary<DaffCompositeProductItemOption>>;
    selectIsCompositeProductItemRequired: MemoizedSelectorWithProps<object, {
        id: DaffCompositeProduct['id'];
        item_id: DaffCompositeProductItem['id'];
    }, boolean>;
}
export declare const getDaffCompositeProductEntitiesSelectors: <T extends DaffProduct>() => DaffCompositeProductEntitiesMemoizedSelectors;
