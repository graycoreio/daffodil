import { TestBed } from '@angular/core/testing';

import { DaffSearchRoutingOptionBuilder } from '@daffodil/search/routing';

import {
  provideDaffSearchRoutingOptionBuilders,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
} from './builders.token';


describe('provideDaffSearchRoutingOptionBuilders', () => {
  let builders: DaffSearchRoutingOptionBuilder[];
  let result: DaffSearchRoutingOptionBuilder[];

  beforeEach(() => {
    builders = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffSearchRoutingOptionBuilders(...builders),
      ],
    });

    result = TestBed.inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS);
  });

  it('should provide the builders to the token', () => {
    builders.forEach(builder => {
      expect(result).toContain(builder);
    });
  });
});
