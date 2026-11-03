import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS } from '@daffodil/search/routing';

import { provideDaffSearchProductRouting } from './provider';

describe('@daffodil/search-product/routing | provideDaffSearchProductRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffSearchProductRouting(),
      ],
    });
  });

  it('should provide a route option builder', () => {
    const builders = TestBed.inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS);

    expect(builders.length).toEqual(1);
    expect(typeof builders[0]).toEqual('function');
  });
});
