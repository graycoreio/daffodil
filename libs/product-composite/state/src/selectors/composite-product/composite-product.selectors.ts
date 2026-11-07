import {
  Dictionary,
  EntityState,
} from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  daffAdd,
  daffDivide,
  daffMultiply,
  daffSubtract,
} from '@daffodil/core';
import {
  DaffProduct,
  DaffProductTypeEnum,
  DaffProductPrices,
  DaffPriceRange,
} from '@daffodil/product';
import { getDaffProductEntitiesSelectors } from '@daffodil/product/state';
import {
  DaffCompositeProduct,
  DaffCompositeConfigurationItem,
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
} from '@daffodil/product-composite';

import { DaffCompositeProductStateRootSlice } from '../../reducers/composite-product-reducers-state.interface';
import { DaffCompositeProductEntity } from '../../reducers/public_api';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';

/**
 * An interface describing selectors unique to the composite product, such as pricing and discounts.
 */
export interface DaffCompositeProductMemoizedSelectors<T extends DaffProduct = DaffProduct> {
  /**
   * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
   * Unconfigured items are priced according to the quantities of their options.
   */
  selectCompositeProductRequiredItemPricesForConfiguration: ( id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem> ) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, DaffPriceRange>;
  /**
   * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
   * Unconfigured items are priced according to the quantities of their options.
   */
  selectCompositeProductOptionalItemPricesForConfiguration: ( id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem> ) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, DaffPriceRange>;
  /**
   * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
   * excluding unselected, optional item prices.
   */
  selectCompositeProductPricesAsCurrentlyConfigured: ( id: DaffCompositeProduct['id'] ) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, DaffPriceRange>;
  /**
   * Get the discount amount for a composite product. This value will be undefined if all required options are not chosen.
   */
  selectCompositeProductDiscountAmount: ( id: DaffCompositeProduct['id'] ) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, number>;
  /**
   * Get the discount percent for a composite product. This value will be undefined if all required options are not chosen.
   * Note: this percent is computed client-side and should be treated as an estimate rather than an exact value.
   */
  selectCompositeProductDiscountPercent: ( id: DaffCompositeProduct['id'] ) => MemoizedSelector<DaffCompositeProductStateRootSlice<T>, number>;
}

