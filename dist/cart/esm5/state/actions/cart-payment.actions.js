/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartPaymentActionTypes = {
    CartPaymentLoadAction: '[DaffCart] Payment Load Action',
    CartPaymentLoadSuccessAction: '[DaffCart] Payment Load Success Action',
    CartPaymentLoadFailureAction: '[DaffCart] Payment Load Failure Action',
    CartPaymentUpdateAction: '[DaffCart] Payment Update Action',
    CartPaymentUpdateSuccessAction: '[DaffCart] Payment Update Success Action',
    CartPaymentUpdateFailureAction: '[DaffCart] Payment Update Failure Action',
    CartPaymentUpdateWithBillingAction: '[DaffCart] Payment Update With Billing Action',
    CartPaymentUpdateWithBillingSuccessAction: '[DaffCart] Payment Update With Billing Success Action',
    CartPaymentUpdateWithBillingFailureAction: '[DaffCart] Payment Update With Billing Failure Action',
    CartPaymentRemoveAction: '[DaffCart] Payment Remove Action',
    CartPaymentRemoveSuccessAction: '[DaffCart] Payment Remove Success Action',
    CartPaymentRemoveFailureAction: '[DaffCart] Payment Remove Failure Action',
    CartPaymentMethodAddAction: '[DaffCart] Payment Method Add Action',
};
export { DaffCartPaymentActionTypes };
var DaffCartPaymentLoad = /** @class */ (function () {
    function DaffCartPaymentLoad() {
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
    }
    return DaffCartPaymentLoad;
}());
export { DaffCartPaymentLoad };
if (false) {
    /** @type {?} */
    DaffCartPaymentLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPaymentLoadSuccess = /** @class */ (function () {
    function DaffCartPaymentLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;
    }
    return DaffCartPaymentLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartPaymentLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.payload;
}
var DaffCartPaymentLoadFailure = /** @class */ (function () {
    function DaffCartPaymentLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;
    }
    return DaffCartPaymentLoadFailure;
}());
export { DaffCartPaymentLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPaymentUpdate = /** @class */ (function () {
    function DaffCartPaymentUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;
    }
    return DaffCartPaymentUpdate;
}());
/**
 * @template T
 */
export { DaffCartPaymentUpdate };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPaymentUpdateSuccess = /** @class */ (function () {
    function DaffCartPaymentUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;
    }
    return DaffCartPaymentUpdateSuccess;
}());
/**
 * @template T
 */
export { DaffCartPaymentUpdateSuccess };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.payload;
}
var DaffCartPaymentUpdateFailure = /** @class */ (function () {
    function DaffCartPaymentUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;
    }
    return DaffCartPaymentUpdateFailure;
}());
export { DaffCartPaymentUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateFailure.prototype.payload;
}
/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 * @template T, R
 */
var /**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 * @template T, R
 */
DaffCartPaymentUpdateWithBilling = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBilling(payment, address) {
        this.payment = payment;
        this.address = address;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;
    }
    return DaffCartPaymentUpdateWithBilling;
}());
/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 * @template T, R
 */
export { DaffCartPaymentUpdateWithBilling };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.payment;
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.address;
}
/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 * @template T
 */
var /**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 * @template T
 */
DaffCartPaymentUpdateWithBillingSuccess = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBillingSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;
    }
    return DaffCartPaymentUpdateWithBillingSuccess;
}());
/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 * @template T
 */
export { DaffCartPaymentUpdateWithBillingSuccess };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingSuccess.prototype.payload;
}
/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
var /**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
DaffCartPaymentUpdateWithBillingFailure = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBillingFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;
    }
    return DaffCartPaymentUpdateWithBillingFailure;
}());
/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
export { DaffCartPaymentUpdateWithBillingFailure };
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.payload;
}
var DaffCartPaymentRemove = /** @class */ (function () {
    function DaffCartPaymentRemove() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
    }
    return DaffCartPaymentRemove;
}());
export { DaffCartPaymentRemove };
if (false) {
    /** @type {?} */
    DaffCartPaymentRemove.prototype.type;
}
var DaffCartPaymentRemoveSuccess = /** @class */ (function () {
    function DaffCartPaymentRemoveSuccess() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
    }
    return DaffCartPaymentRemoveSuccess;
}());
export { DaffCartPaymentRemoveSuccess };
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveSuccess.prototype.type;
}
var DaffCartPaymentRemoveFailure = /** @class */ (function () {
    function DaffCartPaymentRemoveFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;
    }
    return DaffCartPaymentRemoveFailure;
}());
export { DaffCartPaymentRemoveFailure };
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentRemoveFailure.prototype.payload;
}
/**
 * This action is temporary until custom reducers can be injected by the \@daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 * @template T
 */
