import {
  EnvironmentProviders,
  Provider,
} from '@angular/core';

import {
  provideDaffInMemoryBackends,
  provideDaffInMemoryRoutableObjects,
} from '@daffodil/driver/in-memory';
import { provideDaffProductDriver } from '@daffodil/product/driver';
import { provideDaffProductTesting } from '@daffodil/product/testing';

import { DaffInMemoryProductService } from './product.service';
import { daffProductInMemoryRoutableObjects } from './routable-objects.token';
import { DaffInMemoryBackendProductService } from '../backend/product.service';

/**
 * Provides the Daffodil product in-memory driver and its dependencies.
 * Includes {@link provideDaffProductTesting}.
 */
export const provideDaffProductInMemoryDriver = (): Array<Provider | EnvironmentProviders> => [
  provideDaffProductTesting(),
  DaffInMemoryProductService,
  provideDaffProductDriver(DaffInMemoryProductService),
  provideDaffInMemoryBackends(DaffInMemoryBackendProductService),
  provideDaffInMemoryRoutableObjects('PRODUCT', daffProductInMemoryRoutableObjects),
];
