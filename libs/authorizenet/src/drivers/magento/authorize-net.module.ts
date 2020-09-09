import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken } from '../interfaces/authorize-net-config.interface';
import { DaffAuthorizeNetDriver } from '../interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetPaymentId } from '../interfaces/authorize-net-payment-id.token';

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
