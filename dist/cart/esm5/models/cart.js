/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DaffCart() { }
if (false) {
    /** @type {?} */
    DaffCart.prototype.id;
    /**
     * @deprecated use totals instead
     * @type {?}
     */
    DaffCart.prototype.subtotal;
    /**
     * @deprecated use totals instead
     * @type {?}
     */
    DaffCart.prototype.grand_total;
    /** @type {?} */
    DaffCart.prototype.coupons;
    /** @type {?|undefined} */
    DaffCart.prototype.items;
    /** @type {?} */
    DaffCart.prototype.billing_address;
    /** @type {?} */
    DaffCart.prototype.shipping_address;
    /** @type {?|undefined} */
    DaffCart.prototype.payment;
    /** @type {?} */
    DaffCart.prototype.totals;
    /** @type {?} */
    DaffCart.prototype.shipping_information;
    /** @type {?} */
    DaffCart.prototype.available_shipping_methods;
    /** @type {?} */
    DaffCart.prototype.available_payment_methods;
    /**
     * The field is set to the platform cart object returned by the most recent driver call.
     * No fields are guaranteed here.
     * @type {?|undefined}
     */
    DaffCart.prototype.extra_attributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0LyIsInNvdXJjZXMiOlsibW9kZWxzL2NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLDhCQXdCQzs7O0lBdkJBLHNCQUFvQjs7Ozs7SUFJcEIsNEJBQWlCOzs7OztJQUloQiwrQkFBb0I7O0lBQ3BCLDJCQUEwQjs7SUFDMUIseUJBQXVCOztJQUN2QixtQ0FBd0M7O0lBQ3hDLG9DQUF5Qzs7SUFDekMsMkJBQWdDOztJQUNoQywwQkFBd0I7O0lBQ3hCLHdDQUF5RDs7SUFDekQsOENBQW1EOztJQUNuRCw2Q0FBbUQ7Ozs7OztJQUtuRCxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQ2FydEl0ZW0gfSBmcm9tICcuL2NhcnQtaXRlbSc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICcuL2NhcnQtYWRkcmVzcyc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICcuL2NhcnQtcGF5bWVudCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24gfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctaW5mbyc7XG5pbXBvcnQgeyBEYWZmQ2FydENvdXBvbiB9IGZyb20gJy4vY2FydC1jb3Vwb24nO1xuaW1wb3J0IHsgRGFmZkNhcnRUb3RhbCB9IGZyb20gJy4vY2FydC10b3RhbCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1yYXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgdG90YWxzIGluc3RlYWRcblx0ICovXG5cdHN1YnRvdGFsOiBudW1iZXI7XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgdG90YWxzIGluc3RlYWRcblx0ICovXG4gIGdyYW5kX3RvdGFsOiBudW1iZXI7XG4gIGNvdXBvbnM6IERhZmZDYXJ0Q291cG9uW107XG4gIGl0ZW1zPzogRGFmZkNhcnRJdGVtW107XG4gIGJpbGxpbmdfYWRkcmVzczogRGFmZkNhcnRBZGRyZXNzIHwgbnVsbDtcbiAgc2hpcHBpbmdfYWRkcmVzczogRGFmZkNhcnRBZGRyZXNzIHwgbnVsbDtcbiAgcGF5bWVudD86IERhZmZDYXJ0UGF5bWVudE1ldGhvZDtcbiAgdG90YWxzOiBEYWZmQ2FydFRvdGFsW107XG4gIHNoaXBwaW5nX2luZm9ybWF0aW9uOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24gfCBudWxsO1xuICBhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kczogRGFmZkNhcnRTaGlwcGluZ1JhdGVbXTtcbiAgYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kczogRGFmZkNhcnRQYXltZW50TWV0aG9kW107XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgaXMgc2V0IHRvIHRoZSBwbGF0Zm9ybSBjYXJ0IG9iamVjdCByZXR1cm5lZCBieSB0aGUgbW9zdCByZWNlbnQgZHJpdmVyIGNhbGwuXG4gICAqIE5vIGZpZWxkcyBhcmUgZ3VhcmFudGVlZCBoZXJlLlxuICAgKi9cbiAgZXh0cmFfYXR0cmlidXRlcz86IGFueTtcbn1cbiJdfQ==