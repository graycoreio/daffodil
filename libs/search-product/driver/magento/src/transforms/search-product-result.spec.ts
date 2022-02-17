import { TestBed } from '@angular/core/testing';

import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';
import { MagentoSearchProductResult } from '@daffodil/search-product/driver/magento';
import { MagentoSearchProductResultFactory } from '@daffodil/search-product/driver/magento/testing';

import { daffSearchMagentoProductResultTransform } from './search-product-result';

describe('@daffodil/search-product/driver/magento | daffSearchMagentoProductResultTransform', () => {
  let magentoProductResult: MagentoSearchProductResult;
  let magentoProductResultFactory: MagentoSearchProductResultFactory;

  let result: DaffSearchProductResult;

  beforeEach(() => {
    magentoProductResultFactory = TestBed.inject(MagentoSearchProductResultFactory);
    magentoProductResult = magentoProductResultFactory.create();

    result = daffSearchMagentoProductResultTransform(magentoProductResult);
  });

  it('should create a DaffSearchProductResult', () => {
    expect(result.kind).toEqual(DAFF_SEARCH_PRODUCT_RESULT_KIND);
    expect(result['@type']).toEqual('Product');
    expect(result.id).toEqual(magentoProductResult.sku);
    expect(result.url).toEqual(`/${magentoProductResult.url_key}${magentoProductResult.url_suffix}`);
    expect(result.name).toEqual(magentoProductResult.name);
    expect(result.sku).toEqual(magentoProductResult.sku);
    expect(result.description).toEqual(magentoProductResult.short_description.html);
    expect(result.offers.sku).toEqual(magentoProductResult.sku);
    expect(result.offers.price).toEqual(magentoProductResult.price_range.maximum_price.regular_price.value);
    expect(result.offers.sku).toEqual(magentoProductResult.sku);
  });
});
