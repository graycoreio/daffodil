/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoPriceTypeEnum = {
    fixed: 'FIXED',
    percent: 'PERCENT',
    dynamic: 'DYNAMIC',
};
export { MagentoPriceTypeEnum };
/**
 * @record
 */
export function MagentoBundledProduct() { }
if (false) {
    /** @type {?} */
    MagentoBundledProduct.prototype.items;
}
/**
 * @record
 */
export function MagentoBundledProductItem() { }
if (false) {
    /** @type {?} */
    MagentoBundledProductItem.prototype.required;
    /** @type {?} */
    MagentoBundledProductItem.prototype.sku;
    /** @type {?} */
    MagentoBundledProductItem.prototype.title;
    /** @type {?} */
    MagentoBundledProductItem.prototype.type;
    /** @type {?} */
    MagentoBundledProductItem.prototype.options;
    /** @type {?|undefined} */
    MagentoBundledProductItem.prototype.option_id;
    /** @type {?|undefined} */
    MagentoBundledProductItem.prototype.position;
}
/**
 * @record
 */
export function MagentoBundledProductItemOption() { }
if (false) {
    /** @type {?} */
    MagentoBundledProductItemOption.prototype.id;
    /** @type {?} */
    MagentoBundledProductItemOption.prototype.label;
    /** @type {?} */
    MagentoBundledProductItemOption.prototype.price;
    /** @type {?} */
    MagentoBundledProductItemOption.prototype.quantity;
    /** @type {?|undefined} */
    MagentoBundledProductItemOption.prototype.can_change_quantity;
    /** @type {?} */
    MagentoBundledProductItemOption.prototype.is_default;
    /** @type {?|undefined} */
    MagentoBundledProductItemOption.prototype.position;
    /** @type {?|undefined} */
    MagentoBundledProductItemOption.prototype.price_type;
    /** @type {?|undefined} */
    MagentoBundledProductItemOption.prototype.product;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlZC1wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vbW9kZWxzL2J1bmRsZWQtcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTOzs7Ozs7QUFHcEIsMkNBRUM7OztJQURBLHNDQUFtQzs7Ozs7QUFHcEMsK0NBUUM7OztJQVBBLDZDQUFrQjs7SUFDbEIsd0NBQVk7O0lBQ1osMENBQWM7O0lBQ2QseUNBQWE7O0lBQ2IsNENBQTJDOztJQUMzQyw4Q0FBbUI7O0lBQ25CLDZDQUFrQjs7Ozs7QUFHbkIscURBVUM7OztJQVRBLDZDQUFXOztJQUNYLGdEQUFjOztJQUNkLGdEQUFjOztJQUNkLG1EQUFpQjs7SUFDakIsOERBQThCOztJQUM5QixxREFBb0I7O0lBQ3BCLG1EQUFrQjs7SUFDbEIscURBQWtDOztJQUNsQyxrREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWdlbnRvUHJvZHVjdCB9IGZyb20gJy4vbWFnZW50by1wcm9kdWN0JztcbmltcG9ydCB7IE1hZ2VudG9TaW1wbGVQcm9kdWN0IH0gZnJvbSAnLi9zaW1wbGUtcHJvZHVjdCc7XG5cbmV4cG9ydCBlbnVtIE1hZ2VudG9QcmljZVR5cGVFbnVtIHtcblx0Zml4ZWQgPSAnRklYRUQnLFxuXHRwZXJjZW50ID0gJ1BFUkNFTlQnLFxuXHRkeW5hbWljID0gJ0RZTkFNSUMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnZW50b0J1bmRsZWRQcm9kdWN0IGV4dGVuZHMgTWFnZW50b1Byb2R1Y3Qge1xuXHRpdGVtczogTWFnZW50b0J1bmRsZWRQcm9kdWN0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hZ2VudG9CdW5kbGVkUHJvZHVjdEl0ZW0ge1xuXHRyZXF1aXJlZDogYm9vbGVhbjtcblx0c2t1OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcblx0b3B0aW9uczogTWFnZW50b0J1bmRsZWRQcm9kdWN0SXRlbU9wdGlvbltdO1xuXHRvcHRpb25faWQ/OiBudW1iZXI7XG5cdHBvc2l0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hZ2VudG9CdW5kbGVkUHJvZHVjdEl0ZW1PcHRpb24ge1xuXHRpZDogbnVtYmVyO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRwcmljZTogbnVtYmVyO1xuXHRxdWFudGl0eTogbnVtYmVyO1xuXHRjYW5fY2hhbmdlX3F1YW50aXR5PzogYm9vbGVhbjtcblx0aXNfZGVmYXVsdDogYm9vbGVhbjtcblx0cG9zaXRpb24/OiBudW1iZXI7XG5cdHByaWNlX3R5cGU/OiBNYWdlbnRvUHJpY2VUeXBlRW51bTtcblx0cHJvZHVjdD86IE1hZ2VudG9TaW1wbGVQcm9kdWN0O1xufVxuIl19