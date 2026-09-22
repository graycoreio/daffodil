import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DaffCategoryPageIdResolver } from '@daffodil/category/routing';
import { DaffCategoryStateTestingModule } from '@daffodil/category/state/testing';

import { DaffCategoryRoutingCollectionEffects } from './effects/collection-route.effects';
import { DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER } from './injection-tokens/request/builder.token';
import { provideDaffCategoryRouting } from './provider';

describe('@daffodil/category/routing | provideDaffCategoryRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffCategoryStateTestingModule),
        provideDaffCategoryRouting(),
      ],
    });
  });

  it('should provide the collection route effects', () => {
    expect(TestBed.inject(DaffCategoryRoutingCollectionEffects)).toBeTruthy();
  });

  it('should provide the resolvers', () => {
    expect(TestBed.inject(DaffCategoryPageIdResolver)).toBeTruthy();
  });

  it('should provide the options builder', () => {
    expect(TestBed.inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER)).toEqual(jasmine.any(Function));
  });
});
