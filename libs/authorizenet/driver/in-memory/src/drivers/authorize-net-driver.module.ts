import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffAuthorizeNetDriver,
  DaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';
import { DaffInMemoryBackendAuthorizenetService } from '../backend/authorize-net.service';


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
        provideDaffAuthorizeNetDriver(DaffInMemoryAuthorizeNetService),
        {
          provide: DaffAuthorizeNetPaymentId,
          useValue: DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID,
        },
        provideDaffInMemoryBackends(
          DaffInMemoryBackendAuthorizenetService,
        ),
      ],
    };
  }
}
