/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U
 */
export function DaffCartFacadeInterface() { }
if (false) {
    /** @type {?} */
    DaffCartFacadeInterface.prototype.cart$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.resolved$;
    /**
     * The object that holds all the loading states for cart operations.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.loadingObject$;
    /**
     * Whether there is any cart operation in progress.
     * This includes operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.featureLoading$;
    /**
     * Whether there is any cart resolve operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.featureResolving$;
    /**
     * Whether there is any cart mutate operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.featureMutating$;
    /**
     * Whether there is a cart operation in progress.
     * This does not include operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.loading$;
    /**
     * Whether there is a cart resolve operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.resolving$;
    /**
     * Whether there is a cart mutate operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.mutating$;
    /**
     * Whether there is a cart billing address operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.billingAddressLoading$;
    /**
     * Whether there is a cart billing address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.billingAddressResolving$;
    /**
     * Whether there is a cart billing address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.billingAddressMutating$;
    /**
     * Whether there is a cart shipping address operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingAddressLoading$;
    /**
     * Whether there is a cart shipping address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingAddressResolving$;
    /**
     * Whether there is a cart shipping address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingAddressMutating$;
    /**
     * Whether there is a cart shipping information operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingInformationLoading$;
    /**
     * Whether there is a cart shipping information resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingInformationResolving$;
    /**
     * Whether there is a cart shipping information mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingInformationMutating$;
    /**
     * Whether there is a cart shipping methods operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingMethodsLoading$;
    /**
     * Whether there is a cart shipping methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.shippingMethodsResolving$;
    /**
     * Whether there is a cart payment operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentLoading$;
    /**
     * Whether there is a cart payment resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentResolving$;
    /**
     * Whether there is a cart payment mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentMutating$;
    /**
     * Whether there is a cart payment methods operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentMethodsLoading$;
    /**
     * Whether there is a cart payment methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentMethodsResolving$;
    /**
     * Whether there is a cart coupon operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.couponLoading$;
    /**
     * Whether there is a cart coupon resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.couponResolving$;
    /**
     * Whether there is a cart coupon mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.couponMutating$;
    /**
     * Whether there is a cart item operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.itemLoading$;
    /**
     * Whether there is a cart item add operation in progress.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.itemAdding$;
    /**
     * Whether there is a cart item resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.itemResolving$;
    /**
     * Whether there is a cart item mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.itemMutating$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.errors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.cartErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.itemErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.billingAddressErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingAddressErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingInformationErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingMethodsErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.paymentErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.paymentMethodsErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.couponErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.id$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.subtotal$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.grandTotal$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.subtotalExcludingTax$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.subtotalIncludingTax$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.subtotalWithDiscountExcludingTax$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.subtotalWithDiscountIncludingTax$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.discountTotals$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.totalTax$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingTotal$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.coupons$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.items$;
    /**
     * The total number of cart items, taking into account the quantity of each cart item.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.totalItems$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasOutOfStockItems$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.itemDictionary$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.billingAddress$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingAddress$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.payment$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.totals$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.shippingInformation$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.availableShippingMethods$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.availablePaymentMethods$;
    /**
     * The user-defined platform-agnostic payment identifier that corresponds to the cart's current (platform-specific) payment method.
     * Define the mapping with the `DaffCartPaymentMethodIdMap` injection token.
     * @see DaffCartPaymentMethodIdMap
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.paymentId$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.isCartEmpty$;
    /**
     * Whether the cart's shipping address equals the billing address.
     * Returns false if either address is null or undefined.
     * @type {?}
     */
    DaffCartFacadeInterface.prototype.isBillingSameAsShipping$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasBillingAddress$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasShippingAddress$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasShippingMethod$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasPaymentMethod$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.canPlaceOrder$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.orderResultLoading$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.orderResultErrors$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.orderResult$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.orderResultId$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.orderResultCartId$;
    /** @type {?} */
    DaffCartFacadeInterface.prototype.hasOrderResult$;
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacadeInterface.prototype.getCartItemDiscountedTotal = function (itemId) { };
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacadeInterface.prototype.getConfiguredCartItemAttributes = function (itemId) { };
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacadeInterface.prototype.getCompositeCartItemOptions = function (itemId) { };
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacadeInterface.prototype.isCartItemOutOfStock = function (itemId) { };
    /**
     * The state of a cart item.
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacadeInterface.prototype.getCartItemState = function (itemId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1mYWNhZGUuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJmYWNhZGVzL2NhcnQvY2FydC1mYWNhZGUuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBYUEsNkNBaU9DOzs7SUE1TkMsd0NBQXFCOztJQUVyQiw0Q0FBNEM7Ozs7O0lBSzVDLGlEQUE0Qzs7Ozs7O0lBSzVDLGtEQUFxQzs7Ozs7OztJQU1yQyxvREFBdUM7Ozs7Ozs7SUFNdkMsbURBQXNDOzs7Ozs7SUFLdEMsMkNBQThCOzs7Ozs7O0lBTTlCLDZDQUFnQzs7Ozs7OztJQU1oQyw0Q0FBK0I7Ozs7O0lBSS9CLHlEQUE0Qzs7Ozs7O0lBSzVDLDJEQUE4Qzs7Ozs7O0lBSzlDLDBEQUE2Qzs7Ozs7SUFJN0MsMERBQTZDOzs7Ozs7SUFLN0MsNERBQStDOzs7Ozs7SUFLL0MsMkRBQThDOzs7OztJQUk5Qyw4REFBaUQ7Ozs7OztJQUtqRCxnRUFBbUQ7Ozs7OztJQUtuRCwrREFBa0Q7Ozs7O0lBSWxELDBEQUE2Qzs7Ozs7O0lBSzdDLDREQUErQzs7Ozs7SUFJL0Msa0RBQXFDOzs7Ozs7SUFLckMsb0RBQXVDOzs7Ozs7SUFLdkMsbURBQXNDOzs7OztJQUl0Qyx5REFBNEM7Ozs7OztJQUs1QywyREFBOEM7Ozs7O0lBSTlDLGlEQUFvQzs7Ozs7O0lBS3BDLG1EQUFzQzs7Ozs7O0lBS3RDLGtEQUFxQzs7Ozs7SUFJckMsK0NBQWtDOzs7OztJQUlsQyw4Q0FBaUM7Ozs7OztJQUtqQyxpREFBb0M7Ozs7OztJQUtyQyxnREFBbUM7O0lBRWxDLDBDQUFvQzs7SUFDcEMsOENBQW9FOztJQUNwRSw4Q0FBb0U7O0lBQ3BFLHdEQUF3Rjs7SUFDeEYseURBQTBGOztJQUMxRiw2REFBa0c7O0lBQ2xHLHlEQUEwRjs7SUFDMUYsaURBQTBFOztJQUMxRSx3REFBd0Y7O0lBQ3hGLGdEQUF3RTs7SUFFeEUsc0NBQWdDOztJQUNoQyw0Q0FBOEM7O0lBQzlDLDhDQUFnRDs7SUFDaEQsd0RBQTBEOztJQUMxRCx3REFBMEQ7O0lBQzFELG9FQUFzRTs7SUFDdEUsb0VBQXNFOztJQUN0RSxrREFBNkM7O0lBQzdDLDRDQUE4Qzs7SUFDOUMsaURBQW1EOztJQUNuRCwyQ0FBMEM7O0lBQzNDLHlDQUFzQzs7Ozs7SUFJckMsOENBQWdDOztJQUNoQyxzREFBeUM7O0lBQ3pDLGtEQUEyQzs7SUFDM0Msa0RBQXlEOztJQUN6RCxtREFBMkQ7O0lBQzNELDJDQUEwQzs7SUFDMUMsMENBQXdDOztJQUN4Qyx1REFBbUU7O0lBQ25FLDREQUE4RTs7SUFDOUUsMkRBQTRFOzs7Ozs7O0lBTTVFLDZDQUE0Qjs7SUFFNUIsK0NBQWtDOzs7Ozs7SUFLbkMsMkRBQThDOztJQUU3QyxxREFBd0M7O0lBQ3hDLHNEQUF5Qzs7SUFDekMscURBQXdDOztJQUN4QyxvREFBdUM7O0lBQ3ZDLGlEQUFvQzs7SUFFcEMsc0RBQXlDOztJQUMxQyxxREFBaUQ7O0lBQ2pELCtDQUE0Qjs7SUFDNUIsaURBQXlDOztJQUN6QyxxREFBNEM7O0lBQzNDLGtEQUFxQzs7Ozs7SUFFdEMscUZBQXFFOzs7OztJQUNyRSwwRkFBdUc7Ozs7O0lBQ3ZHLHNGQUE2Rjs7Ozs7SUFDN0YsK0VBQWdFOzs7Ozs7SUFJL0QsMkVBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yLCBEYWZmU3RvcmVGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRPcmRlclJlc3VsdCwgRGFmZkNhcnRUb3RhbCwgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RXJyb3JzIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvZXJyb3JzL2NhcnQtZXJyb3JzLnR5cGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2FydC1vcGVyYXRpb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IERhZmZDYXJ0TG9hZGluZyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2xvYWRpbmcvY2FydC1sb2FkaW5nLnR5cGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtU3RhdGVFbnVtLCBEYWZmU3RhdGVmdWxDYXJ0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zdGF0ZWZ1bC1jYXJ0LWl0ZW0nO1xuaW1wb3J0IHsgRGFmZkNhcnRSZXNvbHZlU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydEZhY2FkZUludGVyZmFjZTxcbiAgVCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG5cdFYgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcblx0VSBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW1cbj4gZXh0ZW5kcyBEYWZmU3RvcmVGYWNhZGU8QWN0aW9uPiB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIHJlc29sdmVkJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFJlc29sdmVTdGF0ZT47XG5cbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIGxvYWRpbmcgc3RhdGVzIGZvciBjYXJ0IG9wZXJhdGlvbnMuXG4gICAqL1xuICBsb2FkaW5nT2JqZWN0JDogT2JzZXJ2YWJsZTxEYWZmQ2FydExvYWRpbmc+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhbnkgY2FydCBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgaW5jbHVkZXMgb3BlcmF0aW9ucyBzcGVjaWZpY2FsbHkgZm9yIGNhcnQgc3ViZmllbGRzLlxuICAgKi9cbiAgZmVhdHVyZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhbnkgY2FydCByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIGZvciBjYXJ0IHN1YmZpZWxkcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBmZWF0dXJlUmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYW55IGNhcnQgbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIGZvciBjYXJ0IHN1YmZpZWxkcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgZmVhdHVyZU11dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBkb2VzIG5vdCBpbmNsdWRlIG9wZXJhdGlvbnMgc3BlY2lmaWNhbGx5IGZvciBjYXJ0IHN1YmZpZWxkcy5cbiAgICovXG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgcmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIG11dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGJpbGxpbmcgYWRkcmVzcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBiaWxsaW5nQWRkcmVzc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhIGNhcnQgYmlsbGluZyBhZGRyZXNzIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIGJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGJpbGxpbmcgYWRkcmVzcyBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBiaWxsaW5nQWRkcmVzc011dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGFkZHJlc3Mgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2hpcHBpbmdBZGRyZXNzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBzaGlwcGluZyBhZGRyZXNzIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBzaGlwcGluZyBhZGRyZXNzIG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNoaXBwaW5nQWRkcmVzc011dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGluZm9ybWF0aW9uIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIHNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGluZm9ybWF0aW9uIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgaW5mb3JtYXRpb24gbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgc2hpcHBpbmdJbmZvcm1hdGlvbk11dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIG1ldGhvZHMgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2hpcHBpbmdNZXRob2RzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBzaGlwcGluZyBtZXRob2RzIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNoaXBwaW5nTWV0aG9kc1Jlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBwYXltZW50IG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIHBheW1lbnRMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgcGF5bWVudFJlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBwYXltZW50IG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHBheW1lbnRNdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBwYXltZW50IG1ldGhvZHMgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgcGF5bWVudE1ldGhvZHNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgbWV0aG9kcyByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBwYXltZW50TWV0aG9kc1Jlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBjb3Vwb24gb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgY291cG9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBjb3Vwb24gcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgY291cG9uUmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGNvdXBvbiBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBjb3Vwb25NdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIGEgY2FydCBpdGVtIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIGl0ZW1Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGl0ZW0gYWRkIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIGl0ZW1BZGRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBpcyBhIGNhcnQgaXRlbSByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBpdGVtUmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGl0ZW0gbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cblx0aXRlbU11dGF0aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBlcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzPjtcbiAgY2FydEVycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdPjtcbiAgaXRlbUVycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dPjtcbiAgYmlsbGluZ0FkZHJlc3NFcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc10+O1xuICBzaGlwcGluZ0FkZHJlc3NFcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0FkZHJlc3NdPjtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dPjtcbiAgc2hpcHBpbmdNZXRob2RzRXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdNZXRob2RzXT47XG4gIHBheW1lbnRFcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50XT47XG4gIHBheW1lbnRNZXRob2RzRXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudE1ldGhvZHNdPjtcbiAgY291cG9uRXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ291cG9uXT47XG5cbiAgaWQkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydpZCddPjtcbiAgc3VidG90YWwkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBncmFuZFRvdGFsJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcbiAgc3VidG90YWxFeGNsdWRpbmdUYXgkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBzdWJ0b3RhbEluY2x1ZGluZ1RheCQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG4gIHN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4JDogT2JzZXJ2YWJsZTxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcbiAgc3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXgkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBkaXNjb3VudFRvdGFscyQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFtdPjtcbiAgdG90YWxUYXgkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBzaGlwcGluZ1RvdGFsJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcbiAgY291cG9ucyQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ2NvdXBvbnMnXT47XG5cdGl0ZW1zJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFsnaXRlbXMnXT47XG5cdC8qKlxuXHQgKiBUaGUgdG90YWwgbnVtYmVyIG9mIGNhcnQgaXRlbXMsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHF1YW50aXR5IG9mIGVhY2ggY2FydCBpdGVtLlxuXHQgKi9cbiAgdG90YWxJdGVtcyQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgaGFzT3V0T2ZTdG9ja0l0ZW1zJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXRlbURpY3Rpb25hcnkkOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8VT4+O1xuICBiaWxsaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ2JpbGxpbmdfYWRkcmVzcyddPjtcbiAgc2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFsnc2hpcHBpbmdfYWRkcmVzcyddPjtcbiAgcGF5bWVudCQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3BheW1lbnQnXT47XG4gIHRvdGFscyQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3RvdGFscyddPjtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbiQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3NoaXBwaW5nX2luZm9ybWF0aW9uJ10+O1xuICBhdmFpbGFibGVTaGlwcGluZ01ldGhvZHMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kcyddPjtcbiAgYXZhaWxhYmxlUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzJ10+O1xuICAvKipcbiAgICogVGhlIHVzZXItZGVmaW5lZCBwbGF0Zm9ybS1hZ25vc3RpYyBwYXltZW50IGlkZW50aWZpZXIgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgY2FydCdzIGN1cnJlbnQgKHBsYXRmb3JtLXNwZWNpZmljKSBwYXltZW50IG1ldGhvZC5cbiAgICogRGVmaW5lIHRoZSBtYXBwaW5nIHdpdGggdGhlIGBEYWZmQ2FydFBheW1lbnRNZXRob2RJZE1hcGAgaW5qZWN0aW9uIHRva2VuLlxuICAgKiBAc2VlIERhZmZDYXJ0UGF5bWVudE1ldGhvZElkTWFwXG4gICAqL1xuICBwYXltZW50SWQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgaXNDYXJ0RW1wdHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcblx0ICogV2hldGhlciB0aGUgY2FydCdzIHNoaXBwaW5nIGFkZHJlc3MgZXF1YWxzIHRoZSBiaWxsaW5nIGFkZHJlc3MuXG5cdCAqIFJldHVybnMgZmFsc2UgaWYgZWl0aGVyIGFkZHJlc3MgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqL1xuXHRpc0JpbGxpbmdTYW1lQXNTaGlwcGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgaGFzQmlsbGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBoYXNTaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBoYXNTaGlwcGluZ01ldGhvZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGhhc1BheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYW5QbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBvcmRlclJlc3VsdExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRvcmRlclJlc3VsdEVycm9ycyQ6IE9ic2VydmFibGU8RGFmZlN0YXRlRXJyb3JbXT47XG5cdG9yZGVyUmVzdWx0JDogT2JzZXJ2YWJsZTxWPjtcblx0b3JkZXJSZXN1bHRJZCQ6IE9ic2VydmFibGU8Vlsnb3JkZXJJZCddPjtcblx0b3JkZXJSZXN1bHRDYXJ0SWQkOiBPYnNlcnZhYmxlPFZbJ2NhcnRJZCddPjtcbiAgaGFzT3JkZXJSZXN1bHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGdldENhcnRJdGVtRGlzY291bnRlZFRvdGFsKGl0ZW1JZDogVVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXHRnZXRDb25maWd1cmVkQ2FydEl0ZW1BdHRyaWJ1dGVzKGl0ZW1JZDogVVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW1BdHRyaWJ1dGVbXT47XG5cdGdldENvbXBvc2l0ZUNhcnRJdGVtT3B0aW9ucyhpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8RGFmZkNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uW10+O1xuXHRpc0NhcnRJdGVtT3V0T2ZTdG9jayhpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdC8qKlxuXHQgKiBUaGUgc3RhdGUgb2YgYSBjYXJ0IGl0ZW0uXG5cdCAqL1xuICBnZXRDYXJ0SXRlbVN0YXRlKGl0ZW1JZDogVVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEl0ZW1TdGF0ZUVudW0+O1xufVxuIl19