import {
  EntityState,
  Dictionary,
} from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../../reducers/configurable-product-entities/configurable-product-entities-reducer-adapter';
import {
  DaffConfigurableProductEntity,
  DaffConfigurableProductEntityAttribute,
} from '../../reducers/configurable-product-entities/configurable-product-entity';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to the configurable product applied attributes.
 */
export interface DaffConfigurableProductEntitiesMemoizedSelectors {
	/**
	 * Selects the configurable product applied attributes entities state.
	 */
	selectConfigurableProductAppliedAttributesEntitiesState: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>>;
	/**
	 * Selects all ids for configurable products in state.
	 */
	selectConfigurableProductIds: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>['ids']>;
	/**
	 * Selects the configurable product applied attributes as rxjs entities.
	 */
	selectConfigurableProductAppliedAttributesEntities: MemoizedSelector<Record<string, any>, EntityState<DaffConfigurableProductEntity>['entities']>;
	/**
	 * Selects the total number of configurable products in state.
	 */
	selectConfigurableProductTotal: MemoizedSelector<Record<string, any>, number>;
	/**
	 * Selects the applied attributes of a configurable product.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductAppliedAttributes: (productId: DaffProduct['id']) => MemoizedSelector<Record<string, any>, DaffConfigurableProductEntityAttribute[]>;
	/**
	 * Selects the applied attributes of a configurable product as a dictionary.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductAppliedAttributesAsDictionary: (productId: DaffProduct['id']) => MemoizedSelector<Record<string, any>, Dictionary<string>>;
}

const createConfigurableProductAppliedAttributesEntitiesSelectors = <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  const adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();

  const selectConfigurableProductAppliedAttributesEntitiesState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.configurableProductAttributes,
  );

  const selectConfigurableProductIds = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectIds,
  );

  const selectConfigurableProductAppliedAttributesEntities = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectEntities,
  );

  const selectConfigurableProductTotal = createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    adapterSelectors.selectTotal,
  );

  const selectConfigurableProductAppliedAttributes = defaultMemoize((productId: DaffProduct['id']) => createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    products => products.entities[productId].attributes,
  )).memoized;

  const selectConfigurableProductAppliedAttributesAsDictionary = defaultMemoize((productId: DaffProduct['id']) => createSelector(
    selectConfigurableProductAppliedAttributes(productId),
    (attributes: DaffConfigurableProductEntityAttribute[]) => attributes.reduce((acc, attribute) => ({
      ...acc,
      [attribute.code]: attribute.value,
    }), {}),
  )).memoized;

  return {
    selectConfigurableProductAppliedAttributesEntitiesState,
    selectConfigurableProductIds,
    selectConfigurableProductAppliedAttributesEntities,
    selectConfigurableProductTotal,
    selectConfigurableProductAppliedAttributes,
    selectConfigurableProductAppliedAttributesAsDictionary,
  };
};

/**
 * A function that returns all selectors related to configurable product applied attributes.
 * Returns {@link DaffConfigurableProductEntitiesMemoizedSelectors}.
 */
export const getDaffConfigurableProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => cache = cache
    ? cache
    : createConfigurableProductAppliedAttributesEntitiesSelectors<T>();
})();
