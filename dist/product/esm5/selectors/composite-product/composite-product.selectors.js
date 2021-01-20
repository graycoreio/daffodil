/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { daffAdd, daffMultiply, daffSubtract } from '@daffodil/core';
import { DaffProductTypeEnum } from '../../models/product';
import { getDaffCompositeProductEntitiesSelectors } from '../composite-product-entities/composite-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
/**
 * @record
 */
export function DaffCompositeProductMemoizedSelectors() { }
if (false) {
    /**
     * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
     * @type {?}
     */
    DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductRequiredItemPricesForConfiguration;
    /**
     * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
     * @type {?}
     */
    DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductOptionalItemPricesForConfiguration;
    /**
     * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
     * excluding unselected, optional item prices.
     * @type {?}
     */
    DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductPricesAsCurrentlyConfigured;
}
/** @type {?} */
var createCompositeProductSelectors = (/**
 * @return {?}
 */
function () {
    var _a = getDaffProductEntitiesSelectors(), selectProductEntities = _a.selectProductEntities, selectProduct = _a.selectProduct;
    var selectCompositeProductAppliedOptionsEntitiesState = getDaffCompositeProductEntitiesSelectors().selectCompositeProductAppliedOptionsEntitiesState;
    /** @type {?} */
    var selectCompositeProductRequiredItemPricesForConfiguration = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) {
        /** @type {?} */
        var product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        var appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
        return {
            minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
            maxPrice: getMaxPricesForConfiguration((/** @type {?} */ (product)), appliedOptions)
        };
    }));
    /** @type {?} */
    var selectCompositeProductOptionalItemPricesForConfiguration = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) {
        /** @type {?} */
        var product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        var appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
        return {
            minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
            maxPrice: getMaxPricesForConfigurationIncludingOptionalItems((/** @type {?} */ (product)), appliedOptions)
        };
    }));
    /** @type {?} */
    var selectCompositeProductPricesAsCurrentlyConfigured = createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (
    //todo use optional chaining when possible
    //todo use optional chaining when possible
    /**
     * @param {?} products
     * @param {?} appliedOptionsEntities
     * @param {?} props
     * @return {?}
     */
    function (products, appliedOptionsEntities, props) { return selectCompositeProductRequiredItemPricesForConfiguration.projector(products, {
        id: props.id,
        configuration: appliedOptionsEntities.entities[props.id] ? appliedOptionsEntities.entities[props.id].items : null
    }); }));
    return {
        selectCompositeProductRequiredItemPricesForConfiguration: selectCompositeProductRequiredItemPricesForConfiguration,
        selectCompositeProductOptionalItemPricesForConfiguration: selectCompositeProductOptionalItemPricesForConfiguration,
        selectCompositeProductPricesAsCurrentlyConfigured: selectCompositeProductPricesAsCurrentlyConfigured
    };
});
var ɵ0 = createCompositeProductSelectors;
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
        : createCompositeProductSelectors(); });
};
/** @type {?} */
export var getDaffCompositeProductSelectors = ((ɵ1))();
/**
 * The minimum price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
function getMinimumRequiredCompositeItemPrice(item, qty) {
    return item.required ? daffMultiply(Math.min.apply(Math, tslib_1.__spread(item.options.map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return option.price; })))), qty) : 0;
}
/**
 * The maximum price for an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
function getMaximumRequiredCompositeItemPrice(item, qty) {
    return item.required ? daffMultiply(Math.max.apply(Math, tslib_1.__spread(item.options.map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return option.price; })))), qty) : 0;
}
/**
 * The minimum discounted price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
//todo use optional chaining when possible
function getMinimumRequiredCompositeItemDiscountedPrice(item, qty) {
    return item.required ? daffMultiply(Math.min.apply(Math, tslib_1.__spread(item.options.map(getDiscountedPrice))), qty) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
//todo use optional chaining when possible
function getMaximumRequiredCompositeItemDiscountedPrice(item, qty) {
    return item.required ? daffMultiply(Math.max.apply(Math, tslib_1.__spread(item.options.map(getDiscountedPrice))), qty) : 0;
}
/**
 * Gets the minimum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 * @param {?} product a DaffCompositeProduct
 * @param {?} appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 * @return {?}
 */
