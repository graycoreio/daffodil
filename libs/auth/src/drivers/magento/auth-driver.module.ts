import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffRegisterDriver } from '../interfaces/register-service.interface';
import { DaffMagentoRegisterService } from './register.service';

import { DaffLoginDriver } from '../interfaces/login-service.interface';
import { DaffMagentoLoginService } from './login.service';

import { DaffAuthDriver } from '../interfaces/auth-service.interface';
import { DaffMagentoAuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffAuthMagentoDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffAuthMagentoDriverModule,
      providers: [
        {
          provide: DaffRegisterDriver,
          useExisting: DaffMagentoRegisterService
        },
        {
          provide: DaffLoginDriver,
          useExisting: DaffMagentoLoginService
        },
        {
          provide: DaffAuthDriver,
          useExisting: DaffMagentoAuthService
        }
      ]
    };
  }
}
