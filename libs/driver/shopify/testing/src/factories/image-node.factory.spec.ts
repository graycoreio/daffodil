import { TestBed } from '@angular/core/testing';

import { ShopifyImageNode } from '@daffodil/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyImageNodeFactory', () => {

  let factory: ShopifyImageNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyImageNodeFactory],
    });

    factory = TestBed.inject(ShopifyImageNodeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyImageNode;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.url).toBeDefined();
      expect(result.id).toBeDefined();
    });
  });
});
