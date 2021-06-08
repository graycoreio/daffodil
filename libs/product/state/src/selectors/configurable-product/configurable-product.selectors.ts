import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { daffSubtract } from '@daffodil/core';
import {
  DaffProductTypeEnum,
  DaffConfigurableProductVariant,
  DaffConfigurableProduct,
  DaffConfigurableProductAttribute,
} from '@daffodil/product';

import { DaffConfigurableProductEntityAttribute } from '../../reducers/configurable-product-entities/configurable-product-entity';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';

export interface DaffConfigurableProductMemoizedSelectors {
	selectAllConfigurableProductAttributes: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, Dictionary<string[]>>;
	selectAllConfigurableProductVariants: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, DaffConfigurableProductVariant[]>;
	selectMatchingConfigurableProductVariants: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, DaffConfigurableProductVariant[]>;
	selectConfigurableProductPrices: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number[]>;
	selectConfigurableProductDiscountedPrices: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number[]>;
	selectConfigurableProductPercentDiscounts: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number[]>;
	selectConfigurableProductHasDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, boolean>;
	selectConfigurableProductMinimumPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductMaximumPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductMinimumDiscountedPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductMaximumDiscountedPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductMinimumPercentDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	selectConfigurableProductMaximumPercentDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, number>;
	isConfigurablePriceRanged: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, boolean>;
	selectSelectableConfigurableProductAttributes: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<Record<string, any>, Dictionary<string[]>>;
}

const createConfigurableProductSelectors = (): DaffConfigurableProductMemoizedSelectors => {

  const {
    selectConfigurableProductAppliedAttributes,
  } = getDaffConfigurableProductEntitiesSelectors();

  const {
    selectProduct,
  } = getDaffProductEntitiesSelectors();

  /**
   * Selector for all variants of the product.
   */
  const selectAllConfigurableProductVariants = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectProduct(productId),
    (product: DaffConfigurableProduct) => {
      if(!product || product.type !== DaffProductTypeEnum.Configurable) {
        return [];
      }
      return product.variants;
    },
  )).memoized;

  /**
   * Selector for the variants of the product that match the currently applied attributes.
   */
  const selectMatchingConfigurableProductVariants = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectProduct(productId),
    selectConfigurableProductAppliedAttributes(productId),
    (product: DaffConfigurableProduct, appliedAttributes) => {
      if(!product || product.type !== DaffProductTypeEnum.Configurable) {
        return [];
      }
      return product.variants.filter(variant => isVariantAvailable(appliedAttributes, variant));
    },
  )).memoized;

  /**
   * Selector for the range of price for current configuration of the configurable product.
   */
  const selectConfigurableProductPrices = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant => variant.price),
  )).memoized;

  /**
   * Selector for the range of discounts for current configuration of the configurable product.
   */
  const selectConfigurableProductDiscountedPrices = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant =>
      variant.discount ? daffSubtract(variant.price, variant.discount.amount) : variant.price,
    ),
  )).memoized;

  /**
   * Selector for the range of percent discounts for current configuration of the configurable product.
   */
  const selectConfigurableProductPercentDiscounts = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant => variant.discount?.percent),
  )).memoized;

  /**
   * Selector that determines whether any of the variants for the current configuration of the configurable product has a discount.
   */
  const selectConfigurableProductHasDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.reduce((acc, variant) =>
      acc || (variant.discount?.amount > 0), false,
    ),
  )).memoized;

  /**
   * Selector for the minimum price in the range of configurable product variant prices.
   */
  const selectConfigurableProductMinimumPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPrices(productId),
    getMinimumPrice,
  )).memoized;

  /**
   * Selector for the maximum price in the range of configurable product variant prices.
   */
  const selectConfigurableProductMaximumPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPrices(productId),
    getMaximumPrice,
  )).memoized;

  /**
   * Selector for the minimum discounted price in the range of configurable product variants.
   */
  const selectConfigurableProductMinimumDiscountedPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductDiscountedPrices(productId),
    getMinimumPrice,
  )).memoized;

  /**
   * Selector for the maximum discounted price in the range of configurable product variants.
   */
  const selectConfigurableProductMaximumDiscountedPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductDiscountedPrices(productId),
    getMaximumPrice,
  )).memoized;

  /**
   * Selector for the minimum percent discount in the range of configurable product variants.
   */
  const selectConfigurableProductMinimumPercentDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPercentDiscounts(productId),
    getMinimumPrice,
  )).memoized;

  /**
   * Selector for the maximum percent discount in the range of configurable product variants.
   */
  const selectConfigurableProductMaximumPercentDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPercentDiscounts(productId),
    getMaximumPrice,
  )).memoized;

  /**
   * Selector for whether the configurable product variant prices have been narrowed to a single price.
   */
  const isConfigurablePriceRanged = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductMinimumPrice(productId),
    selectConfigurableProductMaximumPrice(productId),
    (minPrice: number, maxPrice: number) => minPrice !== maxPrice,
  )).memoized;

  const selectAllConfigurableProductAttributes = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectProduct(productId),
    (product: DaffConfigurableProduct) => {
      if(product.type !== DaffProductTypeEnum.Configurable) {
        return {};
      }
      return product.configurableAttributes.reduce((acc, attribute) => ({
        ...acc,
        [attribute.code]: attribute.values.map(value => value.value),
      }), {});
    },
  )).memoized;

  /**
   * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
   * The remaining variants of the product are derived from the currently applied attributes.
   */
  const selectSelectableConfigurableProductAttributes = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectProduct(productId),
    selectConfigurableProductAppliedAttributes(productId),
    (product: DaffConfigurableProduct, appliedAttributes: DaffConfigurableProductEntityAttribute[]) => {
      if(product.type !== DaffProductTypeEnum.Configurable) {
        return {};
      }

      const selectableAttributes = initializeSelectableAttributes(product.configurableAttributes);

      // Set which values of applied attribute codes should be set as selectable based on the order that they were selected
      const matchedVariants = appliedAttributes.reduce((matchingVariants, appliedAttribute, i) => {
        const filteredVariants = matchingVariants.filter(variant => isVariantAvailable(appliedAttributes.slice(0, i), variant));

        selectableAttributes[appliedAttribute.code] = getSelectableAttributesFromVariants(selectableAttributes, filteredVariants, appliedAttribute.code);

        return filteredVariants;
      }, product.variants).filter(variant =>
        isVariantAvailable(appliedAttributes, variant),
      );

      // Set which values of the unapplied attribute codes should be set as selectable based on the matching variants of all
      // applied attributes.
      product.configurableAttributes.forEach(attribute => {
        if (!selectableAttributes[attribute.code].length) {
          selectableAttributes[attribute.code] = getSelectableAttributesFromVariants(selectableAttributes, matchedVariants, attribute.code);
        }
      });

      return selectableAttributes;
    },
  )).memoized;

  return {
    selectAllConfigurableProductAttributes,
    selectAllConfigurableProductVariants,
    selectConfigurableProductPrices,
    selectConfigurableProductDiscountedPrices,
    selectConfigurableProductPercentDiscounts,
    selectConfigurableProductHasDiscount,
    selectConfigurableProductMinimumPrice,
    selectConfigurableProductMaximumPrice,
    selectConfigurableProductMinimumDiscountedPrice,
    selectConfigurableProductMaximumDiscountedPrice,
    selectConfigurableProductMinimumPercentDiscount,
    selectConfigurableProductMaximumPercentDiscount,
    isConfigurablePriceRanged,
    selectMatchingConfigurableProductVariants,
    selectSelectableConfigurableProductAttributes,
  };
};

