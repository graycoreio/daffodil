import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffPaypalDriver } from '../injection-tokens/paypal-driver.token';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { DaffMagentoPaypalService } from './paypal.service';
import { DaffMagentoPaypalTransformerService } from './transformers/magento-paypal-transformer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalMagentoDriverModule> {
    return {
      ngModule: DaffPaypalMagentoDriverModule,
      providers: [
        {
          provide: DaffPaypalDriver,
          useExisting: DaffMagentoPaypalService,
        },
        {
          provide: DaffPaypalTransformer,
          useExisting: DaffMagentoPaypalTransformerService,
        },
      ],
    };
  }
}
