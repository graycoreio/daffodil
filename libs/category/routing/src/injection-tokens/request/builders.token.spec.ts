import { TestBed } from '@angular/core/testing';

import { DaffCategoryRoutingRequestBuilder } from '@daffodil/category/routing';

import {
  daffProvideCategoryRoutingRequestBuilders,
  DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
} from './builders.token';


describe('daffProvideCategoryRoutingRequestBuilders', () => {
  let builders: DaffCategoryRoutingRequestBuilder[];
  let result: DaffCategoryRoutingRequestBuilder[];

  beforeEach(() => {
    builders = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideCategoryRoutingRequestBuilders(...builders),
      ],
    });

    result = TestBed.inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS);
  });

  it('should provide the builders to the token', () => {
    builders.forEach(builder => {
      expect(result).toContain(builder);
    });
  });
});
