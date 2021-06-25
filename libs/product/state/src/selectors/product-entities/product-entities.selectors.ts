import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { daffSubtract } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { daffProductEntitiesAdapter } from '../../reducers/product-entities/product-entities-reducer-adapter';
import {
  DaffProductReducersState,
  DaffProductStateRootSlice,
} from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to product entities and prices for simple products.
 */
export interface DaffProductEntitiesMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the ngrx entities state for products.
	 */
	selectProductEntitiesState: MemoizedSelector<DaffProductStateRootSlice<T>, EntityState<T>>;
	/**
	 * Selects all ids for products in state.
	 */
	selectProductIds: MemoizedSelector<DaffProductStateRootSlice<T>, EntityState<T>['ids']>;
	/**
	 * Selects the ngrx entities for all products in state.
	 */
	selectProductEntities: MemoizedSelector<DaffProductStateRootSlice<T>, EntityState<T>['entities']>;
	/**
	 * Selects all products in state as an array.
	 */
	selectAllProducts: MemoizedSelector<DaffProductStateRootSlice<T>, T[]>;
	/**
	 * Selects the total number of products in state.
	 */
	selectProductTotal: MemoizedSelector<DaffProductStateRootSlice<T>, number>;
	/**
	 * Selects a product by id.
	 *
	 * @param productId the id of the product.
	 */
	selectProduct: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, T>;
	/**
	 * Selects the price of a product.
	 *
	 * @param productId the id of the product.
	 */
	selectProductPrice: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, number>;
	/**
	 * Selects the discount of a product as some amount of currency.
	 *
	 * @param productId the id of the product.
	 */
	selectProductDiscountAmount: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, number>;
	/**
	 * Selects the discounted price of a product.
	 *
	 * @param productId the id of the product.
	 */
	selectProductDiscountedPrice: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, number>;
	/**
	 * Selects the discount of a product as a percent of the original price.
	 *
	 * @param productId the id of the product.
	 */
	selectProductDiscountPercent: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, number>;
	/**
	 * Selects whether or not the product has a discount.
	 *
	 * @param productId the id of the product.
	 */
	selectProductHasDiscount: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, boolean>;
	/**
	 * Selects whether or not a product is out of stock.
	 *
	 * @param productId the id of the product.
	 */
	selectIsProductOutOfStock: (productId: T['id']) => MemoizedSelector<DaffProductStateRootSlice<T>, boolean>;
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
  const selectProductIds = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectIds,
  );

  const selectProductEntities = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectEntities,
  );

  const selectAllProducts = createSelector(
    selectProductEntitiesState,
    adapterSelectors.selectAll,
  );

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

/**
 * A function that returns all selectors related to product entities and simple product prices.
 */
export const getDaffProductEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductEntitiesMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductEntitiesSelectors<T>();
})();
