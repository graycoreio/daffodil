/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffOrderInvalidAPIResponseError } from '@daffodil/order/driver';
/** @type {?} */
export const validateGetOrdersResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.graycoreGuestOrders.items) {
        if (response.data.graycoreGuestOrders.items.reduce((/**
         * @param {?} acc
         * @param {?} order
         * @return {?}
         */
        (acc, order) => acc && !!(order.billing_address
            && order.shipping_address
            && order.payment_methods)), true)) {
            return response;
        }
        else {
            throw new DaffOrderInvalidAPIResponseError('One of the orders does not contain required fields.');
        }
    }
    else {
        throw new DaffOrderInvalidAPIResponseError('Get orders response does not contain a valid list of orders.');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9yZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvZ2V0LW9yZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBSTFFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7QUFBRyxDQUFDLFFBQTBELEVBQUUsRUFBRTtJQUN0RyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFO1FBQzNDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FDMUUsS0FBSyxDQUFDLGVBQWU7ZUFDaEIsS0FBSyxDQUFDLGdCQUFnQjtlQUN0QixLQUFLLENBQUMsZUFBZSxDQUMzQixHQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1IsT0FBTyxRQUFRLENBQUE7U0FDaEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxnQ0FBZ0MsQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO1NBQ2xHO0tBQ0Y7U0FBTTtRQUNMLE1BQU0sSUFBSSxnQ0FBZ0MsQ0FBQyw4REFBOEQsQ0FBQyxDQUFBO0tBQzNHO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUXVlcnlSZXN1bHQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcblxuaW1wb3J0IHsgRGFmZk9yZGVySW52YWxpZEFQSVJlc3BvbnNlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcblxuaW1wb3J0IHsgTWFnZW50b0dldEd1ZXN0T3JkZXJzUmVzcG9uc2UgfSBmcm9tICcuLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVHZXRPcmRlcnNSZXNwb25zZSA9IChyZXNwb25zZTogQXBvbGxvUXVlcnlSZXN1bHQ8TWFnZW50b0dldEd1ZXN0T3JkZXJzUmVzcG9uc2U+KSA9PiB7XG4gIGlmIChyZXNwb25zZS5kYXRhLmdyYXljb3JlR3Vlc3RPcmRlcnMuaXRlbXMpIHtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5ncmF5Y29yZUd1ZXN0T3JkZXJzLml0ZW1zLnJlZHVjZSgoYWNjLCBvcmRlcikgPT4gYWNjICYmICEhKFxuICAgICAgb3JkZXIuYmlsbGluZ19hZGRyZXNzXG4gICAgICAgICYmIG9yZGVyLnNoaXBwaW5nX2FkZHJlc3NcbiAgICAgICAgJiYgb3JkZXIucGF5bWVudF9tZXRob2RzXG4gICAgKSwgdHJ1ZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRGFmZk9yZGVySW52YWxpZEFQSVJlc3BvbnNlRXJyb3IoJ09uZSBvZiB0aGUgb3JkZXJzIGRvZXMgbm90IGNvbnRhaW4gcmVxdWlyZWQgZmllbGRzLicpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBEYWZmT3JkZXJJbnZhbGlkQVBJUmVzcG9uc2VFcnJvcignR2V0IG9yZGVycyByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgbGlzdCBvZiBvcmRlcnMuJylcbiAgfVxufVxuIl19