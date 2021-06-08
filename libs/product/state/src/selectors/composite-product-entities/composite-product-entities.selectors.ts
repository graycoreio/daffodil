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
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

export interface DaffCompositeProductEntitiesMemoizedSelectors {
	selectCompositeProductAppliedOptionsEntitiesState: MemoizedSelector<Record<string, any>, EntityState<DaffCompositeProductEntity>>;
	selectCompositeProductIds: MemoizedSelector<Record<string, any>, EntityState<DaffCompositeProductEntity>['ids']>;
	selectCompositeProductAppliedOptionsEntities: MemoizedSelector<Record<string, any>, EntityState<DaffCompositeProductEntity>['entities']>;
	selectCompositeProductTotal: MemoizedSelector<Record<string, any>, number>;
	selectCompositeProductAppliedOptions: (id: DaffCompositeProduct['id']) => MemoizedSelector<Record<string, any>, Dictionary<DaffCompositeProductItemOption>>;
	selectIsCompositeProductItemRequired: (id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']) => MemoizedSelector<Record<string, any>, boolean>;
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
  /**
   * Composite Product Entities State
   */
  const selectCompositeProductAppliedOptionsEntitiesState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.compositeProductOptions,
  );

  /**
   * Selector for composite product IDs.
   */
  const selectCompositeProductIds = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectIds,
  );

  /**
   * Selector for all composite product applied attributes as entities (see ngrx/entity).
   */
  const selectCompositeProductAppliedOptionsEntities = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectEntities,
  );

  /**
   * Selector for the total number of composite products.
   */
  const selectCompositeProductTotal = createSelector(
    selectCompositeProductAppliedOptionsEntitiesState,
    adapterSelectors.selectTotal,
  );

  /**
   * Selector for the applied attributes of a particular composite product.
   */
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

export const getDaffCompositeProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffCompositeProductEntitiesMemoizedSelectors => cache = cache
    ? cache
    : createCompositeProductAppliedOptionsEntitiesSelectors<T>();
})();