const createCompositeProductSelectors = <T extends DaffProduct>(): DaffCompositeProductMemoizedSelectors<T> => {

  const {
    selectProduct,
  } = getDaffProductEntitiesSelectors<T>();

  const {
    selectCompositeProductAppliedOptionsEntities,
  } = getDaffCompositeProductEntitiesSelectors();

  const selectCompositeProductRequiredItemPricesForConfiguration = defaultMemoize((id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>) => createSelector(
    selectProduct(id),
    (product: T) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const appliedOptions = configuration ? getAppliedOptionsForConfiguration(<DaffCompositeProduct><any>product, configuration) : {};
      return {
        minPrice: getMinPricesForConfiguration(<DaffCompositeProduct><any>product, appliedOptions),
        maxPrice: getMaxPricesForConfiguration(<DaffCompositeProduct><any>product, appliedOptions),
      };
    },
  )).memoized;

  const selectCompositeProductOptionalItemPricesForConfiguration = defaultMemoize((id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>) => createSelector(
    selectProduct(id),
    (product: T) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const appliedOptions = configuration ? getAppliedOptionsForConfiguration(<DaffCompositeProduct><any>product, configuration) : {};
      return {
        minPrice: getMinPricesForConfiguration(<DaffCompositeProduct><any>product, appliedOptions),
        maxPrice: getMaxPricesForConfigurationIncludingOptionalItems(<DaffCompositeProduct><any>product, appliedOptions),
      };
    },
  )).memoized;

  const selectCompositeProductPricesAsCurrentlyConfigured = defaultMemoize((id: T['id']) => createSelector<DaffCompositeProductStateRootSlice<T>, [T, EntityState<DaffCompositeProductEntity>['entities']], DaffPriceRange>(
    selectProduct(id),
    selectCompositeProductAppliedOptionsEntities,
    (product: T, appliedOptionsEntities) =>
      selectCompositeProductRequiredItemPricesForConfiguration(id, appliedOptionsEntities[id]?.items || null).projector(product),
  )).memoized;

  const selectCompositeProductDiscountAmount = defaultMemoize((id: DaffCompositeProduct['id']) => createSelector<DaffCompositeProductStateRootSlice<T>, [T, EntityState<DaffCompositeProductEntity>['entities']], number>(
    selectProduct(id),
    selectCompositeProductAppliedOptionsEntities,
    (product: T, appliedOptionsEntities) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }
      const appliedConfigurationItem = appliedOptionsEntities[product.id].items;
      if((<DaffCompositeProduct><any>product).items.filter(item => item.required && appliedConfigurationItem[item.id].value === null).length > 0) {
        return undefined;
      }
      const appliedOptions = getAppliedOptionsForConfiguration((<DaffCompositeProduct><any>product), appliedConfigurationItem);

      return (<DaffCompositeProduct><any>product).items.reduce((acc, item) =>
        appliedOptions[item.id]?.discount?.amount ? daffAdd(acc, daffMultiply(appliedOptions[item.id].discount.amount, appliedOptions[item.id].quantity)) : acc,
      product.discount.amount);
    },
  )).memoized;

  const selectCompositeProductDiscountPercent = defaultMemoize((id: DaffCompositeProduct['id']) => createSelector<DaffCompositeProductStateRootSlice<T>, [T, EntityState<DaffCompositeProductEntity>['entities']], number>(
    selectProduct(id),
    selectCompositeProductAppliedOptionsEntities,
    (product: T, appliedOptionsEntities) => {
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }
      const appliedOptions = appliedOptionsEntities[product.id].items;
      if((<DaffCompositeProduct><any>product).items.filter(item => item.required && appliedOptions[item.id].value === null).length > 0) {
        return undefined;
      }

      const prices = getMinPricesForConfiguration(
        (<DaffCompositeProduct><any>product),
        getAppliedOptionsForConfiguration((<DaffCompositeProduct><any>product), appliedOptions),
      );

      return daffMultiply(
        daffDivide(
          daffSubtract(prices.originalPrice, prices.discountedPrice),
          prices.originalPrice,
        ),
        100,
      );
    },
  )).memoized;

  return {
    selectCompositeProductRequiredItemPricesForConfiguration,
    selectCompositeProductOptionalItemPricesForConfiguration,
    selectCompositeProductPricesAsCurrentlyConfigured,
    selectCompositeProductDiscountAmount,
    selectCompositeProductDiscountPercent,
  };
};

/**
 * A function that returns all selectors related to the composite product feature.
 *
 * Returns {@link DaffCompositeProductMemoizedSelectors}.
 */
export const getDaffCompositeProductPriceSelectors: <T extends DaffProduct = DaffProduct>() => DaffCompositeProductMemoizedSelectors<T> = defaultMemoize(<T extends DaffProduct = DaffProduct>() => createCompositeProductSelectors<T>()).memoized;

/**
 * The minimum price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 * @param appliedOption the {@link DaffCompositeProductItemOption} applied to the item, if any
 */
function getMinimumRequiredCompositeItemPrice(item: DaffCompositeProductItem, appliedOption: DaffCompositeProductItemOption): number {
  return item.required ? Math.min(...getOptionTotals(item, appliedOption, option => option.price)) : 0;
}

/**
 * The maximum price for an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 * @param appliedOption the {@link DaffCompositeProductItemOption} applied to the item, if any
 */
function getMaximumRequiredCompositeItemPrice(item: DaffCompositeProductItem, appliedOption: DaffCompositeProductItemOption): number {
  return item.required ? Math.max(...getOptionTotals(item, appliedOption, option => option.price)) : 0;
}

