import { TestBed } from '@angular/core/testing';

import { DaffSearchDriverOptions } from '@daffodil/search/driver';
import {
  daffProvideSearchRoutingOptionBuilders,
  DaffSearchRoutingOptionBuilder,
} from '@daffodil/search/routing';

import { DAFF_SEARCH_ROUTING_OPTIONS_BUILDER } from './builder.token';

describe('DAFF_SEARCH_ROUTING_OPTIONS_BUILDER', () => {
  let result: DaffSearchDriverOptions;

  let builders: DaffSearchRoutingOptionBuilder[];
  let builder: DaffSearchRoutingOptionBuilder;

  beforeEach(() => {
    builders = [
      () => ({
        limit: 5,
      }),
      () => (<DaffSearchDriverOptions>{
        other: 'other',
      }),
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideSearchRoutingOptionBuilders(...builders),
      ],
    });

    builder = TestBed.inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDER);

    result = builder(null);
  });

  it('should merge the builder returns', () => {
    expect(result.limit).toEqual(5);
    expect((<any>result).other).toEqual('other');
  });
});
