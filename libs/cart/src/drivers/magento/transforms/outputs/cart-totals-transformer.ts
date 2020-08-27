import { daffAdd } from '@daffodil/core';

import { MagentoCart } from '../../models/outputs/cart';
import { DaffCart } from '../../../../models/cart';
import { DaffCartTotalTypeEnum } from '../../../../models/cart-total';

export function transformCartTotals(cart: Partial<MagentoCart>): {totals: DaffCart['totals']} {
	const totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((acc, tax) => (daffAdd(acc, tax.amount.value)), 0) : 0;
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
				value: daffAdd(cart.prices.subtotal_with_discount_excluding_tax.value, totalTax)
			},
			{
				name: DaffCartTotalTypeEnum.tax,
				label: 'Tax',
				value: totalTax
			},
			{
				name: DaffCartTotalTypeEnum.discount,
				label: 'Discount',
				value: cart.prices.discounts ? cart.prices.discounts.reduce((acc, discount) => (daffAdd(acc, discount.amount.value)), 0) : 0
			}
		],
	}
}
