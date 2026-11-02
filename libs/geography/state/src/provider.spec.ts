import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';
import {
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffGeographyFeatureState,
  DaffGeographyStateRootSlice,
} from '@daffodil/geography/state';

import { DaffGeographyEffects } from './effects/geography.effects';
import { provideDaffGeographyState } from './provider';

describe('@daffodil/geography/state | provideDaffGeographyState', () => {
  let store: Store<DaffGeographyStateRootSlice>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffGeographyTestingDriverModule.forRoot()),
        provideDaffGeographyState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the geography feature state', () => {
    let state: DaffGeographyFeatureState;
    store.select(DAFF_GEOGRAPHY_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.geography).toBeDefined();
    expect(state.countries).toBeDefined();
  });

  it('should provide the geography effects', () => {
    expect(TestBed.inject(DaffGeographyEffects)).toBeTruthy();
  });
});
