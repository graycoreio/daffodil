import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffLoginDriver,
  DaffRegisterDriver,
} from '@daffodil/auth';

import { DaffTestingLoginService } from './login/login.service';
import { DaffTestingRegisterService } from './register/register.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffAuthTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffAuthTestingDriverModule,
      providers: [
        {
          provide: DaffLoginDriver,
          useExisting: DaffTestingLoginService
        },
        {
          provide: DaffRegisterDriver,
          useExisting: DaffTestingRegisterService
        }
      ]
    };
  }
}