function getMinPricesForConfiguration(product, appliedOptions) {
    return {
        discountedPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            getMinimumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id]))); }), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            getMinimumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id]))); }), product.price)
    };
}
/**
 * Gets the maximum prices of a composite product for the configuration provided excluding unselected, optional item prices.
 * @param {?} product a DaffCompositeProduct
 * @param {?} appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
 * @return {?}
 */
function getMaxPricesForConfiguration(product, appliedOptions) {
    return {
        discountedPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            getMaximumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id]))); }), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            getMaximumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id]))); }), product.price)
    };
}
/**
 * @param {?} product
 * @return {?}
 */
function getDiscountedPrice(product) {
    return product.discount ? daffSubtract(product.price, product.discount.amount) : product.price;
}
/**
 * Gets the maximum prices of a composite product including optional item prices.
 * @param {?} product a DaffCompositeProduct
 * @param {?} appliedOptions
 * @return {?}
 */
function getMaxPricesForConfigurationIncludingOptionalItems(product, appliedOptions) {
    return {
        discountedPrice: ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            appliedOptionHasQty(appliedOptions[item.id]) ?
                daffMultiply(Math.max.apply(Math, tslib_1.__spread(item.options.map(getDiscountedPrice))), appliedOptions[item.id].quantity) : Math.max.apply(Math, tslib_1.__spread(item.options.map(getDiscountedPrice)))); }), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) { return daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            appliedOptionHasQty(appliedOptions[item.id]) ?
                daffMultiply(Math.max.apply(Math, tslib_1.__spread(item.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.price; })))), appliedOptions[item.id].quantity) : Math.max.apply(Math, tslib_1.__spread(item.options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.price; }))))); }), product.price)
    };
}
/**
 * Takes a product and a set of option configurations and convert it into a dictionary of the full option objects.
 * @param {?} product a DaffCompositeProduct
 * @param {?} configuration a Dictionary<DaffCompositeConfigurationItem> used to build the appliedOptions object.
 * @return {?}
 */
function getAppliedOptionsForConfiguration(product, configuration) {
    return ((/** @type {?} */ (product))).items.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    function (acc, item) {
        var _a;
        return (tslib_1.__assign({}, acc, (_a = {}, _a[item.id] = configuration[item.id] ? tslib_1.__assign({}, item.options.find((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.id === configuration[item.id].value; })), { quantity: (configuration[item.id].qty === null || configuration[item.id].qty === undefined) ? 1 : configuration[item.id].qty }) : null, _a)));
    }), {});
}
//todo: use optional chaining when possible
/**
 * @param {?} appliedOption
 * @return {?}
 */
function appliedOptionHasId(appliedOption) {
    return appliedOption && !!appliedOption.id;
}
/**
 * @param {?} appliedOption
 * @return {?}
 */
function getOptionQty(appliedOption) {
    return appliedOptionHasQty(appliedOption) ? appliedOption.quantity : 1;
}
//todo: use optional chaining when possible
/**
 * @param {?} appliedOption
 * @return {?}
 */
