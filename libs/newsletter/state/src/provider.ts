import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DaffNewsletterEffects } from './effects/newsletter.effects';
import { DAFF_NEWSLETTER_STORE_FEATURE_KEY } from './reducers/newsletter-store-feature-key';
import { daffNewsletterStateReducer } from './reducers/newsletter.reducer';

/**
 * Provides the `@daffodil/newsletter/state` feature state and effects.
 */
export const provideDaffNewsletterState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_NEWSLETTER_STORE_FEATURE_KEY, daffNewsletterStateReducer),
  provideEffects(
    DaffNewsletterEffects,
  ),
]);
