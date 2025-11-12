import { TestBed } from '@angular/core/testing';

import { ShopifyMoneyV2 } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyMoneyFactory', () => {

  let factory: ShopifyMoneyFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyMoneyFactory],
    });

    factory = TestBed.inject(ShopifyMoneyFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyMoneyV2;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.amount).toBeDefined();
      expect(result.currencyCode).toBeDefined();
    });
  });
});
