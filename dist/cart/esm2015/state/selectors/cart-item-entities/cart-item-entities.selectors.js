/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { DaffCartItemInputType } from '@daffodil/cart';
import { daffCartItemEntitiesAdapter } from '../../reducers/cart-item-entities/cart-item-entities-reducer-adapter';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCartItemStateEnum } from '../../models/stateful-cart-item';
/**
 * @record
 * @template T
 */
export function DaffCartItemEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemEntitiesState;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemIds;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemEntities;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectAllCartItems;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemTotal;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItem;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectTotalNumberOfCartItems;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemConfiguredAttributes;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemCompositeOptions;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectIsCartItemOutOfStock;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemMutating;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemState;
}
/** @type {?} */
const createCartItemEntitiesSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    const { selectCartFeatureState } = getDaffCartFeatureSelector();
    /** @type {?} */
    const adapterSelectors = daffCartItemEntitiesAdapter().getSelectors();
    /**
     * CartItem Entities State
     * @type {?}
     */
    const selectCartItemEntitiesState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cartItems));
    /**
     * Selector for product IDs.
     * @type {?}
     */
    const selectCartItemIds = createSelector(selectCartItemEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all product entities (see ngrx/entity).
     * @type {?}
     */
    const selectCartItemEntities = createSelector(selectCartItemEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for all products on state.
     * @type {?}
     */
    const selectAllCartItems = createSelector(selectCartItemEntitiesState, adapterSelectors.selectAll);
    /**
     * Selector for the total number of products.
     * @type {?}
     */
    const selectCartItemTotal = createSelector(selectCartItemEntitiesState, adapterSelectors.selectTotal);
    /** @type {?} */
    const selectCartItem = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => cartItems[props.id]));
    /**
     * Selector for the total number of cart items that takes into account the qty on each cart item.
     * @type {?}
     */
    const selectTotalNumberOfCartItems = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    (cartItems) => cartItems.reduce((/**
     * @param {?} acc
     * @param {?} cartItem
     * @return {?}
     */
    (acc, cartItem) => acc + cartItem.qty), 0)));
    /** @type {?} */
    const selectCartItemConfiguredAttributes = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Configurable) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).attributes;
    }));
    /** @type {?} */
    const selectCartItemCompositeOptions = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Composite) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).options;
    }));
    /** @type {?} */
    const selectIsCartItemOutOfStock = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        return cartItem ? !cartItem.in_stock : null;
    }));
    //todo optional chaining
    /** @type {?} */
    const selectCartItemMutating = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    (cartItems) => cartItems && cartItems.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    (acc, item) => acc || item.daffState === DaffCartItemStateEnum.Mutating), false)));
    /** @type {?} */
    const selectCartItemState = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        //todo use optional chaining when possible
        return cartItem ? cartItem.daffState : null;
    }));
    return {
        selectCartItemEntitiesState,
        selectCartItemIds,
        selectCartItemEntities,
        selectAllCartItems,
        selectCartItemTotal,
        selectCartItem,
        selectTotalNumberOfCartItems,
        selectCartItemConfiguredAttributes,
        selectCartItemCompositeOptions,
        selectIsCartItemOutOfStock,
        selectCartItemMutating,
        selectCartItemState
    };
});
const ɵ0 = createCartItemEntitiesSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartItemEntitiesSelectors());
};
/** @type {?} */
export const getDaffCartItemEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWVudGl0aWVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUcxRixPQUFPLEVBQWlHLHFCQUFxQixFQUFtRCxNQUFNLGdCQUFnQixDQUFDO0FBRXZNLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBd0IsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFFOUYsMkRBYUM7OztJQVpBLDRFQUFzRTs7SUFDdEUsa0VBQW1FOztJQUNuRSx1RUFBNkU7O0lBQzdFLG1FQUFrRDs7SUFDbEQsb0VBQXNEOztJQUN0RCwrREFBNkQ7O0lBQzdELDZFQUErRDs7SUFDL0QsbUZBQW1IOztJQUNuSCwrRUFBeUc7O0lBQ3pHLDJFQUErRTs7SUFDL0UsdUVBQTBEOztJQUMxRCxvRUFBc0Y7OztNQUdqRiwrQkFBK0I7Ozs7QUFBRyxHQUlNLEVBQUU7VUFDekMsRUFDTCxzQkFBc0IsRUFDdEIsR0FBRywwQkFBMEIsRUFBVzs7VUFDbkMsZ0JBQWdCLEdBQUcsMkJBQTJCLEVBQUssQ0FBQyxZQUFZLEVBQUU7Ozs7O1VBSWxFLDJCQUEyQixHQUFHLGNBQWMsQ0FDakQsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBcUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDMUQ7Ozs7O1VBYUssaUJBQWlCLEdBQUcsY0FBYyxDQUN2QywyQkFBMkIsRUFDM0IsZ0JBQWdCLENBQUMsU0FBUyxDQUMxQjs7Ozs7VUFLSyxz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QUFDLElBQUksQ0FBQztJQUM3QyxDQUFDLEVBQ0Q7SUFFRCxPQUFPO1FBQ04sMkJBQTJCO1FBQzNCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLGtDQUFrQztRQUNsQyw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixtQkFBbUI7S0FDbkIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFZ0QsR0FBRyxFQUFFOztRQUNqRCxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUl1QyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDN0QsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsK0JBQStCLEVBQVcsRUFBQztBQUMvQyxDQUFDOztBQVRELE1BQU0sT0FBTyxnQ0FBZ0MsR0FBRyxNQVM5QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZSwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uLCBEYWZmQ2FydCwgRGFmZkNhcnRPcmRlclJlc3VsdCwgRGFmZkNhcnRJdGVtSW5wdXRUeXBlLCBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW0sIERhZmZDb21wb3NpdGVDYXJ0SXRlbSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgZGFmZkNhcnRJdGVtRW50aXRpZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2FydC1pdGVtLWVudGl0aWVzL2NhcnQtaXRlbS1lbnRpdGllcy1yZWR1Y2VyLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGFmZkNhcnRSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBnZXREYWZmQ2FydEZlYXR1cmVTZWxlY3RvciB9IGZyb20gJy4uL2NhcnQtZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0sIERhZmZTdGF0ZWZ1bENhcnRJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlZnVsLWNhcnQtaXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNhcnRJdGVtRW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4ge1xuXHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxUPj47XG5cdHNlbGVjdENhcnRJdGVtSWRzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8VD5bJ2lkcyddPjtcblx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPFQ+WydlbnRpdGllcyddPjtcblx0c2VsZWN0QWxsQ2FydEl0ZW1zOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFtdPjtcblx0c2VsZWN0Q2FydEl0ZW1Ub3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENhcnRJdGVtOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBUPjtcblx0c2VsZWN0VG90YWxOdW1iZXJPZkNhcnRJdGVtczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENhcnRJdGVtQ29uZmlndXJlZEF0dHJpYnV0ZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZVtdPjtcblx0c2VsZWN0Q2FydEl0ZW1Db21wb3NpdGVPcHRpb25zOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb25bXT47XG5cdHNlbGVjdElzQ2FydEl0ZW1PdXRPZlN0b2NrOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q2FydEl0ZW1NdXRhdGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuXHRzZWxlY3RDYXJ0SXRlbVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0+O1xufVxuXG5jb25zdCBjcmVhdGVDYXJ0SXRlbUVudGl0aWVzU2VsZWN0b3JzID0gPFxuXHRUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcblx0ViBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0LFxuICBVIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbVxuPigpOiBEYWZmQ2FydEl0ZW1FbnRpdGllc01lbW9pemVkU2VsZWN0b3JzPFU+ID0+IHtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdENhcnRGZWF0dXJlU3RhdGVcblx0fSA9IGdldERhZmZDYXJ0RmVhdHVyZVNlbGVjdG9yPFQsIFYsIFU+KCk7XG5cdGNvbnN0IGFkYXB0ZXJTZWxlY3RvcnMgPSBkYWZmQ2FydEl0ZW1FbnRpdGllc0FkYXB0ZXI8VT4oKS5nZXRTZWxlY3RvcnMoKTtcblx0LyoqXG5cdCAqIENhcnRJdGVtIEVudGl0aWVzIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbUVudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0RmVhdHVyZVN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2Vyc1N0YXRlPFQsIFYsIFU+KSA9PiBzdGF0ZS5jYXJ0SXRlbXNcblx0KTtcblxuXHQvKipcblx0ICogQWRhcHRlcnMgY3JlYXRlZCB3aXRoIEBuZ3J4L2VudGl0eSBnZW5lcmF0ZVxuXHQgKiBjb21tb25seSB1c2VkIHNlbGVjdG9yIGZ1bmN0aW9ucyBpbmNsdWRpbmdcblx0ICogZ2V0dGluZyBhbGwgaWRzIGluIHRoZSByZWNvcmQgc2V0LCBhIGRpY3Rpb25hcnlcblx0ICogb2YgdGhlIHJlY29yZHMgYnkgaWQsIGFuIGFycmF5IG9mIHJlY29yZHMgYW5kXG5cdCAqIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVjb3Jkcy4gVGhpcyByZWR1Y2VzIGJvaWxlcnBsYXRlXG5cdCAqIGluIHNlbGVjdGluZyByZWNvcmRzIGZyb20gdGhlIGVudGl0eSBzdGF0ZS5cblx0ICovXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgcHJvZHVjdCBJRHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbUlkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdElkc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgYWxsIHByb2R1Y3QgZW50aXRpZXMgKHNlZSBuZ3J4L2VudGl0eSkuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbUVudGl0aWVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0RW50aXRpZXNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCBwcm9kdWN0cyBvbiBzdGF0ZS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdEFsbENhcnRJdGVtcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdEFsbFxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHRvdGFsIG51bWJlciBvZiBwcm9kdWN0cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENhcnRJdGVtVG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RUb3RhbFxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhcnRJdGVtID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllcyxcblx0XHQoY2FydEl0ZW1zLCBwcm9wcykgPT4gY2FydEl0ZW1zW3Byb3BzLmlkXVxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHRvdGFsIG51bWJlciBvZiBjYXJ0IGl0ZW1zIHRoYXQgdGFrZXMgaW50byBhY2NvdW50IHRoZSBxdHkgb24gZWFjaCBjYXJ0IGl0ZW0uXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RUb3RhbE51bWJlck9mQ2FydEl0ZW1zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QWxsQ2FydEl0ZW1zLFxuXHRcdChjYXJ0SXRlbXMpID0+IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgY2FydEl0ZW0pID0+IGFjYyArIGNhcnRJdGVtLnF0eSwgMClcblx0KVxuXG5cdGNvbnN0IHNlbGVjdENhcnRJdGVtQ29uZmlndXJlZEF0dHJpYnV0ZXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzLFxuXHRcdChjYXJ0SXRlbXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBjYXJ0SXRlbSA9IHNlbGVjdENhcnRJdGVtLnByb2plY3RvcihjYXJ0SXRlbXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYoY2FydEl0ZW0udHlwZSAhPT0gRGFmZkNhcnRJdGVtSW5wdXRUeXBlLkNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICg8RGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtPmNhcnRJdGVtKS5hdHRyaWJ1dGVzO1xuXHRcdH1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbUNvbXBvc2l0ZU9wdGlvbnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzLFxuXHRcdChjYXJ0SXRlbXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBjYXJ0SXRlbSA9IHNlbGVjdENhcnRJdGVtLnByb2plY3RvcihjYXJ0SXRlbXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXG5cdFx0XHRpZihjYXJ0SXRlbS50eXBlICE9PSBEYWZmQ2FydEl0ZW1JbnB1dFR5cGUuQ29tcG9zaXRlKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKDxEYWZmQ29tcG9zaXRlQ2FydEl0ZW0+Y2FydEl0ZW0pLm9wdGlvbnM7XG5cdFx0fVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdElzQ2FydEl0ZW1PdXRPZlN0b2NrID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllcyxcblx0XHQoY2FydEl0ZW1zLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgY2FydEl0ZW0gPSBzZWxlY3RDYXJ0SXRlbS5wcm9qZWN0b3IoY2FydEl0ZW1zLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuXHRcdFx0cmV0dXJuIGNhcnRJdGVtID8gIWNhcnRJdGVtLmluX3N0b2NrIDogbnVsbDtcblx0XHR9XG5cdCk7XG5cblx0Ly90b2RvIG9wdGlvbmFsIGNoYWluaW5nXG5cdGNvbnN0IHNlbGVjdENhcnRJdGVtTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RBbGxDYXJ0SXRlbXMsXG5cdFx0KGNhcnRJdGVtczogVVtdKSA9PiBjYXJ0SXRlbXMgJiYgY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PlxuXHRcdFx0YWNjIHx8IGl0ZW0uZGFmZlN0YXRlID09PSBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uTXV0YXRpbmcsIGZhbHNlKVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhcnRJdGVtU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzLFxuXHRcdChjYXJ0SXRlbXMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBjYXJ0SXRlbSA9IHNlbGVjdENhcnRJdGVtLnByb2plY3RvcihjYXJ0SXRlbXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXG5cdFx0XHQvL3RvZG8gdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcblx0XHRcdHJldHVybiBjYXJ0SXRlbSA/IGNhcnRJdGVtLmRhZmZTdGF0ZSA6IG51bGw7XG5cdFx0fVxuXHQpXG5cblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllc1N0YXRlLFxuXHRcdHNlbGVjdENhcnRJdGVtSWRzLFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXMsXG5cdFx0c2VsZWN0QWxsQ2FydEl0ZW1zLFxuXHRcdHNlbGVjdENhcnRJdGVtVG90YWwsXG5cdFx0c2VsZWN0Q2FydEl0ZW0sXG5cdFx0c2VsZWN0VG90YWxOdW1iZXJPZkNhcnRJdGVtcyxcblx0XHRzZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzLFxuXHRcdHNlbGVjdENhcnRJdGVtQ29tcG9zaXRlT3B0aW9ucyxcblx0XHRzZWxlY3RJc0NhcnRJdGVtT3V0T2ZTdG9jayxcblx0XHRzZWxlY3RDYXJ0SXRlbU11dGF0aW5nLFxuXHRcdHNlbGVjdENhcnRJdGVtU3RhdGVcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8XG5cdFx0VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG5cdFx0ViBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0LFxuXHRcdFUgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtXG5cdD4oKTogRGFmZkNhcnRJdGVtRW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxVPiA9PiBjYWNoZSA9IGNhY2hlXG5cdFx0PyBjYWNoZVxuXHRcdDogY3JlYXRlQ2FydEl0ZW1FbnRpdGllc1NlbGVjdG9yczxULCBWLCBVPigpO1xufSkoKVxuIl19