import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffPaypalDriver,
  DaffPaypalTransformer,
} from '@daffodil/paypal/driver';

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
