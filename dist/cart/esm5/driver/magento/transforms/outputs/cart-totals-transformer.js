/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { daffAdd } from '@daffodil/core';
import { DaffCartTotalTypeEnum } from '@daffodil/cart';
/**
 * @param {?} cart
 * @return {?}
 */
export function transformCartTotals(cart) {
    /** @type {?} */
    var totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((/**
     * @param {?} acc
     * @param {?} tax
     * @return {?}
     */
    function (acc, tax) { return (daffAdd(acc, tax.amount.value)); }), 0) : 0;
    return {
        totals: tslib_1.__spread([
            {
                name: DaffCartTotalTypeEnum.grandTotal,
                label: 'Grand Total',
                value: cart.prices.grand_total.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalExcludingTax,
                label: 'Subtotal Excluding Tax',
                value: cart.prices.subtotal_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalIncludingTax,
                label: 'Subtotal Including Tax',
                value: cart.prices.subtotal_including_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
                label: 'Subtotal with Discount Excluding Tax',
                value: cart.prices.subtotal_with_discount_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
                label: 'Subtotal with Discount Including Tax',
                value: cart.prices.subtotal_with_discount_excluding_tax.value ?
                    daffAdd(cart.prices.subtotal_with_discount_excluding_tax.value, totalTax) :
                    cart.prices.subtotal_with_discount_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.tax,
                label: 'Tax',
                value: totalTax
            }
        ], transformDiscounts(cart.prices.discounts), [
            {
                name: DaffCartTotalTypeEnum.shipping,
                label: 'Shipping',
                value: validateSelectedShippingAddress(cart) ? cart.shipping_addresses[0].selected_shipping_method.amount.value : null
            }
        ]),
    };
}
/**
 * @param {?} discounts
 * @return {?}
 */
function transformDiscounts(discounts) {
    return discounts ? discounts.map((/**
     * @param {?} discount
     * @return {?}
     */
    function (discount) { return ({
        name: DaffCartTotalTypeEnum.discount,
        label: discount.label,
        value: discount.amount.value
    }); })) : [];
}
/**
 * @param {?} cart
 * @return {?}
 */
