import { TestBed } from '@angular/core/testing';

import { DaffProductCollectionRequestQueryParamTransforms } from '@daffodil/product/routing';

import {
  daffProvideProductCollectionQueryParamTransforms,
  DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS,
} from './query-param-transforms.token';

describe('@daffodil/product/routing | daffProvideProductCollectionQueryParamTransforms', () => {
  let transforms: DaffProductCollectionRequestQueryParamTransforms;
  let result: DaffProductCollectionRequestQueryParamTransforms;

  beforeEach(() => {
    transforms = {
      filterRequests: (base64Val: string) => JSON.parse(atob(base64Val)),
    };

    TestBed.configureTestingModule({
      providers: [
        daffProvideProductCollectionQueryParamTransforms(transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    expect(result).toEqual(transforms);
  });
});
