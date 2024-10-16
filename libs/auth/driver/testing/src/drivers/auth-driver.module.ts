import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffLoginDriver,
  provideDaffRegisterDriver,
  provideDaffAuthDriver,
  provideDaffResetPasswordDriver,
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
        provideDaffLoginDriver(DaffTestingLoginService),
        provideDaffRegisterDriver(DaffTestingRegisterService),
        provideDaffAuthDriver(DaffTestingAuthService),
        provideDaffResetPasswordDriver(DaffTestingResetPasswordService),
      ],
    };
  }
}