/**
 * The minimum discounted price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 * @param appliedOption the {@link DaffCompositeProductItemOption} applied to the item, if any
 */
function getMinimumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem, appliedOption: DaffCompositeProductItemOption): number {
  return item.required ? Math.min(...getOptionTotals(item, appliedOption, getDiscountedPrice)) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 * @param appliedOption the {@link DaffCompositeProductItemOption} applied to the item, if any
 */
function getMaximumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem, appliedOption: DaffCompositeProductItemOption): number {
  return item.required ? Math.max(...getOptionTotals(item, appliedOption, getDiscountedPrice)) : 0;
}

/**
 * Gets the minimum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 *
 * @param product a DaffCompositeProduct
 * @param appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 */
function getMinPricesForConfiguration(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): DaffProductPrices {
  return {
    discountedPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
        getMinimumRequiredCompositeItemDiscountedPrice(item, appliedOptions[item.id]),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        getMinimumRequiredCompositeItemPrice(item, appliedOptions[item.id]),
    ), product.price),
  };
}

/**
 * Gets the maximum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 *
 * @param product a DaffCompositeProduct
 * @param appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 */
function getMaxPricesForConfiguration(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): DaffProductPrices {
  return {
    discountedPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
        getMaximumRequiredCompositeItemDiscountedPrice(item, appliedOptions[item.id]),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        getMaximumRequiredCompositeItemPrice(item, appliedOptions[item.id]),
    ), product.price),
  };
}

function getDiscountedPrice(product: DaffProduct): number {
  return product.discount ? daffSubtract(product.price, product.discount.amount) : product.price;
}

/**
 * Gets the maximum prices of a composite product including optional item prices.
 *
 * @param product a DaffCompositeProduct
 */
function getMaxPricesForConfigurationIncludingOptionalItems(product: DaffCompositeProduct, appliedOptions: Dictionary<DaffCompositeProductItemOption>): DaffProductPrices {
  return {
    discountedPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
        Math.max(...getOptionTotals(item, appliedOptions[item.id], getDiscountedPrice)),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        Math.max(...getOptionTotals(item, appliedOptions[item.id], option => option.price)),
    ), product.price),
  };
}

/**
 * Takes a product and a set of option configurations and convert it into a dictionary of the full option objects.
 *
 * @param product a DaffCompositeProduct
 * @param configuration a Dictionary<DaffCompositeConfigurationItem> used to build the appliedOptions object.
 */
function getAppliedOptionsForConfiguration(product: DaffCompositeProduct, configuration: Dictionary<DaffCompositeConfigurationItem>): Dictionary<DaffCompositeProductItemOption> {
  return product.items.reduce((acc, item) => ({
    ...acc,
    [item.id]: configuration[item.id] ? {
      ...item.options.find(option => option.id === configuration[item.id].value),
      // an unselected item without a quantity falls back to the quantities of its options
      quantity: configuration[item.id].qty ?? (configuration[item.id].value ? 1 : null),
    } : null,
  }), {});
}

function appliedOptionHasId(appliedOption: DaffCompositeProductItemOption): boolean {
  return !!appliedOption?.id;
}

/**
 * Gets the total price of each option of an item.
 * The quantity of the applied option takes precedence, otherwise each option is priced according to its own quantity.
 *
 * @param item a DaffCompositeProductItem
 * @param appliedOption the {@link DaffCompositeProductItemOption} applied to the item, if any
 * @param getPrice gets the unit price of an option
 */
function getOptionTotals(item: DaffCompositeProductItem, appliedOption: DaffCompositeProductItemOption, getPrice: (option: DaffCompositeProductItemOption) => number): number[] {
  return item.options.map(option => daffMultiply(getPrice(option), appliedOption?.quantity ?? option.quantity ?? 1));
}
