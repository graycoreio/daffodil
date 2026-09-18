import {
  EnvironmentProviders,
  Provider,
} from '@angular/core';

import {
  provideDaffInMemoryBackends,
  provideDaffInMemoryRoutableObjects,
} from '@daffodil/driver/in-memory';
import {
  provideDaffProductDriver,
  provideDaffProductCustomAttributeDriver,
} from '@daffodil/product/driver';
import {
  DaffDefaultProductFactory,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { DaffInMemoryProductCustomAttributeService } from './custom-attribute.service';
import { DaffInMemoryProductService } from './product.service';
import { daffProductInMemoryRoutableObjects } from './routable-objects.token';
import { DaffInMemoryBackendProductCustomAttributeService } from '../backend/custom-attribute.service';
import { DaffInMemoryBackendProductService } from '../backend/product.service';

/**
 * Provides the Daffodil product in-memory driver and its dependencies.
 */
export const provideDaffProductInMemoryDriver = (): Array<Provider | EnvironmentProviders> => [
  DaffInMemoryProductService,
  provideDaffProductDriver(DaffInMemoryProductService),
  provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
  provideDaffInMemoryBackends(
    DaffInMemoryBackendProductService,
    DaffInMemoryBackendProductCustomAttributeService,
  ),
  provideDaffInMemoryRoutableObjects('PRODUCT', daffProductInMemoryRoutableObjects),
  DaffInMemoryProductCustomAttributeService,
  provideDaffProductCustomAttributeDriver(DaffInMemoryProductCustomAttributeService),
];
