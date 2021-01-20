/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daffAdd } from '@daffodil/core';
import { DaffCartTotalTypeEnum } from '@daffodil/cart';
/**
 * @param {?} cart
 * @return {?}
 */
export function transformCartTotals(cart) {
    /** @type {?} */
    const totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((/**
     * @param {?} acc
     * @param {?} tax
     * @return {?}
     */
    (acc, tax) => (daffAdd(acc, tax.amount.value))), 0) : 0;
    return {
        totals: [
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
            },
            ...transformDiscounts(cart.prices.discounts),
            {
                name: DaffCartTotalTypeEnum.shipping,
                label: 'Shipping',
                value: validateSelectedShippingAddress(cart) ? cart.shipping_addresses[0].selected_shipping_method.amount.value : null
            }
        ],
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
    discount => ({
        name: DaffCartTotalTypeEnum.discount,
        label: discount.label,
        value: discount.amount.value
    }))) : [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMtdHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXRvdGFscy10cmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBWSxxQkFBcUIsRUFBaUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFJaEYsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQTBCOztVQUN2RCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BJLE9BQU87UUFDTixNQUFNLEVBQUU7WUFDUDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDdEMsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2FBQ3BDO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLG9CQUFvQjtnQkFDaEQsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBSzthQUMvQztZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxvQkFBb0I7Z0JBQ2hELEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUs7YUFDL0M7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsZ0NBQWdDO2dCQUM1RCxLQUFLLEVBQUUsc0NBQXNDO2dCQUM3QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxLQUFLO2FBQzdEO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLGdDQUFnQztnQkFDNUQsS0FBSyxFQUFFLHNDQUFzQztnQkFDN0MsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEtBQUs7YUFDMUQ7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsR0FBRztnQkFDL0IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDZjtZQUNELEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUM7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLFFBQVE7Z0JBQ3BDLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3RIO1NBQ0Q7S0FDRCxDQUFBO0FBQ0YsQ0FBQzs7Ozs7QUFFRCxTQUFTLGtCQUFrQixDQUFDLFNBQVM7SUFDcEMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7O0lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO1FBQ3BDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztRQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0tBQzVCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVixDQUFDOzs7OztBQUVELFNBQVMsK0JBQStCLENBQUMsSUFBMEI7SUFDakUsMEJBQTBCO0lBQzNCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ3hILENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO0FBQy9ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYWZmQWRkIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0VG90YWxUeXBlRW51bSwgRGFmZkNhcnRUb3RhbCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL2NhcnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQ2FydFRvdGFscyhjYXJ0OiBQYXJ0aWFsPE1hZ2VudG9DYXJ0Pik6IHt0b3RhbHM6IERhZmZDYXJ0Wyd0b3RhbHMnXX0ge1xuXHRjb25zdCB0b3RhbFRheCA9IGNhcnQucHJpY2VzLmFwcGxpZWRfdGF4ZXMgPyBjYXJ0LnByaWNlcy5hcHBsaWVkX3RheGVzLnJlZHVjZSgoYWNjLCB0YXgpID0+IChkYWZmQWRkKGFjYywgdGF4LmFtb3VudC52YWx1ZSkpLCAwKSA6IDA7XG5cdHJldHVybiB7XG5cdFx0dG90YWxzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5ncmFuZFRvdGFsLFxuXHRcdFx0XHRsYWJlbDogJ0dyYW5kIFRvdGFsJyxcblx0XHRcdFx0dmFsdWU6IGNhcnQucHJpY2VzLmdyYW5kX3RvdGFsLnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc3VidG90YWxFeGNsdWRpbmdUYXgsXG5cdFx0XHRcdGxhYmVsOiAnU3VidG90YWwgRXhjbHVkaW5nIFRheCcsXG5cdFx0XHRcdHZhbHVlOiBjYXJ0LnByaWNlcy5zdWJ0b3RhbF9leGNsdWRpbmdfdGF4LnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc3VidG90YWxJbmNsdWRpbmdUYXgsXG5cdFx0XHRcdGxhYmVsOiAnU3VidG90YWwgSW5jbHVkaW5nIFRheCcsXG5cdFx0XHRcdHZhbHVlOiBjYXJ0LnByaWNlcy5zdWJ0b3RhbF9pbmNsdWRpbmdfdGF4LnZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXgsXG5cdFx0XHRcdGxhYmVsOiAnU3VidG90YWwgd2l0aCBEaXNjb3VudCBFeGNsdWRpbmcgVGF4Jyxcblx0XHRcdFx0dmFsdWU6IGNhcnQucHJpY2VzLnN1YnRvdGFsX3dpdGhfZGlzY291bnRfZXhjbHVkaW5nX3RheC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4LFxuXHRcdFx0XHRsYWJlbDogJ1N1YnRvdGFsIHdpdGggRGlzY291bnQgSW5jbHVkaW5nIFRheCcsXG5cdFx0XHRcdHZhbHVlOiBjYXJ0LnByaWNlcy5zdWJ0b3RhbF93aXRoX2Rpc2NvdW50X2V4Y2x1ZGluZ190YXgudmFsdWUgP1xuXHRcdFx0XHRcdFx0XHRcdGRhZmZBZGQoY2FydC5wcmljZXMuc3VidG90YWxfd2l0aF9kaXNjb3VudF9leGNsdWRpbmdfdGF4LnZhbHVlLCB0b3RhbFRheCkgOlxuXHRcdFx0XHRcdFx0XHRcdGNhcnQucHJpY2VzLnN1YnRvdGFsX3dpdGhfZGlzY291bnRfZXhjbHVkaW5nX3RheC52YWx1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnRheCxcblx0XHRcdFx0bGFiZWw6ICdUYXgnLFxuXHRcdFx0XHR2YWx1ZTogdG90YWxUYXhcblx0XHRcdH0sXG5cdFx0XHQuLi50cmFuc2Zvcm1EaXNjb3VudHMoY2FydC5wcmljZXMuZGlzY291bnRzKSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnNoaXBwaW5nLFxuXHRcdFx0XHRsYWJlbDogJ1NoaXBwaW5nJyxcblx0XHRcdFx0dmFsdWU6IHZhbGlkYXRlU2VsZWN0ZWRTaGlwcGluZ0FkZHJlc3MoY2FydCkgPyBjYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXS5zZWxlY3RlZF9zaGlwcGluZ19tZXRob2QuYW1vdW50LnZhbHVlIDogbnVsbFxuXHRcdFx0fVxuXHRcdF0sXG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRGlzY291bnRzKGRpc2NvdW50cyk6IERhZmZDYXJ0VG90YWxbXSB7XG5cdHJldHVybiBkaXNjb3VudHMgPyBkaXNjb3VudHMubWFwKGRpc2NvdW50ID0+ICh7XG5cdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLmRpc2NvdW50LFxuXHRcdGxhYmVsOiBkaXNjb3VudC5sYWJlbCxcblx0XHR2YWx1ZTogZGlzY291bnQuYW1vdW50LnZhbHVlXG5cdH0pKSA6IFtdO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlbGVjdGVkU2hpcHBpbmdBZGRyZXNzKGNhcnQ6IFBhcnRpYWw8TWFnZW50b0NhcnQ+KTogYm9vbGVhbiB7XG4gIC8vIFRPRE86IG9wdGlvbmFsIGNoYWluaW5nXG5cdHJldHVybiAhIWNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzICYmICEhY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0gJiYgISFjYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXS5zZWxlY3RlZF9zaGlwcGluZ19tZXRob2QgJiZcblx0XHQhIWNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLnNlbGVjdGVkX3NoaXBwaW5nX21ldGhvZC5hbW91bnQ7XG59XG4iXX0=