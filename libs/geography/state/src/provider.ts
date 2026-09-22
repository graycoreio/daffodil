import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DaffGeographyEffects } from './effects/geography.effects';
import {
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
} from './reducers/public_api';

/**
 * Provides the `@daffodil/geography/state` feature state and effects.
 */
export const provideDaffGeographyState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_GEOGRAPHY_STORE_FEATURE_KEY, daffGeographyReducers),
  provideEffects(
    DaffGeographyEffects,
  ),
]);
