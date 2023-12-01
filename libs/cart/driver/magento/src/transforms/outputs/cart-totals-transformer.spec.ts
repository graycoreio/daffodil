import { TestBed } from '@angular/core/testing';

import { DaffCartTotalTypeEnum } from '@daffodil/cart';
import { MagentoCart } from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartShippingMethodFactory,
  MagentoShippingAddressFactory,
} from '@daffodil/cart/driver/magento/testing';
import { daffAdd } from '@daffodil/core';

import { transformCartTotals } from './cart-totals-transformer';

describe('transformCartTotals', () => {
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let stubMagentoCart: MagentoCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);
    magentoShippingMethodFactory = TestBed.inject(MagentoCartShippingMethodFactory);
    stubMagentoCart = TestBed.inject(MagentoCartFactory).create({
      shipping_addresses: [
        magentoShippingAddressFactory.create({
          selected_shipping_method: magentoShippingMethodFactory.create({
            amount: {
              value: 100,
              currency: 'USD',
            },
          }),
        }),
      ],
    });
  });

  it('should transform cart totals', () => {
    const totalTax = stubMagentoCart.prices.applied_taxes.reduce((acc, tax) => (daffAdd(acc, tax.amount.value)), 0);
    const transformedTotals = transformCartTotals(stubMagentoCart).totals;

    expect(transformedTotals[DaffCartTotalTypeEnum.grandTotal].value).toEqual(stubMagentoCart.prices.grand_total.value);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalExcludingTax].value).toEqual(stubMagentoCart.prices.subtotal_excluding_tax.value);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalIncludingTax].value).toEqual(stubMagentoCart.prices.subtotal_including_tax.value);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax].value).toEqual(stubMagentoCart.prices.subtotal_with_discount_excluding_tax.value);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax].value).toEqual(daffAdd(stubMagentoCart.prices.subtotal_with_discount_excluding_tax.value, totalTax));
    expect(transformedTotals[DaffCartTotalTypeEnum.tax].value).toEqual(totalTax);
    expect(transformedTotals[DaffCartTotalTypeEnum.shipping].value).toEqual(stubMagentoCart.shipping_addresses[0].selected_shipping_method.amount.value);
  });

  it('should transform cart totals when magento gives null/empty values', () => {
    stubMagentoCart.prices.applied_taxes = [];
    stubMagentoCart.prices.discounts = [];
    stubMagentoCart.prices.grand_total.value = null;
    stubMagentoCart.prices.subtotal_excluding_tax.value = null;
    stubMagentoCart.prices.subtotal_including_tax.value = null;
    stubMagentoCart.prices.subtotal_with_discount_excluding_tax.value = null;
    stubMagentoCart.shipping_addresses[0].selected_shipping_method.amount.value = null;

    const transformedTotals = transformCartTotals(stubMagentoCart).totals;

    expect(transformedTotals[DaffCartTotalTypeEnum.grandTotal].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalExcludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalIncludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.tax].value).toEqual(0);
    expect(transformedTotals[DaffCartTotalTypeEnum.shipping].value).toEqual(null);
  });

  it('should transform cart totals when magento gives empty shipping addresses', () => {
    stubMagentoCart.prices.applied_taxes = [];
    stubMagentoCart.prices.discounts = [];
    stubMagentoCart.prices.grand_total.value = null;
    stubMagentoCart.prices.subtotal_excluding_tax.value = null;
    stubMagentoCart.prices.subtotal_including_tax.value = null;
    stubMagentoCart.prices.subtotal_with_discount_excluding_tax.value = null;
    stubMagentoCart.shipping_addresses = null;

    const transformedTotals = transformCartTotals(stubMagentoCart).totals;

    expect(transformedTotals[DaffCartTotalTypeEnum.grandTotal].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalExcludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalIncludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax].value).toEqual(null);
    expect(transformedTotals[DaffCartTotalTypeEnum.tax].value).toEqual(0);
    expect(transformedTotals[DaffCartTotalTypeEnum.shipping].value).toEqual(null);
  });

  describe('when discounts is null', () => {
    beforeEach(() => {
      stubMagentoCart.prices.discounts = null;
    });

    it('should set discount value to 0', () => {
      const transformedTotals = transformCartTotals(stubMagentoCart).totals;

      expect(transformedTotals[DaffCartTotalTypeEnum.discount].value).toEqual(0);
    });
  });
});
