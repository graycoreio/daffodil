import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffAuthDriver } from '../interfaces/auth-service.interface';
import { DaffLoginDriver } from '../interfaces/login-service.interface';
import { DaffRegisterDriver } from '../interfaces/register-service.interface';
import { DaffMagentoAuthService } from './auth.service';
import { DaffMagentoLoginService } from './login.service';
import { DaffMagentoRegisterService } from './register.service';

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
      ],
    };
  }
}
