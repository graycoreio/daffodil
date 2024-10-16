import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffAuthorizeNetConfig,
  DaffAuthorizeNetConfigToken,
  provideDaffAuthorizeNetDriver,
  provideDaffAuthorizeNetPaymentDriver,
  DaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';

import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { DaffMagentoAuthorizeNetPaymentService } from './payment.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffMagentoAuthorizeNetDriverModule {
  static forRoot(config: DaffAuthorizeNetConfig): ModuleWithProviders<DaffMagentoAuthorizeNetDriverModule> {
    if(!config.apiLoginID || !config.clientKey) {
      throw Error('You must provide an apiLoginID and clientKey for Authorize.Net configuration.');
    }

    return {
      ngModule: DaffMagentoAuthorizeNetDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetConfigToken,
          useValue: config,
        },
        provideDaffAuthorizeNetDriver(DaffMagentoAuthorizeNetService),
        provideDaffAuthorizeNetPaymentDriver(DaffMagentoAuthorizeNetPaymentService),
        {
          provide: DaffAuthorizeNetPaymentId,
          useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
        },
      ],
    };
  }
}
