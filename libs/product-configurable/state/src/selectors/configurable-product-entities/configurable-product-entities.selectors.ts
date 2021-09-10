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
import {
  DaffProductReducersState,
  getDaffProductFeatureSelector,
} from '@daffodil/product/state';

import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../../reducers/configurable-product-entities/configurable-product-entities-reducer-adapter';
import {
  DaffConfigurableProductEntity,
  DaffConfigurableProductEntityAttribute,
} from '../../reducers/configurable-product-entities/configurable-product-entity';
import { DaffConfigurableProductStateRootSlice } from '../../reducers/configurable-product-reducers-state.interface';

/**
 * An interface for selectors related to the configurable product applied attributes.
 */
export interface DaffConfigurableProductEntitiesMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the configurable product applied attributes entities state.
	 */
	selectConfigurableProductAppliedAttributesEntitiesState: MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, EntityState<DaffConfigurableProductEntity>>;
	/**
	 * Selects all ids for configurable products in state.
	 */
	selectConfigurableProductIds: MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, EntityState<DaffConfigurableProductEntity>['ids']>;
	/**
	 * Selects the configurable product applied attributes as ngrx entities.
	 */
	selectConfigurableProductAppliedAttributesEntities: MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, EntityState<DaffConfigurableProductEntity>['entities']>;
	/**
	 * Selects the total number of configurable products in state.
	 */
	selectConfigurableProductTotal: MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, number>;
	/**
	 * Selects the applied attributes of a configurable product.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductAppliedAttributes: (productId: T['id']) => MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, DaffConfigurableProductEntityAttribute[]>;
	/**
	 * Selects the applied attributes of a configurable product as a dictionary.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductAppliedAttributesAsDictionary: (productId: T['id']) => MemoizedSelector<DaffConfigurableProductStateRootSlice<T>, Dictionary<string>>;
}

const createConfigurableProductAppliedAttributesEntitiesSelectors = <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors<T> => {
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

  const selectConfigurableProductAppliedAttributes = defaultMemoize((productId: T['id']) => createSelector(
    selectConfigurableProductAppliedAttributesEntitiesState,
    products => products.entities[productId].attributes,
  )).memoized;

  const selectConfigurableProductAppliedAttributesAsDictionary = defaultMemoize((productId: T['id']) => createSelector(
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
  return <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors<T> => cache = cache
    ? cache
    : createConfigurableProductAppliedAttributesEntitiesSelectors<T>();
})();
