import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionRequestQueryParams } from '@daffodil/product/routing';

import {
  daffProvideProductCollectionQueryParams,
  DAFF_PRODUCT_COLLECTION_QUERY_PARAMS,
} from './query-params.token';

describe('@daffodil/product/routing | daffProvideProductCollectionQueryParams', () => {
  let queryParams: DaffProductCollectionRequestQueryParams;
  let result: DaffProductCollectionRequestQueryParams;

  beforeEach(() => {
    queryParams = {
      current_page: 'page',
      page_size: 'size',
    };

    TestBed.configureTestingModule({
      providers: [
        daffProvideProductCollectionQueryParams(queryParams),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COLLECTION_QUERY_PARAMS);
  });

  it('should provide the query params to the token', () => {
    expect(result).toEqual(queryParams);
  });
});
