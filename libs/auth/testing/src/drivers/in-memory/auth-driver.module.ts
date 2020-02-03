import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffLoginDriver,
  DaffRegisterDriver,
} from '@daffodil/auth';

import { DaffInMemoryLoginService } from './login/login.service';
import { DaffInMemoryRegisterService } from './register/register.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffAuthInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
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
        }
      ]
    };
  }
}
