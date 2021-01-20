/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A configurable product is a product with configurable attributes. The price of a configurable product may change based on
 * the attributes chosen, so a configurable product can have a price range. An example of a configurable product is a T-shirt.
 * @record
 */
export function DaffConfigurableProduct() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProduct.prototype.configurableAttributes;
    /** @type {?} */
    DaffConfigurableProduct.prototype.variants;
}
/**
 * An attribute of the configurable product that the customer must choose to add the configurable product to the cart.
 * An example of an attribute would be size for clothing.
 * @record
 */
export function DaffConfigurableProductAttribute() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProductAttribute.prototype.code;
    /** @type {?} */
    DaffConfigurableProductAttribute.prototype.label;
    /** @type {?} */
    DaffConfigurableProductAttribute.prototype.values;
}
/**
 * A variant is one version of the configurable product with all attributes chosen. Variants exist because not all versions of every configuration of
 * the product might be in stock. For example, a shirt might have a medium, red shirt and a small,
 * green shirt in stock, but no small, red shirts. In this case there would be two variants (mediumRed, smallGreen) rather than the maximum 4 variants
 * (smallRed, mediumRed, smallGreen, mediumGreen). This ensures the customer can't add a configurable product to the cart that is not
 * in stock. However, variants don't usually need to be considered by the frontend dev, because daffodil abstacts away the concept of variants into
 * an "available attributes" selector.
 * @record
 */
export function DaffConfigurableProductVariant() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProductVariant.prototype.appliedAttributes;
    /** @type {?} */
    DaffConfigurableProductVariant.prototype.id;
    /** @type {?} */
    DaffConfigurableProductVariant.prototype.price;
    /** @type {?} */
    DaffConfigurableProductVariant.prototype.discount;
    /** @type {?|undefined} */
    DaffConfigurableProductVariant.prototype.image;
    /** @type {?} */
    DaffConfigurableProductVariant.prototype.in_stock;
}
/**
 * The applied attributes for a particular product variant.
 * @record
 */
export function DaffProductVariantAttributesDictionary() { }
/**
 * The configurable option of a configurable product attribute. For example, this could be "blue" for the attribute "color" for a T-shirt.
 * @record
 */
export function DaffConfigurableProductOptionValue() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProductOptionValue.prototype.value;
    /** @type {?} */
    DaffConfigurableProductOptionValue.prototype.label;
    /** @type {?|undefined} */
    DaffConfigurableProductOptionValue.prototype.swatch;
}
/**
 * An optional field for the hex color code for DaffConfigurableProductOptionValues that need it.
 * @record
 */
