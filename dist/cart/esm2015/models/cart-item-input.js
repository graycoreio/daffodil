/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartItemInputType = {
    Simple: 'simple',
    Composite: 'composite',
    Configurable: 'configurable',
};
export { DaffCartItemInputType };
/**
 * @record
 */
export function DaffCartItemInput() { }
if (false) {
    /** @type {?} */
    DaffCartItemInput.prototype.type;
    /** @type {?} */
    DaffCartItemInput.prototype.productId;
    /** @type {?} */
    DaffCartItemInput.prototype.qty;
}
/**
 * @record
 */
export function DaffSimpleCartItemInput() { }
if (false) {
    /** @type {?} */
    DaffSimpleCartItemInput.prototype.type;
}
/**
 * @record
 */
export function DaffCompositeCartItemInput() { }
if (false) {
    /** @type {?} */
    DaffCompositeCartItemInput.prototype.type;
    /** @type {?} */
    DaffCompositeCartItemInput.prototype.options;
}
/**
 * @record
 */
export function DaffCompositeCartItemInputOption() { }
if (false) {
    /** @type {?} */
    DaffCompositeCartItemInputOption.prototype.code;
    /** @type {?} */
    DaffCompositeCartItemInputOption.prototype.quantity;
    /** @type {?} */
    DaffCompositeCartItemInputOption.prototype.value;
}
/**
 * @record
 */
export function DaffConfigurableCartItemInput() { }
if (false) {
    /** @type {?} */
    DaffConfigurableCartItemInput.prototype.type;
    /** @type {?} */
    DaffConfigurableCartItemInput.prototype.variantId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvIiwic291cmNlcyI6WyJtb2RlbHMvY2FydC1pdGVtLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdDLFFBQVMsUUFBUTtJQUNqQixXQUFZLFdBQVc7SUFDdkIsY0FBZSxjQUFjOzs7Ozs7QUFHOUIsdUNBSUM7OztJQUhBLGlDQUE0Qjs7SUFDM0Isc0NBQTZCOztJQUM5QixnQ0FBWTs7Ozs7QUFHYiw2Q0FFQzs7O0lBREEsdUNBQW1DOzs7OztBQUdwQyxnREFHQzs7O0lBRkEsMENBQXNDOztJQUN0Qyw2Q0FBNEM7Ozs7O0FBRzdDLHNEQUlDOzs7SUFIQSxnREFBc0I7O0lBQ3RCLG9EQUFpQjs7SUFDakIsaURBQWM7Ozs7O0FBR2YsbURBR0M7OztJQUZBLDZDQUF5Qzs7SUFDekMsa0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0SXRlbUlucHV0VHlwZSB7XG5cdFNpbXBsZSA9ICdzaW1wbGUnLFxuXHRDb21wb3NpdGUgPSAnY29tcG9zaXRlJyxcblx0Q29uZmlndXJhYmxlID0gJ2NvbmZpZ3VyYWJsZSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydEl0ZW1JbnB1dCB7XG5cdHR5cGU6IERhZmZDYXJ0SXRlbUlucHV0VHlwZTtcbiAgcHJvZHVjdElkOiBEYWZmUHJvZHVjdFsnaWQnXTtcblx0cXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlNpbXBsZUNhcnRJdGVtSW5wdXQgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCB7XG5cdHR5cGU6IERhZmZDYXJ0SXRlbUlucHV0VHlwZS5TaW1wbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtSW5wdXQgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCB7XG5cdHR5cGU6IERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db21wb3NpdGU7XG5cdG9wdGlvbnM6IERhZmZDb21wb3NpdGVDYXJ0SXRlbUlucHV0T3B0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtSW5wdXRPcHRpb24ge1xuXHRjb2RlOiBzdHJpbmcgfCBudW1iZXI7XG5cdHF1YW50aXR5OiBudW1iZXI7XG5cdHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCB7XG5cdHR5cGU6IERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db25maWd1cmFibGU7XG5cdHZhcmlhbnRJZDogc3RyaW5nIHwgbnVtYmVyO1xufVxuIl19