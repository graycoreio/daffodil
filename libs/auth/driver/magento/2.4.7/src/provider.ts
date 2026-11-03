import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffRegisterDriver,
  provideDaffLoginDriver,
  provideDaffAuthDriver,
  provideDaffResetPasswordDriver,
} from '@daffodil/auth/driver';

import { DaffMagentoAuthService } from './auth.service';
import { DaffMagentoLoginService } from './login.service';
import { DaffMagentoRegisterService } from './register.service';
import { DaffMagentoResetPasswordService } from './reset-password.service';

/**
 * Provides the Magento implementations of the `@daffodil/auth/driver` interfaces.
 */
export const provideDaffAuthMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffRegisterDriver(DaffMagentoRegisterService),
  provideDaffLoginDriver(DaffMagentoLoginService),
  provideDaffAuthDriver(DaffMagentoAuthService),
  provideDaffResetPasswordDriver(DaffMagentoResetPasswordService),
]);
