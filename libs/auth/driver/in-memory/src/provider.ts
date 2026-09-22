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
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendAuthService } from './backend/auth.service';
import { DaffInMemoryAuthService } from './drivers/auth/auth.service';
import { DaffInMemoryLoginService } from './drivers/login/login.service';
import { DaffInMemoryRegisterService } from './drivers/register/register.service';
import { DaffInMemoryResetPasswordService } from './drivers/reset-password/service';

/**
 * Provides the in-memory implementations of the `@daffodil/auth/driver` interfaces.
 */
export const provideDaffAuthInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffLoginDriver(DaffInMemoryLoginService),
  provideDaffRegisterDriver(DaffInMemoryRegisterService),
  provideDaffAuthDriver(DaffInMemoryAuthService),
  provideDaffResetPasswordDriver(DaffInMemoryResetPasswordService),
  provideDaffInMemoryBackends(
    DaffInMemoryBackendAuthService,
  ),
]);
