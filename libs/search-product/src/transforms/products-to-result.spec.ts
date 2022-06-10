import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { DaffDefaultProductFactory } from '@daffodil/product/testing';
import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';

import { daffTransformProductsToSearchResults } from './products-to-result';

describe('@daffodil/search-product | daffTransformProductsToSearchResults', () => {
  let productFactory: DaffDefaultProductFactory;
  let mockProduct: DaffProduct;
  let result: DaffSearchProductResult[];

  beforeEach(() => {
    productFactory = TestBed.inject(DaffDefaultProductFactory);
    mockProduct = productFactory.create();

    result = daffTransformProductsToSearchResults([mockProduct]);
  });

  it('should set search result fields from the product', () => {
    expect(result[0].id).toEqual(mockProduct.id);
    expect(result[0].url).toEqual(mockProduct.url);
    expect(result[0].description).toEqual(mockProduct.description);
    expect(result[0].name).toEqual(mockProduct.name);
  });

  it('should set the kind to product', () => {
    expect(result[0].kind).toEqual(DAFF_SEARCH_PRODUCT_RESULT_KIND);
  });
});
