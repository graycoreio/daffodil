import { TestBed } from '@angular/core/testing';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffMagentoProductResponseExtraTransform,
  DaffMagentoProductResponseTransform,
  provideDaffProductMagentoExtraProductResponseTransforms,
  MagentoProduct,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM } from './response.token';
import { DaffMagentoProductResponseTransformers } from '../../../transforms/product-response';


describe('DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM', () => {
  let magentoProductFactory: MagentoProductFactory;
  let magentoProduct: MagentoProduct;
  let result: DaffProductDriverResponse;

  let transforms: DaffMagentoProductResponseExtraTransform[];
  let responseTransform: DaffMagentoProductResponseTransform;

  beforeEach(() => {
    transforms = [
      (response, product) => ({
        ...response,
        id: `${response.id} transform 1`,
      }),
      (response, product) => ({
        ...response,
        id: `${response.id} transform 2`,
      }),
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffProductMagentoExtraProductResponseTransforms(...transforms),
      ],
    });

    magentoProductFactory = TestBed.inject(MagentoProductFactory);
    responseTransform = TestBed.inject(DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM);

    magentoProduct = magentoProductFactory.create();
    result = responseTransform(magentoProduct, 'test');
  });

  it('should run the standard transform first, followed by the injected transforms', () => {
    expect(result.id).toEqual(`${magentoProduct.sku} transform 1 transform 2`);
  });
});
