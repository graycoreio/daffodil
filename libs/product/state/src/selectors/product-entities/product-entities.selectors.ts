import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import { daffSubtract } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { daffProductEntitiesAdapter } from '../../reducers/product-entities/product-entities-reducer-adapter';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

export interface DaffProductEntitiesMemoizedSelectors<T extends DaffProduct = DaffProduct> {
  selectProductEntitiesState: MemoizedSelector<Record<string, any>, EntityState<T>>;
  selectProductIds: MemoizedSelector<Record<string, any>, EntityState<T>['ids']>;
  selectProductEntities: MemoizedSelector<Record<string, any>, EntityState<T>['entities']>;
  selectAllProducts: MemoizedSelector<Record<string, any>, T[]>;
  selectProductTotal: MemoizedSelector<Record<string, any>, number>;
  selectProduct: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, T>;
  selectProductPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
  selectProductDiscountAmount: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
  selectProductDiscountedPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
  selectProductDiscountPercent: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
  selectProductHasDiscount: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, boolean>;
  selectIsProductOutOfStock: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, boolean>;
}

const createProductEntitiesSelectors = <T extends DaffProduct>(): DaffProductEntitiesMemoizedSelectors<T> => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  const adapterSelectors = daffProductEntitiesAdapter<T>().getSelectors();
  /**
   * Product Entities State
   */
  const selectProductEntitiesState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.products,
  );

  /**
   * Adapters created with @ngrx/entity generate
   * commonly used selector functions including
   * getting all ids in the record set, a dictionary
   * of the records by id, an array of records and
   * the total number of records. This reduces boilerplate
   * in selecting records from the entity state.
   */
  /**
   * Selector for product IDs.
   */
  const selectProductIds = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectIds,
  );

  /**
   * Selector for all product entities (see ngrx/entity).
   */
  const selectProductEntities = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectEntities,
  );

  /**
   * Selector for all products on state.
   */
  const selectAllProducts = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectAll,
  );

  /**
   * Selector for the total number of products.
   */
  const selectProductTotal = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectTotal,
  );

  const selectProduct = createSelector(
    selectProductEntities,
    (products, props) => products[props.id],
  );

  const selectProductPrice = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });

      return product?.price || null;
    },
  );

  const selectProductDiscountAmount = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });

      return product?.discount?.amount || 0;
    },
  );

  const selectProductDiscountedPrice = createSelector(
    selectProductEntities,
    (products, props) => {
      const price = selectProductPrice.projector(products, { id: props.id });
      const discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });

      return daffSubtract(price, discountAmount);
    },
  );

  const selectProductDiscountPercent = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });

      return product.discount?.percent || 0;
    },
  );

  const selectProductHasDiscount = createSelector(
    selectProductEntities,
    (products, props) => {
      const discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });

      return !!discountAmount;
    },
  );

  const selectIsProductOutOfStock = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });

      return product ? !product.in_stock : null;
    },
  );

  return {
    selectProductEntitiesState,
    selectProductIds,
    selectProductEntities,
    selectAllProducts,
    selectProductTotal,
    selectProduct,
    selectProductPrice,
    selectProductDiscountAmount,
    selectProductDiscountedPrice,
    selectProductDiscountPercent,
    selectProductHasDiscount,
    selectIsProductOutOfStock,
  };
};

export const getDaffProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductEntitiesMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductEntitiesSelectors<T>();
})();
