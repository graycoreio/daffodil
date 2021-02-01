import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import {
  daffAdd,
  daffMultiply,
  daffSubtract,
} from '@daffodil/core';

import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import { DaffCompositeProduct } from '../../models/composite-product';
import {
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
} from '../../models/composite-product-item';
import {
  DaffProductPrices,
  DaffPriceRange,
} from '../../models/prices';
import {
  DaffProduct,
  DaffProductTypeEnum,
} from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';

export interface DaffCompositeProductMemoizedSelectors {
	/**
	 * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
	 */
	selectCompositeProductRequiredItemPricesForConfiguration: MemoizedSelectorWithProps<Record<string, any>, { id: DaffCompositeProduct['id']; configuration?: Dictionary<DaffCompositeConfigurationItem> }, DaffPriceRange>;
	/**
	 * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
	 */
	selectCompositeProductOptionalItemPricesForConfiguration: MemoizedSelectorWithProps<Record<string, any>, { id: DaffCompositeProduct['id']; configuration?: Dictionary<DaffCompositeConfigurationItem> }, DaffPriceRange>;
	/**
	 * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
	 * excluding unselected, optional item prices.
	 */
	selectCompositeProductPricesAsCurrentlyConfigured: MemoizedSelectorWithProps<Record<string, any>, { id: DaffCompositeProduct['id'] }, DaffPriceRange>;
}

const createCompositeProductSelectors = (): DaffCompositeProductMemoizedSelectors => {

  const {
    selectProductEntities,
    selectProduct,
  } = getDaffProductEntitiesSelectors();

  const {
    selectCompositeProductAppliedOptionsEntitiesState,
  } = getDaffCompositeProductEntitiesSelectors();

  const selectCompositeProductRequiredItemPricesForConfiguration = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const appliedOptions = props.configuration ? getAppliedOptionsForConfiguration(<DaffCompositeProduct>product, props.configuration) : {};
      return {
        minPrice: getMinPricesForConfiguration(<DaffCompositeProduct>product, appliedOptions),
        maxPrice: getMaxPricesForConfiguration(<DaffCompositeProduct>product, appliedOptions),
      };
    },
  );

  const selectCompositeProductOptionalItemPricesForConfiguration = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = selectProduct.projector(products, { id: props.id });
      if(product.type !== DaffProductTypeEnum.Composite) {
        return undefined;
      }

      const appliedOptions = props.configuration ? getAppliedOptionsForConfiguration(<DaffCompositeProduct>product, props.configuration) : {};
      return {
        minPrice: getMinPricesForConfiguration(<DaffCompositeProduct>product, appliedOptions),
        maxPrice: getMaxPricesForConfigurationIncludingOptionalItems(<DaffCompositeProduct>product, appliedOptions),
      };
    },
  );

  const selectCompositeProductPricesAsCurrentlyConfigured = createSelector(
    selectProductEntities,
    selectCompositeProductAppliedOptionsEntitiesState,
    (products, appliedOptionsEntities, props) => selectCompositeProductRequiredItemPricesForConfiguration.projector(products, {
      id: props.id,
      configuration: appliedOptionsEntities.entities[props.id]?.items || null,
    }),
  );

  return {
    selectCompositeProductRequiredItemPricesForConfiguration,
    selectCompositeProductOptionalItemPricesForConfiguration,
    selectCompositeProductPricesAsCurrentlyConfigured,
  };
};

export const getDaffCompositeProductSelectors = (() => {
  let cache;
  return (): DaffCompositeProductMemoizedSelectors => cache = cache
    ? cache
    : createCompositeProductSelectors();
})();

/**
 * The minimum price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 */
function getMinimumRequiredCompositeItemPrice(item: DaffCompositeProductItem, qty: number): number {
  return item.required ? daffMultiply(Math.min(...item.options.map(option => option.price)), qty) : 0;
}

/**
 * The maximum price for an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 */
function getMaximumRequiredCompositeItemPrice(item: DaffCompositeProductItem, qty: number): number {
  return item.required ? daffMultiply(Math.max(...item.options.map(option => option.price)), qty) : 0;
}

/**
 * The minimum discounted price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 */
function getMinimumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem, qty: number): number {
  return item.required ? daffMultiply(Math.min(...item.options.map(getDiscountedPrice)), qty) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 *
 * @param item DaffCompositeProductItem
 */
function getMaximumRequiredCompositeItemDiscountedPrice(item: DaffCompositeProductItem, qty: number): number {
  return item.required ? daffMultiply(Math.max(...item.options.map(getDiscountedPrice)), qty) : 0;
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
        getMinimumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id])),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        getMinimumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id])),
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
        getMaximumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id])),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: product.items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        getMaximumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id])),
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
    discountedPrice: (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
        appliedOptionHasQty(appliedOptions[item.id]) ?
          daffMultiply(Math.max(...item.options.map(getDiscountedPrice)), appliedOptions[item.id].quantity) :
          Math.max(...item.options.map(getDiscountedPrice)),
    ), getDiscountedPrice(product)),
    discount: { amount: null, percent: null },
    originalPrice: (<DaffCompositeProduct>product).items.reduce((acc, item) => daffAdd(
      acc,
      appliedOptionHasId(appliedOptions[item.id]) ?
        daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
        appliedOptionHasQty(appliedOptions[item.id]) ?
          daffMultiply(Math.max(...item.options.map(option => option.price)), appliedOptions[item.id].quantity) :
          Math.max(...item.options.map(option => option.price)),
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
  return (<DaffCompositeProduct>product).items.reduce((acc, item) => ({
    ...acc,
    [item.id]: configuration[item.id] ? {
      ...item.options.find(option => option.id === configuration[item.id].value),
      quantity: (configuration[item.id].qty === null || configuration[item.id].qty === undefined) ? 1 : configuration[item.id].qty,
    } : null,
  }), {});
}

function appliedOptionHasId(appliedOption: DaffCompositeProductItemOption): boolean {
  return !!appliedOption?.id;
}

function getOptionQty(appliedOption: DaffCompositeProductItemOption): number {
  return appliedOptionHasQty(appliedOption) ? appliedOption.quantity : 1;
}

function appliedOptionHasQty(appliedOption: DaffCompositeProductItemOption): boolean {
  return appliedOption?.quantity !== null && appliedOption?.quantity !== undefined;
}
