/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { daffSubtract } from '@daffodil/core';
import { DaffProductTypeEnum } from '../../models/product';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
/**
 * @record
 */
export function DaffConfigurableProductMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectAllConfigurableProductAttributes;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectAllConfigurableProductVariants;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectMatchingConfigurableProductVariants;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductPrices;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductDiscountedPrices;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductPercentDiscounts;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductHasDiscount;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumPrice;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumPrice;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumDiscountedPrice;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumDiscountedPrice;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumPercentDiscount;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumPercentDiscount;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.isConfigurablePriceRanged;
    /** @type {?} */
    DaffConfigurableProductMemoizedSelectors.prototype.selectSelectableConfigurableProductAttributes;
}
/** @type {?} */
const createConfigurableProductSelectors = (/**
 * @return {?}
 */
() => {
    const { selectConfigurableProductAppliedAttributes, selectConfigurableProductAppliedAttributesEntitiesState } = getDaffConfigurableProductEntitiesSelectors();
    const { selectProductEntities, selectProduct } = getDaffProductEntitiesSelectors();
    /**
     * Selector for all variants of the product.
     * @type {?}
     */
    const selectAllConfigurableProductVariants = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (!product || product.type !== DaffProductTypeEnum.Configurable) {
            return [];
        }
        return product.variants;
    }));
    /**
     * Selector for the variants of the product that match the currently applied attributes.
     * @type {?}
     */
    const selectMatchingConfigurableProductVariants = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        /** @type {?} */
        const product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (!product || product.type !== DaffProductTypeEnum.Configurable) {
            return [];
        }
        /** @type {?} */
        const appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
        return product.variants.filter((/**
         * @param {?} variant
         * @return {?}
         */
        variant => isVariantAvailable(appliedAttributes, variant)));
    }));
    /**
     * Selector for the range of price for current configuration of the configurable product.
     * @type {?}
     */
    const selectConfigurableProductPrices = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        variant => variant.price));
    }));
    /**
     * Selector for the range of discounts for current configuration of the configurable product.
     * @type {?}
     */
    const selectConfigurableProductDiscountedPrices = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        variant => variant.discount ? daffSubtract(variant.price, variant.discount.amount) : variant.price));
    }));
    /**
     * Selector for the range of percent discounts for current configuration of the configurable product.
     * @type {?}
     */
    const selectConfigurableProductPercentDiscounts = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        variant => variant.discount && variant.discount.percent));
    }));
    /**
     * Selector that determines whether any of the variants for the current configuration of the configurable product has a discount.
     * @type {?}
     */
    const selectConfigurableProductHasDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .reduce((/**
         * @param {?} acc
         * @param {?} variant
         * @return {?}
         */
        (acc, variant) => acc || (variant.discount && variant.discount.amount > 0)), false);
    }))
    /**
     * Selector for the minimum price in the range of configurable product variant prices.
     */
    ;
    /**
     * Selector for the minimum price in the range of configurable product variant prices.
     * @type {?}
     */
    const selectConfigurableProductMinimumPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMinimumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for the maximum price in the range of configurable product variant prices.
     */
    ;
    /**
     * Selector for the maximum price in the range of configurable product variant prices.
     * @type {?}
     */
    const selectConfigurableProductMaximumPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMaximumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for the minimum discounted price in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the minimum discounted price in the range of configurable product variants.
     * @type {?}
     */
    const selectConfigurableProductMinimumDiscountedPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMinimumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for the maximum discounted price in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the maximum discounted price in the range of configurable product variants.
     * @type {?}
     */
    const selectConfigurableProductMaximumDiscountedPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMaximumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for the minimum percent discount in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the minimum percent discount in the range of configurable product variants.
     * @type {?}
     */
    const selectConfigurableProductMinimumPercentDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMinimumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for the maximum percent discount in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the maximum percent discount in the range of configurable product variants.
     * @type {?}
     */
    const selectConfigurableProductMaximumPercentDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => getMaximumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id }))))
    /**
     * Selector for whether the configurable product variant prices have been narrowed to a single price.
     */
    ;
    /**
     * Selector for whether the configurable product variant prices have been narrowed to a single price.
     * @type {?}
     */
    const isConfigurablePriceRanged = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        /** @type {?} */
        const minPrice = selectConfigurableProductMinimumPrice.projector(products, appliedAttributesEntities, { id: props.id });
        /** @type {?} */
        const maxPrice = selectConfigurableProductMaximumPrice.projector(products, appliedAttributesEntities, { id: props.id });
        return minPrice !== maxPrice;
    }));
    /** @type {?} */
    const selectAllConfigurableProductAttributes = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (product.type !== DaffProductTypeEnum.Configurable) {
            return {};
        }
        return product.configurableAttributes.reduce((/**
         * @param {?} acc
         * @param {?} attribute
         * @return {?}
         */
        (acc, attribute) => (Object.assign({}, acc, { [attribute.code]: attribute.values.map((/**
             * @param {?} value
             * @return {?}
             */
            value => value.value)) }))), {});
    }));
    /**
     * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
     * The remaining variants of the product are derived from the currently applied attributes.
     * @type {?}
     */
    const selectSelectableConfigurableProductAttributes = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedAttributesEntities, props) => {
        /** @type {?} */
        const product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (product.type !== DaffProductTypeEnum.Configurable) {
            return {};
        }
        /** @type {?} */
        const appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
        /** @type {?} */
        const selectableAttributes = initializeSelectableAttributes(product.configurableAttributes);
        // Set which values of applied attribute codes should be set as selectable based on the order that they were selected
        /** @type {?} */
        const matchedVariants = appliedAttributes.reduce((/**
         * @param {?} matchingVariants
         * @param {?} appliedAttribute
         * @param {?} i
         * @return {?}
         */
        (matchingVariants, appliedAttribute, i) => {
            /** @type {?} */
            const filteredVariants = matchingVariants.filter((/**
             * @param {?} variant
             * @return {?}
             */
            variant => isVariantAvailable(appliedAttributes.slice(0, i), variant)));
            selectableAttributes[appliedAttribute.code] = getSelectableAttributesFromVariants(selectableAttributes, filteredVariants, appliedAttribute.code);
            return filteredVariants;
        }), product.variants).filter((/**
         * @param {?} variant
         * @return {?}
         */
        variant => isVariantAvailable(appliedAttributes, variant)));
        // Set which values of the unapplied attribute codes should be set as selectable based on the matching variants of all
        // applied attributes.
        product.configurableAttributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => {
            if (!selectableAttributes[attribute.code].length) {
                selectableAttributes[attribute.code] = getSelectableAttributesFromVariants(selectableAttributes, matchedVariants, attribute.code);
            }
        }));
        return selectableAttributes;
    }));
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
        selectSelectableConfigurableProductAttributes
    };
});
const ɵ0 = createConfigurableProductSelectors;
/**
 * @param {?} selectableAttributes
 * @param {?} variants
 * @param {?} code
 * @return {?}
 */
