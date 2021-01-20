/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffBillingActionTypes } from '../../actions/billing.actions';
/** @type {?} */
export var initialState = {
    billingAddress: null,
    billingAddressIsShippingAddress: false,
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffBillingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffBillingActionTypes.UpdateBillingAddressAction:
            return tslib_1.__assign({}, state, { billingAddress: action.payload });
        case DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
            return tslib_1.__assign({}, state, { billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress });
        case DaffBillingActionTypes.UpdatePaymentInfoAction:
            return tslib_1.__assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsiYmlsbGluZy9yZWR1Y2Vycy9iaWxsaW5nL2JpbGxpbmcucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHM0YsTUFBTSxLQUFPLFlBQVksR0FBNEI7SUFDbkQsY0FBYyxFQUFFLElBQUk7SUFDcEIsK0JBQStCLEVBQUUsS0FBSztJQUN0QyxXQUFXLEVBQUUsSUFBSTtDQUNsQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQW9CLEVBQUUsTUFBMEI7SUFBaEQsc0JBQUEsRUFBQSxvQkFBb0I7SUFDckQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssc0JBQXNCLENBQUMsMEJBQTBCO1lBQ3BELDRCQUFXLEtBQUssSUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUNwRCxLQUFLLHNCQUFzQixDQUFDLDJDQUEyQztZQUNyRSw0QkFBVyxLQUFLLElBQUUsY0FBYyxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsSUFBQztRQUNsSCxLQUFLLHNCQUFzQixDQUFDLHVCQUF1QjtZQUNqRCw0QkFBVyxLQUFLLElBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDakQ7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLCBEYWZmQmlsbGluZ0FjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2JpbGxpbmcuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQmlsbGluZ1JlZHVjZXJTdGF0ZSB9IGZyb20gJy4vYmlsbGluZy1yZWR1Y2VyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZCaWxsaW5nUmVkdWNlclN0YXRlID0ge1xuICBiaWxsaW5nQWRkcmVzczogbnVsbCxcbiAgYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzczogZmFsc2UsXG4gIHBheW1lbnRJbmZvOiBudWxsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZkJpbGxpbmdSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZCaWxsaW5nQWN0aW9ucyk6IERhZmZCaWxsaW5nUmVkdWNlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZkJpbGxpbmdBY3Rpb25UeXBlcy5VcGRhdGVCaWxsaW5nQWRkcmVzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJpbGxpbmdBZGRyZXNzOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgY2FzZSBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLlRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3NBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBiaWxsaW5nQWRkcmVzczogbnVsbCwgYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzczogIXN0YXRlLmJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3N9XG4gICAgY2FzZSBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLlVwZGF0ZVBheW1lbnRJbmZvQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5bWVudEluZm86IGFjdGlvbi5wYXlsb2FkfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=