/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { daffSubtract } from '@daffodil/core';
import { daffProductEntitiesAdapter } from '../../reducers/product-entities/product-entities-reducer-adapter';
import { getDaffProductFeatureSelector } from '../product-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffProductEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductEntitiesState;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductIds;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductEntities;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectAllProducts;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductTotal;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProduct;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductPrice;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountAmount;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountedPrice;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountPercent;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectProductHasDiscount;
    /** @type {?} */
    DaffProductEntitiesMemoizedSelectors.prototype.selectIsProductOutOfStock;
}
/** @type {?} */
const createProductEntitiesSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectProductState } = getDaffProductFeatureSelector();
    /** @type {?} */
    const adapterSelectors = daffProductEntitiesAdapter().getSelectors();
    /**
     * Product Entities State
     * @type {?}
     */
    const selectProductEntitiesState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.products));
    /**
     * Selector for product IDs.
     * @type {?}
     */
    const selectProductIds = createSelector(selectProductEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all product entities (see ngrx/entity).
     * @type {?}
     */
    const selectProductEntities = createSelector(selectProductEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for all products on state.
     * @type {?}
     */
    const selectAllProducts = createSelector(selectProductEntitiesState, adapterSelectors.selectAll);
    /**
     * Selector for the total number of products.
     * @type {?}
     */
    const selectProductTotal = createSelector(selectProductEntitiesState, adapterSelectors.selectTotal);
    /** @type {?} */
    const selectProduct = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => products[props.id]));
    /** @type {?} */
    const selectProductPrice = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        //todo: use optional chaining when possible
        return product && product.price || null;
    }));
    /** @type {?} */
    const selectProductDiscountAmount = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        //todo: use optional chaining when possible
        return (product.discount && product.discount.amount) || 0;
    }));
    /** @type {?} */
    const selectProductDiscountedPrice = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const price = selectProductPrice.projector(products, { id: props.id });
        /** @type {?} */
        const discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });
        return daffSubtract(price, discountAmount);
    }))
    //todo use optional chaining when possible.
    ;
    //todo use optional chaining when possible.
    /** @type {?} */
    const selectProductDiscountPercent = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        return (product.discount && product.discount.percent) || 0;
    }));
    /** @type {?} */
    const selectProductHasDiscount = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });
        return !!discountAmount;
    }));
    /** @type {?} */
    const selectIsProductOutOfStock = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        return product ? !product.in_stock : null;
    }));
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
        selectIsProductOutOfStock
    };
});
const ɵ0 = createProductEntitiesSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createProductEntitiesSelectors());
};
/** @type {?} */
export const getDaffProductEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1lbnRpdGllcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9wcm9kdWN0LWVudGl0aWVzL3Byb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUUxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBSTVFLDBEQWFDOzs7SUFaQSwwRUFBcUU7O0lBQ3JFLGdFQUFrRTs7SUFDbEUscUVBQTRFOztJQUM1RSxpRUFBaUQ7O0lBQ2pELGtFQUFxRDs7SUFDckQsNkRBQTREOztJQUM1RCxrRUFBc0U7O0lBQ3RFLDJFQUErRTs7SUFDL0UsNEVBQWdGOztJQUNoRiw0RUFBZ0Y7O0lBQ2hGLHdFQUE2RTs7SUFDN0UseUVBQThFOzs7TUFHekUsOEJBQThCOzs7O0FBQUcsR0FBbUUsRUFBRTtVQUNyRyxFQUNMLGtCQUFrQixFQUNsQixHQUFHLDZCQUE2QixFQUFLOztVQUNoQyxnQkFBZ0IsR0FBRywwQkFBMEIsRUFBSyxDQUFDLFlBQVksRUFBRTs7Ozs7VUFJakUsMEJBQTBCLEdBQUcsY0FBYyxDQUNoRCxrQkFBa0I7Ozs7SUFDbEIsQ0FBQyxLQUFrQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUN0RDs7Ozs7VUFhSyxnQkFBZ0IsR0FBRyxjQUFjLENBQ3RDLDBCQUEwQixFQUMxQixnQkFBZ0IsQ0FBQyxTQUFTLENBQzFCOzs7OztVQUtLLHFCQUFxQixHQUFHLGNBQWMsQ0FDM0MsMEJBQTBCLEVBQzFCLGdCQUFnQixDQUFDLGNBQWMsQ0FDL0I7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QUM7SUFDM0MsQ0FBQyxFQUNEO0lBRUQsT0FBTztRQUNOLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIseUJBQXlCO0tBQ3pCLENBQUE7QUFDRixDQUFDLENBQUE7Ozs7O0FBRStDLEdBQUcsRUFBRTs7UUFDaEQsS0FBSztJQUNUOzs7O0lBQU8sR0FBbUUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ3pGLENBQUMsQ0FBQyxLQUFLO1FBQ1AsQ0FBQyxDQUFDLDhCQUE4QixFQUFLLEVBQUM7QUFDeEMsQ0FBQzs7QUFMRCxNQUFNLE9BQU8sK0JBQStCLEdBQUcsTUFLN0MsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuaW1wb3J0IHsgZGFmZlN1YnRyYWN0IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBkYWZmUHJvZHVjdEVudGl0aWVzQWRhcHRlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtZW50aXRpZXMvcHJvZHVjdC1lbnRpdGllcy1yZWR1Y2VyLWFkYXB0ZXInO1xuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0PiB7XG5cdHNlbGVjdFByb2R1Y3RFbnRpdGllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8VD4+O1xuXHRzZWxlY3RQcm9kdWN0SWRzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8VD5bJ2lkcyddPjtcblx0c2VsZWN0UHJvZHVjdEVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8VD5bJ2VudGl0aWVzJ10+O1xuXHRzZWxlY3RBbGxQcm9kdWN0czogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbXT47XG5cdHNlbGVjdFByb2R1Y3RUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdFByb2R1Y3Q6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIFQ+O1xuXHRzZWxlY3RQcm9kdWN0UHJpY2U6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdFByb2R1Y3REaXNjb3VudEFtb3VudDogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0UHJvZHVjdERpc2NvdW50ZWRQcmljZTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0UHJvZHVjdERpc2NvdW50UGVyY2VudDogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0UHJvZHVjdEhhc0Rpc2NvdW50OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0SXNQcm9kdWN0T3V0T2ZTdG9jazogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgYm9vbGVhbj47XG59XG5cbmNvbnN0IGNyZWF0ZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGVcblx0fSA9IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yPFQ+KCk7XG5cdGNvbnN0IGFkYXB0ZXJTZWxlY3RvcnMgPSBkYWZmUHJvZHVjdEVudGl0aWVzQWRhcHRlcjxUPigpLmdldFNlbGVjdG9ycygpO1xuXHQvKipcblx0ICogUHJvZHVjdCBFbnRpdGllcyBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdEVudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLnByb2R1Y3RzXG5cdCk7XG5cblx0LyoqXG5cdCAqIEFkYXB0ZXJzIGNyZWF0ZWQgd2l0aCBAbmdyeC9lbnRpdHkgZ2VuZXJhdGVcblx0ICogY29tbW9ubHkgdXNlZCBzZWxlY3RvciBmdW5jdGlvbnMgaW5jbHVkaW5nXG5cdCAqIGdldHRpbmcgYWxsIGlkcyBpbiB0aGUgcmVjb3JkIHNldCwgYSBkaWN0aW9uYXJ5XG5cdCAqIG9mIHRoZSByZWNvcmRzIGJ5IGlkLCBhbiBhcnJheSBvZiByZWNvcmRzIGFuZFxuXHQgKiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlY29yZHMuIFRoaXMgcmVkdWNlcyBib2lsZXJwbGF0ZVxuXHQgKiBpbiBzZWxlY3RpbmcgcmVjb3JkcyBmcm9tIHRoZSBlbnRpdHkgc3RhdGUuXG5cdCAqL1xuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHByb2R1Y3QgSURzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdElkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0SWRzXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBhbGwgcHJvZHVjdCBlbnRpdGllcyAoc2VlIG5ncngvZW50aXR5KS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3RFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0RW50aXRpZXNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCBwcm9kdWN0cyBvbiBzdGF0ZS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdEFsbFByb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RBbGxcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSB0b3RhbCBudW1iZXIgb2YgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RQcm9kdWN0VG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdFRvdGFsXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiBwcm9kdWN0c1twcm9wcy5pZF1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RQcm9kdWN0UHJpY2UgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IHNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuXHRcdFx0Ly90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuXHRcdFx0cmV0dXJuIHByb2R1Y3QgJiYgcHJvZHVjdC5wcmljZSB8fCBudWxsO1xuXHRcdH1cblx0KVxuXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3REaXNjb3VudEFtb3VudCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gc2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXG5cdFx0XHQvL3RvZG86IHVzZSBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5cdFx0XHRyZXR1cm4gKHByb2R1Y3QuZGlzY291bnQgJiYgcHJvZHVjdC5kaXNjb3VudC5hbW91bnQpIHx8IDA7XG5cdFx0fVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3REaXNjb3VudGVkUHJpY2UgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBzZWxlY3RQcm9kdWN0UHJpY2UucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGNvbnN0IGRpc2NvdW50QW1vdW50ID0gc2VsZWN0UHJvZHVjdERpc2NvdW50QW1vdW50LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cblx0XHRcdHJldHVybiBkYWZmU3VidHJhY3QocHJpY2UsIGRpc2NvdW50QW1vdW50KTtcblx0XHR9XG5cdClcblxuXHQvL3RvZG8gdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGUuXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3REaXNjb3VudFBlcmNlbnQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IHNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuXHRcdFx0cmV0dXJuIChwcm9kdWN0LmRpc2NvdW50ICYmIHByb2R1Y3QuZGlzY291bnQucGVyY2VudCkgfHwgMDtcblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdEhhc0Rpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IGRpc2NvdW50QW1vdW50ID0gc2VsZWN0UHJvZHVjdERpc2NvdW50QW1vdW50LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cblx0XHRcdHJldHVybiAhIWRpc2NvdW50QW1vdW50O1xuXHRcdH1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RJc1Byb2R1Y3RPdXRPZlN0b2NrID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSBzZWxlY3RQcm9kdWN0LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRcblx0XHRcdHJldHVybiBwcm9kdWN0ID8gIXByb2R1Y3QuaW5fc3RvY2sgOiBudWxsO1xuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXNTdGF0ZSxcblx0XHRzZWxlY3RQcm9kdWN0SWRzLFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RBbGxQcm9kdWN0cyxcblx0XHRzZWxlY3RQcm9kdWN0VG90YWwsXG5cdFx0c2VsZWN0UHJvZHVjdCxcblx0XHRzZWxlY3RQcm9kdWN0UHJpY2UsXG5cdFx0c2VsZWN0UHJvZHVjdERpc2NvdW50QW1vdW50LFxuXHRcdHNlbGVjdFByb2R1Y3REaXNjb3VudGVkUHJpY2UsXG5cdFx0c2VsZWN0UHJvZHVjdERpc2NvdW50UGVyY2VudCxcblx0XHRzZWxlY3RQcm9kdWN0SGFzRGlzY291bnQsXG5cdFx0c2VsZWN0SXNQcm9kdWN0T3V0T2ZTdG9ja1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZlByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IGNhY2hlID0gY2FjaGUgXG5cdFx0PyBjYWNoZSBcblx0XHQ6IGNyZWF0ZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9yczxUPigpO1xufSkoKVxuIl19