import {
  DaffCart,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import { daffAdd } from '@daffodil/core';

import { MagentoCart } from '../../models/responses/cart';

function validateSelectedShippingAddress(cart: Partial<MagentoCart>): boolean {
  return !!cart.shipping_addresses?.[0]?.selected_shipping_method?.amount;
}

export function transformCartTotals(cart: Partial<MagentoCart>): {totals: DaffCart['totals']} {
  const totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((acc, tax) => (daffAdd(acc, tax.amount.value)), 0) : 0;
  return {
    totals: {
      [DaffCartTotalTypeEnum.grandTotal]: {
        name: DaffCartTotalTypeEnum.grandTotal,
        label: 'Grand Total',
        value: cart.prices.grand_total.value,
        order: 0,
      },
      [DaffCartTotalTypeEnum.subtotalExcludingTax]: {
        name: DaffCartTotalTypeEnum.subtotalExcludingTax,
        label: 'Subtotal Excluding Tax',
        value: cart.prices.subtotal_excluding_tax.value,
        order: 1,
      },
      [DaffCartTotalTypeEnum.subtotalIncludingTax]: {
        name: DaffCartTotalTypeEnum.subtotalIncludingTax,
        label: 'Subtotal Including Tax',
        value: cart.prices.subtotal_including_tax.value,
        order: 2,
      },
      [DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax]: {
        name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
        label: 'Subtotal with Discount Excluding Tax',
        value: cart.prices.subtotal_with_discount_excluding_tax.value,
        order: 3,
      },
      [DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax]: {
        name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
        label: 'Subtotal with Discount Including Tax',
        value: cart.prices.subtotal_with_discount_excluding_tax.value ?
          daffAdd(cart.prices.subtotal_with_discount_excluding_tax.value, totalTax) :
          cart.prices.subtotal_with_discount_excluding_tax.value,
        order: 4,
      },
      [DaffCartTotalTypeEnum.tax]: {
        name: DaffCartTotalTypeEnum.tax,
        label: 'Tax',
        value: totalTax,
        order: 5,
      },
      [DaffCartTotalTypeEnum.discount]: {
        name: DaffCartTotalTypeEnum.discount,
        label: 'Discounts',
        value: cart.prices.discounts ? daffAdd(...cart.prices.discounts.map((discount) => discount.amount.value)) : 0,
        order: 6,
      },
      [DaffCartTotalTypeEnum.shipping]: {
        name: DaffCartTotalTypeEnum.shipping,
        label: 'Shipping',
        value: validateSelectedShippingAddress(cart) ? cart.shipping_addresses[0].selected_shipping_method.amount.value : null,
        order: 7,
      },
    },
  };
}
