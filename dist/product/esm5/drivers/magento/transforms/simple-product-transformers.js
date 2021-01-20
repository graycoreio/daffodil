/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffProductTypeEnum } from '../../../models/product';
import { MagentoProductStockStatusEnum } from '../models/magento-product';
/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 * @param {?} product a magento product
 * @param {?} mediaUrl
 * @return {?}
 */
export function transformMagentoSimpleProduct(product, mediaUrl) {
    return {
        type: DaffProductTypeEnum.Simple,
        id: product.sku,
        url: product.url_key,
        name: product.name,
        price: getPrice(product),
        discount: getDiscount(product),
        in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
        images: tslib_1.__spread([
            { url: product.image.url, id: '0', label: product.image.label }
        ], transformMediaGalleryEntries(product, mediaUrl)),
        description: product.description.html
    };
}
/**
 * A function for null checking an object.
 * @param {?} product
 * @return {?}
 */
function getPrice(product) {
    return product.price_range &&
        product.price_range.maximum_price &&
        product.price_range.maximum_price.regular_price &&
        product.price_range.maximum_price.regular_price.value !== null
        ? product.price_range.maximum_price.regular_price.value : null;
}
/**
 * @param {?} product
 * @return {?}
 */
function getDiscount(product) {
    return product.price_range &&
        product.price_range.maximum_price &&
        product.price_range.maximum_price.discount
        ? {
            amount: product.price_range.maximum_price.discount.amount_off,
            percent: product.price_range.maximum_price.discount.percent_off
        } : { amount: null, percent: null };
}
/**
 * @param {?} product
 * @param {?} mediaUrl
 * @return {?}
 */
