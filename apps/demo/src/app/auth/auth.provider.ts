import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffAuthStateModule } from '@daffodil/auth/state';

import { provideDemoAuthState } from './auth-state.provider';

export function provideDemoAuth() {
  return makeEnvironmentProviders([
    importProvidersFrom(DaffAuthStateModule),
    provideDemoAuthState(),
  ]);
}
