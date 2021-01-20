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
var createCartItemEntitiesSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    /** @type {?} */
    var adapterSelectors = daffCartItemEntitiesAdapter().getSelectors();
    /**
     * CartItem Entities State
     * @type {?}
     */
    var selectCartItemEntitiesState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartItems; }));
    /**
     * Selector for product IDs.
     * @type {?}
     */
    var selectCartItemIds = createSelector(selectCartItemEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all product entities (see ngrx/entity).
     * @type {?}
     */
    var selectCartItemEntities = createSelector(selectCartItemEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for all products on state.
     * @type {?}
     */
    var selectAllCartItems = createSelector(selectCartItemEntitiesState, adapterSelectors.selectAll);
    /**
     * Selector for the total number of products.
     * @type {?}
     */
    var selectCartItemTotal = createSelector(selectCartItemEntitiesState, adapterSelectors.selectTotal);
    /** @type {?} */
    var selectCartItem = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) { return cartItems[props.id]; }));
    /**
     * Selector for the total number of cart items that takes into account the qty on each cart item.
     * @type {?}
     */
    var selectTotalNumberOfCartItems = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    function (cartItems) { return cartItems.reduce((/**
     * @param {?} acc
     * @param {?} cartItem
     * @return {?}
     */
    function (acc, cartItem) { return acc + cartItem.qty; }), 0); }));
    /** @type {?} */
    var selectCartItemConfiguredAttributes = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Configurable) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).attributes;
    }));
    /** @type {?} */
    var selectCartItemCompositeOptions = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Composite) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).options;
    }));
    /** @type {?} */
    var selectIsCartItemOutOfStock = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        return cartItem ? !cartItem.in_stock : null;
    }));
    //todo optional chaining
    /** @type {?} */
    var selectCartItemMutating = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    function (cartItems) { return cartItems && cartItems.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    function (acc, item) {
        return acc || item.daffState === DaffCartItemStateEnum.Mutating;
    }), false); }));
    /** @type {?} */
    var selectCartItemState = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        //todo use optional chaining when possible
        return cartItem ? cartItem.daffState : null;
    }));
    return {
        selectCartItemEntitiesState: selectCartItemEntitiesState,
        selectCartItemIds: selectCartItemIds,
        selectCartItemEntities: selectCartItemEntities,
        selectAllCartItems: selectAllCartItems,
        selectCartItemTotal: selectCartItemTotal,
        selectCartItem: selectCartItem,
        selectTotalNumberOfCartItems: selectTotalNumberOfCartItems,
        selectCartItemConfiguredAttributes: selectCartItemConfiguredAttributes,
        selectCartItemCompositeOptions: selectCartItemCompositeOptions,
        selectIsCartItemOutOfStock: selectIsCartItemOutOfStock,
        selectCartItemMutating: selectCartItemMutating,
        selectCartItemState: selectCartItemState
    };
});
var ɵ0 = createCartItemEntitiesSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartItemEntitiesSelectors(); });
};
/** @type {?} */
export var getDaffCartItemEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWVudGl0aWVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUcxRixPQUFPLEVBQWlHLHFCQUFxQixFQUFtRCxNQUFNLGdCQUFnQixDQUFDO0FBRXZNLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBd0IsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFFOUYsMkRBYUM7OztJQVpBLDRFQUFzRTs7SUFDdEUsa0VBQW1FOztJQUNuRSx1RUFBNkU7O0lBQzdFLG1FQUFrRDs7SUFDbEQsb0VBQXNEOztJQUN0RCwrREFBNkQ7O0lBQzdELDZFQUErRDs7SUFDL0QsbUZBQW1IOztJQUNuSCwrRUFBeUc7O0lBQ3pHLDJFQUErRTs7SUFDL0UsdUVBQTBEOztJQUMxRCxvRUFBc0Y7OztJQUdqRiwrQkFBK0I7Ozs7QUFBRztJQU10QyxJQUFBLDRFQUFzQjs7UUFFakIsZ0JBQWdCLEdBQUcsMkJBQTJCLEVBQUssQ0FBQyxZQUFZLEVBQUU7Ozs7O1FBSWxFLDJCQUEyQixHQUFHLGNBQWMsQ0FDakQsc0JBQXNCOzs7O0lBQ3RCLFVBQUMsS0FBcUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZSxFQUMxRDs7Ozs7UUFhSyxpQkFBaUIsR0FBRyxjQUFjLENBQ3ZDLDJCQUEyQixFQUMzQixnQkFBZ0IsQ0FBQyxTQUFTLENBQzFCOzs7OztRQUtLLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMsMkJBQTJC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RCxPQUFPO1FBQ04sMkJBQTJCLDZCQUFBO1FBQzNCLGlCQUFpQixtQkFBQTtRQUNqQixzQkFBc0Isd0JBQUE7UUFDdEIsa0JBQWtCLG9CQUFBO1FBQ2xCLG1CQUFtQixxQkFBQTtRQUNuQixjQUFjLGdCQUFBO1FBQ2QsNEJBQTRCLDhCQUFBO1FBQzVCLGtDQUFrQyxvQ0FBQTtRQUNsQyw4QkFBOEIsZ0NBQUE7UUFDOUIsMEJBQTBCLDRCQUFBO1FBQzFCLHNCQUFzQix3QkFBQTtRQUN0QixtQkFBbUIscUJBQUE7S0FDbkIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFZ0Q7O1FBQzVDLEtBQUs7SUFDVDs7OztJQUFPLGNBSTBDLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDN0QsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsK0JBQStCLEVBQVcsRUFGSSxDQUVKLEVBQUM7QUFDL0MsQ0FBQzs7QUFURCxNQUFNLEtBQU8sZ0NBQWdDLEdBQUcsTUFTOUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW1BdHRyaWJ1dGUsIERhZmZDb21wb3NpdGVDYXJ0SXRlbU9wdGlvbiwgRGFmZkNhcnQsIERhZmZDYXJ0T3JkZXJSZXN1bHQsIERhZmZDYXJ0SXRlbUlucHV0VHlwZSwgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IGRhZmZDYXJ0SXRlbUVudGl0aWVzQWRhcHRlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMtcmVkdWNlci1hZGFwdGVyJztcbmltcG9ydCB7IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgZ2V0RGFmZkNhcnRGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9jYXJ0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtU3RhdGVFbnVtLCBEYWZmU3RhdGVmdWxDYXJ0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zdGF0ZWZ1bC1jYXJ0LWl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0SXRlbUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0+IHtcblx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8VD4+O1xuXHRzZWxlY3RDYXJ0SXRlbUlkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPFQ+WydpZHMnXT47XG5cdHNlbGVjdENhcnRJdGVtRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxUPlsnZW50aXRpZXMnXT47XG5cdHNlbGVjdEFsbENhcnRJdGVtczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbXT47XG5cdHNlbGVjdENhcnRJdGVtVG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+O1xuXHRzZWxlY3RDYXJ0SXRlbTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgVD47XG5cdHNlbGVjdFRvdGFsTnVtYmVyT2ZDYXJ0SXRlbXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+O1xuXHRzZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW1BdHRyaWJ1dGVbXT47XG5cdHNlbGVjdENhcnRJdGVtQ29tcG9zaXRlT3B0aW9uczogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uW10+O1xuXHRzZWxlY3RJc0NhcnRJdGVtT3V0T2ZTdG9jazogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdENhcnRJdGVtTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q2FydEl0ZW1TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgRGFmZkNhcnRJdGVtU3RhdGVFbnVtPjtcbn1cblxuY29uc3QgY3JlYXRlQ2FydEl0ZW1FbnRpdGllc1NlbGVjdG9ycyA9IDxcblx0VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG5cdFYgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcbiAgVSBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW1cbj4oKTogRGFmZkNhcnRJdGVtRW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxVPiA9PiB7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RDYXJ0RmVhdHVyZVN0YXRlXG5cdH0gPSBnZXREYWZmQ2FydEZlYXR1cmVTZWxlY3RvcjxULCBWLCBVPigpO1xuXHRjb25zdCBhZGFwdGVyU2VsZWN0b3JzID0gZGFmZkNhcnRJdGVtRW50aXRpZXNBZGFwdGVyPFU+KCkuZ2V0U2VsZWN0b3JzKCk7XG5cdC8qKlxuXHQgKiBDYXJ0SXRlbSBFbnRpdGllcyBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1FbnRpdGllc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZTxULCBWLCBVPikgPT4gc3RhdGUuY2FydEl0ZW1zXG5cdCk7XG5cblx0LyoqXG5cdCAqIEFkYXB0ZXJzIGNyZWF0ZWQgd2l0aCBAbmdyeC9lbnRpdHkgZ2VuZXJhdGVcblx0ICogY29tbW9ubHkgdXNlZCBzZWxlY3RvciBmdW5jdGlvbnMgaW5jbHVkaW5nXG5cdCAqIGdldHRpbmcgYWxsIGlkcyBpbiB0aGUgcmVjb3JkIHNldCwgYSBkaWN0aW9uYXJ5XG5cdCAqIG9mIHRoZSByZWNvcmRzIGJ5IGlkLCBhbiBhcnJheSBvZiByZWNvcmRzIGFuZFxuXHQgKiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlY29yZHMuIFRoaXMgcmVkdWNlcyBib2lsZXJwbGF0ZVxuXHQgKiBpbiBzZWxlY3RpbmcgcmVjb3JkcyBmcm9tIHRoZSBlbnRpdHkgc3RhdGUuXG5cdCAqL1xuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHByb2R1Y3QgSURzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1JZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RJZHNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCBwcm9kdWN0IGVudGl0aWVzIChzZWUgbmdyeC9lbnRpdHkpLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1FbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdEVudGl0aWVzXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBhbGwgcHJvZHVjdHMgb24gc3RhdGUuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RBbGxDYXJ0SXRlbXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RBbGxcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSB0b3RhbCBudW1iZXIgb2YgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbVRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0VG90YWxcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXMsXG5cdFx0KGNhcnRJdGVtcywgcHJvcHMpID0+IGNhcnRJdGVtc1twcm9wcy5pZF1cblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSB0b3RhbCBudW1iZXIgb2YgY2FydCBpdGVtcyB0aGF0IHRha2VzIGludG8gYWNjb3VudCB0aGUgcXR5IG9uIGVhY2ggY2FydCBpdGVtLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0VG90YWxOdW1iZXJPZkNhcnRJdGVtcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdEFsbENhcnRJdGVtcyxcblx0XHQoY2FydEl0ZW1zKSA9PiBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGNhcnRJdGVtKSA9PiBhY2MgKyBjYXJ0SXRlbS5xdHksIDApXG5cdClcblxuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllcyxcblx0XHQoY2FydEl0ZW1zLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgY2FydEl0ZW0gPSBzZWxlY3RDYXJ0SXRlbS5wcm9qZWN0b3IoY2FydEl0ZW1zLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKGNhcnRJdGVtLnR5cGUgIT09IERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db25maWd1cmFibGUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoPERhZmZDb25maWd1cmFibGVDYXJ0SXRlbT5jYXJ0SXRlbSkuYXR0cmlidXRlcztcblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1Db21wb3NpdGVPcHRpb25zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllcyxcblx0XHQoY2FydEl0ZW1zLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgY2FydEl0ZW0gPSBzZWxlY3RDYXJ0SXRlbS5wcm9qZWN0b3IoY2FydEl0ZW1zLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuXHRcdFx0aWYoY2FydEl0ZW0udHlwZSAhPT0gRGFmZkNhcnRJdGVtSW5wdXRUeXBlLkNvbXBvc2l0ZSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICg8RGFmZkNvbXBvc2l0ZUNhcnRJdGVtPmNhcnRJdGVtKS5vcHRpb25zO1xuXHRcdH1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RJc0NhcnRJdGVtT3V0T2ZTdG9jayA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXMsXG5cdFx0KGNhcnRJdGVtcywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IGNhcnRJdGVtID0gc2VsZWN0Q2FydEl0ZW0ucHJvamVjdG9yKGNhcnRJdGVtcywgeyBpZDogcHJvcHMuaWQgfSk7XG5cblx0XHRcdHJldHVybiBjYXJ0SXRlbSA/ICFjYXJ0SXRlbS5pbl9zdG9jayA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXG5cdC8vdG9kbyBvcHRpb25hbCBjaGFpbmluZ1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbU11dGF0aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QWxsQ2FydEl0ZW1zLFxuXHRcdChjYXJ0SXRlbXM6IFVbXSkgPT4gY2FydEl0ZW1zICYmIGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT5cblx0XHRcdGFjYyB8fCBpdGVtLmRhZmZTdGF0ZSA9PT0gRGFmZkNhcnRJdGVtU3RhdGVFbnVtLk11dGF0aW5nLCBmYWxzZSlcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbVN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEl0ZW1FbnRpdGllcyxcblx0XHQoY2FydEl0ZW1zLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgY2FydEl0ZW0gPSBzZWxlY3RDYXJ0SXRlbS5wcm9qZWN0b3IoY2FydEl0ZW1zLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuXHRcdFx0Ly90b2RvIHVzZSBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5cdFx0XHRyZXR1cm4gY2FydEl0ZW0gPyBjYXJ0SXRlbS5kYWZmU3RhdGUgOiBudWxsO1xuXHRcdH1cblx0KVxuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXNTdGF0ZSxcblx0XHRzZWxlY3RDYXJ0SXRlbUlkcyxcblx0XHRzZWxlY3RDYXJ0SXRlbUVudGl0aWVzLFxuXHRcdHNlbGVjdEFsbENhcnRJdGVtcyxcblx0XHRzZWxlY3RDYXJ0SXRlbVRvdGFsLFxuXHRcdHNlbGVjdENhcnRJdGVtLFxuXHRcdHNlbGVjdFRvdGFsTnVtYmVyT2ZDYXJ0SXRlbXMsXG5cdFx0c2VsZWN0Q2FydEl0ZW1Db25maWd1cmVkQXR0cmlidXRlcyxcblx0XHRzZWxlY3RDYXJ0SXRlbUNvbXBvc2l0ZU9wdGlvbnMsXG5cdFx0c2VsZWN0SXNDYXJ0SXRlbU91dE9mU3RvY2ssXG5cdFx0c2VsZWN0Q2FydEl0ZW1NdXRhdGluZyxcblx0XHRzZWxlY3RDYXJ0SXRlbVN0YXRlXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDYXJ0SXRlbUVudGl0aWVzU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFxuXHRcdFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRcdFYgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcblx0XHRVIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbVxuXHQ+KCk6IERhZmZDYXJ0SXRlbUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8VT4gPT4gY2FjaGUgPSBjYWNoZVxuXHRcdD8gY2FjaGVcblx0XHQ6IGNyZWF0ZUNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnM8VCwgViwgVT4oKTtcbn0pKClcbiJdfQ==