import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffLoginDriver,
  DaffRegisterDriver,
  DaffAuthDriver,
  DaffResetPasswordDriver,
} from '@daffodil/auth/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryAuthService } from './auth/auth.service';
import { DaffInMemoryLoginService } from './login/login.service';
import { DaffInMemoryRegisterService } from './register/register.service';
import { DaffInMemoryResetPasswordService } from './reset-password/service';
import { DaffInMemoryBackendAuthService } from '../backend/auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthInMemoryDriverModule> {
    return {
      ngModule: DaffAuthInMemoryDriverModule,
      providers: [
        {
          provide: DaffLoginDriver,
          useExisting: DaffInMemoryLoginService,
        },
        {
          provide: DaffRegisterDriver,
          useExisting: DaffInMemoryRegisterService,
        },
        {
          provide: DaffAuthDriver,
          useExisting: DaffInMemoryAuthService,
        },
        {
          provide: DaffResetPasswordDriver,
          useExisting: DaffInMemoryResetPasswordService,
        },
        provideDaffInMemoryBackends(
          DaffInMemoryBackendAuthService,
        ),
      ],
    };
  }
}
