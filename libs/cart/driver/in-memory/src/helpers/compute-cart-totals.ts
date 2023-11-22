import { faker } from '@faker-js/faker';

import {
  DaffCart,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import { DaffProduct } from '@daffodil/product';

export function daffCartInMemoryComputeCartTotals(cart: DaffCart, products: DaffProduct[]): DaffCart {
  const shipping = cart.shipping_information ? faker.datatype.number({ min: 0, max: 99 }) : 0;
  const subtotalExcludingTax = cart.items?.reduce((acc, { product_id }) =>
    acc + (products.find(({ id }) => id === product_id)?.price || 0),
  0,
  ) || 0;
  const discount = faker.datatype.number({ min: 0, max: subtotalExcludingTax });
  const subtotalIncludingTax = subtotalExcludingTax + cart.totals[DaffCartTotalTypeEnum.tax].value;
  const subtotalWithDiscountExcludingTax = subtotalExcludingTax - discount;
  const subtotalWithDiscountIncludingTax = subtotalIncludingTax - discount;
  const grandTotal = subtotalWithDiscountIncludingTax + shipping;

  return {
    ...cart,
    totals: {
      ...cart.totals,
      [DaffCartTotalTypeEnum.shipping]: {
        ...cart.totals[DaffCartTotalTypeEnum.shipping],
        value: shipping,
      },
      [DaffCartTotalTypeEnum.subtotalExcludingTax]: {
        ...cart.totals[DaffCartTotalTypeEnum.subtotalExcludingTax],
        value: subtotalExcludingTax,
      },
      [DaffCartTotalTypeEnum.discount]: {
        ...cart.totals[DaffCartTotalTypeEnum.discount],
        value: discount,
      },
      [DaffCartTotalTypeEnum.subtotalIncludingTax]: {
        ...cart.totals[DaffCartTotalTypeEnum.subtotalIncludingTax],
        value: subtotalIncludingTax,
      },
      [DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax]: {
        ...cart.totals[DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax],
        value: subtotalWithDiscountExcludingTax,
      },
      [DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax]: {
        ...cart.totals[DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax],
        value: subtotalWithDiscountIncludingTax,
      },
      [DaffCartTotalTypeEnum.grandTotal]: {
        ...cart.totals[DaffCartTotalTypeEnum.grandTotal],
        value: grandTotal,
      },
    },
  };
}
