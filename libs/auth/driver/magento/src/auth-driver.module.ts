import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
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

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthMagentoDriverModule> {
    return {
      ngModule: DaffAuthMagentoDriverModule,
      providers: [
        provideDaffRegisterDriver(DaffMagentoRegisterService),
        provideDaffLoginDriver(DaffMagentoLoginService),
        provideDaffAuthDriver(DaffMagentoAuthService),
        provideDaffResetPasswordDriver(DaffMagentoResetPasswordService),
      ],
    };
  }
}
