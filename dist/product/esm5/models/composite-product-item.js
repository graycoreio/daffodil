/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCompositeProductItemInputEnum = {
    select: 'select',
    radio: 'radio',
};
export { DaffCompositeProductItemInputEnum };
/**
 * The composite product item describes one set of product options that the user can add to the composite product.
 * A composite product item can be required or optional. If it is required, an option _must_ be chosen in order to add the product to the cart.
 * If the item is optional, the product can be added to the cart without an option having been chosen.
 * For example, if a composite product is a toolbox bundle, a composite product item might be a screw driver, and the options contained in that
 * item might be a phillips head and a flathead. The customer could choose to add either a phillips head or a flathead to the
 * composite product, or neither if the item is optional.
 * @record
 */
export function DaffCompositeProductItem() { }
if (false) {
    /** @type {?} */
    DaffCompositeProductItem.prototype.id;
    /** @type {?} */
    DaffCompositeProductItem.prototype.required;
    /** @type {?} */
    DaffCompositeProductItem.prototype.title;
    /** @type {?} */
    DaffCompositeProductItem.prototype.input_type;
    /** @type {?} */
    DaffCompositeProductItem.prototype.options;
}
/**
 * The composite product item option is a DaffProduct that can be added to a composite product.
 * @record
 */
export function DaffCompositeProductItemOption() { }
if (false) {
    /** @type {?} */
    DaffCompositeProductItemOption.prototype.id;
    /** @type {?} */
    DaffCompositeProductItemOption.prototype.name;
    /** @type {?} */
    DaffCompositeProductItemOption.prototype.price;
    /** @type {?} */
    DaffCompositeProductItemOption.prototype.is_default;
    /** @type {?} */
    DaffCompositeProductItemOption.prototype.quantity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsibW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUMsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTzs7Ozs7Ozs7Ozs7O0FBV2hCLDhDQU1DOzs7SUFMQSxzQ0FBb0I7O0lBQ3BCLDRDQUFrQjs7SUFDbEIseUNBQWM7O0lBQ2QsOENBQThDOztJQUM5QywyQ0FBMEM7Ozs7OztBQU0zQyxvREFNQzs7O0lBTEEsNENBQVc7O0lBQ1gsOENBQWE7O0lBQ2IsK0NBQWM7O0lBQ2Qsb0RBQW9COztJQUNwQixrREFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCc7XG5cbi8qKlxuICogQW4gZW51bSBmb3Igd2hldGhlciBhIGNvbXBvc2l0ZSBwcm9kdWN0IGl0ZW0gc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhIHJhZGlvIG9yIHNlbGVjdCBpbnB1dC5cbiAqL1xuZXhwb3J0IGVudW0gRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtSW5wdXRFbnVtIHtcblx0c2VsZWN0ID0gJ3NlbGVjdCcsXG5cdHJhZGlvID0gJ3JhZGlvJ1xufVxuXG4vKipcbiAqIFRoZSBjb21wb3NpdGUgcHJvZHVjdCBpdGVtIGRlc2NyaWJlcyBvbmUgc2V0IG9mIHByb2R1Y3Qgb3B0aW9ucyB0aGF0IHRoZSB1c2VyIGNhbiBhZGQgdG8gdGhlIGNvbXBvc2l0ZSBwcm9kdWN0LlxuICogQSBjb21wb3NpdGUgcHJvZHVjdCBpdGVtIGNhbiBiZSByZXF1aXJlZCBvciBvcHRpb25hbC4gSWYgaXQgaXMgcmVxdWlyZWQsIGFuIG9wdGlvbiBfbXVzdF8gYmUgY2hvc2VuIGluIG9yZGVyIHRvIGFkZCB0aGUgcHJvZHVjdCB0byB0aGUgY2FydC5cbiAqIElmIHRoZSBpdGVtIGlzIG9wdGlvbmFsLCB0aGUgcHJvZHVjdCBjYW4gYmUgYWRkZWQgdG8gdGhlIGNhcnQgd2l0aG91dCBhbiBvcHRpb24gaGF2aW5nIGJlZW4gY2hvc2VuLlxuICogRm9yIGV4YW1wbGUsIGlmIGEgY29tcG9zaXRlIHByb2R1Y3QgaXMgYSB0b29sYm94IGJ1bmRsZSwgYSBjb21wb3NpdGUgcHJvZHVjdCBpdGVtIG1pZ2h0IGJlIGEgc2NyZXcgZHJpdmVyLCBhbmQgdGhlIG9wdGlvbnMgY29udGFpbmVkIGluIHRoYXRcbiAqIGl0ZW0gbWlnaHQgYmUgYSBwaGlsbGlwcyBoZWFkIGFuZCBhIGZsYXRoZWFkLiBUaGUgY3VzdG9tZXIgY291bGQgY2hvb3NlIHRvIGFkZCBlaXRoZXIgYSBwaGlsbGlwcyBoZWFkIG9yIGEgZmxhdGhlYWQgdG8gdGhlXG4gKiBjb21wb3NpdGUgcHJvZHVjdCwgb3IgbmVpdGhlciBpZiB0aGUgaXRlbSBpcyBvcHRpb25hbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0ge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRyZXF1aXJlZDogYm9vbGVhbjtcblx0dGl0bGU6IHN0cmluZztcblx0aW5wdXRfdHlwZTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtSW5wdXRFbnVtO1xuXHRvcHRpb25zOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb25bXTtcbn1cblxuLyoqXG4gKiBUaGUgY29tcG9zaXRlIHByb2R1Y3QgaXRlbSBvcHRpb24gaXMgYSBEYWZmUHJvZHVjdCB0aGF0IGNhbiBiZSBhZGRlZCB0byBhIGNvbXBvc2l0ZSBwcm9kdWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbiBleHRlbmRzIERhZmZQcm9kdWN0IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwcmljZTogbnVtYmVyO1xuXHRpc19kZWZhdWx0OiBib29sZWFuO1xuXHRxdWFudGl0eTogbnVtYmVyO1xufVxuIl19