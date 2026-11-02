import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffAuthorizeNetDriver,
  provideDaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';
import { DaffInMemoryBackendAuthorizenetService } from '../backend/authorize-net.service';

/**
 * Provides the in-memory implementations of the `@daffodil/authorizenet/driver` interfaces.
 */
export const provideDaffAuthorizeNetInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffAuthorizeNetDriver(DaffInMemoryAuthorizeNetService),
  provideDaffAuthorizeNetPaymentId(DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID),
  provideDaffInMemoryBackends(
    DaffInMemoryBackendAuthorizenetService,
  ),
]);
