/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { DaffCartItemActionTypes, DaffCartActionTypes } from '../../actions/public_api';
import { DaffCartItemStateEnum } from '../../models/stateful-cart-item';
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @template T, U, V
 * @param {?=} state current State of the redux store
 * @param {?=} action CartItemGrid, BestSellers, or CartItem actions
 * @return {?} CartItem entities state
 */
export function daffCartItemEntitiesReducer(state, action) {
    if (state === void 0) { state = daffCartItemEntitiesAdapter().getInitialState(); }
    /** @type {?} */
    var adapter = daffCartItemEntitiesAdapter();
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return adapter.addAll(action.payload.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (tslib_1.__assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })); })), state);
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return adapter.upsertOne(tslib_1.__assign({}, action.payload, { daffState: getDaffState(state.entities[action.payload.item_id]) || DaffCartItemStateEnum.Default }), state);
        case DaffCartItemActionTypes.CartItemAddSuccessAction:
            return adapter.addAll(updateAddedCartItemState(state.entities, (/** @type {?} */ (action.payload.items))), state);
        case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
            return adapter.addAll(updateMutatedCartItemState((/** @type {?} */ (action.payload.items)), state.entities, action.itemId), state);
        case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
        case DaffCartActionTypes.CartLoadSuccessAction:
        case DaffCartActionTypes.ResolveCartSuccessAction:
        case DaffCartActionTypes.CartClearSuccessAction:
            return adapter.addAll((/** @type {?} */ ((/** @type {?} */ (action.payload.items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (tslib_1.__assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })); })))))), state);
        case DaffCartItemActionTypes.CartItemStateResetAction:
            return adapter.addAll(Object.keys(state.entities).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (tslib_1.__assign({}, state.entities[key], { daffState: DaffCartItemStateEnum.Default })); })), state);
        case DaffCartItemActionTypes.CartItemUpdateAction:
        case DaffCartItemActionTypes.CartItemDeleteAction:
            return adapter.upsertOne(tslib_1.__assign({}, state.entities[action.itemId], { daffState: DaffCartItemStateEnum.Mutating }), state);
        default:
            return state;
    }
}
//todo: use optional chaining when possible
/**
 * @template T
 * @param {?} item
 * @return {?}
 */
function getDaffState(item) {
    return item && item.daffState;
}
/**
 * @template T
 * @param {?} oldCartItems
 * @param {?} newCartItems
 * @return {?}
 */
function updateAddedCartItemState(oldCartItems, newCartItems) {
    return newCartItems.map((/**
     * @param {?} newItem
     * @return {?}
     */
    function (newItem) {
        /** @type {?} */
        var oldItem = oldCartItems[newItem.item_id];
        switch (true) {
            case !oldItem:
                return tslib_1.__assign({}, newItem, { daffState: DaffCartItemStateEnum.New });
            //todo: add optional chaining when possible
            case oldItem && oldItem.qty !== newItem.qty:
                return tslib_1.__assign({}, newItem, { daffState: DaffCartItemStateEnum.Updated });
            default:
                return newItem;
        }
    }));
}
/**
 * @template T
 * @param {?} responseItems
 * @param {?} stateItems
 * @param {?} itemId
 * @return {?}
 */
