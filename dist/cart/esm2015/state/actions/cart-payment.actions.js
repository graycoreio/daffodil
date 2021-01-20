/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartPaymentActionTypes = {
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
export class DaffCartPaymentLoad {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartPaymentLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.payload;
}
export class DaffCartPaymentLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartPaymentUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartPaymentUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.payload;
}
export class DaffCartPaymentUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;
    }
}
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
export class DaffCartPaymentUpdateWithBilling {
    /**
     * @param {?} payment
     * @param {?} address
     */
    constructor(payment, address) {
        this.payment = payment;
        this.address = address;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;
    }
}
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
export class DaffCartPaymentUpdateWithBillingSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;
    }
}
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
export class DaffCartPaymentUpdateWithBillingFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.payload;
}
export class DaffCartPaymentRemove {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentRemove.prototype.type;
}
export class DaffCartPaymentRemoveSuccess {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveSuccess.prototype.type;
}
export class DaffCartPaymentRemoveFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;
    }
}
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
export class DaffCartPaymentMethodAdd {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1wYXltZW50LmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsdUJBQXdCLGdDQUFnQztJQUN4RCw4QkFBK0Isd0NBQXdDO0lBQ3ZFLDhCQUErQix3Q0FBd0M7SUFDdkUseUJBQTBCLGtDQUFrQztJQUM1RCxnQ0FBaUMsMENBQTBDO0lBQzNFLGdDQUFpQywwQ0FBMEM7SUFDM0Usb0NBQXFDLCtDQUErQztJQUNwRiwyQ0FBNEMsdURBQXVEO0lBQ25HLDJDQUE0Qyx1REFBdUQ7SUFDbkcseUJBQTBCLGtDQUFrQztJQUM1RCxnQ0FBaUMsMENBQTBDO0lBQzNFLGdDQUFpQywwQ0FBMEM7SUFDNUUsNEJBQTZCLHNDQUFzQzs7O0FBR3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDVyxTQUFJLEdBQUcsMEJBQTBCLENBQUMscUJBQXFCLENBQUM7SUFDbkUsQ0FBQztDQUFBOzs7SUFEQyxtQ0FBaUU7Ozs7O0FBR25FLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDO0lBRXhDLENBQUM7Q0FDbEM7OztJQUhDLDBDQUF3RTs7SUFFNUQsNkNBQWlCOztBQUcvQixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUUzQixDQUFDO0NBQy9DOzs7SUFIQywwQ0FBd0U7O0lBRTVELDZDQUE4Qjs7Ozs7QUFHNUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUdoQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQztJQUUxQixDQUFDO0NBQzNDOzs7SUFIQyxxQ0FBbUU7O0lBRXZELHdDQUEwQjs7Ozs7QUFHeEMsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUd2QyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQztJQUVqQyxDQUFDO0NBQzNDOzs7SUFIQyw0Q0FBMEU7O0lBRTlELCtDQUEwQjs7QUFHeEMsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUd2QyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFFN0IsQ0FBQztDQUMvQzs7O0lBSEMsNENBQTBFOztJQUU5RCwrQ0FBOEI7Ozs7Ozs7OztBQVM1QyxNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQU0zQyxZQUFtQixPQUFtQixFQUFTLE9BQW1CO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnpELFNBQUksR0FBRywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztJQUVULENBQUM7Q0FDdkU7OztJQUhDLGdEQUE4RTs7SUFFbEUsbURBQTBCOztJQUFFLG1EQUEwQjs7Ozs7Ozs7QUFRcEUsTUFBTSxPQUFPLHVDQUF1Qzs7OztJQUdsRCxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx5Q0FBeUMsQ0FBQztJQUU1QyxDQUFDO0NBQzNDOzs7SUFIQyx1REFBcUY7O0lBRXpFLDBEQUEwQjs7Ozs7OztBQVF4QyxNQUFNLE9BQU8sdUNBQXVDOzs7O0lBR2xELFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx5Q0FBeUMsQ0FBQztJQUV4QyxDQUFDO0NBQy9DOzs7SUFIQyx1REFBcUY7O0lBRXpFLDBEQUE4Qjs7QUFHNUMsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUNXLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQztJQUNyRSxDQUFDO0NBQUE7OztJQURDLHFDQUFtRTs7QUFHckUsTUFBTSxPQUFPLDRCQUE0QjtJQUF6QztRQUNXLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQztJQUM1RSxDQUFDO0NBQUE7OztJQURDLDRDQUEwRTs7QUFHNUUsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUd2QyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFFN0IsQ0FBQztDQUMvQzs7O0lBSEMsNENBQTBFOztJQUU5RCwrQ0FBOEI7Ozs7Ozs7OztBQVM1QyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR3BDLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRywwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztJQUV0QyxDQUFDO0NBQ2pDOzs7SUFIQSx3Q0FBc0U7O0lBRTFELDJDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QsIERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzIHtcbiAgQ2FydFBheW1lbnRMb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBMb2FkIEFjdGlvbicsXG4gIENhcnRQYXltZW50TG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudExvYWRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRVcGRhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IFVwZGF0ZSBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFVwZGF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IFVwZGF0ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQYXltZW50VXBkYXRlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgVXBkYXRlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgVXBkYXRlIFdpdGggQmlsbGluZyBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgVXBkYXRlIFdpdGggQmlsbGluZyBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBVcGRhdGUgV2l0aCBCaWxsaW5nIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRSZW1vdmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IFJlbW92ZSBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudFJlbW92ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IFJlbW92ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQYXltZW50UmVtb3ZlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgUmVtb3ZlIEZhaWx1cmUgQWN0aW9uJyxcblx0Q2FydFBheW1lbnRNZXRob2RBZGRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IE1ldGhvZCBBZGQgQWN0aW9uJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50TG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudExvYWRBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudExvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50TG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRVcGRhdGU8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRVcGRhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRVcGRhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50VXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbi8qKlxuICogVHJpZ2dlcnMgYW4gdXBkYXRlIG9mIHRoZSBjYXJ0J3Mgc2VsZWN0ZWQgcGF5bWVudCBtZXRob2QgYW5kIGJpbGxpbmcgYWRkcmVzcy5cbiAqXG4gKiBAcGFyYW0gcGF5bWVudCBUaGUgcGF5bWVudCBtZXRob2QuXG4gKiBAcGFyYW0gYWRkcmVzcyBUaGUgYmlsbGluZyBhZGRyZXNzLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmc8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydFBheW1lbnRNZXRob2QgPSBEYWZmQ2FydFBheW1lbnRNZXRob2QsXG4gIFIgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3Ncbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bWVudDogUGFydGlhbDxUPiwgcHVibGljIGFkZHJlc3M6IFBhcnRpYWw8Uj4pIHt9XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoZSBzdWNjZXNzIG9mIGFuIHVwZGF0ZSBvZiB0aGUgY2FydCdzIHNlbGVjdGVkIHBheW1lbnQgbWV0aG9kIGFuZCBiaWxsaW5nIGFkZHJlc3MuXG4gKlxuICogQHBhcmFtIHBheWxvYWQgVGhlIHVwZGF0ZWQgY2FydC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ1N1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoZSBmYWlsdXJlIG9mIGFuIHVwZGF0ZSBvZiB0aGUgY2FydCdzIHNlbGVjdGVkIHBheW1lbnQgbWV0aG9kIGFuZCBiaWxsaW5nIGFkZHJlc3MuXG4gKlxuICogQHBhcmFtIHBheWxvYWQgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50UmVtb3ZlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50UmVtb3ZlQWN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50UmVtb3ZlU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFJlbW92ZVN1Y2Nlc3NBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRSZW1vdmVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50UmVtb3ZlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbi8qKlxuICogVGhpcyBhY3Rpb24gaXMgdGVtcG9yYXJ5IHVudGlsIGN1c3RvbSByZWR1Y2VycyBjYW4gYmUgaW5qZWN0ZWQgYnkgdGhlIEBkYWZmb2RpbC9wYXltZW50U291cmNlIG1vZHVsZXMuIFJpZ2h0IG5vdyxcbiAqIHRoZSBwYXltZW50IG1vZHVsZXMgbmVlZCBhIHdheSB0byB1cGRhdGUgY2FydCBzdGF0ZSB3aXRoIGEgcGF5bWVudCB0b2tlbi5cbiAqXG4gKiB0b2RvOiByZW1vdmUgd2hlbiBwb3NzaWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudE1ldGhvZEFkZDxUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudE1ldGhvZEFkZEFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRQYXltZW50QWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZCxcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4gIFIgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3MsXG4+ID1cbiAgfCBEYWZmQ2FydFBheW1lbnRMb2FkXG4gIHwgRGFmZkNhcnRQYXltZW50TG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydFBheW1lbnRMb2FkRmFpbHVyZVxuICB8IERhZmZDYXJ0UGF5bWVudFVwZGF0ZTxUPlxuICB8IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydFBheW1lbnRVcGRhdGVGYWlsdXJlXG4gIHwgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmc8VCwgUj5cbiAgfCBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ1N1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmVcbiAgfCBEYWZmQ2FydFBheW1lbnRSZW1vdmVcbiAgfCBEYWZmQ2FydFBheW1lbnRSZW1vdmVTdWNjZXNzXG4gIHwgRGFmZkNhcnRQYXltZW50UmVtb3ZlRmFpbHVyZVxuXHR8IERhZmZDYXJ0UGF5bWVudE1ldGhvZEFkZDxUPjtcbiJdfQ==