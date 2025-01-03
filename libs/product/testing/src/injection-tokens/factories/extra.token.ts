import { createServicesInjectionToken } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

export const {
  /**
   * A multi-provider injection token for providing extra product factories.
   * These extra factories represent the additional product fields that may be added by other packages.
   * This is useful for backend mocks (such as the in-memory driver) to generate an accurate representation
   * of the entire product data that an application can receive in production.
   *
   * These factories will be invoked ang the return included in {@link DaffProductFactory}.
   */
  token: DAFF_PRODUCT_EXTRA_FACTORIES,

  /**
   * Provides extra product factories.
   *
   * See {@link DAFF_PRODUCT_EXTRA_FACTORIES}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffProductExtraProductFactories(
   *     MyProductFactory
   *   )
   * ]
   * ```
   */
  provider: provideDaffProductExtraProductFactories,
} = createServicesInjectionToken<DaffModelFactory<DaffProduct>>(
  'DAFF_PRODUCT_EXTRA_FACTORIES',
  { providedIn: 'root' },
);
