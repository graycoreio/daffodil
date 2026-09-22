import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DaffNavigationEffects } from './effects/navigation.effects';
import { daffNavigationReducers } from './reducers/navigation-reducers';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * Provides the `@daffodil/navigation/state` feature state and effects.
 */
export const provideDaffNavigationState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
  provideEffects(DaffNavigationEffects),
]);
