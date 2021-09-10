import {
  EntityState,
  Dictionary,
} from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffProduct,
  DaffProductTypeEnum,
  DaffCompositeProduct,
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
} from '@daffodil/product';

import { daffCompositeProductAppliedOptionsEntitiesAdapter } from '../../reducers/composite-product-entities/composite-product-entities-reducer-adapter';
import { DaffCompositeProductEntity } from '../../reducers/composite-product-entities/composite-product-entity';
import {
  DaffProductReducersState,
  DaffProductStateRootSlice,
} from '../../reducers/product-reducers-state.interface';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to the composite product applied options.
 *
 * @deprecated import from @daffodil/composite-product/state instead.
 */
export interface DaffCompositeProductEntitiesMemoizedSelectors {
	/**
	 * The ngrx entities state for composite product applied options.
	 */
	selectCompositeProductAppliedOptionsEntitiesState: MemoizedSelector<DaffProductStateRootSlice, EntityState<DaffCompositeProductEntity>>;
	/**
	 * A selector for all composite product ids in state.
	 */
	selectCompositeProductIds: MemoizedSelector<DaffProductStateRootSlice, EntityState<DaffCompositeProductEntity>['ids']>;
	/**
	 * The ngrx entities for the composite product appllied options.
	 */
	selectCompositeProductAppliedOptionsEntities: MemoizedSelector<DaffProductStateRootSlice, EntityState<DaffCompositeProductEntity>['entities']>;
	/**
	 * The total number of composite products in state.
	 */
	selectCompositeProductTotal: MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the applied options for a composite product.
	 *
	 * @param id the id of the composite product.
	 */
	selectCompositeProductAppliedOptions: (id: DaffCompositeProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, Dictionary<DaffCompositeProductItemOption>>;
	/**
	 * Selects whether the particular item of a composite product is required in order for the product to be valid, i.e. addable to the cart.
	 *
	 * @param id the id of the composite product.
	 * @param item_id the id of the composite product item.
	 */
	selectIsCompositeProductItemRequired: (id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']) => MemoizedSelector<DaffProductStateRootSlice, boolean>;
}

const createCompositeProductAppliedOptionsEntitiesSelectors = <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  const {
    selectProductEntities,
    selectProduct,
  } = getDaffProductEntitiesSelectors();
  const adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();

  const selectCompositeProductAppliedOptionsEntitiesState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.compositeProductOptions,
  );

  const selectCompositeProductIds = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectIds,
  );

  const selectCompositeProductAppliedOptionsEntities = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectEntities,
  );

  const selectCompositeProductTotal = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectTotal,
  );

  const selectCompositeProductAppliedOptions = defaultMemoize((id: DaffCompositeProduct['id']) => createSelector(
    selectProduct(id),
    selectCompositeProductAppliedOptionsEntitiesState,
    (product: DaffCompositeProduct, appliedOptions) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      return product.items.reduce((acc, item) => ({
        ...acc,
        [item.id]: appliedOptions.entities[product.id].items[item.id].value ? {
          ...item.options.find(option => option.id === appliedOptions.entities[product.id].items[item.id].value),
          quantity: appliedOptions.entities[product.id].items[item.id].qty,
        } : null,
      }), {});
    },
  )).memoized;

  const selectIsCompositeProductItemRequired = defaultMemoize((id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']) => createSelector(
    selectProduct(id),
    (product: DaffCompositeProduct) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const productItem = product.items.find(item => item.id === item_id);

      return productItem ? productItem.required : null;
    },
  )).memoized;


  return {
    selectCompositeProductAppliedOptionsEntitiesState,
    selectCompositeProductIds,
    selectCompositeProductAppliedOptionsEntities,
    selectCompositeProductTotal,
    selectCompositeProductAppliedOptions,
    selectIsCompositeProductItemRequired,
  };
};

/**
 * A function that returns all selectors related to composite product applied option entities.
 * Returns {@link DaffCompositeProductEntitiesMemoizedSelectors}.
 *
 * @deprecated import from @daffodil/composite-product/state instead.
 */
export const getDaffCompositeProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors => cache = cache
    ? cache
    : createCompositeProductAppliedOptionsEntitiesSelectors<T>();
})();
