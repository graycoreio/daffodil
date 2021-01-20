/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderItemType = {
    Simple: 'simple',
    Composite: 'composite',
    Configurable: 'configurable',
};
export { DaffOrderItemType };
/**
 * @record
 */
export function DaffOrderItem() { }
if (false) {
    /** @type {?} */
    DaffOrderItem.prototype.type;
    /** @type {?} */
    DaffOrderItem.prototype.item_id;
    /** @type {?} */
    DaffOrderItem.prototype.qty_ordered;
    /** @type {?} */
    DaffOrderItem.prototype.qty_canceled;
    /** @type {?} */
    DaffOrderItem.prototype.qty_fulfilled;
    /** @type {?} */
    DaffOrderItem.prototype.image;
    /** @type {?} */
    DaffOrderItem.prototype.order_id;
    /** @type {?} */
    DaffOrderItem.prototype.created_at;
    /** @type {?} */
    DaffOrderItem.prototype.updated_at;
    /** @type {?} */
    DaffOrderItem.prototype.product_id;
    /** @type {?} */
    DaffOrderItem.prototype.parent_item_id;
    /** @type {?} */
    DaffOrderItem.prototype.sku;
    /** @type {?} */
    DaffOrderItem.prototype.name;
    /** @type {?} */
    DaffOrderItem.prototype.weight;
    /** @type {?} */
    DaffOrderItem.prototype.qty;
    /** @type {?} */
    DaffOrderItem.prototype.price;
    /** @type {?} */
    DaffOrderItem.prototype.discount_percent;
    /** @type {?} */
    DaffOrderItem.prototype.discount_amount;
    /** @type {?} */
    DaffOrderItem.prototype.tax_percent;
    /** @type {?} */
    DaffOrderItem.prototype.tax_amount;
    /** @type {?} */
    DaffOrderItem.prototype.row_total;
    /** @type {?} */
    DaffOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    DaffOrderItem.prototype.row_weight;
    /** @type {?} */
    DaffOrderItem.prototype.tax_before_discount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci8iLCJzb3VyY2VzIjpbIm1vZGVscy9vcmRlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlFLFFBQVMsUUFBUTtJQUNqQixXQUFZLFdBQVc7SUFDdkIsY0FBZSxjQUFjOzs7Ozs7QUFHL0IsbUNBeUJDOzs7SUF4QkMsNkJBQXdCOztJQUN4QixnQ0FBZ0I7O0lBQ2hCLG9DQUFvQjs7SUFDcEIscUNBQXFCOztJQUNyQixzQ0FBc0I7O0lBQ3RCLDhCQUF3Qjs7SUFDeEIsaUNBQTBCOztJQUMxQixtQ0FBbUI7O0lBQ25CLG1DQUFtQjs7SUFDbkIsbUNBQW1COztJQUNuQix1Q0FBdUI7O0lBQ3ZCLDRCQUFZOztJQUNaLDZCQUFhOztJQUNiLCtCQUFlOztJQUNmLDRCQUFZOztJQUNaLDhCQUFjOztJQUNkLHlDQUF5Qjs7SUFDekIsd0NBQXdCOztJQUN4QixvQ0FBb0I7O0lBQ3BCLG1DQUFtQjs7SUFDbkIsa0NBQWtCOztJQUNsQixnREFBZ0M7O0lBQ2hDLG1DQUFtQjs7SUFDbkIsNENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByb2R1Y3RJbWFnZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZPcmRlciB9IGZyb20gJy4vb3JkZXInO1xuXG5leHBvcnQgZW51bSBEYWZmT3JkZXJJdGVtVHlwZSB7XG4gIFNpbXBsZSA9ICdzaW1wbGUnLFxuICBDb21wb3NpdGUgPSAnY29tcG9zaXRlJyxcbiAgQ29uZmlndXJhYmxlID0gJ2NvbmZpZ3VyYWJsZSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYWZmT3JkZXJJdGVtIHtcbiAgdHlwZTogRGFmZk9yZGVySXRlbVR5cGU7XG4gIGl0ZW1faWQ6IG51bWJlcjtcbiAgcXR5X29yZGVyZWQ6IG51bWJlcjtcbiAgcXR5X2NhbmNlbGVkOiBudW1iZXI7XG4gIHF0eV9mdWxmaWxsZWQ6IG51bWJlcjtcbiAgaW1hZ2U6IERhZmZQcm9kdWN0SW1hZ2U7XG4gIG9yZGVyX2lkOiBEYWZmT3JkZXJbJ2lkJ107XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xuICBwcm9kdWN0X2lkOiBudW1iZXI7XG4gIHBhcmVudF9pdGVtX2lkOiBudW1iZXI7XG4gIHNrdTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdlaWdodDogbnVtYmVyO1xuICBxdHk6IG51bWJlcjtcbiAgcHJpY2U6IG51bWJlcjtcbiAgZGlzY291bnRfcGVyY2VudDogbnVtYmVyO1xuICBkaXNjb3VudF9hbW91bnQ6IG51bWJlcjtcbiAgdGF4X3BlcmNlbnQ6IG51bWJlcjtcbiAgdGF4X2Ftb3VudDogbnVtYmVyO1xuICByb3dfdG90YWw6IG51bWJlcjtcbiAgcm93X3RvdGFsX3dpdGhfZGlzY291bnQ6IG51bWJlcjtcbiAgcm93X3dlaWdodDogbnVtYmVyO1xuICB0YXhfYmVmb3JlX2Rpc2NvdW50OiBudW1iZXI7XG59XG4iXX0=