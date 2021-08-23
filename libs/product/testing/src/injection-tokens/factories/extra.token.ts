import {
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

/**
 * A multi-provider injection token for providing extra product factories.
 * These extra factories represent the additional product fields that may be added by other packages.
 * This is useful for backend mocks (such as the in-memory driver) to generate an accurate representation
 * of the entire product data that an application can receive in production.
 *
 * These factories will be invoked ang the return included in {@link DaffProductFactory}.
 */
export const DAFF_PRODUCT_EXTRA_FACTORIES = new InjectionToken<DaffModelFactory<DaffProduct>[]>(
  'DAFF_PRODUCT_EXTRA_FACTORIES',
  { factory: () => [], providedIn: 'root' },
);

/**
 * Provides extra product factories.
 *
 * See {@link DAFF_PRODUCT_EXTRA_FACTORIES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductExtraProductFactories(
 *     MyProductFactory
 *   )
 * ]
 * ```
 */
export function daffProvideProductExtraProductFactories<T extends DaffProduct = DaffProduct>(...factoryTypes: Type<DaffModelFactory<T>>[]): Provider[] {
  return factoryTypes.map(factoryType => ({
    provide: DAFF_PRODUCT_EXTRA_FACTORIES,
    useExisting: factoryType,
    multi: true,
  }));
}
