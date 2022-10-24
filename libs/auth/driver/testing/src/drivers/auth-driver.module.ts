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

import { DaffTestingAuthService } from './auth/auth.service';
import { DaffTestingLoginService } from './login/login.service';
import { DaffTestingRegisterService } from './register/register.service';
import { DaffTestingResetPasswordService } from './reset-password/service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthTestingDriverModule> {
    return {
      ngModule: DaffAuthTestingDriverModule,
      providers: [
        {
          provide: DaffLoginDriver,
          useExisting: DaffTestingLoginService,
        },
        {
          provide: DaffRegisterDriver,
          useExisting: DaffTestingRegisterService,
        },
        {
          provide: DaffAuthDriver,
          useExisting: DaffTestingAuthService,
        },
        {
          provide: DaffResetPasswordDriver,
          useExisting: DaffTestingResetPasswordService,
        },
      ],
    };
  }
}
