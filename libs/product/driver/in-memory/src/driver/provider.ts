import {
  EnvironmentProviders,
  Provider,
} from '@angular/core';

import {
  provideDaffInMemoryBackends,
  provideDaffInMemoryRoutableObjects,
} from '@daffodil/driver/in-memory';
import { provideDaffProductDriver } from '@daffodil/product/driver';
import {
  DaffDefaultProductFactory,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import {
  DaffInMemoryBackendProductService,
  DaffInMemoryProductService,
} from '../public_api';
import { daffProductInMemoryRoutableObjects } from './routable-objects.token';

/**
 * Provides the Daffodil product in-memory driver and its dependencies.
 */
export const provideDaffProductInMemoryDriver = (): Array<Provider | EnvironmentProviders> => [
  DaffInMemoryProductService,
  provideDaffProductDriver(DaffInMemoryProductService),
  provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
  provideDaffInMemoryBackends(DaffInMemoryBackendProductService),
  provideDaffInMemoryRoutableObjects('PRODUCT', daffProductInMemoryRoutableObjects),
];
