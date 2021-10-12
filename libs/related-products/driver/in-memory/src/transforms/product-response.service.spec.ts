import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';
import { DaffRelatedProduct } from '@daffodil/related-products';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { transformInMemoryRelatedProducts } from './product-response.service';

describe('@daffodil/related-products/driver/in-memory | transformInMemoryRelatedProducts', () => {
  let stubRelatedProduct: DaffRelatedProduct;
  let productFactory: DaffProductFactory;
  let relatedProductFactory: DaffRelatedProductFactory;
  let mockProduct: DaffProduct;
  let mockResponse: DaffProductDriverResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    relatedProductFactory = TestBed.inject(DaffRelatedProductFactory);

    stubRelatedProduct = relatedProductFactory.create({
      related: productFactory.createMany(1),
    });
    mockProduct = productFactory.create();
    mockResponse = {
      id: mockProduct.id,
      products: [mockProduct],
    };
  });

  describe('transformInMemoryRelatedProducts', () => {
    let result: DaffProductDriverResponse;

    beforeEach(() => {
      result = transformInMemoryRelatedProducts(mockResponse, stubRelatedProduct);
    });

    it('should add related products to the response product list', () => {
      expect(result.products).toContain(stubRelatedProduct.related[0]);
    });
  });
});
