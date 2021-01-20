/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const createCompositeProductSelectors = (/**
 * @return {?}
 */
() => {
    const { selectProductEntities, selectProduct } = getDaffProductEntitiesSelectors();
    const { selectCompositeProductAppliedOptionsEntitiesState } = getDaffCompositeProductEntitiesSelectors();
    /** @type {?} */
    const selectCompositeProductRequiredItemPricesForConfiguration = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        const appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
        return {
            minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
            maxPrice: getMaxPricesForConfiguration((/** @type {?} */ (product)), appliedOptions)
        };
    }));
    /** @type {?} */
    const selectCompositeProductOptionalItemPricesForConfiguration = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        const appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
        return {
            minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
            maxPrice: getMaxPricesForConfigurationIncludingOptionalItems((/** @type {?} */ (product)), appliedOptions)
        };
    }));
    /** @type {?} */
    const selectCompositeProductPricesAsCurrentlyConfigured = createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (
    //todo use optional chaining when possible
    /**
     * @param {?} products
     * @param {?} appliedOptionsEntities
     * @param {?} props
     * @return {?}
     */
    (products, appliedOptionsEntities, props) => selectCompositeProductRequiredItemPricesForConfiguration.projector(products, {
        id: props.id,
        configuration: appliedOptionsEntities.entities[props.id] ? appliedOptionsEntities.entities[props.id].items : null
    })));
    return {
        selectCompositeProductRequiredItemPricesForConfiguration,
        selectCompositeProductOptionalItemPricesForConfiguration,
        selectCompositeProductPricesAsCurrentlyConfigured
    };
});
const ɵ0 = createCompositeProductSelectors;
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
        : createCompositeProductSelectors());
};
/** @type {?} */
export const getDaffCompositeProductSelectors = ((ɵ1))();
/**
 * The minimum price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
function getMinimumRequiredCompositeItemPrice(item, qty) {
    return item.required ? daffMultiply(Math.min(...item.options.map((/**
     * @param {?} option
     * @return {?}
     */
    option => option.price))), qty) : 0;
}
/**
 * The maximum price for an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
function getMaximumRequiredCompositeItemPrice(item, qty) {
    return item.required ? daffMultiply(Math.max(...item.options.map((/**
     * @param {?} option
     * @return {?}
     */
    option => option.price))), qty) : 0;
}
/**
 * The minimum discounted price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
//todo use optional chaining when possible
function getMinimumRequiredCompositeItemDiscountedPrice(item, qty) {
    return item.required ? daffMultiply(Math.min(...item.options.map(getDiscountedPrice)), qty) : 0;
}
/**
 * The maximum discounted price of an item is zero if the item is optional.
 * @param {?} item DaffCompositeProductItem
 * @param {?} qty
 * @return {?}
 */
