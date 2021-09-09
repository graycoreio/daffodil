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
import {
  DaffProductStateRootSlice,
  getDaffProductEntitiesSelectors,
} from '@daffodil/product/state';

import { DaffConfigurableProductEntityAttribute } from '../../reducers/configurable-product-entities/configurable-product-entity';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';

/**
 * An interface describing all selectors unique to configurable products including ranged pricing, configurable attributes, and product variants.
 */
export interface DaffConfigurableProductMemoizedSelectors {
	/**
	 * Selects all possible attributes of a configurable product.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectAllConfigurableProductAttributes: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, Dictionary<string[]>>;
	/**
	 * Selects all variants of the configurable product.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectAllConfigurableProductVariants: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, DaffConfigurableProductVariant[]>;
	/**
	 * Selects the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectMatchingConfigurableProductVariants: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, DaffConfigurableProductVariant[]>;
	/**
	 * Selects all prices for the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductPrices: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number[]>;
	/**
	 * Selects all discounted prices for the configurable product variant that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductDiscountedPrices: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number[]>;
	/**
	 * Selects all percent discounts for the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductPercentDiscounts: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number[]>;
	/**
	 * Selects whether or not any variants that match the currently applied attributes have a discount.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductHasDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, boolean>;
	/**
	 * Selects the minimum possible price of the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductMinimumPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the maximum possible price of the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductMaximumPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the minimum possible discounted price of the configurable product variants that match the currently applied attributes.
	 */
	selectConfigurableProductMinimumDiscountedPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the maximum possible discounted price of the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductMaximumDiscountedPrice: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the minimum possible percent discount of the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductMinimumPercentDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects the maximum possible percent discount of the configurable product variants that match the currently applied attributes.
	 *
	 * @param productId the id of the configurable product.
	 */
	selectConfigurableProductMaximumPercentDiscount: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, number>;
	/**
	 * Selects whether or not the currently applied attributes result in more than one possible price.
	 *
	 * @param productId the id of the configurable product.
	 */
	isConfigurablePriceRanged: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, boolean>;
	/**
	 * Selects the available/selectable configurable product attributes derived from the order of currently applied attributes and the remaining variants
	 * (determined by the currently applied attributes). An attribute might not be selectable if none of the matching variants have that particular attribute.
	 */
	selectSelectableConfigurableProductAttributes: (productId: DaffConfigurableProduct['id']) => MemoizedSelector<DaffProductStateRootSlice, Dictionary<string[]>>;
}

const createConfigurableProductSelectors = (): DaffConfigurableProductMemoizedSelectors => {

  const {
    selectConfigurableProductAppliedAttributes,
  } = getDaffConfigurableProductEntitiesSelectors();

  const {
    selectProduct,
  } = getDaffProductEntitiesSelectors();

  const selectAllConfigurableProductVariants = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectProduct(productId),
    (product: DaffConfigurableProduct) => {
      if(!product || product.type !== DaffProductTypeEnum.Configurable) {
        return [];
      }
      return product.variants;
    },
  )).memoized;

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

  const selectConfigurableProductPrices = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant => variant.price),
  )).memoized;

  const selectConfigurableProductDiscountedPrices = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant =>
      variant.discount ? daffSubtract(variant.price, variant.discount.amount) : variant.price,
    ),
  )).memoized;

  const selectConfigurableProductPercentDiscounts = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.map(variant => variant.discount?.percent),
  )).memoized;

  const selectConfigurableProductHasDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectMatchingConfigurableProductVariants(productId),
    (variants: DaffConfigurableProductVariant[]) => variants.reduce((acc, variant) =>
      acc || (variant.discount?.amount > 0), false,
    ),
  )).memoized;

  const selectConfigurableProductMinimumPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPrices(productId),
    getMinimumPrice,
  )).memoized;

  const selectConfigurableProductMaximumPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPrices(productId),
    getMaximumPrice,
  )).memoized;

  const selectConfigurableProductMinimumDiscountedPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductDiscountedPrices(productId),
    getMinimumPrice,
  )).memoized;

  const selectConfigurableProductMaximumDiscountedPrice = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductDiscountedPrices(productId),
    getMaximumPrice,
  )).memoized;

  const selectConfigurableProductMinimumPercentDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPercentDiscounts(productId),
    getMinimumPrice,
  )).memoized;

  const selectConfigurableProductMaximumPercentDiscount = defaultMemoize((productId: DaffConfigurableProduct['id']) => createSelector(
    selectConfigurableProductPercentDiscounts(productId),
    getMaximumPrice,
  )).memoized;

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

/**
 * A function that returns all configurable product selectors.
 * Returns {@link DaffConfigurableProductMemoizedSelectors}.
 */
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
