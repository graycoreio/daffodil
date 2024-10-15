import { TestBed } from '@angular/core/testing';

import { DaffCategoryRoutingRequestBuilder } from '@daffodil/category/routing';

import {
  provideDaffCategoryRoutingRequestBuilders,
  DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
} from './builders.token';


describe('provideDaffCategoryRoutingRequestBuilders', () => {
  let builders: DaffCategoryRoutingRequestBuilder[];
  let result: DaffCategoryRoutingRequestBuilder[];

  beforeEach(() => {
    builders = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffCategoryRoutingRequestBuilders(...builders),
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
