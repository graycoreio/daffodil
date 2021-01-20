/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoProductTypeEnum = {
    BundledProduct: 'BundleProduct',
    ConfigurableProduct: 'ConfigurableProduct',
    SimpleProduct: 'SimpleProduct',
};
export { MagentoProductTypeEnum };
/** @enum {string} */
var MagentoProductStockStatusEnum = {
    InStock: 'IN_STOCK',
    OutOfStock: 'OUT_OF_STOCK',
};
export { MagentoProductStockStatusEnum };
/**
 * An object for defining what the product service requests and retrieves from a magento backend.
 * @record
 */
export function MagentoProduct() { }
if (false) {
    /** @type {?} */
    MagentoProduct.prototype.__typename;
    /** @type {?} */
    MagentoProduct.prototype.id;
    /** @type {?} */
    MagentoProduct.prototype.name;
    /** @type {?} */
    MagentoProduct.prototype.sku;
    /** @type {?} */
    MagentoProduct.prototype.url_key;
    /** @type {?} */
    MagentoProduct.prototype.image;
    /** @type {?} */
    MagentoProduct.prototype.thumbnail;
    /** @type {?} */
    MagentoProduct.prototype.price_range;
    /** @type {?|undefined} */
    MagentoProduct.prototype.stock_status;
    /** @type {?|undefined} */
    MagentoProduct.prototype.media_gallery_entries;
    /** @type {?|undefined} */
    MagentoProduct.prototype.short_description;
    /** @type {?|undefined} */
    MagentoProduct.prototype.description;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnZW50by1wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vbW9kZWxzL21hZ2VudG8tcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDQyxnQkFBaUIsZUFBZTtJQUNoQyxxQkFBc0IscUJBQXFCO0lBQzNDLGVBQWdCLGVBQWU7Ozs7O0lBSS9CLFNBQVUsVUFBVTtJQUNwQixZQUFhLGNBQWM7Ozs7Ozs7QUFNNUIsb0NBd0NDOzs7SUF2Q0Esb0NBQW1COztJQUNsQiw0QkFBVzs7SUFDWCw4QkFBYTs7SUFDYiw2QkFBWTs7SUFDWixpQ0FBZ0I7O0lBQ2hCLCtCQUdFOztJQUNGLG1DQUdDOztJQUNELHFDQVdDOztJQUNGLHNDQUE2Qzs7SUFDNUMsK0NBTUc7O0lBQ0gsMkNBRUM7O0lBQ0QscUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtIHtcblx0QnVuZGxlZFByb2R1Y3QgPSAnQnVuZGxlUHJvZHVjdCcsXG5cdENvbmZpZ3VyYWJsZVByb2R1Y3QgPSAnQ29uZmlndXJhYmxlUHJvZHVjdCcsXG5cdFNpbXBsZVByb2R1Y3QgPSAnU2ltcGxlUHJvZHVjdCdcbn1cblxuZXhwb3J0IGVudW0gTWFnZW50b1Byb2R1Y3RTdG9ja1N0YXR1c0VudW0ge1xuXHRJblN0b2NrID0gJ0lOX1NUT0NLJyxcblx0T3V0T2ZTdG9jayA9ICdPVVRfT0ZfU1RPQ0snXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBkZWZpbmluZyB3aGF0IHRoZSBwcm9kdWN0IHNlcnZpY2UgcmVxdWVzdHMgYW5kIHJldHJpZXZlcyBmcm9tIGEgbWFnZW50byBiYWNrZW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hZ2VudG9Qcm9kdWN0IHtcblx0X190eXBlbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNrdTogc3RyaW5nO1xuICB1cmxfa2V5OiBzdHJpbmc7XG4gIGltYWdlOiB7XG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0bGFiZWw6IHN0cmluZ1xuICB9O1xuICB0aHVtYm5haWw6IHtcblx0XHR1cmw6IHN0cmluZyxcblx0XHRsYWJlbDogc3RyaW5nXG5cdH07XG4gIHByaWNlX3JhbmdlOiB7XG5cdFx0bWF4aW11bV9wcmljZToge1xuXHRcdFx0cmVndWxhcl9wcmljZToge1xuXHRcdFx0XHR2YWx1ZTogbnVtYmVyLFxuXHRcdFx0XHRjdXJyZW5jeTogYW55XG5cdFx0XHR9XG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnRfb2ZmOiBudW1iZXIsXG5cdFx0XHRcdHBlcmNlbnRfb2ZmOiBudW1iZXJcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHN0b2NrX3N0YXR1cz86IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtO1xuICBtZWRpYV9nYWxsZXJ5X2VudHJpZXM/OiB7XG5cdFx0bGFiZWw6IHN0cmluZyxcblx0XHRmaWxlOiBzdHJpbmcsXG5cdFx0cG9zaXRpb246IG51bWJlcixcblx0XHRkaXNhYmxlZDogYm9vbGVhbixcblx0XHRpZDogbnVtYmVyXG5cdH1bXTtcbiAgc2hvcnRfZGVzY3JpcHRpb24/OiB7XG5cdFx0aHRtbDogc3RyaW5nO1xuXHR9O1xuICBkZXNjcmlwdGlvbj86IHtcblx0XHRodG1sOiBzdHJpbmc7XG5cdH07XG59XG4iXX0=