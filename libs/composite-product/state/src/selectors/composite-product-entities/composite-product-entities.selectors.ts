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
import { getDaffProductEntitiesSelectors } from '@daffodil/product/state';

import { daffCompositeProductAppliedOptionsEntitiesAdapter } from '../../reducers/composite-product-entities/composite-product-entities-reducer-adapter';
import { DaffCompositeProductEntity } from '../../reducers/composite-product-entities/composite-product-entity';
import {
  DaffCompositeProductReducersState,
  DaffCompositeProductStateRootSlice,
} from '../../reducers/composite-product-reducers-state.interface';
import { getDaffCompositeProductFeatureSelector } from '../composite-product-feature.selector';

/**
 * An interface for selectors related to the composite product applied options.
 */
export interface DaffCompositeProductEntitiesMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * The ngrx entities state for composite product applied options.
	 */
	selectCompositeProductAppliedOptionsEntitiesState: MemoizedSelector<DaffCompositeProductStateRootSlice<T>, EntityState<DaffCompositeProductEntity>>;
	/**
	 * A selector for all composite product ids in state.
	 */
	selectCompositeProductIds: MemoizedSelector<DaffCompositeProductStateRootSlice<T>, EntityState<DaffCompositeProductEntity>['ids']>;
	/**
	 * The ngrx entities for the composite product appllied options.
	 */
	selectCompositeProductAppliedOptionsEntities: MemoizedSelector<DaffCompositeProductStateRootSlice<T>, EntityState<DaffCompositeProductEntity>['entities']>;
	/**
	 * The total number of composite products in state.
	 */
	selectCompositeProductTotal: MemoizedSelector<DaffCompositeProductStateRootSlice<T>, number>;
	/**
	 * Selects the applied options for a composite product.
	 *
	 * @param id the id of the composite product.
	 */
	selectCompositeProductAppliedOptions: (id: T['id']) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, Dictionary<DaffCompositeProductItemOption>>;
	/**
	 * Selects whether the particular item of a composite product is required in order for the product to be valid, i.e. addable to the cart.
	 *
	 * @param id the id of the composite product.
	 * @param item_id the id of the composite product item.
	 */
	selectIsCompositeProductItemRequired: (id: T['id'], item_id: DaffCompositeProductItem['id']) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, boolean>;
}

const createCompositeProductAppliedOptionsEntitiesSelectors = <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors<T> => {
  const {
    selectCompositeProductState,
  } = getDaffCompositeProductFeatureSelector();
  const {
    selectProduct,
  } = getDaffProductEntitiesSelectors<T>();
  const adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();

  const selectCompositeProductAppliedOptionsEntitiesState = createSelector(
    selectCompositeProductState,
    (state: DaffCompositeProductReducersState) => state.compositeProductOptions,
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

  const selectCompositeProductAppliedOptions = defaultMemoize((id: T['id']) => createSelector(
    selectProduct(id),
    selectCompositeProductAppliedOptionsEntitiesState,
    (product: T, appliedOptions) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      return (<DaffCompositeProduct><any>product).items.reduce((acc, item) => ({
        ...acc,
        [item.id]: appliedOptions.entities[product.id].items[item.id].value ? {
          ...item.options.find(option => option.id === appliedOptions.entities[product.id].items[item.id].value),
          quantity: appliedOptions.entities[product.id].items[item.id].qty,
        } : null,
      }), {});
    },
  )).memoized;

  const selectIsCompositeProductItemRequired = defaultMemoize((id: T['id'], item_id: DaffCompositeProductItem['id']) => createSelector(
    selectProduct(id),
    (product: T) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const productItem = (<DaffCompositeProduct><any>product).items.find(item => item.id === item_id);

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
 */
export const getDaffCompositeProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors<T> => cache = cache
    ? cache
    : createCompositeProductAppliedOptionsEntitiesSelectors<T>();
})();
