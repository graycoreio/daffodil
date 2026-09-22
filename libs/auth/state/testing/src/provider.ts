import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffAuthFacade,
  DaffAuthLoginFacade,
  DaffAuthRegisterFacade,
  DaffAuthResetPasswordFacade,
} from '@daffodil/auth/state';

import { MockDaffAuthFacade } from './mock-auth-facade';
import { MockDaffAuthLoginFacade } from './mock-login-facade';
import { MockDaffAuthRegisterFacade } from './mock-register-facade';
import { MockDaffAuthResetPasswordFacade } from './mock-reset-password-facade';

/**
 * Provides the mock facades for the `@daffodil/auth/state` facades.
 */
export const provideDaffAuthStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffAuthFacade, useExisting: MockDaffAuthFacade },
  { provide: DaffAuthLoginFacade, useExisting: MockDaffAuthLoginFacade },
  { provide: DaffAuthRegisterFacade, useExisting: MockDaffAuthRegisterFacade },
  { provide: DaffAuthResetPasswordFacade, useExisting: MockDaffAuthResetPasswordFacade },
]);