//todo use optional chaining when possible
function getMaximumRequiredCompositeItemDiscountedPrice(item, qty) {
    return item.required ? daffMultiply(Math.max(...item.options.map(getDiscountedPrice)), qty) : 0;
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
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            getMinimumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id])))), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            getMinimumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id])))), product.price)
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
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            getMaximumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id])))), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            getMaximumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id])))), product.price)
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
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
            appliedOptionHasQty(appliedOptions[item.id]) ?
                daffMultiply(Math.max(...item.options.map(getDiscountedPrice)), appliedOptions[item.id].quantity) :
                Math.max(...item.options.map(getDiscountedPrice)))), getDiscountedPrice(product)),
        discount: { amount: null, percent: null },
        originalPrice: ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        (acc, item) => daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
            daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
            appliedOptionHasQty(appliedOptions[item.id]) ?
                daffMultiply(Math.max(...item.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.price))), appliedOptions[item.id].quantity) :
                Math.max(...item.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.price))))), product.price)
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
    (acc, item) => (Object.assign({}, acc, { [item.id]: configuration[item.id] ? Object.assign({}, item.options.find((/**
         * @param {?} option
         * @return {?}
         */
        option => option.id === configuration[item.id].value)), { quantity: (configuration[item.id].qty === null || configuration[item.id].qty === undefined) ? 1 : configuration[item.id].qty }) : null }))), {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3Quc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29tcG9zaXRlLXByb2R1Y3QvY29tcG9zaXRlLXByb2R1Y3Quc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE2QixNQUFNLGFBQWEsQ0FBQztBQUd4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM5SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQU1qRywyREFjQzs7Ozs7O0lBVkEseUdBQXdMOzs7OztJQUl4TCx5R0FBd0w7Ozs7OztJQUt4TCxrR0FBcUg7OztNQUdoSCwrQkFBK0I7OztBQUFHLEdBQTBDLEVBQUU7VUFFN0UsRUFDTCxxQkFBcUIsRUFDckIsYUFBYSxFQUNiLEdBQUcsK0JBQStCLEVBQUU7VUFFL0IsRUFDTCxpREFBaUQsRUFDakQsR0FBRyx3Q0FBd0MsRUFBRTs7VUFFeEMsd0RBQXdELEdBQUcsY0FBYyxDQUM5RSxxQkFBcUI7Ozs7O0lBQ3JCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFOztjQUNiLE9BQU8sR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbkUsSUFBRyxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNsRCxPQUFPLFNBQVMsQ0FBQztTQUNqQjs7Y0FFSyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FB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QUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFDM0gsQ0FBQyxDQUFDLElBQUksSUFDUixHQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ1AsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxrQkFBa0IsQ0FBQyxhQUE2QztJQUN4RSxPQUFPLGFBQWEsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDOzs7OztBQUVELFNBQVMsWUFBWSxDQUFDLGFBQTZDO0lBQ2xFLE9BQU8sbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxDQUFDOzs7Ozs7QUFHRCxTQUFTLG1CQUFtQixDQUFDLGFBQTZDO0lBQ3pFLE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBkYWZmQWRkLCBkYWZmTXVsdGlwbHksIGRhZmZTdWJ0cmFjdCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBnZXREYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMgfSBmcm9tICcuLi9wcm9kdWN0LWVudGl0aWVzL3Byb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSwgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0LWl0ZW0nO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RQcmljZXMsIERhZmZQcmljZVJhbmdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlcyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tcG9zaXRlLWNvbmZpZ3VyYXRpb24taXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbXBvc2l0ZVByb2R1Y3RNZW1vaXplZFNlbGVjdG9ycyB7XG5cdC8qKlxuXHQgKiBHZXQgYSBEYWZmUHJpY2VSYW5nZSBmb3IgYSBjb21wb3NpdGUgcHJvZHVjdCBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBleGNsdWRpbmcgdW5zZWxlY3RlZCwgb3B0aW9uYWwgaXRlbSBwcmljZXMuXG5cdCAqL1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0UmVxdWlyZWRJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbjogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIHsgaWQ6IHN0cmluZywgY29uZmlndXJhdGlvbj86IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtPiB9LCBEYWZmUHJpY2VSYW5nZT47XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGJyb2FkZXN0IHBvc3NpYmxlIERhZmZQcmljZVJhbmdlIGZvciBhIGNvbXBvc2l0ZSBwcm9kdWN0IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGluY2x1ZGluZyBvcHRpb25hbCBpdGVtIHByaWNlcy5cblx0ICovXG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RPcHRpb25hbEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgeyBpZDogc3RyaW5nLCBjb25maWd1cmF0aW9uPzogRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0+IH0sIERhZmZQcmljZVJhbmdlPjtcblx0LyoqXG5cdCAqIEdldCB0aGUgRGFmZlByaWNlUmFuZ2UgZm9yIGEgY29tcG9zaXRlIHByb2R1Y3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiBzZWxlY3RlZCBpdGVtIG9wdGlvbnMgaW4gcmVkdXggc3RhdGUgYW5kXG5cdCAqIGV4Y2x1ZGluZyB1bnNlbGVjdGVkLCBvcHRpb25hbCBpdGVtIHByaWNlcy5cblx0ICovXG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RQcmljZXNBc0N1cnJlbnRseUNvbmZpZ3VyZWQ6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCB7IGlkOiBzdHJpbmcgfSwgRGFmZlByaWNlUmFuZ2U+O1xufVxuXG5jb25zdCBjcmVhdGVDb21wb3NpdGVQcm9kdWN0U2VsZWN0b3JzID0gKCk6IERhZmZDb21wb3NpdGVQcm9kdWN0TWVtb2l6ZWRTZWxlY3RvcnMgPT4ge1xuXG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0UHJvZHVjdFxuXHR9ID0gZ2V0RGFmZlByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycygpO1xuXG5cdGNvbnN0IHtcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlXG5cdH0gPSBnZXREYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzKCk7XG5cblx0Y29uc3Qgc2VsZWN0Q29tcG9zaXRlUHJvZHVjdFJlcXVpcmVkSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IHNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGUpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYXBwbGllZE9wdGlvbnMgPSBwcm9wcy5jb25maWd1cmF0aW9uID8gZ2V0QXBwbGllZE9wdGlvbnNGb3JDb25maWd1cmF0aW9uKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0LCBwcm9wcy5jb25maWd1cmF0aW9uKSA6IHt9O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWluUHJpY2U6IGdldE1pblByaWNlc0ZvckNvbmZpZ3VyYXRpb24oPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QsIGFwcGxpZWRPcHRpb25zKSxcblx0XHRcdFx0bWF4UHJpY2U6IGdldE1heFByaWNlc0ZvckNvbmZpZ3VyYXRpb24oPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QsIGFwcGxpZWRPcHRpb25zKVxuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0T3B0aW9uYWxJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbiA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gc2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYocHJvZHVjdC50eXBlICE9PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbXBvc2l0ZSkge1xuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBhcHBsaWVkT3B0aW9ucyA9IHByb3BzLmNvbmZpZ3VyYXRpb24gPyBnZXRBcHBsaWVkT3B0aW9uc0ZvckNvbmZpZ3VyYXRpb24oPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QsIHByb3BzLmNvbmZpZ3VyYXRpb24pIDoge307XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtaW5QcmljZTogZ2V0TWluUHJpY2VzRm9yQ29uZmlndXJhdGlvbig8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCwgYXBwbGllZE9wdGlvbnMpLFxuXHRcdFx0XHRtYXhQcmljZTogZ2V0TWF4UHJpY2VzRm9yQ29uZmlndXJhdGlvbkluY2x1ZGluZ09wdGlvbmFsSXRlbXMoPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QsIGFwcGxpZWRPcHRpb25zKVxuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0UHJpY2VzQXNDdXJyZW50bHlDb25maWd1cmVkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUsXG5cdFx0Ly90b2RvIHVzZSBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkT3B0aW9uc0VudGl0aWVzLCBwcm9wcykgPT4gc2VsZWN0Q29tcG9zaXRlUHJvZHVjdFJlcXVpcmVkSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24ucHJvamVjdG9yKHByb2R1Y3RzLCB7XG5cdFx0XHRpZDogcHJvcHMuaWQsIFxuXHRcdFx0Y29uZmlndXJhdGlvbjogYXBwbGllZE9wdGlvbnNFbnRpdGllcy5lbnRpdGllc1twcm9wcy5pZF0gPyBhcHBsaWVkT3B0aW9uc0VudGl0aWVzLmVudGl0aWVzW3Byb3BzLmlkXS5pdGVtcyA6IG51bGxcblx0XHR9KVxuXHQpO1xuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RSZXF1aXJlZEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RPcHRpb25hbEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RQcmljZXNBc0N1cnJlbnRseUNvbmZpZ3VyZWRcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNvbXBvc2l0ZVByb2R1Y3RTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiAoKTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RNZW1vaXplZFNlbGVjdG9ycyA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDb21wb3NpdGVQcm9kdWN0U2VsZWN0b3JzKCk7XG59KSgpO1xuXG4vKipcbiAqIFRoZSBtaW5pbXVtIHByaWNlIG9mIGFuIGl0ZW0gaXMgemVybyBpZiB0aGUgaXRlbSBpcyBvcHRpb25hbC5cbiAqIEBwYXJhbSBpdGVtIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVxuICovXG5mdW5jdGlvbiBnZXRNaW5pbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtUHJpY2UoaXRlbTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtLCBxdHk6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBpdGVtLnJlcXVpcmVkID8gZGFmZk11bHRpcGx5KE1hdGgubWluKC4uLml0ZW0ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5wcmljZSkpLCBxdHkpIDogMDtcbn1cblxuLyoqXG4gKiBUaGUgbWF4aW11bSBwcmljZSBmb3IgYW4gaXRlbSBpcyB6ZXJvIGlmIHRoZSBpdGVtIGlzIG9wdGlvbmFsLlxuICogQHBhcmFtIGl0ZW0gRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtXG4gKi9cbmZ1bmN0aW9uIGdldE1heGltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1QcmljZShpdGVtOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0sIHF0eTogbnVtYmVyKTogbnVtYmVyIHtcblx0cmV0dXJuIGl0ZW0ucmVxdWlyZWQgPyBkYWZmTXVsdGlwbHkoTWF0aC5tYXgoLi4uaXRlbS5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnByaWNlKSksIHF0eSkgOiAwO1xufVxuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGRpc2NvdW50ZWQgcHJpY2Ugb2YgYW4gaXRlbSBpcyB6ZXJvIGlmIHRoZSBpdGVtIGlzIG9wdGlvbmFsLlxuICogQHBhcmFtIGl0ZW0gRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtXG4gKi9cbi8vdG9kbyB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuZnVuY3Rpb24gZ2V0TWluaW11bVJlcXVpcmVkQ29tcG9zaXRlSXRlbURpc2NvdW50ZWRQcmljZShpdGVtOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0sIHF0eTogbnVtYmVyKTogbnVtYmVyIHtcblx0cmV0dXJuIGl0ZW0ucmVxdWlyZWQgPyBkYWZmTXVsdGlwbHkoTWF0aC5taW4oLi4uaXRlbS5vcHRpb25zLm1hcChnZXREaXNjb3VudGVkUHJpY2UpKSwgcXR5KSA6IDA7XG59XG4vKipcbiAqIFRoZSBtYXhpbXVtIGRpc2NvdW50ZWQgcHJpY2Ugb2YgYW4gaXRlbSBpcyB6ZXJvIGlmIHRoZSBpdGVtIGlzIG9wdGlvbmFsLlxuICogQHBhcmFtIGl0ZW0gRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtXG4gKi9cbi8vdG9kbyB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuZnVuY3Rpb24gZ2V0TWF4aW11bVJlcXVpcmVkQ29tcG9zaXRlSXRlbURpc2NvdW50ZWRQcmljZShpdGVtOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0sIHF0eTogbnVtYmVyKTogbnVtYmVyIHtcblx0cmV0dXJuIGl0ZW0ucmVxdWlyZWQgPyBkYWZmTXVsdGlwbHkoTWF0aC5tYXgoLi4uaXRlbS5vcHRpb25zLm1hcChnZXREaXNjb3VudGVkUHJpY2UpKSwgcXR5KSA6IDA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWluaW11bSBwcmljZXMgb2YgYSBjb21wb3NpdGUgcHJvZHVjdCBmb3IgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZXhjbHVkaW5nIHVuc2VsZWN0ZWQsIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuICogQHBhcmFtIHByb2R1Y3QgYSBEYWZmQ29tcG9zaXRlUHJvZHVjdFxuICogQHBhcmFtIGFwcGxpZWRPcHRpb25zIGEgRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24+IHRoYXQgZGV0ZXJtaW5lcyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb3NpdGUgcHJvZHVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWluUHJpY2VzRm9yQ29uZmlndXJhdGlvbihwcm9kdWN0OiBEYWZmQ29tcG9zaXRlUHJvZHVjdCwgYXBwbGllZE9wdGlvbnM6IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPik6IERhZmZQcm9kdWN0UHJpY2VzIHtcblx0cmV0dXJuIHtcblx0XHRkaXNjb3VudGVkUHJpY2U6IHByb2R1Y3QuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGRhZmZBZGQoXG5cdFx0XHRhY2MsIFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoZ2V0RGlzY291bnRlZFByaWNlKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDogXG5cdFx0XHRcdGdldE1pbmltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1EaXNjb3VudGVkUHJpY2UoaXRlbSwgZ2V0T3B0aW9uUXR5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSlcblx0XHQpLCBnZXREaXNjb3VudGVkUHJpY2UocHJvZHVjdCkpLFxuXHRcdGRpc2NvdW50OiB7IGFtb3VudDogbnVsbCwgcGVyY2VudDogbnVsbCB9LFxuXHRcdG9yaWdpbmFsUHJpY2U6IHByb2R1Y3QuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGRhZmZBZGQoXG5cdFx0XHRhY2MsIFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucHJpY2UsIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6IFxuXHRcdFx0XHRnZXRNaW5pbXVtUmVxdWlyZWRDb21wb3NpdGVJdGVtUHJpY2UoaXRlbSwgZ2V0T3B0aW9uUXR5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSlcblx0XHQpLCBwcm9kdWN0LnByaWNlKVxuXHR9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWF4aW11bSBwcmljZXMgb2YgYSBjb21wb3NpdGUgcHJvZHVjdCBmb3IgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZXhjbHVkaW5nIHVuc2VsZWN0ZWQsIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuICogQHBhcmFtIHByb2R1Y3QgYSBEYWZmQ29tcG9zaXRlUHJvZHVjdFxuICogQHBhcmFtIGFwcGxpZWRPcHRpb25zIGEgRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24+IHRoYXQgZGV0ZXJtaW5lcyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb3NpdGUgcHJvZHVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF4UHJpY2VzRm9yQ29uZmlndXJhdGlvbihwcm9kdWN0OiBEYWZmQ29tcG9zaXRlUHJvZHVjdCwgYXBwbGllZE9wdGlvbnM6IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPik6IERhZmZQcm9kdWN0UHJpY2VzIHtcblx0cmV0dXJuIHtcblx0XHRkaXNjb3VudGVkUHJpY2U6IHByb2R1Y3QuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGRhZmZBZGQoXG5cdFx0XHRhY2MsIFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoZ2V0RGlzY291bnRlZFByaWNlKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDogXG5cdFx0XHRcdGdldE1heGltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1EaXNjb3VudGVkUHJpY2UoaXRlbSwgZ2V0T3B0aW9uUXR5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSlcblx0XHQpLCBnZXREaXNjb3VudGVkUHJpY2UocHJvZHVjdCkpLFxuXHRcdGRpc2NvdW50OiB7IGFtb3VudDogbnVsbCwgcGVyY2VudDogbnVsbCB9LFxuXHRcdG9yaWdpbmFsUHJpY2U6IHByb2R1Y3QuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGRhZmZBZGQoXG5cdFx0XHRhY2MsXG5cdFx0XHRhcHBsaWVkT3B0aW9uSGFzSWQoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0pID8gXG5cdFx0XHRcdGRhZmZNdWx0aXBseShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXS5wcmljZSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDogXG5cdFx0XHRcdGdldE1heGltdW1SZXF1aXJlZENvbXBvc2l0ZUl0ZW1QcmljZShpdGVtLCBnZXRPcHRpb25RdHkoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0pKVxuXHRcdCksIHByb2R1Y3QucHJpY2UpXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlzY291bnRlZFByaWNlKHByb2R1Y3Q6IERhZmZQcm9kdWN0KTogbnVtYmVyIHtcbiAgcmV0dXJuIHByb2R1Y3QuZGlzY291bnQgPyBkYWZmU3VidHJhY3QocHJvZHVjdC5wcmljZSwgcHJvZHVjdC5kaXNjb3VudC5hbW91bnQpIDogcHJvZHVjdC5wcmljZVxufVxuXG4vKipcbiAqIEdldHMgdGhlIG1heGltdW0gcHJpY2VzIG9mIGEgY29tcG9zaXRlIHByb2R1Y3QgaW5jbHVkaW5nIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuICogQHBhcmFtIHByb2R1Y3QgYSBEYWZmQ29tcG9zaXRlUHJvZHVjdFxuICovXG5mdW5jdGlvbiBnZXRNYXhQcmljZXNGb3JDb25maWd1cmF0aW9uSW5jbHVkaW5nT3B0aW9uYWxJdGVtcyhwcm9kdWN0OiBEYWZmQ29tcG9zaXRlUHJvZHVjdCwgYXBwbGllZE9wdGlvbnM6IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPik6IERhZmZQcm9kdWN0UHJpY2VzIHtcblx0cmV0dXJuIHtcblx0XHRkaXNjb3VudGVkUHJpY2U6ICg8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCkuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGRhZmZBZGQoXG5cdFx0XHRhY2MsIFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoZ2V0RGlzY291bnRlZFByaWNlKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSwgYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucXVhbnRpdHkpIDpcblx0XHRcdFx0YXBwbGllZE9wdGlvbkhhc1F0eShhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXSkgP1xuXHRcdFx0XHRcdGRhZmZNdWx0aXBseShNYXRoLm1heCguLi5pdGVtLm9wdGlvbnMubWFwKGdldERpc2NvdW50ZWRQcmljZSkpLCBhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXS5xdWFudGl0eSkgOiBcblx0XHRcdFx0XHRNYXRoLm1heCguLi5pdGVtLm9wdGlvbnMubWFwKGdldERpc2NvdW50ZWRQcmljZSkpXG5cdFx0KSwgZ2V0RGlzY291bnRlZFByaWNlKHByb2R1Y3QpKSxcblx0XHRkaXNjb3VudDogeyBhbW91bnQ6IG51bGwsIHBlcmNlbnQ6IG51bGwgfSxcblx0XHRvcmlnaW5hbFByaWNlOiAoPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QpLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBkYWZmQWRkKFxuXHRcdFx0YWNjLFxuXHRcdFx0YXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/IFxuXHRcdFx0XHRkYWZmTXVsdGlwbHkoYXBwbGllZE9wdGlvbnNbaXRlbS5pZF0ucHJpY2UsIGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdLnF1YW50aXR5KSA6IFxuXHRcdFx0XHRhcHBsaWVkT3B0aW9uSGFzUXR5KGFwcGxpZWRPcHRpb25zW2l0ZW0uaWRdKSA/XG5cdFx0XHRcdFx0ZGFmZk11bHRpcGx5KE1hdGgubWF4KC4uLml0ZW0ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5wcmljZSkpLCBhcHBsaWVkT3B0aW9uc1tpdGVtLmlkXS5xdWFudGl0eSkgOiBcblx0XHRcdFx0XHRNYXRoLm1heCguLi5pdGVtLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ucHJpY2UpKVxuXHRcdCksIHByb2R1Y3QucHJpY2UpXG5cdH1cbn1cblxuLyoqXG4gKiBUYWtlcyBhIHByb2R1Y3QgYW5kIGEgc2V0IG9mIG9wdGlvbiBjb25maWd1cmF0aW9ucyBhbmQgY29udmVydCBpdCBpbnRvIGEgZGljdGlvbmFyeSBvZiB0aGUgZnVsbCBvcHRpb24gb2JqZWN0cy5cbiAqIEBwYXJhbSBwcm9kdWN0IGEgRGFmZkNvbXBvc2l0ZVByb2R1Y3RcbiAqIEBwYXJhbSBjb25maWd1cmF0aW9uIGEgRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0+IHVzZWQgdG8gYnVpbGQgdGhlIGFwcGxpZWRPcHRpb25zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0QXBwbGllZE9wdGlvbnNGb3JDb25maWd1cmF0aW9uKHByb2R1Y3Q6IERhZmZDb21wb3NpdGVQcm9kdWN0LCBjb25maWd1cmF0aW9uOiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbT4pOiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4ge1xuXHRyZXR1cm4gKDxEYWZmQ29tcG9zaXRlUHJvZHVjdD5wcm9kdWN0KS5pdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKHtcblx0XHQuLi5hY2MsXG5cdFx0W2l0ZW0uaWRdOiBjb25maWd1cmF0aW9uW2l0ZW0uaWRdID8ge1xuXHRcdFx0Li4uaXRlbS5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5pZCA9PT0gY29uZmlndXJhdGlvbltpdGVtLmlkXS52YWx1ZSksXG5cdFx0XHRxdWFudGl0eTogKGNvbmZpZ3VyYXRpb25baXRlbS5pZF0ucXR5ID09PSBudWxsIHx8IGNvbmZpZ3VyYXRpb25baXRlbS5pZF0ucXR5ID09PSB1bmRlZmluZWQpID8gMSA6IGNvbmZpZ3VyYXRpb25baXRlbS5pZF0ucXR5XG5cdFx0fSA6IG51bGxcbn0pLCB7fSlcbn1cblxuLy90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuZnVuY3Rpb24gYXBwbGllZE9wdGlvbkhhc0lkKGFwcGxpZWRPcHRpb246IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYXBwbGllZE9wdGlvbiAmJiAhIWFwcGxpZWRPcHRpb24uaWQ7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvblF0eShhcHBsaWVkT3B0aW9uOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24pOiBudW1iZXIge1xuXHRyZXR1cm4gYXBwbGllZE9wdGlvbkhhc1F0eShhcHBsaWVkT3B0aW9uKSA/IGFwcGxpZWRPcHRpb24ucXVhbnRpdHkgOiAxO1xufVxuXG4vL3RvZG86IHVzZSBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5mdW5jdGlvbiBhcHBsaWVkT3B0aW9uSGFzUXR5KGFwcGxpZWRPcHRpb246IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYXBwbGllZE9wdGlvbiAmJiBhcHBsaWVkT3B0aW9uLnF1YW50aXR5ICE9PSBudWxsO1xufVxuIl19