import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import { transformInMemoryUpsellProducts } from './product-response.service';

describe('@daffodil/upsell-products/driver/in-memory | transformInMemoryUpsellProducts', () => {
  let stubUpsellProduct: DaffUpsellProduct;
  let productFactory: DaffProductFactory;
  let upsellProductFactory: DaffUpsellProductFactory;
  let mockProduct: DaffProduct;
  let mockResponse: DaffProductDriverResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    upsellProductFactory = TestBed.inject(DaffUpsellProductFactory);

    stubUpsellProduct = upsellProductFactory.create({
      upsell: productFactory.createMany(1),
    });
    mockProduct = productFactory.create();
    mockResponse = {
      id: mockProduct.id,
      products: [mockProduct],
    };
  });

  describe('transformInMemoryUpsellProducts', () => {
    let result: DaffProductDriverResponse;

    beforeEach(() => {
      result = transformInMemoryUpsellProducts(mockResponse, stubUpsellProduct);
    });

    it('should add upsell products to the response product list', () => {
      expect(result.products).toContain(stubUpsellProduct.upsell[0]);
    });
  });
});
