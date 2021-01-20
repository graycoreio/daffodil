/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function DaffOrderFacadeInterface() { }
if (false) {
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.loading$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.errors$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.orders$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.orderIds$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.orderCount$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.orderEntities$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.placedOrder$;
    /** @type {?} */
    DaffOrderFacadeInterface.prototype.hasPlacedOrder$;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getOrder$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getTotals$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getAppliedCodes$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getItems$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getBillingAddresses$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getShippingAddresses$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getShipments$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getPayment$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getInvoices$ = function (orderId) { };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getCredits$ = function (orderId) { };
    /**
     * The specified order's grand total.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getGrandTotal$ = function (orderId) { };
    /**
     * The specified order's subtotal.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getSubtotal$ = function (orderId) { };
    /**
     * The specified order's shipping total.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getShippingTotal$ = function (orderId) { };
    /**
     * The specified order's discount total.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getDiscountTotal$ = function (orderId) { };
    /**
     * Whether the specified order has a discount.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.hasDiscount$ = function (orderId) { };
    /**
     * The specified order's tax total.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacadeInterface.prototype.getTaxTotal$ = function (orderId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZmFjYWRlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvb3JkZXIvb3JkZXItZmFjYWRlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU9BLDhDQThDQzs7O0lBN0NDLDRDQUE4Qjs7SUFDOUIsMkNBQThCOztJQUM5QiwyQ0FBeUI7O0lBQ3pCLDZDQUEyQzs7SUFDM0MsK0NBQWdDOztJQUNoQyxrREFBMEM7O0lBRTFDLGdEQUE0Qjs7SUFDNUIsbURBQXFDOzs7OztJQUVyQyxzRUFBMkM7Ozs7O0lBQzNDLHVFQUFzRDs7Ozs7SUFDdEQsNkVBQW1FOzs7OztJQUNuRSxzRUFBb0Q7Ozs7O0lBQ3BELGlGQUEyRTs7Ozs7SUFDM0Usa0ZBQTZFOzs7OztJQUM3RSwwRUFBNEQ7Ozs7O0lBQzVELHdFQUF3RDs7Ozs7SUFDeEQseUVBQTBEOzs7OztJQUMxRCx3RUFBd0Q7Ozs7OztJQUt4RCwyRUFBNkQ7Ozs7OztJQUk3RCx5RUFBMkQ7Ozs7OztJQUkzRCw4RUFBZ0U7Ozs7OztJQUlqRSw4RUFBZ0U7Ozs7OztJQUkvRCx5RUFBb0Q7Ozs7OztJQUlwRCx5RUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZk9yZGVyLCBEYWZmT3JkZXJUb3RhbCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmU3RvcmVGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZk9yZGVyRmFjYWRlSW50ZXJmYWNlPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+IGV4dGVuZHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIG9yZGVycyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgb3JkZXJJZHMkOiBPYnNlcnZhYmxlPChzdHJpbmcgfCBudW1iZXIpW10+O1xuICBvcmRlckNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBvcmRlckVudGl0aWVzJDogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PFQ+PjtcblxuICBwbGFjZWRPcmRlciQ6IE9ic2VydmFibGU8VD47XG4gIGhhc1BsYWNlZE9yZGVyJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBnZXRPcmRlciQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VD47XG4gIGdldFRvdGFscyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsndG90YWxzJ10+O1xuICBnZXRBcHBsaWVkQ29kZXMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ2FwcGxpZWRfY29kZXMnXT47XG4gIGdldEl0ZW1zJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydpdGVtcyddPjtcbiAgZ2V0QmlsbGluZ0FkZHJlc3NlcyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnYmlsbGluZ19hZGRyZXNzZXMnXT47XG4gIGdldFNoaXBwaW5nQWRkcmVzc2VzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydzaGlwcGluZ19hZGRyZXNzZXMnXT47XG4gIGdldFNoaXBtZW50cyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnc2hpcG1lbnRzJ10+O1xuICBnZXRQYXltZW50JChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydwYXltZW50J10+O1xuICBnZXRJbnZvaWNlcyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnaW52b2ljZXMnXT47XG4gIGdldENyZWRpdHMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ2NyZWRpdHMnXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzcGVjaWZpZWQgb3JkZXIncyBncmFuZCB0b3RhbC5cbiAgICovXG4gIGdldEdyYW5kVG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPjtcbiAgLyoqXG4gICAqIFRoZSBzcGVjaWZpZWQgb3JkZXIncyBzdWJ0b3RhbC5cbiAgICovXG4gIGdldFN1YnRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD47XG4gIC8qKlxuICAgKiBUaGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcHBpbmcgdG90YWwuXG4gICAqL1xuICBnZXRTaGlwcGluZ1RvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD47XG4gIC8qKlxuICAgKiBUaGUgc3BlY2lmaWVkIG9yZGVyJ3MgZGlzY291bnQgdG90YWwuXG4gICAqL1xuXHRnZXREaXNjb3VudFRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD47XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBzcGVjaWZpZWQgb3JkZXIgaGFzIGEgZGlzY291bnQuXG5cdCAqL1xuICBoYXNEaXNjb3VudCQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBUaGUgc3BlY2lmaWVkIG9yZGVyJ3MgdGF4IHRvdGFsLlxuICAgKi9cbiAgZ2V0VGF4VG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPjtcbn1cbiJdfQ==