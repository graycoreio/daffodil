import { EnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import { DaffSeoCanonicalUrlEffects } from './effects/ngrx-router/canonical.effects';
import { DaffSeoMetaEffects } from './effects/ngrx-router/meta.effects';
import { DaffSeoTitleEffects } from './effects/ngrx-router/title.effects';

/**
 * Provides the NgRx effects that manage page SEO state.
 */
export const provideDaffSeoState = (): EnvironmentProviders => provideEffects(
  DaffSeoTitleEffects,
  DaffSeoMetaEffects,
  DaffSeoCanonicalUrlEffects,
);
