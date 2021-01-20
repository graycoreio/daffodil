/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoCartItemTypeEnum = {
    Simple: 'SimpleCartItem',
    Bundle: 'BundleCartItem',
    Configurable: 'ConfigurableCartItem',
};
export { MagentoCartItemTypeEnum };
/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 * @record
 */
export function MagentoCartItem() { }
if (false) {
    /** @type {?} */
    MagentoCartItem.prototype.__typename;
    /** @type {?} */
    MagentoCartItem.prototype.id;
    /** @type {?} */
    MagentoCartItem.prototype.prices;
    /** @type {?} */
    MagentoCartItem.prototype.product;
    /** @type {?} */
    MagentoCartItem.prototype.quantity;
}
/**
 * An interface for magento bundled cart items.
 * @record
 */
export function MagentoBundleCartItem() { }
if (false) {
    /** @type {?} */
    MagentoBundleCartItem.prototype.bundle_options;
}
/**
 * An interface for magento configurable cart items.
 * @record
 */
export function MagentoConfigurableCartItem() { }
if (false) {
    /** @type {?} */
    MagentoConfigurableCartItem.prototype.configurable_options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJtb2RlbHMvcmVzcG9uc2VzL2NhcnQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxRQUFTLGdCQUFnQjtJQUN6QixRQUFTLGdCQUFnQjtJQUN6QixjQUFlLHNCQUFzQjs7Ozs7OztBQU10QyxxQ0FXQzs7O0lBVkEscUNBQW9DOztJQUNuQyw2QkFBVzs7SUFDWCxpQ0FLRTs7SUFDRixrQ0FBd0I7O0lBQ3hCLG1DQUFpQjs7Ozs7O0FBTW5CLDJDQVlDOzs7SUFYQSwrQ0FVSTs7Ozs7O0FBTUwsaURBS0M7OztJQUpBLDJEQUdJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBNYWdlbnRvTW9uZXkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8nXG5cbmV4cG9ydCBlbnVtIE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtIHtcblx0U2ltcGxlID0gJ1NpbXBsZUNhcnRJdGVtJyxcblx0QnVuZGxlID0gJ0J1bmRsZUNhcnRJdGVtJyxcblx0Q29uZmlndXJhYmxlID0gJ0NvbmZpZ3VyYWJsZUNhcnRJdGVtJ1xufVxuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGVmaW5pbmcgd2hhdCB0aGUgY2FydCBzZXJ2aWNlIHJlcXVlc3RzIGFuZCByZXRyaWV2ZXMgZnJvbSBhIG1hZ2VudG8gYmFja2VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYWdlbnRvQ2FydEl0ZW0ge1xuXHRfX3R5cGVuYW1lOiBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bTtcbiAgaWQ6IHN0cmluZztcbiAgcHJpY2VzOiB7XG4gICAgcHJpY2U6IE1hZ2VudG9Nb25leTtcbiAgICByb3dfdG90YWw6IE1hZ2VudG9Nb25leTtcbiAgICByb3dfdG90YWxfaW5jbHVkaW5nX3RheDogTWFnZW50b01vbmV5O1xuICAgIHRvdGFsX2l0ZW1fZGlzY291bnQ6IE1hZ2VudG9Nb25leTtcbiAgfTtcbiAgcHJvZHVjdDogTWFnZW50b1Byb2R1Y3Q7XG4gIHF1YW50aXR5OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGZvciBtYWdlbnRvIGJ1bmRsZWQgY2FydCBpdGVtcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYWdlbnRvQnVuZGxlQ2FydEl0ZW0gZXh0ZW5kcyBNYWdlbnRvQ2FydEl0ZW0ge1xuXHRidW5kbGVfb3B0aW9uczoge1xuXHRcdGlkOiBudW1iZXI7XG5cdFx0bGFiZWw6IHN0cmluZztcblx0XHR0eXBlOiBzdHJpbmc7XG5cdFx0dmFsdWVzOiB7XG5cdFx0XHRpZDogbnVtYmVyO1xuXHRcdFx0bGFiZWw6IHN0cmluZztcblx0XHRcdHByaWNlOiBudW1iZXI7XG5cdFx0XHRxdWFudGl0eTogbnVtYmVyO1xuXHRcdH1bXTtcblx0fVtdO1xufVxuXG4vKipcbiAqIEFuIGludGVyZmFjZSBmb3IgbWFnZW50byBjb25maWd1cmFibGUgY2FydCBpdGVtcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0gZXh0ZW5kcyBNYWdlbnRvQ2FydEl0ZW0ge1xuXHRjb25maWd1cmFibGVfb3B0aW9uczoge1xuXHRcdG9wdGlvbl9sYWJlbDogc3RyaW5nO1xuXHRcdHZhbHVlX2xhYmVsOiBzdHJpbmc7XG5cdH1bXTtcbn1cbiJdfQ==