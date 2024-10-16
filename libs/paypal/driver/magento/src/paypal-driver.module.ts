import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffPaypalExpressDriverConfig,
  provideDaffPaypalExpressDriver,
  provideDaffPaypalExpressDriverConfig,
  provideDaffPaypalExpressPaymentDriver,
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
  static forRoot(config: Partial<DaffPaypalExpressDriverConfig> = MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffPaypalMagentoDriverModule> {
    return {
      ngModule: DaffPaypalMagentoDriverModule,
      providers: [
        provideDaffPaypalExpressDriver(DaffMagentoPaypalService),
        provideDaffPaypalExpressPaymentDriver(DaffMagentoPaypalPaymentService),
        provideDaffPaypalExpressDriverConfig({
          ...MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT,
          ...config,
        }),
      ],
    };
  }
}
