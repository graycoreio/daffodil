import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCartMagentoCartTransforms,
  provideDaffCartMagentoExtraCartFragments,
} from '@daffodil/cart/driver/magento/2.4.7';
import { provideDaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';

import { magentoCartStoreCreditFragment } from './queries/public_api';
import { DaffCartStoreCreditMagentoService } from './store-credit.service';
import { magentoCartWithStoreCreditTransform } from './transforms/public_api';

/**
 * Provides the Magento implementation of the `@daffodil/cart-store-credit/driver` interface and the store credit cart fragments and transforms for `@daffodil/cart/driver/magento`.
 */
export const provideDaffCartStoreCreditMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCartStoreCreditDriver(DaffCartStoreCreditMagentoService),
  provideDaffCartMagentoExtraCartFragments(magentoCartStoreCreditFragment),
  provideDaffCartMagentoCartTransforms(
    magentoCartWithStoreCreditTransform,
  ),
]);