export function DaffSwatchOption() { }
if (false) {
    /** @type {?} */
    DaffSwatchOption.prototype.value;
    /** @type {?|undefined} */
    DaffSwatchOption.prototype.thumbnail;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbIm1vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQSw2Q0FHQzs7O0lBRkEseURBQTJEOztJQUMzRCwyQ0FBMkM7Ozs7Ozs7QUFPNUMsc0RBSUM7OztJQUhBLGdEQUFhOztJQUNiLGlEQUFjOztJQUNkLGtEQUE2Qzs7Ozs7Ozs7Ozs7QUFXOUMsb0RBT0M7OztJQU5BLDJEQUEwRDs7SUFDMUQsNENBQVc7O0lBQ1gsK0NBQWM7O0lBQ2Qsa0RBQThCOztJQUM5QiwrQ0FBeUI7O0lBQ3pCLGtEQUFrQjs7Ozs7O0FBTW5CLDREQUVDOzs7OztBQUtELHdEQUlDOzs7SUFIQSxtREFBYzs7SUFDZCxtREFBYzs7SUFDZCxvREFBMEI7Ozs7OztBQU0zQixzQ0FHQzs7O0lBRkEsaUNBQWM7O0lBQ2QscUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlNvcnRhYmxlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCwgRGFmZlByb2R1Y3REaXNjb3VudCB9IGZyb20gJy4vcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEltYWdlIH0gZnJvbSAnLi9wcm9kdWN0LWltYWdlJztcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGlzIGEgcHJvZHVjdCB3aXRoIGNvbmZpZ3VyYWJsZSBhdHRyaWJ1dGVzLiBUaGUgcHJpY2Ugb2YgYSBjb25maWd1cmFibGUgcHJvZHVjdCBtYXkgY2hhbmdlIGJhc2VkIG9uIFxuICogdGhlIGF0dHJpYnV0ZXMgY2hvc2VuLCBzbyBhIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGNhbiBoYXZlIGEgcHJpY2UgcmFuZ2UuIEFuIGV4YW1wbGUgb2YgYSBjb25maWd1cmFibGUgcHJvZHVjdCBpcyBhIFQtc2hpcnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3QgZXh0ZW5kcyBEYWZmUHJvZHVjdCB7XG5cdGNvbmZpZ3VyYWJsZUF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlW107XG5cdHZhcmlhbnRzOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRbXTtcbn1cblxuLyoqXG4gKiBBbiBhdHRyaWJ1dGUgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHRoYXQgdGhlIGN1c3RvbWVyIG11c3QgY2hvb3NlIHRvIGFkZCB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QgdG8gdGhlIGNhcnQuIFxuICogQW4gZXhhbXBsZSBvZiBhbiBhdHRyaWJ1dGUgd291bGQgYmUgc2l6ZSBmb3IgY2xvdGhpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGUgZXh0ZW5kcyBEYWZmU29ydGFibGUge1xuXHRjb2RlOlx0c3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHR2YWx1ZXM6XHREYWZmQ29uZmlndXJhYmxlUHJvZHVjdE9wdGlvblZhbHVlW107XG59XG5cbi8qKlxuICogQSB2YXJpYW50IGlzIG9uZSB2ZXJzaW9uIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdCB3aXRoIGFsbCBhdHRyaWJ1dGVzIGNob3Nlbi4gVmFyaWFudHMgZXhpc3QgYmVjYXVzZSBub3QgYWxsIHZlcnNpb25zIG9mIGV2ZXJ5IGNvbmZpZ3VyYXRpb24gb2YgXG4gKiB0aGUgcHJvZHVjdCBtaWdodCBiZSBpbiBzdG9jay4gRm9yIGV4YW1wbGUsIGEgc2hpcnQgbWlnaHQgaGF2ZSBhIG1lZGl1bSwgcmVkIHNoaXJ0IGFuZCBhIHNtYWxsLFxuICogZ3JlZW4gc2hpcnQgaW4gc3RvY2ssIGJ1dCBubyBzbWFsbCwgcmVkIHNoaXJ0cy4gSW4gdGhpcyBjYXNlIHRoZXJlIHdvdWxkIGJlIHR3byB2YXJpYW50cyAobWVkaXVtUmVkLCBzbWFsbEdyZWVuKSByYXRoZXIgdGhhbiB0aGUgbWF4aW11bSA0IHZhcmlhbnRzIFxuICogKHNtYWxsUmVkLCBtZWRpdW1SZWQsIHNtYWxsR3JlZW4sIG1lZGl1bUdyZWVuKS4gVGhpcyBlbnN1cmVzIHRoZSBjdXN0b21lciBjYW4ndCBhZGQgYSBjb25maWd1cmFibGUgcHJvZHVjdCB0byB0aGUgY2FydCB0aGF0IGlzIG5vdFxuICogaW4gc3RvY2suIEhvd2V2ZXIsIHZhcmlhbnRzIGRvbid0IHVzdWFsbHkgbmVlZCB0byBiZSBjb25zaWRlcmVkIGJ5IHRoZSBmcm9udGVuZCBkZXYsIGJlY2F1c2UgZGFmZm9kaWwgYWJzdGFjdHMgYXdheSB0aGUgY29uY2VwdCBvZiB2YXJpYW50cyBpbnRvIFxuICogYW4gXCJhdmFpbGFibGUgYXR0cmlidXRlc1wiIHNlbGVjdG9yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudCB7XG5cdGFwcGxpZWRBdHRyaWJ1dGVzOiBEYWZmUHJvZHVjdFZhcmlhbnRBdHRyaWJ1dGVzRGljdGlvbmFyeTtcblx0aWQ6IHN0cmluZztcblx0cHJpY2U6IG51bWJlcjtcblx0ZGlzY291bnQ6IERhZmZQcm9kdWN0RGlzY291bnQ7XG5cdGltYWdlPzogRGFmZlByb2R1Y3RJbWFnZTtcblx0aW5fc3RvY2s6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIGFwcGxpZWQgYXR0cmlidXRlcyBmb3IgYSBwYXJ0aWN1bGFyIHByb2R1Y3QgdmFyaWFudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmUHJvZHVjdFZhcmlhbnRBdHRyaWJ1dGVzRGljdGlvbmFyeSB7XG5cdFt4OiBzdHJpbmddOiAgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RPcHRpb25WYWx1ZVsndmFsdWUnXTtcbn1cblxuLyoqXG4gKiBUaGUgY29uZmlndXJhYmxlIG9wdGlvbiBvZiBhIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGF0dHJpYnV0ZS4gRm9yIGV4YW1wbGUsIHRoaXMgY291bGQgYmUgXCJibHVlXCIgZm9yIHRoZSBhdHRyaWJ1dGUgXCJjb2xvclwiIGZvciBhIFQtc2hpcnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RPcHRpb25WYWx1ZSB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHN3YXRjaD86IERhZmZTd2F0Y2hPcHRpb247XG59XG5cbi8qKlxuICogQW4gb3B0aW9uYWwgZmllbGQgZm9yIHRoZSBoZXggY29sb3IgY29kZSBmb3IgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RPcHRpb25WYWx1ZXMgdGhhdCBuZWVkIGl0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZTd2F0Y2hPcHRpb24ge1xuXHR2YWx1ZTogc3RyaW5nO1xuXHR0aHVtYm5haWw/OiBzdHJpbmc7XG59XG4iXX0=