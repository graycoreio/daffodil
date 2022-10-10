import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
  DaffPaypalExpressDriverConfig,
  DaffPaypalExpressDriver,
  DaffPaypalExpressPaymentDriver,
} from '@daffodil/paypal/driver';

import { MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT } from './config/default';
import { DaffMagentoPaypalPaymentService } from './paypal-payment.service';
import { DaffMagentoPaypalService } from './paypal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalMagentoDriverModule {
  static forRoot(config: DaffPaypalExpressDriverConfig = MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffPaypalMagentoDriverModule> {
    return {
      ngModule: DaffPaypalMagentoDriverModule,
      providers: [
        {
          provide: DaffPaypalExpressDriver,
          useExisting: DaffMagentoPaypalService,
        },
        {
          provide: DaffPaypalExpressPaymentDriver,
          useExisting: DaffMagentoPaypalPaymentService,
        },
        {
          provide: DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
