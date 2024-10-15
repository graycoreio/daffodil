import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffInMemoryProductResponseExtraTransform,
  DaffInMemoryProductResponseTransform,
  provideDaffProductInMemoryExtraProductResponseTransforms,
} from '@daffodil/product/driver/in-memory';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM } from './response.token';


describe('DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM', () => {
  let magentoProductFactory: DaffProductFactory;
  let product: DaffProduct;
  let result: DaffProductDriverResponse;

  let transforms: DaffInMemoryProductResponseExtraTransform[];
  let responseTransform: DaffInMemoryProductResponseTransform;

  beforeEach(() => {
    transforms = [
      (response, p) => ({
        ...response,
        id: `${response.id} transform 1`,
      }),
      (response, p) => ({
        ...response,
        id: `${response.id} transform 2`,
      }),
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductInMemoryExtraProductResponseTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(DaffProductFactory);
    responseTransform = TestBed.inject(DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM);

    product = magentoProductFactory.create();
    result = responseTransform(product);
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${product.id} transform 1 transform 2`);
  });
});
