import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDER,
  DaffSearchPageResolver,
} from '@daffodil/search/routing';
import { DaffSearchProductStateTestingModule } from '@daffodil/search-product/state/testing';

import { DaffSearchProductRoutingCollectionEffects } from './effects/collection-route.effects';
import { provideDaffSearchProductRouting } from './provider';

describe('@daffodil/search-product/routing | provideDaffSearchProductRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffSearchProductStateTestingModule),
        provideDaffSearchProductRouting(),
      ],
    });
  });

  it('should provide the collection route effects', () => {
    expect(TestBed.inject(DaffSearchProductRoutingCollectionEffects)).toBeTruthy();
  });

  it('should provide the search routing resolver', () => {
    expect(TestBed.inject(DaffSearchPageResolver)).toBeTruthy();
  });

  it('should provide the search routing options builder', () => {
    expect(TestBed.inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDER)).toEqual(jasmine.any(Function));
  });
});
