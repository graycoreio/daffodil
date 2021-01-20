/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffProductGridActionTypes } from '../../actions/product-grid.actions';
/**
 * Initial values of the product grid state.
 * @type {?}
 */
export var initialState = {
    products: [],
    loading: false,
    errors: []
};
/**
 * Reducer function that catches actions and changes/overwrites product grid state.
 *
 * @template T
 * @param {?=} state current State of the redux store
 * @param {?=} action a product grid action
 * @return {?} Product grid state
 */
export function daffProductGridReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffProductGridActionTypes.ProductGridLoadAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
            return tslib_1.__assign({}, state, { loading: false });
        case DaffProductGridActionTypes.ProductGridLoadFailureAction:
            return tslib_1.__assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL3Byb2R1Y3QtZ3JpZC9wcm9kdWN0LWdyaWQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBMEIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFPeEcsTUFBTSxLQUFPLFlBQVksR0FBcUM7SUFDNUQsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxFQUFFO0NBQ1g7Ozs7Ozs7OztBQVNELE1BQU0sVUFBVSxzQkFBc0IsQ0FBd0IsS0FBb0IsRUFBRSxNQUFpQztJQUF2RCxzQkFBQSxFQUFBLG9CQUFvQjtJQUNoRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSywwQkFBMEIsQ0FBQyxxQkFBcUI7WUFDbkQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEI7WUFDMUQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLElBQUU7UUFDcEMsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEI7WUFDMUQsNEJBQVcsS0FBSyxJQUNkLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUN0RDtRQUNKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMsIERhZmZQcm9kdWN0R3JpZEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1Y3QtZ3JpZC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0R3JpZFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vcHJvZHVjdC1ncmlkLXJlZHVjZXItc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuXG4vKipcbiAqIEluaXRpYWwgdmFsdWVzIG9mIHRoZSBwcm9kdWN0IGdyaWQgc3RhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZQcm9kdWN0R3JpZFJlZHVjZXJTdGF0ZTxhbnk+ID0ge1xuICBwcm9kdWN0czogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IFtdXG59O1xuXG4vKipcbiAqIFJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYXRjaGVzIGFjdGlvbnMgYW5kIGNoYW5nZXMvb3ZlcndyaXRlcyBwcm9kdWN0IGdyaWQgc3RhdGUuXG4gKiBcbiAqIEBwYXJhbSBzdGF0ZSBjdXJyZW50IFN0YXRlIG9mIHRoZSByZWR1eCBzdG9yZVxuICogQHBhcmFtIGFjdGlvbiBhIHByb2R1Y3QgZ3JpZCBhY3Rpb25cbiAqIEByZXR1cm5zIFByb2R1Y3QgZ3JpZCBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZlByb2R1Y3RHcmlkUmVkdWNlcjxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZQcm9kdWN0R3JpZEFjdGlvbnM8VD4pOiBEYWZmUHJvZHVjdEdyaWRSZWR1Y2VyU3RhdGU8VD4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcy5Qcm9kdWN0R3JpZExvYWRBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZX07XG4gICAgY2FzZSBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcy5Qcm9kdWN0R3JpZExvYWRGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLCBcbiAgICAgICAgZXJyb3JzOiBzdGF0ZS5lcnJvcnMuY29uY2F0KG5ldyBBcnJheShhY3Rpb24ucGF5bG9hZCkpXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==