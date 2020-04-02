import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffRegisterDriver } from '../injection-tokens/register-driver.token';
import { DaffMagentoRegisterService } from './register.service';

import { DaffLoginDriver } from '../injection-tokens/login-driver.token';
import { DaffMagentoLoginService } from './login.service';

import { DaffAuthDriver } from '../injection-tokens/auth-driver.token';
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