function transformMediaGalleryEntries(product, mediaUrl) {
    return product.media_gallery_entries ? product.media_gallery_entries.map((/**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        return {
            url: mediaUrl + 'catalog/product' + image.file,
            label: image.label,
            id: image.id.toString()
        };
    })) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXByb2R1Y3QtdHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3Jtcy9zaW1wbGUtcHJvZHVjdC10cmFuc2Zvcm1lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsbUJBQW1CLEVBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFDaEcsT0FBTyxFQUFrQiw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBTTFGLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxPQUF1QixFQUFFLFFBQWdCO0lBQ3RGLE9BQU87UUFDTixJQUFJLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtRQUNoQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUc7UUFDZixHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hCLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQzlCLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxLQUFLLDZCQUE2QixDQUFDLE9BQU87UUFDeEUsTUFBTTtZQUNMLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDO1dBQzNELDRCQUE0QixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDbEQ7UUFDRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO0tBQ3JDLENBQUE7QUFDRixDQUFDOzs7Ozs7QUFLRCxTQUFTLFFBQVEsQ0FBQyxPQUF1QjtJQUN4QyxPQUFPLE9BQU8sQ0FBQyxXQUFXO1FBQ3pCLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhO1FBQy9DLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssSUFBSTtRQUMvRCxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2hFLENBQUM7Ozs7O0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBdUI7SUFDM0MsT0FBTyxPQUFPLENBQUMsV0FBVztRQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUTtRQUMxQyxDQUFDLENBQUM7WUFDRCxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDN0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1NBQy9ELENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUE7QUFDckMsQ0FBQzs7Ozs7O0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxPQUF1QixFQUFFLFFBQWdCO0lBQzlFLE9BQU8sT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsS0FBSztRQUM3RSxPQUFPO1lBQ04sR0FBRyxFQUFFLFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsSUFBSTtZQUM5QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1NBQ3ZCLENBQUE7SUFDRixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0FBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtLCBEYWZmUHJvZHVjdERpc2NvdW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3QsIE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtIH0gZnJvbSAnLi4vbW9kZWxzL21hZ2VudG8tcHJvZHVjdCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgbWFnZW50byBNYWdlbnRvUHJvZHVjdCBmcm9tIHRoZSBtYWdlbnRvIHByb2R1Y3QgcXVlcnkgaW50byBhIERhZmZQcm9kdWN0LiBcbiAqIEBwYXJhbSBwcm9kdWN0IGEgbWFnZW50byBwcm9kdWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYWdlbnRvU2ltcGxlUHJvZHVjdChwcm9kdWN0OiBNYWdlbnRvUHJvZHVjdCwgbWVkaWFVcmw6IHN0cmluZyk6IERhZmZQcm9kdWN0IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBEYWZmUHJvZHVjdFR5cGVFbnVtLlNpbXBsZSxcblx0XHRpZDogcHJvZHVjdC5za3UsXG5cdFx0dXJsOiBwcm9kdWN0LnVybF9rZXksXG5cdFx0bmFtZTogcHJvZHVjdC5uYW1lLFxuXHRcdHByaWNlOiBnZXRQcmljZShwcm9kdWN0KSxcblx0XHRkaXNjb3VudDogZ2V0RGlzY291bnQocHJvZHVjdCksXG5cdFx0aW5fc3RvY2s6IHByb2R1Y3Quc3RvY2tfc3RhdHVzID09PSBNYWdlbnRvUHJvZHVjdFN0b2NrU3RhdHVzRW51bS5JblN0b2NrLFxuXHRcdGltYWdlczogW1xuXHRcdFx0eyB1cmw6IHByb2R1Y3QuaW1hZ2UudXJsLCBpZDogJzAnLCBsYWJlbDogcHJvZHVjdC5pbWFnZS5sYWJlbH0sXG5cdFx0XHQuLi50cmFuc2Zvcm1NZWRpYUdhbGxlcnlFbnRyaWVzKHByb2R1Y3QsIG1lZGlhVXJsKVxuXHRcdF0sXG5cdFx0ZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24uaHRtbFxuXHR9XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgbnVsbCBjaGVja2luZyBhbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IE1hZ2VudG9Qcm9kdWN0KTogbnVtYmVyIHtcblx0cmV0dXJuIHByb2R1Y3QucHJpY2VfcmFuZ2UgJiYgXG5cdFx0cHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlICYmIFxuXHRcdHByb2R1Y3QucHJpY2VfcmFuZ2UubWF4aW11bV9wcmljZS5yZWd1bGFyX3ByaWNlICYmIFxuXHRcdHByb2R1Y3QucHJpY2VfcmFuZ2UubWF4aW11bV9wcmljZS5yZWd1bGFyX3ByaWNlLnZhbHVlICE9PSBudWxsXG5cdD8gcHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlLnJlZ3VsYXJfcHJpY2UudmFsdWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXREaXNjb3VudChwcm9kdWN0OiBNYWdlbnRvUHJvZHVjdCk6IERhZmZQcm9kdWN0RGlzY291bnQge1xuXHRyZXR1cm4gcHJvZHVjdC5wcmljZV9yYW5nZSAmJiBcblx0XHRwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UgJiYgXG5cdFx0cHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlLmRpc2NvdW50IFxuXHRcdD8geyBcblx0XHRcdGFtb3VudDogcHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlLmRpc2NvdW50LmFtb3VudF9vZmYsXG5cdFx0XHRwZXJjZW50OiBwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UuZGlzY291bnQucGVyY2VudF9vZmZcblx0XHR9IDogeyBhbW91bnQ6IG51bGwsIHBlcmNlbnQ6IG51bGwgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYUdhbGxlcnlFbnRyaWVzKHByb2R1Y3Q6IE1hZ2VudG9Qcm9kdWN0LCBtZWRpYVVybDogc3RyaW5nKSB7XG5cdHJldHVybiBwcm9kdWN0Lm1lZGlhX2dhbGxlcnlfZW50cmllcyA/IHByb2R1Y3QubWVkaWFfZ2FsbGVyeV9lbnRyaWVzLm1hcChpbWFnZSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybDogbWVkaWFVcmwgKyAnY2F0YWxvZy9wcm9kdWN0JyArIGltYWdlLmZpbGUsXG5cdFx0XHRsYWJlbDogaW1hZ2UubGFiZWwsXG5cdFx0XHRpZDogaW1hZ2UuaWQudG9TdHJpbmcoKVxuXHRcdH1cblx0fSkgOiBbXVxufVxuIl19