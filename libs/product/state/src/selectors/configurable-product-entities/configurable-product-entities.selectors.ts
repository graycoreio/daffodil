import {
  EntityState,
  Dictionary,
} from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../../reducers/configurable-product-entities/configurable-product-entities-reducer-adapter';
import {
  DaffConfigurableProductEntity,
  DaffConfigurableProductEntityAttribute,
} from '../../reducers/configurable-product-entities/configurable-product-entity';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

export interface DaffConfigurableProductEntitiesMemoizedSelectors {
	selectConfigurableProductAppliedAttributesEntitiesState: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>>;
	selectConfigurableProductIds: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>['ids']>;
	selectConfigurableProductAppliedAttributesEntities: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>['entities']>;
	selectConfigurableProductTotal: MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductAppliedAttributes: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffConfigurableProductEntityAttribute[]>;
	selectConfigurableProductAppliedAttributesAsDictionary: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, Dictionary<string>>;
}

const createConfigurableProductAppliedAttributesEntitiesSelectors = <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  const adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();
  /**
   * Configurable Product Entities State
   */
  const selectConfigurableProductAppliedAttributesEntitiesState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.configurableProductAttributes,
  );

  /**
   * Selector for configurable product IDs.
   */
  const selectConfigurableProductIds = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectIds,
  );

  /**
   * Selector for all configurable product applied attributes as entities (see ngrx/entity).
   */
  const selectConfigurableProductAppliedAttributesEntities = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectEntities,
  );

  /**
   * Selector for the total number of configurable products.
   */
  const selectConfigurableProductTotal = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectTotal,
  );

  /**
   * Selector for the applied attributes of a particular configurable product.
   */
  const selectConfigurableProductAppliedAttributes = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, props) => products.entities[props.id].attributes,
  );

  const selectConfigurableProductAppliedAttributesAsDictionary = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, props) => selectConfigurableProductAppliedAttributes.projector(products, { id: props.id }).reduce((acc, attribute) => ({
      ...acc,
      [attribute.code]: attribute.value,
    }), {}),
  );

  return {
    selectConfigurableProductAppliedAttributesEntitiesState,
    selectConfigurableProductIds,
    selectConfigurableProductAppliedAttributesEntities,
    selectConfigurableProductTotal,
    selectConfigurableProductAppliedAttributes,
    selectConfigurableProductAppliedAttributesAsDictionary,
  };
};

export const getDaffConfigurableProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => cache = cache
    ? cache
    : createConfigurableProductAppliedAttributesEntitiesSelectors<T>();
})();
