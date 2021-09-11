import { TestBed } from '@angular/core/testing';

import { MagentoProductWithUpsell } from '@daffodil/upsell-products/driver/magento';

import { MagentoProductWithUpsellFactory } from './product-with-upsell.factory';

describe('@daffodil/upsell-products/driver/magento/testing | MagentoProductWithUpsellFactory', () => {
  let factory: MagentoProductWithUpsellFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductWithUpsellFactory],
    });

    factory = TestBed.inject(MagentoProductWithUpsellFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductWithUpsell;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoProductWithUpsell with all required fields defined', () => {
      expect(result.upsell_products).toBeDefined();
    });
  });
});
