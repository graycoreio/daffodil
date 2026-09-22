import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductDriver } from '@daffodil/product/driver';
import { provideDaffProductTesting } from '@daffodil/product/testing';

import { DaffTestingProductService } from './product.service';

/**
 * Provides the {@link DaffTestingProductService} driver as the {@link DaffProductDriver}.
 * Includes {@link provideDaffProductTesting}.
 */
export const provideDaffProductTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductTesting(),
  provideDaffProductDriver(DaffTestingProductService),
]);
