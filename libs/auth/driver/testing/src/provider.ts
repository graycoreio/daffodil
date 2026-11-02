import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffLoginDriver,
  provideDaffRegisterDriver,
  provideDaffAuthDriver,
  provideDaffResetPasswordDriver,
} from '@daffodil/auth/driver';

import { DaffTestingAuthService } from './drivers/auth/auth.service';
import { DaffTestingLoginService } from './drivers/login/login.service';
import { DaffTestingRegisterService } from './drivers/register/register.service';
import { DaffTestingResetPasswordService } from './drivers/reset-password/service';

/**
 * Provides the testing implementations of the `@daffodil/auth/driver` interfaces.
 */
export const provideDaffAuthTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffLoginDriver(DaffTestingLoginService),
  provideDaffRegisterDriver(DaffTestingRegisterService),
  provideDaffAuthDriver(DaffTestingAuthService),
  provideDaffResetPasswordDriver(DaffTestingResetPasswordService),
]);