function getSelectableAttributesFromVariants(selectableAttributes, variants, code) {
    return variants.reduce((/**
     * @param {?} selectedAttributes
     * @param {?} variant
     * @return {?}
     */
    (selectedAttributes, variant) => isVariantAttributeMarkedAsSelectable(selectedAttributes, variant.appliedAttributes[code])
        ? selectedAttributes
        : [
            ...selectedAttributes,
            variant.appliedAttributes[code]
        ]), selectableAttributes[code]);
}
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createConfigurableProductSelectors());
};
/** @type {?} */
export const getDaffConfigurableProductSelectors = ((ɵ1))();
/**
 * @param {?} appliedAttributes
 * @param {?} variant
 * @return {?}
 */
function isVariantAvailable(appliedAttributes, variant) {
    return variant.in_stock &&
        appliedAttributes.reduce((/**
         * @param {?} acc
         * @param {?} attribute
         * @return {?}
         */
        (acc, attribute) => acc && attribute.value === variant.appliedAttributes[attribute.code]), true);
}
/**
 * @param {?} prices
 * @return {?}
 */
function getMinimumPrice(prices) {
    return prices.reduce((/**
     * @param {?} acc
     * @param {?} price
     * @return {?}
     */
    (acc, price) => price < acc ? price : acc), prices[0]);
}
/**
 * @param {?} prices
 * @return {?}
 */
