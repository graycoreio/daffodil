import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffAuthorizeNetConfig,
  provideDaffAuthorizeNetConfigToken,
  provideDaffAuthorizeNetDriver,
  provideDaffAuthorizeNetPaymentDriver,
  provideDaffAuthorizeNetPaymentId,
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
        provideDaffAuthorizeNetConfigToken(config),
        provideDaffAuthorizeNetDriver(DaffMagentoAuthorizeNetService),
        provideDaffAuthorizeNetPaymentDriver(DaffMagentoAuthorizeNetPaymentService),
        provideDaffAuthorizeNetPaymentId(MAGENTO_AUTHORIZE_NET_PAYMENT_ID),
      ],
    };
  }
}
