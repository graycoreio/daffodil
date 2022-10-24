import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffRegisterDriver,
  DaffLoginDriver,
  DaffAuthDriver,
  DaffResetPasswordDriver,
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
        {
          provide: DaffRegisterDriver,
          useExisting: DaffMagentoRegisterService,
        },
        {
          provide: DaffLoginDriver,
          useExisting: DaffMagentoLoginService,
        },
        {
          provide: DaffAuthDriver,
          useExisting: DaffMagentoAuthService,
        },
        {
          provide: DaffResetPasswordDriver,
          useExisting: DaffMagentoResetPasswordService,
        },
      ],
    };
  }
}
