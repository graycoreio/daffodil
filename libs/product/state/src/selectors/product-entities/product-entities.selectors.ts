import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
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
	selectProduct: (productId: T['id']) => MemoizedSelector<Record<string, any>, T>;
	selectProductPrice: (productId: T['id']) => MemoizedSelector<Record<string, any>, number>;
	selectProductDiscountAmount: (productId: T['id']) => MemoizedSelector<Record<string, any>, number>;
	selectProductDiscountedPrice: (productId: T['id']) => MemoizedSelector<Record<string, any>, number>;
	selectProductDiscountPercent: (productId: T['id']) => MemoizedSelector<Record<string, any>, number>;
	selectProductHasDiscount: (productId: T['id']) => MemoizedSelector<Record<string, any>, boolean>;
	selectIsProductOutOfStock: (productId: T['id']) => MemoizedSelector<Record<string, any>, boolean>;
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

  const selectProduct = defaultMemoize((productId: T['id']) => createSelector(
    selectProductEntities,
    products => products[productId],
  )).memoized;

  const selectProductPrice = defaultMemoize((productId: T['id']) => createSelector(
    selectProduct(productId),
    (product: T) => product?.price || null,
  )).memoized;

  const selectProductDiscountAmount = defaultMemoize((productId: T['id']) => createSelector(
    selectProduct(productId),
    (product: T) => product?.discount?.amount || 0,
  )).memoized;

  const selectProductDiscountedPrice = defaultMemoize((productId: T['id']) => createSelector(
    selectProductPrice(productId),
    selectProductDiscountAmount(productId),
    (price: number, discountAmount: number) => daffSubtract(price, discountAmount),
  )).memoized;

  const selectProductDiscountPercent = defaultMemoize((productId: T['id']) => createSelector(
    selectProduct(productId),
    (product: T) => product.discount?.percent || 0,
  )).memoized;

  const selectProductHasDiscount = defaultMemoize((productId: T['id']) => createSelector(
    selectProductDiscountAmount(productId),
    (discountAmount: number) => !!discountAmount,
  )).memoized;

  const selectIsProductOutOfStock = defaultMemoize((productId: T['id']) => createSelector(
    selectProduct(productId),
    (product: T) => product ? !product.in_stock : null,
  )).memoized;

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
