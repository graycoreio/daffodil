import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { DaffAuthorizeNetDriver } from '../injection-tokens/authorize-net-driver.token';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffMagentoAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffMagentoAuthorizeNetDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetDriver,
					useExisting: DaffMagentoAuthorizeNetService
        }
      ]
    };
  }
}