var /**
 * This action is temporary until custom reducers can be injected by the \@daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 * @template T
 */
DaffCartPaymentMethodAdd = /** @class */ (function () {
    function DaffCartPaymentMethodAdd(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;
    }
    return DaffCartPaymentMethodAdd;
}());
/**
 * This action is temporary until custom reducers can be injected by the \@daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 * @template T
 */
export { DaffCartPaymentMethodAdd };
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1wYXltZW50LmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsdUJBQXdCLGdDQUFnQztJQUN4RCw4QkFBK0Isd0NBQXdDO0lBQ3ZFLDhCQUErQix3Q0FBd0M7SUFDdkUseUJBQTBCLGtDQUFrQztJQUM1RCxnQ0FBaUMsMENBQTBDO0lBQzNFLGdDQUFpQywwQ0FBMEM7SUFDM0Usb0NBQXFDLCtDQUErQztJQUNwRiwyQ0FBNEMsdURBQXVEO0lBQ25HLDJDQUE0Qyx1REFBdUQ7SUFDbkcseUJBQTBCLGtDQUFrQztJQUM1RCxnQ0FBaUMsMENBQTBDO0lBQzNFLGdDQUFpQywwQ0FBMEM7SUFDNUUsNEJBQTZCLHNDQUFzQzs7O0FBR3BFO0lBQUE7UUFDVyxTQUFJLEdBQUcsMEJBQTBCLENBQUMscUJBQXFCLENBQUM7SUFDbkUsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxtQ0FBaUU7Ozs7O0FBR25FOzs7O0lBR0Usb0NBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUV4QyxDQUFDO0lBQ25DLGlDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQywwQ0FBd0U7O0lBRTVELDZDQUFpQjs7QUFHL0I7SUFHRSxvQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDO0lBRTNCLENBQUM7SUFDaEQsaUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDBDQUF3RTs7SUFFNUQsNkNBQThCOzs7OztBQUc1Qzs7OztJQUdFLCtCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQztJQUUxQixDQUFDO0lBQzVDLDRCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxxQ0FBbUU7O0lBRXZELHdDQUEwQjs7Ozs7QUFHeEM7Ozs7SUFHRSxzQ0FBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFFakMsQ0FBQztJQUM1QyxtQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsNENBQTBFOztJQUU5RCwrQ0FBMEI7O0FBR3hDO0lBR0Usc0NBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQztJQUU3QixDQUFDO0lBQ2hELG1DQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyw0Q0FBMEU7O0lBRTlELCtDQUE4Qjs7Ozs7Ozs7O0FBUzVDOzs7Ozs7OztJQU1FLDBDQUFtQixPQUFtQixFQUFTLE9BQW1CO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnpELFNBQUksR0FBRywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztJQUVULENBQUM7SUFDeEUsdUNBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7Ozs7Ozs7Ozs7SUFIQyxnREFBOEU7O0lBRWxFLG1EQUEwQjs7SUFBRSxtREFBMEI7Ozs7Ozs7O0FBUXBFOzs7Ozs7O0lBR0UsaURBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLDBCQUEwQixDQUFDLHlDQUF5QyxDQUFDO0lBRTVDLENBQUM7SUFDNUMsOENBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7OztJQUhDLHVEQUFxRjs7SUFFekUsMERBQTBCOzs7Ozs7O0FBUXhDOzs7Ozs7SUFHRSxpREFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLDBCQUEwQixDQUFDLHlDQUF5QyxDQUFDO0lBRXhDLENBQUM7SUFDaEQsOENBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0lBSEMsdURBQXFGOztJQUV6RSwwREFBOEI7O0FBRzVDO0lBQUE7UUFDVyxTQUFJLEdBQUcsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7SUFDckUsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxxQ0FBbUU7O0FBR3JFO0lBQUE7UUFDVyxTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFDNUUsQ0FBQztJQUFELG1DQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyw0Q0FBMEU7O0FBRzVFO0lBR0Usc0NBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQztJQUU3QixDQUFDO0lBQ2hELG1DQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyw0Q0FBMEU7O0lBRTlELCtDQUE4Qjs7Ozs7Ozs7O0FBUzVDOzs7Ozs7OztJQUdDLGtDQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7SUFFdEMsQ0FBQztJQUNsQywrQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7OztJQUhBLHdDQUFzRTs7SUFFMUQsMkNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnQsIERhZmZDYXJ0QWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMge1xuICBDYXJ0UGF5bWVudExvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IExvYWQgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQYXltZW50TG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFVwZGF0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgVXBkYXRlIEFjdGlvbicsXG4gIENhcnRQYXltZW50VXBkYXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgVXBkYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRVcGRhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBVcGRhdGUgV2l0aCBCaWxsaW5nIEFjdGlvbicsXG4gIENhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBVcGRhdGUgV2l0aCBCaWxsaW5nIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IFVwZGF0ZSBXaXRoIEJpbGxpbmcgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFJlbW92ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgUmVtb3ZlIEFjdGlvbicsXG4gIENhcnRQYXltZW50UmVtb3ZlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgUmVtb3ZlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRSZW1vdmVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBSZW1vdmUgRmFpbHVyZSBBY3Rpb24nLFxuXHRDYXJ0UGF5bWVudE1ldGhvZEFkZEFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgTWV0aG9kIEFkZCBBY3Rpb24nXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50TG9hZEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudExvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydFBheW1lbnRNZXRob2QgPSBEYWZmQ2FydFBheW1lbnRNZXRob2Q+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50TG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudExvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFVwZGF0ZTxUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50VXBkYXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFVwZGF0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuLyoqXG4gKiBUcmlnZ2VycyBhbiB1cGRhdGUgb2YgdGhlIGNhcnQncyBzZWxlY3RlZCBwYXltZW50IG1ldGhvZCBhbmQgYmlsbGluZyBhZGRyZXNzLlxuICpcbiAqIEBwYXJhbSBwYXltZW50IFRoZSBwYXltZW50IG1ldGhvZC5cbiAqIEBwYXJhbSBhZGRyZXNzIFRoZSBiaWxsaW5nIGFkZHJlc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZzxcbiAgVCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZCxcbiAgUiBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzc1xuPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXltZW50OiBQYXJ0aWFsPFQ+LCBwdWJsaWMgYWRkcmVzczogUGFydGlhbDxSPikge31cbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhlIHN1Y2Nlc3Mgb2YgYW4gdXBkYXRlIG9mIHRoZSBjYXJ0J3Mgc2VsZWN0ZWQgcGF5bWVudCBtZXRob2QgYW5kIGJpbGxpbmcgYWRkcmVzcy5cbiAqXG4gKiBAcGFyYW0gcGF5bG9hZCBUaGUgdXBkYXRlZCBjYXJ0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhlIGZhaWx1cmUgb2YgYW4gdXBkYXRlIG9mIHRoZSBjYXJ0J3Mgc2VsZWN0ZWQgcGF5bWVudCBtZXRob2QgYW5kIGJpbGxpbmcgYWRkcmVzcy5cbiAqXG4gKiBAcGFyYW0gcGF5bG9hZCBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRSZW1vdmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRSZW1vdmVBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRSZW1vdmVTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50UmVtb3ZlU3VjY2Vzc0FjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFJlbW92ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRSZW1vdmVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuLyoqXG4gKiBUaGlzIGFjdGlvbiBpcyB0ZW1wb3JhcnkgdW50aWwgY3VzdG9tIHJlZHVjZXJzIGNhbiBiZSBpbmplY3RlZCBieSB0aGUgQGRhZmZvZGlsL3BheW1lbnRTb3VyY2UgbW9kdWxlcy4gUmlnaHQgbm93LFxuICogdGhlIHBheW1lbnQgbW9kdWxlcyBuZWVkIGEgd2F5IHRvIHVwZGF0ZSBjYXJ0IHN0YXRlIHdpdGggYSBwYXltZW50IHRva2VuLlxuICpcbiAqIHRvZG86IHJlbW92ZSB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50TWV0aG9kQWRkPFQgZXh0ZW5kcyBEYWZmQ2FydFBheW1lbnRNZXRob2QgPSBEYWZmQ2FydFBheW1lbnRNZXRob2Q+IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50TWV0aG9kQWRkQWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmQ2FydFBheW1lbnRBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcbiAgUiBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzcyxcbj4gPVxuICB8IERhZmZDYXJ0UGF5bWVudExvYWRcbiAgfCBEYWZmQ2FydFBheW1lbnRMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0UGF5bWVudExvYWRGYWlsdXJlXG4gIHwgRGFmZkNhcnRQYXltZW50VXBkYXRlPFQ+XG4gIHwgRGFmZkNhcnRQYXltZW50VXBkYXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0UGF5bWVudFVwZGF0ZUZhaWx1cmVcbiAgfCBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZzxULCBSPlxuICB8IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZVxuICB8IERhZmZDYXJ0UGF5bWVudFJlbW92ZVxuICB8IERhZmZDYXJ0UGF5bWVudFJlbW92ZVN1Y2Nlc3NcbiAgfCBEYWZmQ2FydFBheW1lbnRSZW1vdmVGYWlsdXJlXG5cdHwgRGFmZkNhcnRQYXltZW50TWV0aG9kQWRkPFQ+O1xuIl19