import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken, DaffAuthorizeNetDriver, DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffMagentoAuthorizeNetDriverModule {
  static forRoot(config: DaffAuthorizeNetConfig): ModuleWithProviders<DaffMagentoAuthorizeNetDriverModule> {
		if(!config.apiLoginID || !config.clientKey) {
			throw Error('You must provide an apiLoginID and clientKey for Authorize.Net configuration.')
		}

    return {
      ngModule: DaffMagentoAuthorizeNetDriverModule,
      providers: [
				{
					provide: DaffAuthorizeNetConfigToken,
					useValue: config
				},
        {
          provide: DaffAuthorizeNetDriver,
					useExisting: DaffMagentoAuthorizeNetService
				},
				{
					provide: DaffAuthorizeNetPaymentId,
					useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID
				}
      ]
    };
  }
}
