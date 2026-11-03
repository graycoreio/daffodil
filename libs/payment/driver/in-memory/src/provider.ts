import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffPaymentDriver } from '@daffodil/payment/driver';
import { provideDaffPaymentTesting } from '@daffodil/payment/testing';

import { DaffPaymentInMemoryBackendService } from './backend/payment.service';
import { DaffPaymentInMemoryDriver } from './driver/payment.service';

/**
 * Provides the {@link DaffPaymentInMemoryDriver} as the {@link DaffPaymentDriver}.
 * Includes {@link provideDaffPaymentTesting}.
 */
export const provideDaffPaymentInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentTesting(),
  provideDaffPaymentDriver(DaffPaymentInMemoryDriver),
  provideDaffInMemoryBackends(DaffPaymentInMemoryBackendService),
]);