function appliedOptionHasQty(appliedOption) {
    return appliedOption && appliedOption.quantity !== null;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3Quc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29tcG9zaXRlLXByb2R1Y3QvY29tcG9zaXRlLXByb2R1Y3Quc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNkIsTUFBTSxhQUFhLENBQUM7QUFHeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDOUgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFNakcsMkRBY0M7Ozs7OztJQVZBLHlHQUF3TDs7Ozs7SUFJeEwseUdBQXdMOzs7Ozs7SUFLeEwsa0dBQXFIOzs7SUFHaEgsK0JBQStCOzs7QUFBRztJQUVqQyxJQUFBLHNDQUcrQixFQUZwQyxnREFBcUIsRUFDckIsZ0NBQ29DO0lBR3BDLElBQUEsZ0pBQWlEOztRQUc1Qyx3REFBd0QsR0FBRyxjQUFjLENBQzlFLHFCQUFxQjs7Ozs7SUFDckIsVUFBQyxRQUFRLEVBQUUsS0FBSzs7WUFDVCxPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ25FLElBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEQsT0FBTyxTQUFTLENBQUM7U0FDakI7O1lBRUssY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLG1CQUFzQixPQUFPLEVBQUEsRUFBRSxLQUFL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QUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQzNILENBQUMsQ0FBQyxJQUFJLE9BQ1I7SUFOa0UsQ0FNbEUsR0FBRSxFQUFFLENBQUMsQ0FBQTtBQUNQLENBQUM7Ozs7OztBQUdELFNBQVMsa0JBQWtCLENBQUMsYUFBNkM7SUFDeEUsT0FBTyxhQUFhLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7QUFDNUMsQ0FBQzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBQyxhQUE2QztJQUNsRSxPQUFPLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxtQkFBbUIsQ0FBQyxhQUE2QztJQUN6RSxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgZGFmZkFkZCwgZGFmZk11bHRpcGx5LCBkYWZmU3VidHJhY3QgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgZ2V0RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4uL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vcHJvZHVjdC1lbnRpdGllcy9wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0sIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdC1pdGVtJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UHJpY2VzLCBEYWZmUHJpY2VSYW5nZSB9IGZyb20gJy4uLy4uL21vZGVscy9wcmljZXMnO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1jb25maWd1cmF0aW9uLWl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb21wb3NpdGVQcm9kdWN0TWVtb2l6ZWRTZWxlY3RvcnMge1xuXHQvKipcblx0ICogR2V0IGEgRGFmZlByaWNlUmFuZ2UgZm9yIGEgY29tcG9zaXRlIHByb2R1Y3QgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZXhjbHVkaW5nIHVuc2VsZWN0ZWQsIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuXHQgKi9cblx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdFJlcXVpcmVkSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb246IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCB7IGlkOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb24/OiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbT4gfSwgRGFmZlByaWNlUmFuZ2U+O1xuXHQvKipcblx0ICogR2V0IHRoZSBicm9hZGVzdCBwb3NzaWJsZSBEYWZmUHJpY2VSYW5nZSBmb3IgYSBjb21wb3NpdGUgcHJvZHVjdCBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbmNsdWRpbmcgb3B0aW9uYWwgaXRlbSBwcmljZXMuXG5cdCAqL1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0T3B0aW9uYWxJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbjogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIHsgaWQ6IHN0cmluZywgY29uZmlndXJhdGlvbj86IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtPiB9LCBEYWZmUHJpY2VSYW5nZT47XG5cdC8qKlxuXHQgKiBHZXQgdGhlIERhZmZQcmljZVJhbmdlIGZvciBhIGNvbXBvc2l0ZSBwcm9kdWN0IGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2Ygc2VsZWN0ZWQgaXRlbSBvcHRpb25zIGluIHJlZHV4IHN0YXRlIGFuZFxuXHQgKiBleGNsdWRpbmcgdW5zZWxlY3RlZCwgb3B0aW9uYWwgaXRlbSBwcmljZXMuXG5cdCAqL1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0UHJpY2VzQXNDdXJyZW50bHlDb25maWd1cmVkOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgeyBpZDogc3RyaW5nIH0sIERhZmZQcmljZVJhbmdlPjtcbn1cblxuY29uc3QgY3JlYXRlQ29tcG9zaXRlUHJvZHVjdFNlbGVjdG9ycyA9ICgpOiBEYWZmQ29tcG9zaXRlUHJvZHVjdE1lbW9pemVkU2VsZWN0b3JzID0+IHtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdFByb2R1Y3Rcblx0fSA9IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMoKTtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTdGF0ZVxuXHR9ID0gZ2V0RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycygpO1xuXG5cdGNvbnN0IHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RSZXF1aXJlZEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSBzZWxlY3RQcm9kdWN0LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRpZihwcm9kdWN0LnR5cGUgIT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29tcG9zaXRlKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFwcGxpZWRPcHRpb25zID0gcHJvcHMuY29uZmlndXJhdGlvbiA/IGdldEFwcGxpZWRPcHRpb25zRm9yQ29uZmlndXJhdGlvbig8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCwgcHJvcHMuY29uZmlndXJhdGlvbikgOiB7fTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1pblByaWNlOiBnZXRNaW5QcmljZXNGb3JDb25maWd1cmF0aW9uKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0LCBhcHBsaWVkT3B0aW9ucyksXG5cdFx0XHRcdG1heFByaWNlOiBnZXRNYXhQcmljZXNGb3JDb25maWd1cmF0aW9uKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0LCBhcHBsaWVkT3B0aW9ucylcblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q29tcG9zaXRlUHJvZHVjdE9wdGlvbmFsSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IHNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGUpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXBwbGllZE9wdGlvbnMgPSBwcm9wcy5jb25maWd1cmF0aW9uID8gZ2V0QXBwbGllZE9wdGlvbnNGb3JDb25maWd1cmF0aW9uKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0LCBwcm9wcy5jb25maWd1cmF0aW9uKSA6IHt9O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWluUHJpY2U6IGdldE1pblByaWNlc0ZvckNvbmZpZ3VyYXRpb24oPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QsIGFwcGxpZWRPcHRpb25zKSxcblx0XHRcdFx0bWF4UHJpY2U6IGdldE1heFByaWNlc0ZvckNvbmZpZ3VyYXRpb25JbmNsdWRpbmdPcHRpb25hbEl0ZW1zKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0LCBhcHBsaWVkT3B0aW9ucylcblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q29tcG9zaXRlUHJvZHVjdFByaWNlc0FzQ3VycmVudGx5Q29uZmlndXJlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlLFxuXHRcdC8vdG9kbyB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuXHRcdChwcm9kdWN0cywgYXBwbGllZE9wdGlvbnNFbnRpdGllcywgcHJvcHMpID0+IHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RSZXF1aXJlZEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uLnByb2plY3Rvcihwcm9kdWN0cywge1xuXHRcdFx0aWQ6IHByb3BzLmlkLCBcblx0XHRcdGNvbmZpZ3VyYXRpb246IGFwcGxpZWRPcHRpb25zRW50aXRpZXMuZW50aXRpZXNbcHJvcHMuaWRdID8gYXBwbGllZE9wdGlvbnNFbnRpdGllcy5lbnRpdGllc1twcm9wcy5pZF0uaXRlbXMgOiBudWxsXG5cdFx0fSlcblx0KTtcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0UmVxdWlyZWRJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbixcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0T3B0aW9uYWxJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbixcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0UHJpY2VzQXNDdXJyZW50bHlDb25maWd1cmVkXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDb21wb3NpdGVQcm9kdWN0U2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gKCk6IERhZmZDb21wb3NpdGVQcm9kdWN0TWVtb2l6ZWRTZWxlY3RvcnMgPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQ29tcG9zaXRlUHJvZHVjdFNlbGVjdG9ycygpO1xufSkoKTtcblxuLyoqXG4gKiBUaGUgbWluaW11bSBwcmljZSBvZiBhbiBpdGVtIGlzIHplcm8gaWYgdGhlIGl0ZW0gaXMgb3B0aW9uYWwuXG4gKiBAcGFyYW0gaXRlbSBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1cbiAqL1xuZnVuY3Rpb24gZ2V0TWluaW11bVJlcXVpcmVkQ29tcG9zaXRlSXRlbVByaWNlKGl0ZW06IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSwgcXR5OiBudW1iZXIpOiBudW1iZXIge1xuXHRyZXR1cm4gaXRlbS5yZXF1aXJlZCA/IGRhZmZNdWx0aXBseShNYXRoLm1pbiguLi5pdGVtLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ucHJpY2UpKSwgcXR5KSA6IDA7XG59XG5cbi8qKlxuICogVGhlIG1heGltdW0gcHJpY2UgZm9yIGFuIGl0ZW0gaXMgemVybyBpZiB0aGUgaXRlbSBpcyBvcHRpb25hbC5cbiAqIEBwYXJhbSBpdGVtIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVxuICovXG5mdW5jdGlvbiBnZXRNYXhpbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtUHJpY2UoaXRlbTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtLCBxdHk6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBpdGVtLnJlcXVpcmVkID8gZGFmZk11bHRpcGx5KE1hdGgubWF4KC4uLml0ZW0ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5wcmljZSkpLCBxdHkpIDogMDtcbn1cblxuLyoqXG4gKiBUaGUgbWluaW11bSBkaXNjb3VudGVkIHByaWNlIG9mIGFuIGl0ZW0gaXMgemVybyBpZiB0aGUgaXRlbSBpcyBvcHRpb25hbC5cbiAqIEBwYXJhbSBpdGVtIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVxuICovXG4vL3RvZG8gdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbmZ1bmN0aW9uIGdldE1pbmltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1EaXNjb3VudGVkUHJpY2UoaXRlbTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtLCBxdHk6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBpdGVtLnJlcXVpcmVkID8gZGFmZk11bHRpcGx5KE1hdGgubWluKC4uLml0ZW0ub3B0aW9ucy5tYXAoZ2V0RGlzY291bnRlZFByaWNlKSksIHF0eSkgOiAwO1xufVxuLyoqXG4gKiBUaGUgbWF4aW11bSBkaXNjb3VudGVkIHByaWNlIG9mIGFuIGl0ZW0gaXMgemVybyBpZiB0aGUgaXRlbSBpcyBvcHRpb25hbC5cbiAqIEBwYXJhbSBpdGVtIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVxuICovXG4vL3RvZG8gdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbmZ1bmN0aW9uIGdldE1heGltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1EaXNjb3VudGVkUHJpY2UoaXRlbTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtLCBxdHk6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBpdGVtLnJlcXVpcmVkID8gZGFmZk11bHRpcGx5KE1hdGgubWF4KC4uLml0ZW0ub3B0aW9ucy5tYXAoZ2V0RGlzY291bnRlZFByaWNlKSksIHF0eSkgOiAwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1pbmltdW0gcHJpY2VzIG9mIGEgY29tcG9zaXRlIHByb2R1Y3QgZm9yIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGV4Y2x1ZGluZyB1bnNlbGVjdGVkLCBvcHRpb25hbCBpdGVtIHByaWNlcy5cbiAqIEBwYXJhbSBwcm9kdWN0IGEgRGFmZkNvbXBvc2l0ZVByb2R1Y3RcbiAqIEBwYXJhbSBhcHBsaWVkT3B0aW9ucyBhIERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPiB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9zaXRlIHByb2R1Y3QuXG4gKi9cbmZ1bmN0aW9uIGdldE1pblByaWNlc0ZvckNvbmZpZ3VyYXRpb24ocHJvZHVjdDogRGFmZkNvbXBvc2l0ZVByb2R1Y3QsIGFwcGxpZWRPcHRpb25zOiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4pOiBEYWZmUHJvZHVjdFByaWNlcyB7XG5cdHJldHVybiB7XG5cdFx0ZGlzY291bnRlZFByaWNlOiBwcm9kdWN0Lml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLCBcblx0XHRcdGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgPyBcblx0XHRcdFx0ZGFmZk11bHRpcGx5KGdldERpc2NvdW50ZWRQcmljZShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSksIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6IFxuXHRcdFx0XHRnZXRNaW5pbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtRGlzY291bnRlZFByaWNlKGl0ZW0sIGdldE9wdGlvblF0eShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkpXG5cdFx0KSwgZ2V0RGlzY291bnRlZFByaWNlKHByb2R1Y3QpKSxcblx0XHRkaXNjb3VudDogeyBhbW91bnQ6IG51bGwsIHBlcmNlbnQ6IG51bGwgfSxcblx0XHRvcmlnaW5hbFByaWNlOiBwcm9kdWN0Lml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLCBcblx0XHRcdGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgPyBcblx0XHRcdFx0ZGFmZk11bHRpcGx5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnByaWNlLCBhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXS5xdWFudGl0eSkgOiBcblx0XHRcdFx0Z2V0TWluaW11bVJlcXVpcmVkQ29tcG9zaXRlSXRlbVByaWNlKGl0ZW0sIGdldE9wdGlvblF0eShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkpXG5cdFx0KSwgcHJvZHVjdC5wcmljZSlcblx0fVxufVxuXG4vKipcbiAqIEdldHMgdGhlIG1heGltdW0gcHJpY2VzIG9mIGEgY29tcG9zaXRlIHByb2R1Y3QgZm9yIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGV4Y2x1ZGluZyB1bnNlbGVjdGVkLCBvcHRpb25hbCBpdGVtIHByaWNlcy5cbiAqIEBwYXJhbSBwcm9kdWN0IGEgRGFmZkNvbXBvc2l0ZVByb2R1Y3RcbiAqIEBwYXJhbSBhcHBsaWVkT3B0aW9ucyBhIERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPiB0aGF0IGRldGVybWluZXMgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9zaXRlIHByb2R1Y3QuXG4gKi9cbmZ1bmN0aW9uIGdldE1heFByaWNlc0ZvckNvbmZpZ3VyYXRpb24ocHJvZHVjdDogRGFmZkNvbXBvc2l0ZVByb2R1Y3QsIGFwcGxpZWRPcHRpb25zOiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4pOiBEYWZmUHJvZHVjdFByaWNlcyB7XG5cdHJldHVybiB7XG5cdFx0ZGlzY291bnRlZFByaWNlOiBwcm9kdWN0Lml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLCBcblx0XHRcdGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgPyBcblx0XHRcdFx0ZGFmZk11bHRpcGx5KGdldERpc2NvdW50ZWRQcmljZShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSksIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6IFxuXHRcdFx0XHRnZXRNYXhpbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtRGlzY291bnRlZFByaWNlKGl0ZW0sIGdldE9wdGlvblF0eShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkpXG5cdFx0KSwgZ2V0RGlzY291bnRlZFByaWNlKHByb2R1Y3QpKSxcblx0XHRkaXNjb3VudDogeyBhbW91bnQ6IG51bGwsIHBlcmNlbnQ6IG51bGwgfSxcblx0XHRvcmlnaW5hbFByaWNlOiBwcm9kdWN0Lml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucHJpY2UsIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6IFxuXHRcdFx0XHRnZXRNYXhpbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtUHJpY2UoaXRlbSwgZ2V0T3B0aW9uUXR5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSlcblx0XHQpLCBwcm9kdWN0LnByaWNlKVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERpc2NvdW50ZWRQcmljZShwcm9kdWN0OiBEYWZmUHJvZHVjdCk6IG51bWJlciB7XG4gIHJldHVybiBwcm9kdWN0LmRpc2NvdW50ID8gZGFmZlN1YnRyYWN0KHByb2R1Y3QucHJpY2UsIHByb2R1Y3QuZGlzY291bnQuYW1vdW50KSA6IHByb2R1Y3QucHJpY2Vcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXhpbXVtIHByaWNlcyBvZiBhIGNvbXBvc2l0ZSBwcm9kdWN0IGluY2x1ZGluZyBvcHRpb25hbCBpdGVtIHByaWNlcy5cbiAqIEBwYXJhbSBwcm9kdWN0IGEgRGFmZkNvbXBvc2l0ZVByb2R1Y3RcbiAqL1xuZnVuY3Rpb24gZ2V0TWF4UHJpY2VzRm9yQ29uZmlndXJhdGlvbkluY2x1ZGluZ09wdGlvbmFsSXRlbXMocHJvZHVjdDogRGFmZkNvbXBvc2l0ZVByb2R1Y3QsIGFwcGxpZWRPcHRpb25zOiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4pOiBEYWZmUHJvZHVjdFByaWNlcyB7XG5cdHJldHVybiB7XG5cdFx0ZGlzY291bnRlZFByaWNlOiAoPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QpLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLCBcblx0XHRcdGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgPyBcblx0XHRcdFx0ZGFmZk11bHRpcGx5KGdldERpc2NvdW50ZWRQcmljZShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSksIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6XG5cdFx0XHRcdGFwcGxpZWRPcHRpb25IYXNRdHkoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0pID9cblx0XHRcdFx0XHRkYWZmTXVsdGlwbHkoTWF0aC5tYXgoLi4uaXRlbS5vcHRpb25zLm1hcChnZXREaXNjb3VudGVkUHJpY2UpKSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDogXG5cdFx0XHRcdFx0TWF0aC5tYXgoLi4uaXRlbS5vcHRpb25zLm1hcChnZXREaXNjb3VudGVkUHJpY2UpKVxuXHRcdCksIGdldERpc2NvdW50ZWRQcmljZShwcm9kdWN0KSksXG5cdFx0ZGlzY291bnQ6IHsgYW1vdW50OiBudWxsLCBwZXJjZW50OiBudWxsIH0sXG5cdFx0b3JpZ2luYWxQcmljZTogKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0KS5pdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gZGFmZkFkZChcblx0XHRcdGFjYyxcblx0XHRcdGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgPyBcblx0XHRcdFx0ZGFmZk11bHRpcGx5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnByaWNlLCBhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXS5xdWFudGl0eSkgOiBcblx0XHRcdFx0YXBwbGllZE9wdGlvbkhhc1F0eShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgP1xuXHRcdFx0XHRcdGRhZmZNdWx0aXBseShNYXRoLm1heCguLi5pdGVtLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ucHJpY2UpKSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDogXG5cdFx0XHRcdFx0TWF0aC5tYXgoLi4uaXRlbS5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnByaWNlKSlcblx0XHQpLCBwcm9kdWN0LnByaWNlKVxuXHR9XG59XG5cbi8qKlxuICogVGFrZXMgYSBwcm9kdWN0IGFuZCBhIHNldCBvZiBvcHRpb24gY29uZmlndXJhdGlvbnMgYW5kIGNvbnZlcnQgaXQgaW50byBhIGRpY3Rpb25hcnkgb2YgdGhlIGZ1bGwgb3B0aW9uIG9iamVjdHMuXG4gKiBAcGFyYW0gcHJvZHVjdCBhIERhZmZDb21wb3NpdGVQcm9kdWN0XG4gKiBAcGFyYW0gY29uZmlndXJhdGlvbiBhIERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtPiB1c2VkIHRvIGJ1aWxkIHRoZSBhcHBsaWVkT3B0aW9ucyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldEFwcGxpZWRPcHRpb25zRm9yQ29uZmlndXJhdGlvbihwcm9kdWN0OiBEYWZmQ29tcG9zaXRlUHJvZHVjdCwgY29uZmlndXJhdGlvbjogRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0+KTogRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24+IHtcblx0cmV0dXJuICg8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCkuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+ICh7XG5cdFx0Li4uYWNjLFxuXHRcdFtpdGVtLmlkXTogY29uZmlndXJhdGlvbltpdGVtLmlkXSA/IHtcblx0XHRcdC4uLml0ZW0ub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uaWQgPT09IGNvbmZpZ3VyYXRpb25baXRlbS5pZF0udmFsdWUpLFxuXHRcdFx0cXVhbnRpdHk6IChjb25maWd1cmF0aW9uW2l0ZW0uaWRdLnF0eSA9PT0gbnVsbCB8fCBjb25maWd1cmF0aW9uW2l0ZW0uaWRdLnF0eSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBjb25maWd1cmF0aW9uW2l0ZW0uaWRdLnF0eVxuXHRcdH0gOiBudWxsXG59KSwge30pXG59XG5cbi8vdG9kbzogdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbmZ1bmN0aW9uIGFwcGxpZWRPcHRpb25IYXNJZChhcHBsaWVkT3B0aW9uOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24pOiBib29sZWFuIHtcblx0cmV0dXJuIGFwcGxpZWRPcHRpb24gJiYgISFhcHBsaWVkT3B0aW9uLmlkO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25RdHkoYXBwbGllZE9wdGlvbjogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uKTogbnVtYmVyIHtcblx0cmV0dXJuIGFwcGxpZWRPcHRpb25IYXNRdHkoYXBwbGllZE9wdGlvbikgPyBhcHBsaWVkT3B0aW9uLnF1YW50aXR5IDogMTtcbn1cblxuLy90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuZnVuY3Rpb24gYXBwbGllZE9wdGlvbkhhc1F0eShhcHBsaWVkT3B0aW9uOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24pOiBib29sZWFuIHtcblx0cmV0dXJuIGFwcGxpZWRPcHRpb24gJiYgYXBwbGllZE9wdGlvbi5xdWFudGl0eSAhPT0gbnVsbDtcbn1cbiJdfQ==