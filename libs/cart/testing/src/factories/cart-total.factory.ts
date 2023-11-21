import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCartTotal,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffCartTotal implements DaffCartTotal {
  name = faker.helpers.arrayElement([
    DaffCartTotalTypeEnum.grandTotal,
    DaffCartTotalTypeEnum.subtotalExcludingTax,
    DaffCartTotalTypeEnum.subtotalIncludingTax,
    DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
    DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
    DaffCartTotalTypeEnum.tax,
    DaffCartTotalTypeEnum.discount,
    DaffCartTotalTypeEnum.shipping,
  ]);
  value = faker.datatype.number({ min: 0, max: 999999 });
  label = faker.random.words();
  order = faker.datatype.number({ min: 0, max: 9 });
};

@Injectable({
  providedIn: 'root',
})
export class DaffCartTotalFactory extends DaffModelFactory<DaffCartTotal> {
  constructor() {
    super(MockDaffCartTotal);
  }

  createGrandTotal(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.grandTotal,
      label: 'Grand Total',
    });
  }

  createSubtotalExcludingTax(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.subtotalExcludingTax,
      label: 'Subtotal Excluding Tax',
    });
  }

  createSubtotalIncludingTax(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.subtotalIncludingTax,
      label: 'Subtotal Including Tax',
    });
  }

  createSubtotalWithDiscountExcludingTax(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
      label: 'Subtotal With Discount Excluding Tax',
    });
  }

  createSubtotalWithDiscountIncludingTax(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
      label: 'Subtotal With Discount Including Tax',
    });
  }

  createTax(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.tax,
      label: 'Tax',
    });
  }

  createDiscount(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.discount,
      label: 'Discount',
    });
  }

  createShipping(partial: Partial<DaffCartTotal> = {}) {
    return this.create({
      name: DaffCartTotalTypeEnum.shipping,
      label: 'Shipping',
    });
  }

  createAllTotals(): Record<DaffCartTotal['name'], DaffCartTotal> {
    return {
      [DaffCartTotalTypeEnum.grandTotal]: this.createGrandTotal(),
      [DaffCartTotalTypeEnum.subtotalExcludingTax]: this.createSubtotalExcludingTax(),
      [DaffCartTotalTypeEnum.subtotalIncludingTax]: this.createSubtotalIncludingTax(),
      [DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax]: this.createSubtotalWithDiscountExcludingTax(),
      [DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax]: this.createSubtotalWithDiscountIncludingTax(),
      [DaffCartTotalTypeEnum.tax]: this.createTax(),
      [DaffCartTotalTypeEnum.discount]: this.createDiscount(),
      [DaffCartTotalTypeEnum.shipping]: this.createShipping(),
    };
  }
}
