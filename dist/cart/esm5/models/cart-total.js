/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartTotalTypeEnum = {
    grandTotal: 'grand_total',
    subtotalExcludingTax: 'subtotal_excluding_tax',
    subtotalIncludingTax: 'subtotal_including_tax',
    subtotalWithDiscountExcludingTax: 'subtotal_with_discount_excluding_tax',
    subtotalWithDiscountIncludingTax: 'subtotal_with_discount_including_tax',
    discount: 'discount',
    tax: 'tax',
    shipping: 'shipping',
};
export { DaffCartTotalTypeEnum };
/**
 * Since some cart totals might not have a value defined at all times, like shipping, the values of these totals
 * can be null. Allowing their values to be null differentiates a non-existent value from a zero value. In the case of
 * shipping, this would mean the difference between a cart with no selected shipping method and a cart with a selected shipping
 * method that costs zero.
 * @record
 */
export function DaffCartTotal() { }
if (false) {
    /** @type {?} */
    DaffCartTotal.prototype.value;
    /** @type {?} */
    DaffCartTotal.prototype.label;
    /** @type {?} */
    DaffCartTotal.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0LyIsInNvdXJjZXMiOlsibW9kZWxzL2NhcnQtdG90YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0MsWUFBYSxhQUFhO0lBQzFCLHNCQUF1Qix3QkFBd0I7SUFDL0Msc0JBQXVCLHdCQUF3QjtJQUMvQyxrQ0FBbUMsc0NBQXNDO0lBQ3pFLGtDQUFtQyxzQ0FBc0M7SUFDekUsVUFBVyxVQUFVO0lBQ3JCLEtBQU0sS0FBSztJQUNYLFVBQVcsVUFBVTs7Ozs7Ozs7OztBQVN0QixtQ0FJQzs7O0lBSEMsOEJBQWM7O0lBQ2QsOEJBQWM7O0lBQ2QsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRGFmZkNhcnRUb3RhbFR5cGVFbnVtIHtcblx0Z3JhbmRUb3RhbCA9ICdncmFuZF90b3RhbCcsXG5cdHN1YnRvdGFsRXhjbHVkaW5nVGF4ID0gJ3N1YnRvdGFsX2V4Y2x1ZGluZ190YXgnLFxuXHRzdWJ0b3RhbEluY2x1ZGluZ1RheCA9ICdzdWJ0b3RhbF9pbmNsdWRpbmdfdGF4Jyxcblx0c3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXggPSAnc3VidG90YWxfd2l0aF9kaXNjb3VudF9leGNsdWRpbmdfdGF4Jyxcblx0c3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXggPSAnc3VidG90YWxfd2l0aF9kaXNjb3VudF9pbmNsdWRpbmdfdGF4Jyxcblx0ZGlzY291bnQgPSAnZGlzY291bnQnLFxuXHR0YXggPSAndGF4Jyxcblx0c2hpcHBpbmcgPSAnc2hpcHBpbmcnXG59XG5cbi8qKlxuICogU2luY2Ugc29tZSBjYXJ0IHRvdGFscyBtaWdodCBub3QgaGF2ZSBhIHZhbHVlIGRlZmluZWQgYXQgYWxsIHRpbWVzLCBsaWtlIHNoaXBwaW5nLCB0aGUgdmFsdWVzIG9mIHRoZXNlIHRvdGFsc1xuICogY2FuIGJlIG51bGwuIEFsbG93aW5nIHRoZWlyIHZhbHVlcyB0byBiZSBudWxsIGRpZmZlcmVudGlhdGVzIGEgbm9uLWV4aXN0ZW50IHZhbHVlIGZyb20gYSB6ZXJvIHZhbHVlLiBJbiB0aGUgY2FzZSBvZlxuICogc2hpcHBpbmcsIHRoaXMgd291bGQgbWVhbiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgY2FydCB3aXRoIG5vIHNlbGVjdGVkIHNoaXBwaW5nIG1ldGhvZCBhbmQgYSBjYXJ0IHdpdGggYSBzZWxlY3RlZCBzaGlwcGluZ1xuICogbWV0aG9kIHRoYXQgY29zdHMgemVyby5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydFRvdGFsIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtO1xufSJdfQ==