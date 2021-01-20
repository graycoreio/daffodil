import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState, Dictionary } from '@ngrx/entity';
import { DaffProduct } from '../../models/product';
import { DaffConfigurableProductEntity, DaffConfigurableProductEntityAttribute } from '../../reducers/configurable-product-entities/configurable-product-entity';
export interface DaffConfigurableProductEntitiesMemoizedSelectors {
    selectConfigurableProductAppliedAttributesEntitiesState: MemoizedSelector<object, EntityState<DaffConfigurableProductEntity>>;
    selectConfigurableProductIds: MemoizedSelector<object, EntityState<DaffConfigurableProductEntity>['ids']>;
    selectConfigurableProductAppliedAttributesEntities: MemoizedSelector<object, EntityState<DaffConfigurableProductEntity>['entities']>;
    selectConfigurableProductTotal: MemoizedSelector<object, number>;
    selectConfigurableProductAppliedAttributes: MemoizedSelectorWithProps<object, object, DaffConfigurableProductEntityAttribute[]>;
    selectConfigurableProductAppliedAttributesAsDictionary: MemoizedSelectorWithProps<object, object, Dictionary<string>>;
}
export declare const getDaffConfigurableProductEntitiesSelectors: <T extends DaffProduct>() => DaffConfigurableProductEntitiesMemoizedSelectors;
