/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DaffOrder() { }
if (false) {
    /** @type {?} */
    DaffOrder.prototype.id;
    /** @type {?} */
    DaffOrder.prototype.customer_id;
    /** @type {?} */
    DaffOrder.prototype.created_at;
    /** @type {?} */
    DaffOrder.prototype.updated_at;
    /** @type {?} */
    DaffOrder.prototype.status;
    /** @type {?} */
    DaffOrder.prototype.totals;
    /** @type {?} */
    DaffOrder.prototype.applied_codes;
    /** @type {?} */
    DaffOrder.prototype.items;
    /** @type {?} */
    DaffOrder.prototype.billing_addresses;
    /** @type {?} */
    DaffOrder.prototype.shipping_addresses;
    /** @type {?} */
    DaffOrder.prototype.shipments;
    /** @type {?} */
    DaffOrder.prototype.payment;
    /** @type {?} */
    DaffOrder.prototype.invoices;
    /** @type {?} */
    DaffOrder.prototype.credits;
    /**
     * The field is set to the platform order object returned by the most recent driver call.
     * No fields are guaranteed here.
     * @type {?|undefined}
     */
    DaffOrder.prototype.extra_attributes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvIiwic291cmNlcyI6WyJtb2RlbHMvb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBLCtCQW9CQzs7O0lBbkJDLHVCQUFvQjs7SUFDcEIsZ0NBQTZCOztJQUM3QiwrQkFBbUI7O0lBQ25CLCtCQUFtQjs7SUFDbkIsMkJBQWU7O0lBQ2YsMkJBQXlCOztJQUN6QixrQ0FBaUM7O0lBQ2pDLDBCQUF1Qjs7SUFDdkIsc0NBQXNDOztJQUN0Qyx1Q0FBdUM7O0lBQ3ZDLDhCQUErQjs7SUFDL0IsNEJBQTBCOztJQUMxQiw2QkFBNkI7O0lBQzdCLDRCQUEyQjs7Ozs7O0lBSzNCLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZPcmRlckl0ZW0gfSBmcm9tICcuL29yZGVyLWl0ZW0nO1xuaW1wb3J0IHsgRGFmZk9yZGVyQWRkcmVzcyB9IGZyb20gJy4vb3JkZXItYWRkcmVzcyc7XG5pbXBvcnQgeyBEYWZmT3JkZXJQYXltZW50IH0gZnJvbSAnLi9vcmRlci1wYXltZW50JztcbmltcG9ydCB7IERhZmZPcmRlckNvdXBvbiB9IGZyb20gJy4vb3JkZXItY291cG9uJztcbmltcG9ydCB7IERhZmZPcmRlclRvdGFsIH0gZnJvbSAnLi9vcmRlci10b3RhbCc7XG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwbWVudCB9IGZyb20gJy4vb3JkZXItc2hpcG1lbnQnO1xuaW1wb3J0IHsgRGFmZk9yZGVySW52b2ljZSB9IGZyb20gJy4vb3JkZXItaW52b2ljZSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJDcmVkaXQgfSBmcm9tICcuL29yZGVyLWNyZWRpdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZk9yZGVyIHtcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcbiAgY3VzdG9tZXJfaWQ6IG51bWJlciB8IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICB1cGRhdGVkX2F0OiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICB0b3RhbHM6IERhZmZPcmRlclRvdGFsW107XG4gIGFwcGxpZWRfY29kZXM6IERhZmZPcmRlckNvdXBvbltdO1xuICBpdGVtczogRGFmZk9yZGVySXRlbVtdO1xuICBiaWxsaW5nX2FkZHJlc3NlczogRGFmZk9yZGVyQWRkcmVzc1tdO1xuICBzaGlwcGluZ19hZGRyZXNzZXM6IERhZmZPcmRlckFkZHJlc3NbXTtcbiAgc2hpcG1lbnRzOiBEYWZmT3JkZXJTaGlwbWVudFtdO1xuICBwYXltZW50OiBEYWZmT3JkZXJQYXltZW50O1xuICBpbnZvaWNlczogRGFmZk9yZGVySW52b2ljZVtdO1xuICBjcmVkaXRzOiBEYWZmT3JkZXJDcmVkaXRbXTtcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBpcyBzZXQgdG8gdGhlIHBsYXRmb3JtIG9yZGVyIG9iamVjdCByZXR1cm5lZCBieSB0aGUgbW9zdCByZWNlbnQgZHJpdmVyIGNhbGwuXG4gICAqIE5vIGZpZWxkcyBhcmUgZ3VhcmFudGVlZCBoZXJlLlxuICAgKi9cbiAgZXh0cmFfYXR0cmlidXRlcz86IGFueTtcbn1cbiJdfQ==