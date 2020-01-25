import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaypalDriver } from '../injection-tokens/paypal-driver.token';
import { DaffMagentoPaypalService } from './paypal.service';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { DaffMagentoPaypalTransformerService } from './transformers/magento-paypal-transformer.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffPaypalMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalMagentoDriverModule> {
    return {
      ngModule: DaffPaypalMagentoDriverModule,
      providers: [
        {
          provide: DaffPaypalDriver,
          useExisting: DaffMagentoPaypalService
        },
        {
          provide: DaffPaypalTransformer,
          useExisting: DaffMagentoPaypalTransformerService
        }
      ]
    };
  }
}
