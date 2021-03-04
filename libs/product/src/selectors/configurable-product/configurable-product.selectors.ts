import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import { daffSubtract } from '@daffodil/core';

import {
  DaffConfigurableProductVariant,
  DaffConfigurableProduct,
  DaffConfigurableProductAttribute,
} from '../../models/configurable-product';
import { DaffProductTypeEnum } from '../../models/product';
import { DaffConfigurableProductEntityAttribute } from '../../reducers/configurable-product-entities/configurable-product-entity';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';

export interface DaffConfigurableProductMemoizedSelectors {
	selectAllConfigurableProductAttributes: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, Dictionary<string[]>>;
	selectAllConfigurableProductVariants: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffConfigurableProductVariant[]>;
	selectMatchingConfigurableProductVariants: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, DaffConfigurableProductVariant[]>;
	selectConfigurableProductPrices: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number[]>;
	selectConfigurableProductDiscountedPrices: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number[]>;
	selectConfigurableProductPercentDiscounts: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number[]>;
	selectConfigurableProductHasDiscount: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, boolean>;
	selectConfigurableProductMinimumPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	selectConfigurableProductMaximumPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	selectConfigurableProductMinimumDiscountedPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	selectConfigurableProductMaximumDiscountedPrice: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	selectConfigurableProductMinimumPercentDiscount: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	selectConfigurableProductMaximumPercentDiscount: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, number>;
	isConfigurablePriceRanged: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, boolean>;
	selectSelectableConfigurableProductAttributes: MemoizedSelectorWithProps<Record<string, any>, Record<string, any>, Dictionary<string[]>>;
}

const createConfigurableProductSelectors = (): DaffConfigurableProductMemoizedSelectors => {

  const {
    selectConfigurableProductAppliedAttributes,
    selectConfigurableProductAppliedAttributesEntitiesState,
  } = getDaffConfigurableProductEntitiesSelectors();

  const {
    selectProductEntities,
    selectProduct,
  } = getDaffProductEntitiesSelectors();

  /**
   * Selector for all variants of the product.
   */
  const selectAllConfigurableProductVariants = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
      if(!product || product.type !== DaffProductTypeEnum.Configurable) {
        return [];
      }
      return product.variants;
    },
  );

  /**
   * Selector for the variants of the product that match the currently applied attributes.
   */
  const selectMatchingConfigurableProductVariants = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => {
      const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
      if(!product || product.type !== DaffProductTypeEnum.Configurable) {
        return [];
      }
      const appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
      return product.variants.filter(variant => isVariantAvailable(appliedAttributes, variant));
    },
  );

  /**
   * Selector for the range of price for current configuration of the configurable product.
   */
  const selectConfigurableProductPrices = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
      .map(variant => variant.price),
  );

  /**
   * Selector for the range of discounts for current configuration of the configurable product.
   */
  const selectConfigurableProductDiscountedPrices = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
      .map(variant => variant.discount ? daffSubtract(variant.price, variant.discount.amount) : variant.price),
  );

  /**
   * Selector for the range of percent discounts for current configuration of the configurable product.
   */
  const selectConfigurableProductPercentDiscounts = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
      .map(variant => variant.discount && variant.discount.percent),
  );

  /**
   * Selector that determines whether any of the variants for the current configuration of the configurable product has a discount.
   */
  const selectConfigurableProductHasDiscount = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
      .reduce((acc, variant) => acc || (variant.discount && variant.discount.amount > 0), false),
  );

  /**
   * Selector for the minimum price in the range of configurable product variant prices.
   */
  const selectConfigurableProductMinimumPrice = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMinimumPrice(
      selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for the maximum price in the range of configurable product variant prices.
   */
  const selectConfigurableProductMaximumPrice = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMaximumPrice(
      selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for the minimum discounted price in the range of configurable product variants.
   */
  const selectConfigurableProductMinimumDiscountedPrice = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMinimumPrice(
      selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for the maximum discounted price in the range of configurable product variants.
   */
  const selectConfigurableProductMaximumDiscountedPrice = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMaximumPrice(
      selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for the minimum percent discount in the range of configurable product variants.
   */
  const selectConfigurableProductMinimumPercentDiscount = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMinimumPrice(
      selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for the maximum percent discount in the range of configurable product variants.
   */
  const selectConfigurableProductMaximumPercentDiscount = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => getMaximumPrice(
      selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id }),
    ),
  );

  /**
   * Selector for whether the configurable product variant prices have been narrowed to a single price.
   */
  const isConfigurablePriceRanged = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => {
      const minPrice = selectConfigurableProductMinimumPrice.projector(products, appliedAttributesEntities, { id: props.id });
      const maxPrice = selectConfigurableProductMaximumPrice.projector(products, appliedAttributesEntities, { id: props.id });
      return minPrice !== maxPrice;
    },
  );

  const selectAllConfigurableProductAttributes = createSelector(
    selectProductEntities,
    (products, props) => {
      const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
      if(product.type !== DaffProductTypeEnum.Configurable) {
        return {};
      }
      return product.configurableAttributes.reduce((acc, attribute) => ({
        ...acc,
        [attribute.code]: attribute.values.map(value => value.value),
      }), {});
    },
  );

  /**
   * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
   * The remaining variants of the product are derived from the currently applied attributes.
   */
  const selectSelectableConfigurableProductAttributes = createSelector(
    selectProductEntities,
    selectConfigurableProductAppliedAttributesEntitiesState,
    (products, appliedAttributesEntities, props) => {
      const product = <DaffConfigurableProduct>selectProduct.projector(products, { id: props.id });
      if(product.type !== DaffProductTypeEnum.Configurable) {
        return {};
      }
      const appliedAttributes: DaffConfigurableProductEntityAttribute[] = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });

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
  );

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