function getSelectableAttributesFromVariants(selectableAttributes: Dictionary<string[]>, variants: DaffConfigurableProductVariant[], code: string) {
  return variants.reduce((selectedAttributes, variant) =>
    isVariantAttributeMarkedAsSelectable(selectedAttributes, variant.appliedAttributes[code])
      ? selectedAttributes
      : [
        ...selectedAttributes,
        variant.appliedAttributes[code],
      ],
  selectableAttributes[code],
  );
}

export const getDaffConfigurableProductSelectors = (() => {
  let cache;
  return (): DaffConfigurableProductMemoizedSelectors => cache = cache
    ? cache
    : createConfigurableProductSelectors();
})();

function isVariantAvailable(
  appliedAttributes: DaffConfigurableProductEntityAttribute[],
  variant: DaffConfigurableProductVariant,
): boolean {
  return variant.in_stock &&
		appliedAttributes.reduce((acc, attribute) =>
		  acc && attribute.value === variant.appliedAttributes[attribute.code],
		true,
		);
}

function getMinimumPrice(prices: number[]): number {
  return prices.reduce(
    (acc, price) => price < acc ? price : acc,
    prices[0],
  );
}

function getMaximumPrice(prices: number[]): number {
  return prices.reduce(
    (acc, price) => price > acc ? price : acc,
    prices[0],
  );
}

function initializeSelectableAttributes(attributes: DaffConfigurableProductAttribute[]): Dictionary<string[]> {
  return attributes.reduce((acc, attribute) => ({
    ...acc,
    [attribute.code]: [],
  }), {});
}

function isVariantAttributeMarkedAsSelectable(attributeArray: string[], variantValue: string) {
  return attributeArray.indexOf(variantValue) > -1;
}
