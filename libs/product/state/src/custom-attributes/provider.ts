import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffProductCustomAttributesEffects } from './effects';

/**
 * Provides the effects for the product custom attributes feature state.
 * The reducers for this feature are part of the base product state,
 * see {@link DaffProductReducersState}.
 */
export const provideDaffProductCustomAttributesState = ()=> makeEnvironmentProviders([
  importProvidersFrom(
    EffectsModule.forFeature(DaffProductCustomAttributesEffects),
  ),
]);
