import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffAuthorizeNetDriver,
  DaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';
import { DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID } from '@daffodil/authorizenet/driver/magento';

import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';


@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthorizeNetInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthorizeNetInMemoryDriverModule> {
    return {
      ngModule: DaffAuthorizeNetInMemoryDriverModule,
      providers: [
        {
          provide: DaffAuthorizeNetDriver,
          useExisting: DaffInMemoryAuthorizeNetService,
        },
        {
          provide: DaffAuthorizeNetPaymentId,
          useValue: DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID,
        },
      ],
    };
  }
}
