/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function daffCartItemEntitiesReducer(state = daffCartItemEntitiesAdapter().getInitialState(), action) {
    /** @type {?} */
    const adapter = daffCartItemEntitiesAdapter();
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return adapter.addAll(action.payload.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (Object.assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })))), state);
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return adapter.upsertOne(Object.assign({}, action.payload, { daffState: getDaffState(state.entities[action.payload.item_id]) || DaffCartItemStateEnum.Default }), state);
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
            item => (Object.assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })))))))), state);
        case DaffCartItemActionTypes.CartItemStateResetAction:
            return adapter.addAll(Object.keys(state.entities).map((/**
             * @param {?} key
             * @return {?}
             */
            key => (Object.assign({}, state.entities[key], { daffState: DaffCartItemStateEnum.Default })))), state);
        case DaffCartItemActionTypes.CartItemUpdateAction:
        case DaffCartItemActionTypes.CartItemDeleteAction:
            return adapter.upsertOne(Object.assign({}, state.entities[action.itemId], { daffState: DaffCartItemStateEnum.Mutating }), state);
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
    newItem => {
        /** @type {?} */
        const oldItem = oldCartItems[newItem.item_id];
        switch (true) {
            case !oldItem:
                return Object.assign({}, newItem, { daffState: DaffCartItemStateEnum.New });
            //todo: add optional chaining when possible
            case oldItem && oldItem.qty !== newItem.qty:
                return Object.assign({}, newItem, { daffState: DaffCartItemStateEnum.Updated });
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
    item => item.item_id === itemId ? Object.assign({}, item, { daffState: DaffCartItemStateEnum.Updated }) : Object.assign({}, item, { daffState: getDaffState(stateItems[item.item_id]) || DaffCartItemStateEnum.Default })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWVudGl0aWVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUF3QyxNQUFNLDBCQUEwQixDQUFDO0FBQzlILE9BQU8sRUFBRSxxQkFBcUIsRUFBd0IsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7O0FBUzlGLE1BQU0sVUFBVSwyQkFBMkIsQ0FLekMsUUFBUSwyQkFBMkIsRUFBSyxDQUFDLGVBQWUsRUFBRSxFQUMxRCxNQUF5RDs7VUFDcEQsT0FBTyxHQUFHLDJCQUEyQixFQUFLO0lBQy9DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHVCQUF1QixDQUFDLHlCQUF5QjtZQUN2RCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFDN0MsSUFBSSxJQUNQLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLElBQ3JGLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNiLEtBQUssdUJBQXVCLENBQUMseUJBQXlCO1lBQ3JELE9BQU8sT0FBTyxDQUFDLFNBQVMsbUJBQ3BCLE1BQU0sQ0FBQyxPQUFPLElBQ2pCLFNBQVMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUkscUJBQXFC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Q0FBQyxHQUFHOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLG1CQUNwRCxJQUFJLElBQUUsU0FBUyxFQUFFLHFCQUFxQixDQUFDLE9BQU8sSUFBRSxDQUFDLG1CQUNqRCxJQUFJLElBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUkscUJBQXFCLENBQUMsT0FBTyxHQUFFLEVBQUMsQ0FBQTtBQUNsRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGljdGlvbmFyeSwgRW50aXR5U3RhdGUgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1JbnB1dCwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IGRhZmZDYXJ0SXRlbUVudGl0aWVzQWRhcHRlciB9IGZyb20gJy4vY2FydC1pdGVtLWVudGl0aWVzLXJlZHVjZXItYWRhcHRlcic7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcywgRGFmZkNhcnRBY3Rpb25UeXBlcywgRGFmZkNhcnRBY3Rpb25zLCBEYWZmQ2FydEl0ZW1BY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbVN0YXRlRW51bSwgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc3RhdGVmdWwtY2FydC1pdGVtJztcblxuLyoqXG4gKiBSZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2F0Y2hlcyBhY3Rpb25zIGFuZCBjaGFuZ2VzL292ZXJ3cml0ZXMgcHJvZHVjdCBlbnRpdGllcyBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgY3VycmVudCBTdGF0ZSBvZiB0aGUgcmVkdXggc3RvcmVcbiAqIEBwYXJhbSBhY3Rpb24gQ2FydEl0ZW1HcmlkLCBCZXN0U2VsbGVycywgb3IgQ2FydEl0ZW0gYWN0aW9uc1xuICogQHJldHVybnMgQ2FydEl0ZW0gZW50aXRpZXMgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDYXJ0SXRlbUVudGl0aWVzUmVkdWNlcjxcblx0VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0sXG5cdFUgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCA9IERhZmZDYXJ0SXRlbUlucHV0LFxuXHRWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcbj4oXG4gIHN0YXRlID0gZGFmZkNhcnRJdGVtRW50aXRpZXNBZGFwdGVyPFQ+KCkuZ2V0SW5pdGlhbFN0YXRlKCksXG4gIGFjdGlvbjogRGFmZkNhcnRJdGVtQWN0aW9uczxULCBVLCBWPiB8IERhZmZDYXJ0QWN0aW9uczxWPik6IEVudGl0eVN0YXRlPFQ+IHtcblx0Y29uc3QgYWRhcHRlciA9IGRhZmZDYXJ0SXRlbUVudGl0aWVzQWRhcHRlcjxUPigpO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxpc3RTdWNjZXNzQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIuYWRkQWxsKGFjdGlvbi5wYXlsb2FkLm1hcChpdGVtID0+ICh7XG5cdFx0XHRcdC4uLml0ZW0sXG5cdFx0XHRcdGRhZmZTdGF0ZTogZ2V0RGFmZlN0YXRlKHN0YXRlLmVudGl0aWVzW2l0ZW0uaXRlbV9pZF0pIHx8IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0XG5cdFx0XHR9KSksIHN0YXRlKTtcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoe1xuXHRcdFx0XHQuLi5hY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0ZGFmZlN0YXRlOiBnZXREYWZmU3RhdGUoc3RhdGUuZW50aXRpZXNbYWN0aW9uLnBheWxvYWQuaXRlbV9pZF0pIHx8IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0XG5cdFx0XHR9LCBzdGF0ZSk7XG5cdFx0Y2FzZSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUFkZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci5hZGRBbGwoXG5cdFx0XHRcdHVwZGF0ZUFkZGVkQ2FydEl0ZW1TdGF0ZTxUPihzdGF0ZS5lbnRpdGllcywgPFRbXT5hY3Rpb24ucGF5bG9hZC5pdGVtcyksXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuXHRcdGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVTdWNjZXNzQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIuYWRkQWxsKFxuXHRcdFx0XHR1cGRhdGVNdXRhdGVkQ2FydEl0ZW1TdGF0ZTxUPig8VFtdPmFjdGlvbi5wYXlsb2FkLml0ZW1zLCBzdGF0ZS5lbnRpdGllcywgYWN0aW9uLml0ZW1JZCksXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuXHRcdGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1EZWxldGVTdWNjZXNzQWN0aW9uOlxuXHRcdGNhc2UgRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0Y2FzZSBEYWZmQ2FydEFjdGlvblR5cGVzLlJlc29sdmVDYXJ0U3VjY2Vzc0FjdGlvbjpcbiAgICBjYXNlIERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydENsZWFyU3VjY2Vzc0FjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLmFkZEFsbCg8VFtdPjx1bmtub3duPmFjdGlvbi5wYXlsb2FkLml0ZW1zLm1hcChpdGVtID0+ICh7XG5cdFx0XHRcdC4uLml0ZW0sXG5cdFx0XHRcdGRhZmZTdGF0ZTogZ2V0RGFmZlN0YXRlKHN0YXRlLmVudGl0aWVzW2l0ZW0uaXRlbV9pZF0pIHx8IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0XG5cdFx0XHR9KSksIHN0YXRlKTtcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtU3RhdGVSZXNldEFjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLmFkZEFsbChPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykubWFwKGtleSA9PiAoe1xuXHRcdFx0XHQuLi5zdGF0ZS5lbnRpdGllc1trZXldLFxuXHRcdFx0XHRkYWZmU3RhdGU6IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0XG5cdFx0XHR9KSksIHN0YXRlKTtcblx0XHRjYXNlIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtVXBkYXRlQWN0aW9uOlxuXHRcdGNhc2UgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1EZWxldGVBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoe1xuXHRcdFx0XHQuLi5zdGF0ZS5lbnRpdGllc1thY3Rpb24uaXRlbUlkXSxcblx0XHRcdFx0ZGFmZlN0YXRlOiBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uTXV0YXRpbmdcblx0XHRcdH0sIHN0YXRlKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuZnVuY3Rpb24gZ2V0RGFmZlN0YXRlPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4oaXRlbTogVCk6IERhZmZDYXJ0SXRlbVN0YXRlRW51bSB7XG5cdHJldHVybiBpdGVtICYmIGl0ZW0uZGFmZlN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBZGRlZENhcnRJdGVtU3RhdGU8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtPihvbGRDYXJ0SXRlbXM6IERpY3Rpb25hcnk8VD4sIG5ld0NhcnRJdGVtczogVFtdKTogVFtdIHtcblx0cmV0dXJuIG5ld0NhcnRJdGVtcy5tYXAobmV3SXRlbSA9PiB7XG5cdFx0Y29uc3Qgb2xkSXRlbSA9IG9sZENhcnRJdGVtc1tuZXdJdGVtLml0ZW1faWRdO1xuXHRcdHN3aXRjaCh0cnVlKSB7XG5cdFx0XHRjYXNlICFvbGRJdGVtOlxuXHRcdFx0XHRyZXR1cm4geyAuLi5uZXdJdGVtLCBkYWZmU3RhdGU6IERhZmZDYXJ0SXRlbVN0YXRlRW51bS5OZXcgfTtcblx0XHRcdC8vdG9kbzogYWRkIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcblx0XHRcdGNhc2Ugb2xkSXRlbSAmJiBvbGRJdGVtLnF0eSAhPT0gbmV3SXRlbS5xdHk6XG5cdFx0XHRcdHJldHVybiB7IC4uLm5ld0l0ZW0sIGRhZmZTdGF0ZTogRGFmZkNhcnRJdGVtU3RhdGVFbnVtLlVwZGF0ZWQgfTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBuZXdJdGVtO1xuXHRcdH1cblx0fSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlTXV0YXRlZENhcnRJdGVtU3RhdGU8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtPihyZXNwb25zZUl0ZW1zOiBUW10sIHN0YXRlSXRlbXM6IERpY3Rpb25hcnk8VD4sIGl0ZW1JZDogVFsnaXRlbV9pZCddKTogVFtdIHtcblx0cmV0dXJuIHJlc3BvbnNlSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pdGVtX2lkID09PSBpdGVtSWQgP1xuXHRcdHsgLi4uaXRlbSwgZGFmZlN0YXRlOiBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uVXBkYXRlZH0gOiBcblx0XHR7IC4uLml0ZW0sIGRhZmZTdGF0ZTogZ2V0RGFmZlN0YXRlKHN0YXRlSXRlbXNbaXRlbS5pdGVtX2lkXSkgfHwgRGFmZkNhcnRJdGVtU3RhdGVFbnVtLkRlZmF1bHQgfSlcbn1cbiJdfQ==