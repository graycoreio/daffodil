import { TestBed } from '@angular/core/testing';

import { MagentoProductWithRelated } from '@daffodil/related-products/driver/magento';

import { MagentoProductWithRelatedFactory } from './product-with-related.factory';

describe('@daffodil/related-products/driver/magento/testing | MagentoProductWithRelatedFactory', () => {
  let factory: MagentoProductWithRelatedFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductWithRelatedFactory],
    });

    factory = TestBed.inject(MagentoProductWithRelatedFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductWithRelated;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoProductWithRelated with all required fields defined', () => {
      expect(result.related_products).toBeDefined();
    });
  });
});
