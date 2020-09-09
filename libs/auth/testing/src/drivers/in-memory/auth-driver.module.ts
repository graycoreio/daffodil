import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffLoginDriver,
  DaffRegisterDriver,
  DaffAuthDriver,
} from '@daffodil/auth';

import { DaffInMemoryLoginService } from './login/login.service';
import { DaffInMemoryRegisterService } from './register/register.service';
import { DaffInMemoryAuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffAuthInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthInMemoryDriverModule> {
    return {
      ngModule: DaffAuthInMemoryDriverModule,
      providers: [
        {
          provide: DaffLoginDriver,
          useExisting: DaffInMemoryLoginService
        },
        {
          provide: DaffRegisterDriver,
          useExisting: DaffInMemoryRegisterService
        },
        {
          provide: DaffAuthDriver,
          useExisting: DaffInMemoryAuthService
        }
      ]
    };
  }
}
