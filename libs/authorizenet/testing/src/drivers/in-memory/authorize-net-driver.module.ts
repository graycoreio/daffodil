import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet';

import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';


@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffAuthorizeNetInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthorizeNetInMemoryDriverModule> {
    return {
      ngModule: DaffAuthorizeNetInMemoryDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetDriver,
          useExisting: DaffInMemoryAuthorizeNetService
				}
      ]
    };
  }
}
