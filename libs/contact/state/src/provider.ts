import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DaffContactEffects } from './effects/contact.effects';
import { DAFF_CONTACT_STORE_FEATURE_KEY } from './reducers/contact-store-feature-key';
import { daffContactStateReducer } from './reducers/contact.reducer';

/**
 * Provides the `@daffodil/contact/state` feature state and effects.
 */
export const provideDaffContactState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CONTACT_STORE_FEATURE_KEY, daffContactStateReducer),
  provideEffects(DaffContactEffects),
]);
