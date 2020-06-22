import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { DaffAuthorizeNetDriver } from '../injection-tokens/authorize-net-driver.token';
import { DaffAuthorizeNetPaymentId } from '../../models/authorizenet-payment-id.token';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffMagentoAuthorizeNetDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffMagentoAuthorizeNetDriverModule,
      providers: [
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
