import {
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

/**
 * A multi-provider injection token for providing extra product type factories.
 * These factories correspond to different product types that may be added by other packages.
 * This is useful for backend mocks (such as the in-memory driver) to generate an accurate representation
 * of the variety of products that an application can receive in production.
 */
export const DAFF_PRODUCT_TYPE_FACTORIES = new InjectionToken<DaffModelFactory<DaffProduct>[]>(
  'DAFF_PRODUCT_TYPE_FACTORIES',
  { factory: () => [], providedIn: 'root' },
);

/**
 * Provides extra product factory types.
 *
 * See {@link DAFF_PRODUCT_TYPE_FACTORIES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductExtraFactoryTypes(
 *     MyProductFactory
 *   )
 * ]
 * ```
 */
export function daffProvideProductExtraFactoryTypes<T extends DaffProduct = DaffProduct>(...factoryTypes: Type<DaffModelFactory<T>>[]): Provider[] {
  return factoryTypes.map(factoryType => ({
    provide: DAFF_PRODUCT_TYPE_FACTORIES,
    useExisting: factoryType,
    multi: true,
  }));
}
