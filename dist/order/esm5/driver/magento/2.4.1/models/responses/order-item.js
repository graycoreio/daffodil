/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoOrderItemType = {
    Simple: 'simple',
    Configurable: 'configurable',
    Bundle: 'bundle',
};
export { MagentoOrderItemType };
;
/**
 * @record
 */
export function MagentoOrderItemOption() { }
if (false) {
    /** @type {?} */
    MagentoOrderItemOption.prototype.label;
    /** @type {?} */
    MagentoOrderItemOption.prototype.value;
}
;
/**
 * @record
 */
export function MagentoOrderItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderItem.prototype.id;
    /** @type {?} */
    MagentoOrderItem.prototype.discounts;
    /** @type {?} */
    MagentoOrderItem.prototype.product_name;
    /** @type {?} */
    MagentoOrderItem.prototype.product_sale_price;
    /** @type {?} */
    MagentoOrderItem.prototype.product_sku;
    /** @type {?} */
    MagentoOrderItem.prototype.product_type;
    /** @type {?} */
    MagentoOrderItem.prototype.product_url_key;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_canceled;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_invoiced;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_ordered;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_refunded;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_returned;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_shipped;
    /** @type {?} */
    MagentoOrderItem.prototype.selected_options;
    /** @type {?} */
    MagentoOrderItem.prototype.entered_options;
    /** @type {?} */
    MagentoOrderItem.prototype.status;
}
/**
 * @record
 */
export function MagentoOrderBundleItemSelectedOption() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.id;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.label;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.values;
}
;
/**
 * @record
 */
export function MagentoOrderBundleItemSelectedOptionValue() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.id;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.price;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.product_name;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.product_sku;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.quantity;
}
;
/**
 * @record
 */
export function MagentoOrderBundleItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItem.prototype.bundle_options;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbIm1vZGVscy9yZXNwb25zZXMvb3JkZXItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxRQUFTLFFBQVE7SUFDakIsY0FBZSxjQUFjO0lBQzdCLFFBQVMsUUFBUTs7O0FBQ2xCLENBQUM7Ozs7QUFFRiw0Q0FHQzs7O0lBRkMsdUNBQWM7O0lBQ2QsdUNBQWM7O0FBQ2YsQ0FBQzs7OztBQUVGLHNDQWlCQzs7O0lBaEJDLDhCQUFXOztJQUNYLHFDQUE2Qjs7SUFDN0Isd0NBQXFCOztJQUNyQiw4Q0FBaUM7O0lBQ2pDLHVDQUFvQjs7SUFDcEIsd0NBQW1DOztJQUNuQywyQ0FBd0I7O0lBQ3hCLDZDQUEwQjs7SUFDMUIsNkNBQTBCOztJQUMxQiw0Q0FBeUI7O0lBQ3pCLDZDQUEwQjs7SUFDMUIsNkNBQTBCOztJQUMxQiw0Q0FBeUI7O0lBQ3pCLDRDQUEyQzs7SUFDM0MsMkNBQTBDOztJQUMxQyxrQ0FBZTs7Ozs7QUFHakIsMERBSUM7OztJQUhDLGtEQUFXOztJQUNYLHFEQUFjOztJQUNkLHNEQUFvRDs7QUFDckQsQ0FBQzs7OztBQUVGLCtEQU1DOzs7SUFMQyx1REFBVzs7SUFDWCwwREFBb0I7O0lBQ3BCLGlFQUFxQjs7SUFDckIsZ0VBQW9COztJQUNwQiw2REFBaUI7O0FBQ2xCLENBQUM7Ozs7QUFFRiw0Q0FFQzs7O0lBREMsZ0RBQXVEOztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnZW50b01vbmV5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvJ1xuXG5pbXBvcnQgeyBNYWdlbnRvRGlzY291bnQgfSBmcm9tICcuL2Rpc2NvdW50JztcblxuZXhwb3J0IGVudW0gTWFnZW50b09yZGVySXRlbVR5cGUge1xuICBTaW1wbGUgPSAnc2ltcGxlJyxcbiAgQ29uZmlndXJhYmxlID0gJ2NvbmZpZ3VyYWJsZScsXG4gIEJ1bmRsZSA9ICdidW5kbGUnXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hZ2VudG9PcmRlckl0ZW1PcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNYWdlbnRvT3JkZXJJdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgZGlzY291bnRzOiBNYWdlbnRvRGlzY291bnRbXTtcbiAgcHJvZHVjdF9uYW1lOiBzdHJpbmc7XG4gIHByb2R1Y3Rfc2FsZV9wcmljZTogTWFnZW50b01vbmV5O1xuICBwcm9kdWN0X3NrdTogc3RyaW5nO1xuICBwcm9kdWN0X3R5cGU6IE1hZ2VudG9PcmRlckl0ZW1UeXBlO1xuICBwcm9kdWN0X3VybF9rZXk6IHN0cmluZztcbiAgcXVhbnRpdHlfY2FuY2VsZWQ6IG51bWJlcjtcbiAgcXVhbnRpdHlfaW52b2ljZWQ6IG51bWJlcjtcbiAgcXVhbnRpdHlfb3JkZXJlZDogbnVtYmVyO1xuICBxdWFudGl0eV9yZWZ1bmRlZDogbnVtYmVyO1xuICBxdWFudGl0eV9yZXR1cm5lZDogbnVtYmVyO1xuICBxdWFudGl0eV9zaGlwcGVkOiBudW1iZXI7XG4gIHNlbGVjdGVkX29wdGlvbnM6IE1hZ2VudG9PcmRlckl0ZW1PcHRpb25bXTtcbiAgZW50ZXJlZF9vcHRpb25zOiBNYWdlbnRvT3JkZXJJdGVtT3B0aW9uW107XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hZ2VudG9PcmRlckJ1bmRsZUl0ZW1TZWxlY3RlZE9wdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlczogTWFnZW50b09yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uVmFsdWVbXTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnZW50b09yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uVmFsdWUge1xuICBpZDogc3RyaW5nO1xuICBwcmljZTogTWFnZW50b01vbmV5O1xuICBwcm9kdWN0X25hbWU6IHN0cmluZztcbiAgcHJvZHVjdF9za3U6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnZW50b09yZGVyQnVuZGxlSXRlbSBleHRlbmRzIE1hZ2VudG9PcmRlckl0ZW0ge1xuICBidW5kbGVfb3B0aW9uczogTWFnZW50b09yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uW107XG59O1xuIl19