function validateSelectedShippingAddress(cart) {
    // TODO: optional chaining
    return !!cart.shipping_addresses && !!cart.shipping_addresses[0] && !!cart.shipping_addresses[0].selected_shipping_method &&
        !!cart.shipping_addresses[0].selected_shipping_method.amount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMtdHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXRvdGFscy10cmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQVkscUJBQXFCLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSWhGLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUEwQjs7UUFDdkQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWhDLENBQWdDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEksT0FBTztRQUNOLE1BQU07WUFDTDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDdEMsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2FBQ3BDO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLG9CQUFvQjtnQkFDaEQsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBSzthQUMvQztZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxvQkFBb0I7Z0JBQ2hELEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUs7YUFDL0M7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsZ0NBQWdDO2dCQUM1RCxLQUFLLEVBQUUsc0NBQXNDO2dCQUM3QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxLQUFLO2FBQzdEO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLGdDQUFnQztnQkFDNUQsS0FBSyxFQUFFLHNDQUFzQztnQkFDN0MsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEtBQUs7YUFDMUQ7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsR0FBRztnQkFDL0IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDZjtXQUNFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzVDO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO2dCQUNwQyxLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLCtCQUErQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTthQUN0SDtVQUNEO0tBQ0QsQ0FBQTtBQUNGLENBQUM7Ozs7O0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxTQUFTO0lBQ3BDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsQ0FBQztRQUM3QyxJQUFJLEVBQUUscUJBQXFCLENBQUMsUUFBUTtRQUNwQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7UUFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztLQUM1QixDQUFDLEVBSjJDLENBSTNDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1YsQ0FBQzs7Ozs7QUFFRCxTQUFTLCtCQUErQixDQUFDLElBQTBCO0lBQ2pFLDBCQUEwQjtJQUMzQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUN4SCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztBQUMvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGFmZkFkZCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFRvdGFsVHlwZUVudW0sIERhZmZDYXJ0VG90YWwgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9jYXJ0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUNhcnRUb3RhbHMoY2FydDogUGFydGlhbDxNYWdlbnRvQ2FydD4pOiB7dG90YWxzOiBEYWZmQ2FydFsndG90YWxzJ119IHtcblx0Y29uc3QgdG90YWxUYXggPSBjYXJ0LnByaWNlcy5hcHBsaWVkX3RheGVzID8gY2FydC5wcmljZXMuYXBwbGllZF90YXhlcy5yZWR1Y2UoKGFjYywgdGF4KSA9PiAoZGFmZkFkZChhY2MsIHRheC5hbW91bnQudmFsdWUpKSwgMCkgOiAwO1xuXHRyZXR1cm4ge1xuXHRcdHRvdGFsczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uZ3JhbmRUb3RhbCxcblx0XHRcdFx0bGFiZWw6ICdHcmFuZCBUb3RhbCcsXG5cdFx0XHRcdHZhbHVlOiBjYXJ0LnByaWNlcy5ncmFuZF90b3RhbC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsRXhjbHVkaW5nVGF4LFxuXHRcdFx0XHRsYWJlbDogJ1N1YnRvdGFsIEV4Y2x1ZGluZyBUYXgnLFxuXHRcdFx0XHR2YWx1ZTogY2FydC5wcmljZXMuc3VidG90YWxfZXhjbHVkaW5nX3RheC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsSW5jbHVkaW5nVGF4LFxuXHRcdFx0XHRsYWJlbDogJ1N1YnRvdGFsIEluY2x1ZGluZyBUYXgnLFxuXHRcdFx0XHR2YWx1ZTogY2FydC5wcmljZXMuc3VidG90YWxfaW5jbHVkaW5nX3RheC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4LFxuXHRcdFx0XHRsYWJlbDogJ1N1YnRvdGFsIHdpdGggRGlzY291bnQgRXhjbHVkaW5nIFRheCcsXG5cdFx0XHRcdHZhbHVlOiBjYXJ0LnByaWNlcy5zdWJ0b3RhbF93aXRoX2Rpc2NvdW50X2V4Y2x1ZGluZ190YXgudmFsdWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCxcblx0XHRcdFx0bGFiZWw6ICdTdWJ0b3RhbCB3aXRoIERpc2NvdW50IEluY2x1ZGluZyBUYXgnLFxuXHRcdFx0XHR2YWx1ZTogY2FydC5wcmljZXMuc3VidG90YWxfd2l0aF9kaXNjb3VudF9leGNsdWRpbmdfdGF4LnZhbHVlID9cblx0XHRcdFx0XHRcdFx0XHRkYWZmQWRkKGNhcnQucHJpY2VzLnN1YnRvdGFsX3dpdGhfZGlzY291bnRfZXhjbHVkaW5nX3RheC52YWx1ZSwgdG90YWxUYXgpIDpcblx0XHRcdFx0XHRcdFx0XHRjYXJ0LnByaWNlcy5zdWJ0b3RhbF93aXRoX2Rpc2NvdW50X2V4Y2x1ZGluZ190YXgudmFsdWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS50YXgsXG5cdFx0XHRcdGxhYmVsOiAnVGF4Jyxcblx0XHRcdFx0dmFsdWU6IHRvdGFsVGF4XG5cdFx0XHR9LFxuXHRcdFx0Li4udHJhbnNmb3JtRGlzY291bnRzKGNhcnQucHJpY2VzLmRpc2NvdW50cyksXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zaGlwcGluZyxcblx0XHRcdFx0bGFiZWw6ICdTaGlwcGluZycsXG5cdFx0XHRcdHZhbHVlOiB2YWxpZGF0ZVNlbGVjdGVkU2hpcHBpbmdBZGRyZXNzKGNhcnQpID8gY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kLmFtb3VudC52YWx1ZSA6IG51bGxcblx0XHRcdH1cblx0XHRdLFxuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybURpc2NvdW50cyhkaXNjb3VudHMpOiBEYWZmQ2FydFRvdGFsW10ge1xuXHRyZXR1cm4gZGlzY291bnRzID8gZGlzY291bnRzLm1hcChkaXNjb3VudCA9PiAoe1xuXHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5kaXNjb3VudCxcblx0XHRsYWJlbDogZGlzY291bnQubGFiZWwsXG5cdFx0dmFsdWU6IGRpc2NvdW50LmFtb3VudC52YWx1ZVxuXHR9KSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWxlY3RlZFNoaXBwaW5nQWRkcmVzcyhjYXJ0OiBQYXJ0aWFsPE1hZ2VudG9DYXJ0Pik6IGJvb2xlYW4ge1xuICAvLyBUT0RPOiBvcHRpb25hbCBjaGFpbmluZ1xuXHRyZXR1cm4gISFjYXJ0LnNoaXBwaW5nX2FkZHJlc3NlcyAmJiAhIWNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdICYmICEhY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kICYmXG5cdFx0ISFjYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXS5zZWxlY3RlZF9zaGlwcGluZ19tZXRob2QuYW1vdW50O1xufVxuIl19