function getMaximumPrice(prices) {
    return prices.reduce((/**
     * @param {?} acc
     * @param {?} price
     * @return {?}
     */
    (acc, price) => price > acc ? price : acc), prices[0]);
}
/**
 * @param {?} attributes
 * @return {?}
 */
function initializeSelectableAttributes(attributes) {
    return attributes.reduce((/**
     * @param {?} acc
     * @param {?} attribute
     * @return {?}
     */
    (acc, attribute) => (Object.assign({}, acc, { [attribute.code]: [] }))), {});
}
/**
 * @param {?} attributeArray
 * @param {?} variantValue
 * @return {?}
 */
function isVariantAttributeMarkedAsSelectable(attributeArray, variantValue) {
    return attributeArray.indexOf(variantValue) > -1;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3Quc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29uZmlndXJhYmxlLXByb2R1Y3QvY29uZmlndXJhYmxlLXByb2R1Y3Quc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE2QixNQUFNLGFBQWEsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0QsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDdkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFJakcsOERBZ0JDOzs7SUFmQSwwRkFBd0c7O0lBQ3hHLHdGQUFrSDs7SUFDbEgsNkZBQXVIOztJQUN2SCxtRkFBcUY7O0lBQ3JGLDZGQUErRjs7SUFDL0YsNkZBQStGOztJQUMvRix3RkFBeUY7O0lBQ3pGLHlGQUF5Rjs7SUFDekYseUZBQXlGOztJQUN6RixtR0FBbUc7O0lBQ25HLG1HQUFtRzs7SUFDbkcsbUdBQW1HOztJQUNuRyxtR0FBbUc7O0lBQ25HLDZFQUE4RTs7SUFDOUUsaUdBQStHOzs7TUFHMUcsa0NBQWtDOzs7QUFBRyxHQUE2QyxFQUFFO1VBRW5GLEVBQ0wsMENBQTBDLEVBQzFDLHVEQUF1RCxFQUN2RCxHQUFHLDJDQUEyQyxFQUFFO1VBRTNDLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixHQUFHLCtCQUErQixFQUFFOzs7OztVQUsvQixvQ0FBb0MsR0FBRyxjQUFjLENBQzFELHFCQUFxQjs7Ozs7SUFDckIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2NBQ2IsT0FBTyxHQUFHLG1CQUF5QixhQUFhLENBQUMsU0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGRhZmZTdWJ0cmFjdCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RUeXBlRW51bSB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuaW1wb3J0IHsgZ2V0RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vcHJvZHVjdC1lbnRpdGllcy9wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnQsIERhZmZDb25maWd1cmFibGVQcm9kdWN0LCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RNZW1vaXplZFNlbGVjdG9ycyB7XG5cdHNlbGVjdEFsbENvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEaWN0aW9uYXJ5PHN0cmluZ1tdPj47XG5cdHNlbGVjdEFsbENvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50czogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50W10+O1xuXHRzZWxlY3RNYXRjaGluZ0NvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50czogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50W10+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0UHJpY2VzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXJbXT47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3REaXNjb3VudGVkUHJpY2VzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXJbXT47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQZXJjZW50RGlzY291bnRzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXJbXT47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RIYXNEaXNjb3VudDogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUHJpY2U6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtUHJpY2U6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtRGlzY291bnRlZFByaWNlOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bURpc2NvdW50ZWRQcmljZTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QZXJjZW50RGlzY291bnQ6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtUGVyY2VudERpc2NvdW50OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xuXHRpc0NvbmZpZ3VyYWJsZVByaWNlUmFuZ2VkOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0U2VsZWN0YWJsZUNvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEaWN0aW9uYXJ5PHN0cmluZ1tdPj47XG59XG5cbmNvbnN0IGNyZWF0ZUNvbmZpZ3VyYWJsZVByb2R1Y3RTZWxlY3RvcnMgPSAoKTogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RNZW1vaXplZFNlbGVjdG9ycyA9PiB7XG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlXG5cdH0gPSBnZXREYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzKCk7XG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RQcm9kdWN0XG5cdH0gPSBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzKCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBhbGwgdmFyaWFudHMgb2YgdGhlIHByb2R1Y3QuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RBbGxDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IDxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdD5zZWxlY3RQcm9kdWN0LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRpZighcHJvZHVjdCB8fCBwcm9kdWN0LnR5cGUgIT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29uZmlndXJhYmxlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwcm9kdWN0LnZhcmlhbnRzO1xuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSB2YXJpYW50cyBvZiB0aGUgcHJvZHVjdCB0aGF0IG1hdGNoIHRoZSBjdXJyZW50bHkgYXBwbGllZCBhdHRyaWJ1dGVzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gPERhZmZDb25maWd1cmFibGVQcm9kdWN0PnNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKCFwcm9kdWN0IHx8IHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYXBwbGllZEF0dHJpYnV0ZXMgPSBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXMucHJvamVjdG9yKGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0cmV0dXJuIHByb2R1Y3QudmFyaWFudHMuZmlsdGVyKHZhcmlhbnQgPT4gaXNWYXJpYW50QXZhaWxhYmxlKGFwcGxpZWRBdHRyaWJ1dGVzLCB2YXJpYW50KSlcblx0XHR9XG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgcmFuZ2Ugb2YgcHJpY2UgZm9yIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0UHJpY2VzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHRcdFx0Lm1hcCh2YXJpYW50ID0+IHZhcmlhbnQucHJpY2UpO1xuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSByYW5nZSBvZiBkaXNjb3VudHMgZm9yIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0RGlzY291bnRlZFByaWNlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IHtcblx0XHRcdHJldHVybiBzZWxlY3RNYXRjaGluZ0NvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50cy5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0XHRcdC5tYXAodmFyaWFudCA9PiB2YXJpYW50LmRpc2NvdW50ID8gZGFmZlN1YnRyYWN0KHZhcmlhbnQucHJpY2UsIHZhcmlhbnQuZGlzY291bnQuYW1vdW50KSA6IHZhcmlhbnQucHJpY2UpO1xuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSByYW5nZSBvZiBwZXJjZW50IGRpc2NvdW50cyBmb3IgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQZXJjZW50RGlzY291bnRzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHRcdFx0Lm1hcCh2YXJpYW50ID0+IHZhcmlhbnQuZGlzY291bnQgJiYgdmFyaWFudC5kaXNjb3VudC5wZXJjZW50KTtcblx0XHR9XG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBvZiB0aGUgdmFyaWFudHMgZm9yIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGhhcyBhIGRpc2NvdW50LlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEhhc0Rpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHRcdFx0LnJlZHVjZSgoYWNjLCB2YXJpYW50KSA9PiBhY2MgfHwgKHZhcmlhbnQuZGlzY291bnQgJiYgdmFyaWFudC5kaXNjb3VudC5hbW91bnQgPiAwKSwgZmFsc2UpO1xuXHRcdH1cblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIG1pbmltdW0gcHJpY2UgaW4gdGhlIHJhbmdlIG9mIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHZhcmlhbnQgcHJpY2VzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QcmljZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IGdldE1pbmltdW1QcmljZShcblx0XHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQcmljZXMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdClcblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIG1heGltdW0gcHJpY2UgaW4gdGhlIHJhbmdlIG9mIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHZhcmlhbnQgcHJpY2VzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QcmljZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IGdldE1heGltdW1QcmljZShcblx0XHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQcmljZXMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdClcblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIG1pbmltdW0gZGlzY291bnRlZCBwcmljZSBpbiB0aGUgcmFuZ2Ugb2YgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bURpc2NvdW50ZWRQcmljZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IGdldE1pbmltdW1QcmljZShcblx0XHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3REaXNjb3VudGVkUHJpY2VzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHQpXG5cdClcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBtYXhpbXVtIGRpc2NvdW50ZWQgcHJpY2UgaW4gdGhlIHJhbmdlIG9mIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHZhcmlhbnRzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1EaXNjb3VudGVkUHJpY2UgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiBnZXRNYXhpbXVtUHJpY2UoXG5cdFx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0RGlzY291bnRlZFByaWNlcy5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0KVxuXHQpXG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbWluaW11bSBwZXJjZW50IGRpc2NvdW50IGluIHRoZSByYW5nZSBvZiBjb25maWd1cmFibGUgcHJvZHVjdCB2YXJpYW50cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUGVyY2VudERpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4gZ2V0TWluaW11bVByaWNlKFxuXHRcdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFBlcmNlbnREaXNjb3VudHMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdClcblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIG1heGltdW0gcGVyY2VudCBkaXNjb3VudCBpbiB0aGUgcmFuZ2Ugb2YgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVBlcmNlbnREaXNjb3VudCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IGdldE1heGltdW1QcmljZShcblx0XHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQZXJjZW50RGlzY291bnRzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHQpXG5cdClcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHdoZXRoZXIgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHZhcmlhbnQgcHJpY2VzIGhhdmUgYmVlbiBuYXJyb3dlZCB0byBhIHNpbmdsZSBwcmljZS5cblx0ICovXG5cdGNvbnN0IGlzQ29uZmlndXJhYmxlUHJpY2VSYW5nZWQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBtaW5QcmljZSA9IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUHJpY2UucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGNvbnN0IG1heFByaWNlID0gc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QcmljZS5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0cmV0dXJuIG1pblByaWNlICE9PSBtYXhQcmljZTtcblx0XHR9XG5cdClcblxuXHRjb25zdCBzZWxlY3RBbGxDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gPERhZmZDb25maWd1cmFibGVQcm9kdWN0PnNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGUpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHByb2R1Y3QuY29uZmlndXJhYmxlQXR0cmlidXRlcy5yZWR1Y2UoKGFjYywgYXR0cmlidXRlKSA9PiAoe1xuXHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdFthdHRyaWJ1dGUuY29kZV06IGF0dHJpYnV0ZS52YWx1ZXMubWFwKHZhbHVlID0+IHZhbHVlLnZhbHVlKVxuXHRcdFx0fSksIHt9KTtcblx0XHR9XG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBzZWxlY3RhYmxlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGF0dHJpYnV0ZXMgZGVyaXZlZCBmcm9tIHRoZSByZW1haW5pbmcgdmFyaWFudHMgYW5kIHRoZSBvcmRlciBvZiBjdXJyZW50bHkgYXBwbGllZCBhdHRyaWJ1dGVzLlxuXHQgKiBUaGUgcmVtYWluaW5nIHZhcmlhbnRzIG9mIHRoZSBwcm9kdWN0IGFyZSBkZXJpdmVkIGZyb20gdGhlIGN1cnJlbnRseSBhcHBsaWVkIGF0dHJpYnV0ZXMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RTZWxlY3RhYmxlQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gPERhZmZDb25maWd1cmFibGVQcm9kdWN0PnNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGUpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYXBwbGllZEF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10gPSBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXMucHJvamVjdG9yKGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBzZWxlY3RhYmxlQXR0cmlidXRlcyA9IGluaXRpYWxpemVTZWxlY3RhYmxlQXR0cmlidXRlcyhwcm9kdWN0LmNvbmZpZ3VyYWJsZUF0dHJpYnV0ZXMpO1xuXG5cdFx0XHQvLyBTZXQgd2hpY2ggdmFsdWVzIG9mIGFwcGxpZWQgYXR0cmlidXRlIGNvZGVzIHNob3VsZCBiZSBzZXQgYXMgc2VsZWN0YWJsZSBiYXNlZCBvbiB0aGUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgc2VsZWN0ZWRcblx0XHRcdGNvbnN0IG1hdGNoZWRWYXJpYW50cyA9IGFwcGxpZWRBdHRyaWJ1dGVzLnJlZHVjZSgobWF0Y2hpbmdWYXJpYW50cywgYXBwbGllZEF0dHJpYnV0ZSwgaSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZFZhcmlhbnRzID0gbWF0Y2hpbmdWYXJpYW50cy5maWx0ZXIodmFyaWFudCA9PiBpc1ZhcmlhbnRBdmFpbGFibGUoYXBwbGllZEF0dHJpYnV0ZXMuc2xpY2UoMCwgaSksIHZhcmlhbnQpKTtcblxuXHRcdFx0XHRzZWxlY3RhYmxlQXR0cmlidXRlc1thcHBsaWVkQXR0cmlidXRlLmNvZGVdID0gZ2V0U2VsZWN0YWJsZUF0dHJpYnV0ZXNGcm9tVmFyaWFudHMoc2VsZWN0YWJsZUF0dHJpYnV0ZXMsIGZpbHRlcmVkVmFyaWFudHMsIGFwcGxpZWRBdHRyaWJ1dGUuY29kZSk7XG5cblx0XHRcdFx0cmV0dXJuIGZpbHRlcmVkVmFyaWFudHNcblx0XHRcdH0sIHByb2R1Y3QudmFyaWFudHMpLmZpbHRlcih2YXJpYW50ID0+XG5cdFx0XHRcdGlzVmFyaWFudEF2YWlsYWJsZShhcHBsaWVkQXR0cmlidXRlcywgdmFyaWFudClcblx0XHRcdCk7XG5cblx0XHRcdC8vIFNldCB3aGljaCB2YWx1ZXMgb2YgdGhlIHVuYXBwbGllZCBhdHRyaWJ1dGUgY29kZXMgc2hvdWxkIGJlIHNldCBhcyBzZWxlY3RhYmxlIGJhc2VkIG9uIHRoZSBtYXRjaGluZyB2YXJpYW50cyBvZiBhbGxcblx0XHRcdC8vIGFwcGxpZWQgYXR0cmlidXRlcy5cblx0XHRcdHByb2R1Y3QuY29uZmlndXJhYmxlQXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG5cdFx0XHRcdGlmICghc2VsZWN0YWJsZUF0dHJpYnV0ZXNbYXR0cmlidXRlLmNvZGVdLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbGVjdGFibGVBdHRyaWJ1dGVzW2F0dHJpYnV0ZS5jb2RlXSA9IGdldFNlbGVjdGFibGVBdHRyaWJ1dGVzRnJvbVZhcmlhbnRzKHNlbGVjdGFibGVBdHRyaWJ1dGVzLCBtYXRjaGVkVmFyaWFudHMsIGF0dHJpYnV0ZS5jb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdHJldHVybiBzZWxlY3RhYmxlQXR0cmlidXRlcztcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXMsXG5cdFx0c2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQcmljZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdERpc2NvdW50ZWRQcmljZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFBlcmNlbnREaXNjb3VudHMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEhhc0Rpc2NvdW50LFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUHJpY2UsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QcmljZSxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bURpc2NvdW50ZWRQcmljZSxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bURpc2NvdW50ZWRQcmljZSxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bVBlcmNlbnREaXNjb3VudCxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVBlcmNlbnREaXNjb3VudCxcblx0XHRpc0NvbmZpZ3VyYWJsZVByaWNlUmFuZ2VkLFxuXHRcdHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLFxuXHRcdHNlbGVjdFNlbGVjdGFibGVDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlc1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGFibGVBdHRyaWJ1dGVzRnJvbVZhcmlhbnRzKHNlbGVjdGFibGVBdHRyaWJ1dGVzOiBEaWN0aW9uYXJ5PHN0cmluZ1tdPiwgdmFyaWFudHM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudFtdLCBjb2RlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhcmlhbnRzLnJlZHVjZSgoc2VsZWN0ZWRBdHRyaWJ1dGVzLCB2YXJpYW50KSA9PlxuICAgIGlzVmFyaWFudEF0dHJpYnV0ZU1hcmtlZEFzU2VsZWN0YWJsZShzZWxlY3RlZEF0dHJpYnV0ZXMsIHZhcmlhbnQuYXBwbGllZEF0dHJpYnV0ZXNbY29kZV0pXG4gICAgICA/IHNlbGVjdGVkQXR0cmlidXRlc1xuICAgICAgOiBbXG4gICAgICAgIC4uLnNlbGVjdGVkQXR0cmlidXRlcyxcbiAgICAgICAgdmFyaWFudC5hcHBsaWVkQXR0cmlidXRlc1tjb2RlXVxuICAgICAgXSxcbiAgICBzZWxlY3RhYmxlQXR0cmlidXRlc1tjb2RlXVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmQ29uZmlndXJhYmxlUHJvZHVjdFNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuICgpOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdE1lbW9pemVkU2VsZWN0b3JzID0+IGNhY2hlID0gY2FjaGUgXG5cdFx0PyBjYWNoZSBcblx0XHQ6IGNyZWF0ZUNvbmZpZ3VyYWJsZVByb2R1Y3RTZWxlY3RvcnMoKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzVmFyaWFudEF2YWlsYWJsZShcblx0YXBwbGllZEF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10sIFxuXHR2YXJpYW50OiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRcbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gdmFyaWFudC5pbl9zdG9jayAmJiBcblx0XHRhcHBsaWVkQXR0cmlidXRlcy5yZWR1Y2UoKGFjYywgYXR0cmlidXRlKSA9PiBcblx0XHRcdGFjYyAmJiBhdHRyaWJ1dGUudmFsdWUgPT09IHZhcmlhbnQuYXBwbGllZEF0dHJpYnV0ZXNbYXR0cmlidXRlLmNvZGVdLFxuXHRcdFx0dHJ1ZVxuXHRcdClcbn1cblxuZnVuY3Rpb24gZ2V0TWluaW11bVByaWNlKHByaWNlczogbnVtYmVyW10pOiBudW1iZXIge1xuXHRyZXR1cm4gcHJpY2VzLnJlZHVjZShcblx0XHQoYWNjLCBwcmljZSkgPT4gcHJpY2UgPCBhY2MgPyBwcmljZSA6IGFjYyxcblx0XHRwcmljZXNbMF1cblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWF4aW11bVByaWNlKHByaWNlczogbnVtYmVyW10pOiBudW1iZXIge1xuXHRyZXR1cm4gcHJpY2VzLnJlZHVjZShcblx0XHQoYWNjLCBwcmljZSkgPT4gcHJpY2UgPiBhY2MgPyBwcmljZSA6IGFjYyxcblx0XHRwcmljZXNbMF1cblx0KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNlbGVjdGFibGVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlW10pOiBEaWN0aW9uYXJ5PHN0cmluZ1tdPiB7XG5cdHJldHVybiBhdHRyaWJ1dGVzLnJlZHVjZSgoYWNjLCBhdHRyaWJ1dGUpID0+ICh7XG5cdFx0Li4uYWNjLFxuXHRcdFthdHRyaWJ1dGUuY29kZV06IFtdXG5cdH0pLCB7fSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFyaWFudEF0dHJpYnV0ZU1hcmtlZEFzU2VsZWN0YWJsZShhdHRyaWJ1dGVBcnJheTogc3RyaW5nW10sIHZhcmlhbnRWYWx1ZTogc3RyaW5nKSB7XG5cdHJldHVybiBhdHRyaWJ1dGVBcnJheS5pbmRleE9mKHZhcmlhbnRWYWx1ZSkgPiAtMVxufVxuIl19