function updateMutatedCartItemState(responseItems, stateItems, itemId) {
    return responseItems.map((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.item_id === itemId ? tslib_1.__assign({}, item, { daffState: DaffCartItemStateEnum.Updated }) : tslib_1.__assign({}, item, { daffState: getDaffState(stateItems[item.item_id]) || DaffCartItemStateEnum.Default }); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWVudGl0aWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBd0MsTUFBTSwwQkFBMEIsQ0FBQztBQUM5SCxPQUFPLEVBQUUscUJBQXFCLEVBQXdCLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztBQVM5RixNQUFNLFVBQVUsMkJBQTJCLENBS3pDLEtBQTBELEVBQzFELE1BQXlEO0lBRHpELHNCQUFBLEVBQUEsUUFBUSwyQkFBMkIsRUFBSyxDQUFDLGVBQWUsRUFBRTs7UUFFckQsT0FBTyxHQUFHLDJCQUEyQixFQUFLO0lBQy9DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHVCQUF1QixDQUFDLHlCQUF5QjtZQUN2RCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxzQkFDN0MsSUFBSSxJQUNQLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLElBQ3JGLEVBSCtDLENBRy9DLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNiLEtBQUssdUJBQXVCLENBQUMseUJBQXlCO1lBQ3JELE9BQU8sT0FBTyxDQUFDLFNBQVMsc0JBQ3BCLE1BQU0sQ0FBQyxPQUFPLElBQ2pCLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMs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QUEwQixDQUFpQyxhQUFrQixFQUFFLFVBQXlCLEVBQUUsTUFBb0I7SUFDdEksT0FBTyxhQUFhLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxzQkFDcEQsSUFBSSxJQUFFLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPLElBQUUsQ0FBQyxzQkFDakQsSUFBSSxJQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLE9BQU8sR0FBRSxFQUYvRCxDQUUrRCxFQUFDLENBQUE7QUFDbEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpY3Rpb25hcnksIEVudGl0eVN0YXRlIH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZkNhcnRJdGVtSW5wdXQsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBkYWZmQ2FydEl0ZW1FbnRpdGllc0FkYXB0ZXIgfSBmcm9tICcuL2NhcnQtaXRlbS1lbnRpdGllcy1yZWR1Y2VyLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMsIERhZmZDYXJ0QWN0aW9uVHlwZXMsIERhZmZDYXJ0QWN0aW9ucywgRGFmZkNhcnRJdGVtQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0sIERhZmZTdGF0ZWZ1bENhcnRJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlZnVsLWNhcnQtaXRlbSc7XG5cbi8qKlxuICogUmVkdWNlciBmdW5jdGlvbiB0aGF0IGNhdGNoZXMgYWN0aW9ucyBhbmQgY2hhbmdlcy9vdmVyd3JpdGVzIHByb2R1Y3QgZW50aXRpZXMgc3RhdGUuXG4gKlxuICogQHBhcmFtIHN0YXRlIGN1cnJlbnQgU3RhdGUgb2YgdGhlIHJlZHV4IHN0b3JlXG4gKiBAcGFyYW0gYWN0aW9uIENhcnRJdGVtR3JpZCwgQmVzdFNlbGxlcnMsIG9yIENhcnRJdGVtIGFjdGlvbnNcbiAqIEByZXR1cm5zIENhcnRJdGVtIGVudGl0aWVzIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQ2FydEl0ZW1FbnRpdGllc1JlZHVjZXI8XG5cdFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtLFxuXHRVIGV4dGVuZHMgRGFmZkNhcnRJdGVtSW5wdXQgPSBEYWZmQ2FydEl0ZW1JbnB1dCxcblx0ViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4+KFxuICBzdGF0ZSA9IGRhZmZDYXJ0SXRlbUVudGl0aWVzQWRhcHRlcjxUPigpLmdldEluaXRpYWxTdGF0ZSgpLFxuICBhY3Rpb246IERhZmZDYXJ0SXRlbUFjdGlvbnM8VCwgVSwgVj4gfCBEYWZmQ2FydEFjdGlvbnM8Vj4pOiBFbnRpdHlTdGF0ZTxUPiB7XG5cdGNvbnN0IGFkYXB0ZXIgPSBkYWZmQ2FydEl0ZW1FbnRpdGllc0FkYXB0ZXI8VD4oKTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0U3VjY2Vzc0FjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLmFkZEFsbChhY3Rpb24ucGF5bG9hZC5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0XHQuLi5pdGVtLFxuXHRcdFx0XHRkYWZmU3RhdGU6IGdldERhZmZTdGF0ZShzdGF0ZS5lbnRpdGllc1tpdGVtLml0ZW1faWRdKSB8fCBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uRGVmYXVsdFxuXHRcdFx0fSkpLCBzdGF0ZSk7XG5cdFx0Y2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxvYWRTdWNjZXNzQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKHtcblx0XHRcdFx0Li4uYWN0aW9uLnBheWxvYWQsXG5cdFx0XHRcdGRhZmZTdGF0ZTogZ2V0RGFmZlN0YXRlKHN0YXRlLmVudGl0aWVzW2FjdGlvbi5wYXlsb2FkLml0ZW1faWRdKSB8fCBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uRGVmYXVsdFxuXHRcdFx0fSwgc3RhdGUpO1xuXHRcdGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRTdWNjZXNzQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIuYWRkQWxsKFxuXHRcdFx0XHR1cGRhdGVBZGRlZENhcnRJdGVtU3RhdGU8VD4oc3RhdGUuZW50aXRpZXMsIDxUW10+YWN0aW9uLnBheWxvYWQuaXRlbXMpLFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtVXBkYXRlU3VjY2Vzc0FjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLmFkZEFsbChcblx0XHRcdFx0dXBkYXRlTXV0YXRlZENhcnRJdGVtU3RhdGU8VD4oPFRbXT5hY3Rpb24ucGF5bG9hZC5pdGVtcywgc3RhdGUuZW50aXRpZXMsIGFjdGlvbi5pdGVtSWQpLFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtRGVsZXRlU3VjY2Vzc0FjdGlvbjpcblx0XHRjYXNlIERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydExvYWRTdWNjZXNzQWN0aW9uOlxuXHRcdGNhc2UgRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydFN1Y2Nlc3NBY3Rpb246XG4gICAgY2FzZSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDbGVhclN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci5hZGRBbGwoPFRbXT48dW5rbm93bj5hY3Rpb24ucGF5bG9hZC5pdGVtcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0XHQuLi5pdGVtLFxuXHRcdFx0XHRkYWZmU3RhdGU6IGdldERhZmZTdGF0ZShzdGF0ZS5lbnRpdGllc1tpdGVtLml0ZW1faWRdKSB8fCBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uRGVmYXVsdFxuXHRcdFx0fSkpLCBzdGF0ZSk7XG5cdFx0Y2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVN0YXRlUmVzZXRBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci5hZGRBbGwoT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLm1hcChrZXkgPT4gKHtcblx0XHRcdFx0Li4uc3RhdGUuZW50aXRpZXNba2V5XSxcblx0XHRcdFx0ZGFmZlN0YXRlOiBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uRGVmYXVsdFxuXHRcdFx0fSkpLCBzdGF0ZSk7XG5cdFx0Y2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVVwZGF0ZUFjdGlvbjpcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtRGVsZXRlQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKHtcblx0XHRcdFx0Li4uc3RhdGUuZW50aXRpZXNbYWN0aW9uLml0ZW1JZF0sXG5cdFx0XHRcdGRhZmZTdGF0ZTogRGFmZkNhcnRJdGVtU3RhdGVFbnVtLk11dGF0aW5nXG5cdFx0XHR9LCBzdGF0ZSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vdG9kbzogdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbmZ1bmN0aW9uIGdldERhZmZTdGF0ZTxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0+KGl0ZW06IFQpOiBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0ge1xuXHRyZXR1cm4gaXRlbSAmJiBpdGVtLmRhZmZTdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWRkZWRDYXJ0SXRlbVN0YXRlPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4ob2xkQ2FydEl0ZW1zOiBEaWN0aW9uYXJ5PFQ+LCBuZXdDYXJ0SXRlbXM6IFRbXSk6IFRbXSB7XG5cdHJldHVybiBuZXdDYXJ0SXRlbXMubWFwKG5ld0l0ZW0gPT4ge1xuXHRcdGNvbnN0IG9sZEl0ZW0gPSBvbGRDYXJ0SXRlbXNbbmV3SXRlbS5pdGVtX2lkXTtcblx0XHRzd2l0Y2godHJ1ZSkge1xuXHRcdFx0Y2FzZSAhb2xkSXRlbTpcblx0XHRcdFx0cmV0dXJuIHsgLi4ubmV3SXRlbSwgZGFmZlN0YXRlOiBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uTmV3IH07XG5cdFx0XHQvL3RvZG86IGFkZCBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5cdFx0XHRjYXNlIG9sZEl0ZW0gJiYgb2xkSXRlbS5xdHkgIT09IG5ld0l0ZW0ucXR5OlxuXHRcdFx0XHRyZXR1cm4geyAuLi5uZXdJdGVtLCBkYWZmU3RhdGU6IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5VcGRhdGVkIH07XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbmV3SXRlbTtcblx0XHR9XG5cdH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU11dGF0ZWRDYXJ0SXRlbVN0YXRlPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4ocmVzcG9uc2VJdGVtczogVFtdLCBzdGF0ZUl0ZW1zOiBEaWN0aW9uYXJ5PFQ+LCBpdGVtSWQ6IFRbJ2l0ZW1faWQnXSk6IFRbXSB7XG5cdHJldHVybiByZXNwb25zZUl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaXRlbV9pZCA9PT0gaXRlbUlkID9cblx0XHR7IC4uLml0ZW0sIGRhZmZTdGF0ZTogRGFmZkNhcnRJdGVtU3RhdGVFbnVtLlVwZGF0ZWR9IDogXG5cdFx0eyAuLi5pdGVtLCBkYWZmU3RhdGU6IGdldERhZmZTdGF0ZShzdGF0ZUl0ZW1zW2l0ZW0uaXRlbV9pZF0pIHx8IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0IH0pXG59XG4iXX0=