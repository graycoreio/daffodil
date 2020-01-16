import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaymentDriver, DaffPaymentTransformer } from '@daffodil/checkout';

import { DaffAuthorizeNetPaymentService } from './authorize-net.service';
import { DaffAuthorizeNetTransformerService } from './transformers/authorize-net-transformer.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffAuthorizeNetDriverModule,
      providers: [
        {
          provide: DaffPaymentDriver,
          useExisting: DaffAuthorizeNetPaymentService
        },
        {
          provide: DaffPaymentTransformer,
          useExisting: DaffAuthorizeNetTransformerService
        }
      ]
    };
  }
}
