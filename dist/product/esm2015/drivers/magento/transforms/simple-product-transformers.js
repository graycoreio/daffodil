/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        images: [
            { url: product.image.url, id: '0', label: product.image.label },
            ...transformMediaGalleryEntries(product, mediaUrl)
        ],
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
    image => {
        return {
            url: mediaUrl + 'catalog/product' + image.file,
            label: image.label,
            id: image.id.toString()
        };
    })) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXByb2R1Y3QtdHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3Jtcy9zaW1wbGUtcHJvZHVjdC10cmFuc2Zvcm1lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxtQkFBbUIsRUFBdUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRyxPQUFPLEVBQWtCLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFNMUYsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE9BQXVCLEVBQUUsUUFBZ0I7SUFDdEYsT0FBTztRQUNOLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1FBQ2hDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztRQUNmLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTztRQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDeEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDOUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEtBQUssNkJBQTZCLENBQUMsT0FBTztRQUN4RSxNQUFNLEVBQUU7WUFDUCxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQztZQUM5RCxHQUFHLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDbEQ7UUFDRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO0tBQ3JDLENBQUE7QUFDRixDQUFDOzs7Ozs7QUFLRCxTQUFTLFFBQVEsQ0FBQyxPQUF1QjtJQUN4QyxPQUFPLE9BQU8sQ0FBQyxXQUFXO1FBQ3pCLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhO1FBQy9DLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssSUFBSTtRQUMvRCxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2hFLENBQUM7Ozs7O0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBdUI7SUFDM0MsT0FBTyxPQUFPLENBQUMsV0FBVztRQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUTtRQUMxQyxDQUFDLENBQUM7WUFDRCxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDN0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1NBQy9ELENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUE7QUFDckMsQ0FBQzs7Ozs7O0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxPQUF1QixFQUFFLFFBQWdCO0lBQzlFLE9BQU8sT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsR0FBRzs7OztJQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hGLE9BQU87WUFDTixHQUFHLEVBQUUsUUFBUSxHQUFHLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxJQUFJO1lBQzlDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7U0FDdkIsQ0FBQTtJQUNGLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7QUFDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0sIERhZmZQcm9kdWN0RGlzY291bnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBNYWdlbnRvUHJvZHVjdCwgTWFnZW50b1Byb2R1Y3RTdG9ja1N0YXR1c0VudW0gfSBmcm9tICcuLi9tb2RlbHMvbWFnZW50by1wcm9kdWN0JztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBtYWdlbnRvIE1hZ2VudG9Qcm9kdWN0IGZyb20gdGhlIG1hZ2VudG8gcHJvZHVjdCBxdWVyeSBpbnRvIGEgRGFmZlByb2R1Y3QuIFxuICogQHBhcmFtIHByb2R1Y3QgYSBtYWdlbnRvIHByb2R1Y3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hZ2VudG9TaW1wbGVQcm9kdWN0KHByb2R1Y3Q6IE1hZ2VudG9Qcm9kdWN0LCBtZWRpYVVybDogc3RyaW5nKTogRGFmZlByb2R1Y3Qge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IERhZmZQcm9kdWN0VHlwZUVudW0uU2ltcGxlLFxuXHRcdGlkOiBwcm9kdWN0LnNrdSxcblx0XHR1cmw6IHByb2R1Y3QudXJsX2tleSxcblx0XHRuYW1lOiBwcm9kdWN0Lm5hbWUsXG5cdFx0cHJpY2U6IGdldFByaWNlKHByb2R1Y3QpLFxuXHRcdGRpc2NvdW50OiBnZXREaXNjb3VudChwcm9kdWN0KSxcblx0XHRpbl9zdG9jazogcHJvZHVjdC5zdG9ja19zdGF0dXMgPT09IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtLkluU3RvY2ssXG5cdFx0aW1hZ2VzOiBbXG5cdFx0XHR7IHVybDogcHJvZHVjdC5pbWFnZS51cmwsIGlkOiAnMCcsIGxhYmVsOiBwcm9kdWN0LmltYWdlLmxhYmVsfSxcblx0XHRcdC4uLnRyYW5zZm9ybU1lZGlhR2FsbGVyeUVudHJpZXMocHJvZHVjdCwgbWVkaWFVcmwpXG5cdFx0XSxcblx0XHRkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbi5odG1sXG5cdH1cbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBudWxsIGNoZWNraW5nIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJpY2UocHJvZHVjdDogTWFnZW50b1Byb2R1Y3QpOiBudW1iZXIge1xuXHRyZXR1cm4gcHJvZHVjdC5wcmljZV9yYW5nZSAmJiBcblx0XHRwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UgJiYgXG5cdFx0cHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlLnJlZ3VsYXJfcHJpY2UgJiYgXG5cdFx0cHJvZHVjdC5wcmljZV9yYW5nZS5tYXhpbXVtX3ByaWNlLnJlZ3VsYXJfcHJpY2UudmFsdWUgIT09IG51bGxcblx0PyBwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UucmVndWxhcl9wcmljZS52YWx1ZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERpc2NvdW50KHByb2R1Y3Q6IE1hZ2VudG9Qcm9kdWN0KTogRGFmZlByb2R1Y3REaXNjb3VudCB7XG5cdHJldHVybiBwcm9kdWN0LnByaWNlX3JhbmdlICYmIFxuXHRcdHByb2R1Y3QucHJpY2VfcmFuZ2UubWF4aW11bV9wcmljZSAmJiBcblx0XHRwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UuZGlzY291bnQgXG5cdFx0PyB7IFxuXHRcdFx0YW1vdW50OiBwcm9kdWN0LnByaWNlX3JhbmdlLm1heGltdW1fcHJpY2UuZGlzY291bnQuYW1vdW50X29mZixcblx0XHRcdHBlcmNlbnQ6IHByb2R1Y3QucHJpY2VfcmFuZ2UubWF4aW11bV9wcmljZS5kaXNjb3VudC5wZXJjZW50X29mZlxuXHRcdH0gOiB7IGFtb3VudDogbnVsbCwgcGVyY2VudDogbnVsbCB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhR2FsbGVyeUVudHJpZXMocHJvZHVjdDogTWFnZW50b1Byb2R1Y3QsIG1lZGlhVXJsOiBzdHJpbmcpIHtcblx0cmV0dXJuIHByb2R1Y3QubWVkaWFfZ2FsbGVyeV9lbnRyaWVzID8gcHJvZHVjdC5tZWRpYV9nYWxsZXJ5X2VudHJpZXMubWFwKGltYWdlID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXJsOiBtZWRpYVVybCArICdjYXRhbG9nL3Byb2R1Y3QnICsgaW1hZ2UuZmlsZSxcblx0XHRcdGxhYmVsOiBpbWFnZS5sYWJlbCxcblx0XHRcdGlkOiBpbWFnZS5pZC50b1N0cmluZygpXG5cdFx0fVxuXHR9KSA6IFtdXG59XG4iXX0=