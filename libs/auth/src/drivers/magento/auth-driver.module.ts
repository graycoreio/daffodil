import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffRegisterDriver } from '../injection-tokens/register-driver.token';
import { DaffMagentoRegisterService } from './register.service';

import { DaffLoginDriver } from '../injection-tokens/login-driver.token';
import { DaffMagentoLoginService } from './login.service';

import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffMagentoAuthGraphQlQueryManagerService } from './queries/auth-query-manager.service';

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
          provide: DaffAuthQueryManager,
          useExisting: DaffMagentoAuthGraphQlQueryManagerService
        }
      ]
    };
  }
}
