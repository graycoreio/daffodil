/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var createConfigurableProductSelectors = (/**
 * @return {?}
 */
function () {
    var _a = getDaffConfigurableProductEntitiesSelectors(), selectConfigurableProductAppliedAttributes = _a.selectConfigurableProductAppliedAttributes, selectConfigurableProductAppliedAttributesEntitiesState = _a.selectConfigurableProductAppliedAttributesEntitiesState;
    var _b = getDaffProductEntitiesSelectors(), selectProductEntities = _b.selectProductEntities, selectProduct = _b.selectProduct;
    /**
     * Selector for all variants of the product.
     * @type {?}
     */
    var selectAllConfigurableProductVariants = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) {
        /** @type {?} */
        var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (!product || product.type !== DaffProductTypeEnum.Configurable) {
            return [];
        }
        return product.variants;
    }));
    /**
     * Selector for the variants of the product that match the currently applied attributes.
     * @type {?}
     */
    var selectMatchingConfigurableProductVariants = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        /** @type {?} */
        var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (!product || product.type !== DaffProductTypeEnum.Configurable) {
            return [];
        }
        /** @type {?} */
        var appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
        return product.variants.filter((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) { return isVariantAvailable(appliedAttributes, variant); }));
    }));
    /**
     * Selector for the range of price for current configuration of the configurable product.
     * @type {?}
     */
    var selectConfigurableProductPrices = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) { return variant.price; }));
    }));
    /**
     * Selector for the range of discounts for current configuration of the configurable product.
     * @type {?}
     */
    var selectConfigurableProductDiscountedPrices = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) { return variant.discount ? daffSubtract(variant.price, variant.discount.amount) : variant.price; }));
    }));
    /**
     * Selector for the range of percent discounts for current configuration of the configurable product.
     * @type {?}
     */
    var selectConfigurableProductPercentDiscounts = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .map((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) { return variant.discount && variant.discount.percent; }));
    }));
    /**
     * Selector that determines whether any of the variants for the current configuration of the configurable product has a discount.
     * @type {?}
     */
    var selectConfigurableProductHasDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
            .reduce((/**
         * @param {?} acc
         * @param {?} variant
         * @return {?}
         */
        function (acc, variant) { return acc || (variant.discount && variant.discount.amount > 0); }), false);
    }))
    /**
     * Selector for the minimum price in the range of configurable product variant prices.
     */
    ;
    /**
     * Selector for the minimum price in the range of configurable product variant prices.
     * @type {?}
     */
    var selectConfigurableProductMinimumPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for the maximum price in the range of configurable product variant prices.
     */
    ;
    /**
     * Selector for the maximum price in the range of configurable product variant prices.
     * @type {?}
     */
    var selectConfigurableProductMaximumPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for the minimum discounted price in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the minimum discounted price in the range of configurable product variants.
     * @type {?}
     */
    var selectConfigurableProductMinimumDiscountedPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for the maximum discounted price in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the maximum discounted price in the range of configurable product variants.
     * @type {?}
     */
    var selectConfigurableProductMaximumDiscountedPrice = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for the minimum percent discount in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the minimum percent discount in the range of configurable product variants.
     * @type {?}
     */
    var selectConfigurableProductMinimumPercentDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for the maximum percent discount in the range of configurable product variants.
     */
    ;
    /**
     * Selector for the maximum percent discount in the range of configurable product variants.
     * @type {?}
     */
    var selectConfigurableProductMaximumPercentDiscount = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id })); }))
    /**
     * Selector for whether the configurable product variant prices have been narrowed to a single price.
     */
    ;
    /**
     * Selector for whether the configurable product variant prices have been narrowed to a single price.
     * @type {?}
     */
    var isConfigurablePriceRanged = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        /** @type {?} */
        var minPrice = selectConfigurableProductMinimumPrice.projector(products, appliedAttributesEntities, { id: props.id });
        /** @type {?} */
        var maxPrice = selectConfigurableProductMaximumPrice.projector(products, appliedAttributesEntities, { id: props.id });
        return minPrice !== maxPrice;
    }));
    /** @type {?} */
    var selectAllConfigurableProductAttributes = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) {
        /** @type {?} */
        var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (product.type !== DaffProductTypeEnum.Configurable) {
            return {};
        }
        return product.configurableAttributes.reduce((/**
         * @param {?} acc
         * @param {?} attribute
         * @return {?}
         */
        function (acc, attribute) {
            var _a;
            return (tslib_1.__assign({}, acc, (_a = {}, _a[attribute.code] = attribute.values.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value.value; })), _a)));
        }), {});
    }));
    /**
     * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
     * The remaining variants of the product are derived from the currently applied attributes.
     * @type {?}
     */
    var selectSelectableConfigurableProductAttributes = createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedAttributesEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedAttributesEntities, props) {
        /** @type {?} */
        var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
        if (product.type !== DaffProductTypeEnum.Configurable) {
            return {};
        }
        /** @type {?} */
        var appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
        /** @type {?} */
        var selectableAttributes = initializeSelectableAttributes(product.configurableAttributes);
        // Set which values of applied attribute codes should be set as selectable based on the order that they were selected
        /** @type {?} */
        var matchedVariants = appliedAttributes.reduce((/**
         * @param {?} matchingVariants
         * @param {?} appliedAttribute
         * @param {?} i
         * @return {?}
         */
        function (matchingVariants, appliedAttribute, i) {
            /** @type {?} */
            var filteredVariants = matchingVariants.filter((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) { return isVariantAvailable(appliedAttributes.slice(0, i), variant); }));
            selectableAttributes[appliedAttribute.code] = getSelectableAttributesFromVariants(selectableAttributes, filteredVariants, appliedAttribute.code);
            return filteredVariants;
        }), product.variants).filter((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) {
            return isVariantAvailable(appliedAttributes, variant);
        }));
        // Set which values of the unapplied attribute codes should be set as selectable based on the matching variants of all
        // applied attributes.
        product.configurableAttributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) {
            if (!selectableAttributes[attribute.code].length) {
                selectableAttributes[attribute.code] = getSelectableAttributesFromVariants(selectableAttributes, matchedVariants, attribute.code);
            }
        }));
        return selectableAttributes;
    }));
    return {
        selectAllConfigurableProductAttributes: selectAllConfigurableProductAttributes,
        selectAllConfigurableProductVariants: selectAllConfigurableProductVariants,
        selectConfigurableProductPrices: selectConfigurableProductPrices,
        selectConfigurableProductDiscountedPrices: selectConfigurableProductDiscountedPrices,
        selectConfigurableProductPercentDiscounts: selectConfigurableProductPercentDiscounts,
        selectConfigurableProductHasDiscount: selectConfigurableProductHasDiscount,
        selectConfigurableProductMinimumPrice: selectConfigurableProductMinimumPrice,
        selectConfigurableProductMaximumPrice: selectConfigurableProductMaximumPrice,
        selectConfigurableProductMinimumDiscountedPrice: selectConfigurableProductMinimumDiscountedPrice,
        selectConfigurableProductMaximumDiscountedPrice: selectConfigurableProductMaximumDiscountedPrice,
        selectConfigurableProductMinimumPercentDiscount: selectConfigurableProductMinimumPercentDiscount,
        selectConfigurableProductMaximumPercentDiscount: selectConfigurableProductMaximumPercentDiscount,
        isConfigurablePriceRanged: isConfigurablePriceRanged,
        selectMatchingConfigurableProductVariants: selectMatchingConfigurableProductVariants,
        selectSelectableConfigurableProductAttributes: selectSelectableConfigurableProductAttributes
    };
});
var ɵ0 = createConfigurableProductSelectors;
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
    function (selectedAttributes, variant) {
        return isVariantAttributeMarkedAsSelectable(selectedAttributes, variant.appliedAttributes[code])
            ? selectedAttributes
            : tslib_1.__spread(selectedAttributes, [
                variant.appliedAttributes[code]
            ]);
    }), selectableAttributes[code]);
}
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createConfigurableProductSelectors(); });
};
/** @type {?} */
export var getDaffConfigurableProductSelectors = ((ɵ1))();
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
        function (acc, attribute) {
            return acc && attribute.value === variant.appliedAttributes[attribute.code];
        }), true);
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
    function (acc, price) { return price < acc ? price : acc; }), prices[0]);
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
    function (acc, price) { return price > acc ? price : acc; }), prices[0]);
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
    function (acc, attribute) {
        var _a;
        return (tslib_1.__assign({}, acc, (_a = {}, _a[attribute.code] = [], _a)));
    }), {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3Quc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29uZmlndXJhYmxlLXByb2R1Y3QvY29uZmlndXJhYmxlLXByb2R1Y3Quc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNkIsTUFBTSxhQUFhLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBSWpHLDhEQWdCQzs7O0lBZkEsMEZBQXdHOztJQUN4Ryx3RkFBa0g7O0lBQ2xILDZGQUF1SDs7SUFDdkgsbUZBQXFGOztJQUNyRiw2RkFBK0Y7O0lBQy9GLDZGQUErRjs7SUFDL0Ysd0ZBQXlGOztJQUN6Rix5RkFBeUY7O0lBQ3pGLHlGQUF5Rjs7SUFDekYsbUdBQW1HOztJQUNuRyxtR0FBbUc7O0lBQ25HLG1HQUFtRzs7SUFDbkcsbUdBQW1HOztJQUNuRyw2RUFBOEU7O0lBQzlFLGlHQUErRzs7O0lBRzFHLGtDQUFrQzs7O0FBQUc7SUFFcEMsSUFBQSxrREFHMkMsRUFGaEQsMEZBQTBDLEVBQzFDLG9IQUNnRDtJQUUzQyxJQUFBLHNDQUcrQixFQUZwQyxnREFBcUIsRUFDckIsZ0NBQ29DOzs7OztRQUsvQixvQ0FBb0MsR0FBRyxjQUFjLENBQzFELHFCQUFxQjs7Ozs7SUFDckIsVUFBQyxRQUFRLEVBQUUsS0FBSzs7WUFDVCxPQUFPLEdBQUcsbUJBQXlCLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUss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QUFvQyxDQUFDLGNBQXdCLEVBQUUsWUFBb0I7SUFDM0YsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgZGFmZlN1YnRyYWN0IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5pbXBvcnQgeyBnZXREYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMgfSBmcm9tICcuLi9wcm9kdWN0LWVudGl0aWVzL3Byb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudCwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3QsIERhZmZDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXR5JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdE1lbW9pemVkU2VsZWN0b3JzIHtcblx0c2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIERpY3Rpb25hcnk8c3RyaW5nW10+Pjtcblx0c2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRbXT47XG5cdHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRbXT47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQcmljZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcltdPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdERpc2NvdW50ZWRQcmljZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcltdPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFBlcmNlbnREaXNjb3VudHM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcltdPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEhhc0Rpc2NvdW50OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QcmljZTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QcmljZTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1EaXNjb3VudGVkUHJpY2U6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtRGlzY291bnRlZFByaWNlOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bVBlcmNlbnREaXNjb3VudDogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QZXJjZW50RGlzY291bnQ6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdGlzQ29uZmlndXJhYmxlUHJpY2VSYW5nZWQ6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIGJvb2xlYW4+O1xuXHRzZWxlY3RTZWxlY3RhYmxlQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIERpY3Rpb25hcnk8c3RyaW5nW10+Pjtcbn1cblxuY29uc3QgY3JlYXRlQ29uZmlndXJhYmxlUHJvZHVjdFNlbGVjdG9ycyA9ICgpOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdE1lbW9pemVkU2VsZWN0b3JzID0+IHtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGVcblx0fSA9IGdldERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMoKTtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdFByb2R1Y3Rcblx0fSA9IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMoKTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCB2YXJpYW50cyBvZiB0aGUgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdEFsbENvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50cyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gPERhZmZDb25maWd1cmFibGVQcm9kdWN0PnNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKCFwcm9kdWN0IHx8IHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHByb2R1Y3QudmFyaWFudHM7XG5cdFx0fVxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHZhcmlhbnRzIG9mIHRoZSBwcm9kdWN0IHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnRseSBhcHBsaWVkIGF0dHJpYnV0ZXMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RNYXRjaGluZ0NvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50cyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSA8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Q+c2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYoIXByb2R1Y3QgfHwgcHJvZHVjdC50eXBlICE9PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBhcHBsaWVkQXR0cmlidXRlcyA9IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcy5wcm9qZWN0b3IoYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRyZXR1cm4gcHJvZHVjdC52YXJpYW50cy5maWx0ZXIodmFyaWFudCA9PiBpc1ZhcmlhbnRBdmFpbGFibGUoYXBwbGllZEF0dHJpYnV0ZXMsIHZhcmlhbnQpKVxuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSByYW5nZSBvZiBwcmljZSBmb3IgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RQcmljZXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdFx0XHQubWFwKHZhcmlhbnQgPT4gdmFyaWFudC5wcmljZSk7XG5cdFx0fVxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHJhbmdlIG9mIGRpc2NvdW50cyBmb3IgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3REaXNjb3VudGVkUHJpY2VzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHNlbGVjdE1hdGNoaW5nQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHRcdFx0Lm1hcCh2YXJpYW50ID0+IHZhcmlhbnQuZGlzY291bnQgPyBkYWZmU3VidHJhY3QodmFyaWFudC5wcmljZSwgdmFyaWFudC5kaXNjb3VudC5hbW91bnQpIDogdmFyaWFudC5wcmljZSk7XG5cdFx0fVxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHJhbmdlIG9mIHBlcmNlbnQgZGlzY291bnRzIGZvciBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFBlcmNlbnREaXNjb3VudHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdFx0XHQubWFwKHZhcmlhbnQgPT4gdmFyaWFudC5kaXNjb3VudCAmJiB2YXJpYW50LmRpc2NvdW50LnBlcmNlbnQpO1xuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgYW55IG9mIHRoZSB2YXJpYW50cyBmb3IgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QgaGFzIGEgZGlzY291bnQuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0SGFzRGlzY291bnQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdFx0XHQucmVkdWNlKChhY2MsIHZhcmlhbnQpID0+IGFjYyB8fCAodmFyaWFudC5kaXNjb3VudCAmJiB2YXJpYW50LmRpc2NvdW50LmFtb3VudCA+IDApLCBmYWxzZSk7XG5cdFx0fVxuXHQpXG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbWluaW11bSBwcmljZSBpbiB0aGUgcmFuZ2Ugb2YgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudCBwcmljZXMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bVByaWNlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4gZ2V0TWluaW11bVByaWNlKFxuXHRcdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFByaWNlcy5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0KVxuXHQpXG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbWF4aW11bSBwcmljZSBpbiB0aGUgcmFuZ2Ugb2YgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudCBwcmljZXMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVByaWNlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4gZ2V0TWF4aW11bVByaWNlKFxuXHRcdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFByaWNlcy5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0KVxuXHQpXG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbWluaW11bSBkaXNjb3VudGVkIHByaWNlIGluIHRoZSByYW5nZSBvZiBjb25maWd1cmFibGUgcHJvZHVjdCB2YXJpYW50cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtRGlzY291bnRlZFByaWNlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4gZ2V0TWluaW11bVByaWNlKFxuXHRcdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdERpc2NvdW50ZWRQcmljZXMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdClcblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIG1heGltdW0gZGlzY291bnRlZCBwcmljZSBpbiB0aGUgcmFuZ2Ugb2YgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bURpc2NvdW50ZWRQcmljZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IGdldE1heGltdW1QcmljZShcblx0XHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3REaXNjb3VudGVkUHJpY2VzLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSlcblx0XHQpXG5cdClcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBtaW5pbXVtIHBlcmNlbnQgZGlzY291bnQgaW4gdGhlIHJhbmdlIG9mIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHZhcmlhbnRzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QZXJjZW50RGlzY291bnQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHByb3BzKSA9PiBnZXRNaW5pbXVtUHJpY2UoXG5cdFx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0UGVyY2VudERpc2NvdW50cy5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0KVxuXHQpXG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbWF4aW11bSBwZXJjZW50IGRpc2NvdW50IGluIHRoZSByYW5nZSBvZiBjb25maWd1cmFibGUgcHJvZHVjdCB2YXJpYW50cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtUGVyY2VudERpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCBwcm9wcykgPT4gZ2V0TWF4aW11bVByaWNlKFxuXHRcdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFBlcmNlbnREaXNjb3VudHMucHJvamVjdG9yKHByb2R1Y3RzLCBhcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdClcblx0KVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3Igd2hldGhlciB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QgdmFyaWFudCBwcmljZXMgaGF2ZSBiZWVuIG5hcnJvd2VkIHRvIGEgc2luZ2xlIHByaWNlLlxuXHQgKi9cblx0Y29uc3QgaXNDb25maWd1cmFibGVQcmljZVJhbmdlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IG1pblByaWNlID0gc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QcmljZS5wcm9qZWN0b3IocHJvZHVjdHMsIGFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0Y29uc3QgbWF4UHJpY2UgPSBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVByaWNlLnByb2plY3Rvcihwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRyZXR1cm4gbWluUHJpY2UgIT09IG1heFByaWNlO1xuXHRcdH1cblx0KVxuXG5cdGNvbnN0IHNlbGVjdEFsbENvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSA8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Q+c2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYocHJvZHVjdC50eXBlICE9PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHJvZHVjdC5jb25maWd1cmFibGVBdHRyaWJ1dGVzLnJlZHVjZSgoYWNjLCBhdHRyaWJ1dGUpID0+ICh7XG5cdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0W2F0dHJpYnV0ZS5jb2RlXTogYXR0cmlidXRlLnZhbHVlcy5tYXAodmFsdWUgPT4gdmFsdWUudmFsdWUpXG5cdFx0XHR9KSwge30pO1xuXHRcdH1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHNlbGVjdGFibGUgY29uZmlndXJhYmxlIHByb2R1Y3QgYXR0cmlidXRlcyBkZXJpdmVkIGZyb20gdGhlIHJlbWFpbmluZyB2YXJpYW50cyBhbmQgdGhlIG9yZGVyIG9mIGN1cnJlbnRseSBhcHBsaWVkIGF0dHJpYnV0ZXMuXG5cdCAqIFRoZSByZW1haW5pbmcgdmFyaWFudHMgb2YgdGhlIHByb2R1Y3QgYXJlIGRlcml2ZWQgZnJvbSB0aGUgY3VycmVudGx5IGFwcGxpZWQgYXR0cmlidXRlcy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFNlbGVjdGFibGVDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSA8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Q+c2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYocHJvZHVjdC50eXBlICE9PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBhcHBsaWVkQXR0cmlidXRlczogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGVbXSA9IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcy5wcm9qZWN0b3IoYXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHNlbGVjdGFibGVBdHRyaWJ1dGVzID0gaW5pdGlhbGl6ZVNlbGVjdGFibGVBdHRyaWJ1dGVzKHByb2R1Y3QuY29uZmlndXJhYmxlQXR0cmlidXRlcyk7XG5cblx0XHRcdC8vIFNldCB3aGljaCB2YWx1ZXMgb2YgYXBwbGllZCBhdHRyaWJ1dGUgY29kZXMgc2hvdWxkIGJlIHNldCBhcyBzZWxlY3RhYmxlIGJhc2VkIG9uIHRoZSBvcmRlciB0aGF0IHRoZXkgd2VyZSBzZWxlY3RlZFxuXHRcdFx0Y29uc3QgbWF0Y2hlZFZhcmlhbnRzID0gYXBwbGllZEF0dHJpYnV0ZXMucmVkdWNlKChtYXRjaGluZ1ZhcmlhbnRzLCBhcHBsaWVkQXR0cmlidXRlLCBpKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkVmFyaWFudHMgPSBtYXRjaGluZ1ZhcmlhbnRzLmZpbHRlcih2YXJpYW50ID0+IGlzVmFyaWFudEF2YWlsYWJsZShhcHBsaWVkQXR0cmlidXRlcy5zbGljZSgwLCBpKSwgdmFyaWFudCkpO1xuXG5cdFx0XHRcdHNlbGVjdGFibGVBdHRyaWJ1dGVzW2FwcGxpZWRBdHRyaWJ1dGUuY29kZV0gPSBnZXRTZWxlY3RhYmxlQXR0cmlidXRlc0Zyb21WYXJpYW50cyhzZWxlY3RhYmxlQXR0cmlidXRlcywgZmlsdGVyZWRWYXJpYW50cywgYXBwbGllZEF0dHJpYnV0ZS5jb2RlKTtcblxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyZWRWYXJpYW50c1xuXHRcdFx0fSwgcHJvZHVjdC52YXJpYW50cykuZmlsdGVyKHZhcmlhbnQgPT5cblx0XHRcdFx0aXNWYXJpYW50QXZhaWxhYmxlKGFwcGxpZWRBdHRyaWJ1dGVzLCB2YXJpYW50KVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gU2V0IHdoaWNoIHZhbHVlcyBvZiB0aGUgdW5hcHBsaWVkIGF0dHJpYnV0ZSBjb2RlcyBzaG91bGQgYmUgc2V0IGFzIHNlbGVjdGFibGUgYmFzZWQgb24gdGhlIG1hdGNoaW5nIHZhcmlhbnRzIG9mIGFsbFxuXHRcdFx0Ly8gYXBwbGllZCBhdHRyaWJ1dGVzLlxuXHRcdFx0cHJvZHVjdC5jb25maWd1cmFibGVBdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcblx0XHRcdFx0aWYgKCFzZWxlY3RhYmxlQXR0cmlidXRlc1thdHRyaWJ1dGUuY29kZV0ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2VsZWN0YWJsZUF0dHJpYnV0ZXNbYXR0cmlidXRlLmNvZGVdID0gZ2V0U2VsZWN0YWJsZUF0dHJpYnV0ZXNGcm9tVmFyaWFudHMoc2VsZWN0YWJsZUF0dHJpYnV0ZXMsIG1hdGNoZWRWYXJpYW50cywgYXR0cmlidXRlLmNvZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHNlbGVjdGFibGVBdHRyaWJ1dGVzO1xuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RBbGxDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlcyxcblx0XHRzZWxlY3RBbGxDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFByaWNlcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0RGlzY291bnRlZFByaWNlcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0UGVyY2VudERpc2NvdW50cyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0SGFzRGlzY291bnQsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QcmljZSxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVByaWNlLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtRGlzY291bnRlZFByaWNlLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtRGlzY291bnRlZFByaWNlLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUGVyY2VudERpc2NvdW50LFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtUGVyY2VudERpc2NvdW50LFxuXHRcdGlzQ29uZmlndXJhYmxlUHJpY2VSYW5nZWQsXG5cdFx0c2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMsXG5cdFx0c2VsZWN0U2VsZWN0YWJsZUNvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVzXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0YWJsZUF0dHJpYnV0ZXNGcm9tVmFyaWFudHMoc2VsZWN0YWJsZUF0dHJpYnV0ZXM6IERpY3Rpb25hcnk8c3RyaW5nW10+LCB2YXJpYW50czogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50W10sIGNvZGU6IHN0cmluZykge1xuICByZXR1cm4gdmFyaWFudHMucmVkdWNlKChzZWxlY3RlZEF0dHJpYnV0ZXMsIHZhcmlhbnQpID0+XG4gICAgaXNWYXJpYW50QXR0cmlidXRlTWFya2VkQXNTZWxlY3RhYmxlKHNlbGVjdGVkQXR0cmlidXRlcywgdmFyaWFudC5hcHBsaWVkQXR0cmlidXRlc1tjb2RlXSlcbiAgICAgID8gc2VsZWN0ZWRBdHRyaWJ1dGVzXG4gICAgICA6IFtcbiAgICAgICAgLi4uc2VsZWN0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICB2YXJpYW50LmFwcGxpZWRBdHRyaWJ1dGVzW2NvZGVdXG4gICAgICBdLFxuICAgIHNlbGVjdGFibGVBdHRyaWJ1dGVzW2NvZGVdXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDb25maWd1cmFibGVQcm9kdWN0U2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gKCk6IERhZmZDb25maWd1cmFibGVQcm9kdWN0TWVtb2l6ZWRTZWxlY3RvcnMgPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQ29uZmlndXJhYmxlUHJvZHVjdFNlbGVjdG9ycygpO1xufSkoKTtcblxuZnVuY3Rpb24gaXNWYXJpYW50QXZhaWxhYmxlKFxuXHRhcHBsaWVkQXR0cmlidXRlczogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGVbXSwgXG5cdHZhcmlhbnQ6IERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudFxuKTogYm9vbGVhbiB7XG5cdHJldHVybiB2YXJpYW50LmluX3N0b2NrICYmIFxuXHRcdGFwcGxpZWRBdHRyaWJ1dGVzLnJlZHVjZSgoYWNjLCBhdHRyaWJ1dGUpID0+IFxuXHRcdFx0YWNjICYmIGF0dHJpYnV0ZS52YWx1ZSA9PT0gdmFyaWFudC5hcHBsaWVkQXR0cmlidXRlc1thdHRyaWJ1dGUuY29kZV0sXG5cdFx0XHR0cnVlXG5cdFx0KVxufVxuXG5mdW5jdGlvbiBnZXRNaW5pbXVtUHJpY2UocHJpY2VzOiBudW1iZXJbXSk6IG51bWJlciB7XG5cdHJldHVybiBwcmljZXMucmVkdWNlKFxuXHRcdChhY2MsIHByaWNlKSA9PiBwcmljZSA8IGFjYyA/IHByaWNlIDogYWNjLFxuXHRcdHByaWNlc1swXVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRNYXhpbXVtUHJpY2UocHJpY2VzOiBudW1iZXJbXSk6IG51bWJlciB7XG5cdHJldHVybiBwcmljZXMucmVkdWNlKFxuXHRcdChhY2MsIHByaWNlKSA9PiBwcmljZSA+IGFjYyA/IHByaWNlIDogYWNjLFxuXHRcdHByaWNlc1swXVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2VsZWN0YWJsZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVbXSk6IERpY3Rpb25hcnk8c3RyaW5nW10+IHtcblx0cmV0dXJuIGF0dHJpYnV0ZXMucmVkdWNlKChhY2MsIGF0dHJpYnV0ZSkgPT4gKHtcblx0XHQuLi5hY2MsXG5cdFx0W2F0dHJpYnV0ZS5jb2RlXTogW11cblx0fSksIHt9KTtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYW50QXR0cmlidXRlTWFya2VkQXNTZWxlY3RhYmxlKGF0dHJpYnV0ZUFycmF5OiBzdHJpbmdbXSwgdmFyaWFudFZhbHVlOiBzdHJpbmcpIHtcblx0cmV0dXJuIGF0dHJpYnV0ZUFycmF5LmluZGV4T2YodmFyaWFudFZhbHVlKSA+IC0xXG59XG4iXX0=