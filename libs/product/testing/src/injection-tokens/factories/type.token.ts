import { createServicesInjectionToken } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';

export const {
  /**
   * A multi-provider injection token for providing extra product type factories.
   * These factories correspond to different product types that may be added by other packages.
   * This is useful for backend mocks (such as the in-memory driver) to generate an accurate representation
   * of the variety of products that an application can receive in production.
   */
  token: DAFF_PRODUCT_TYPE_FACTORIES,

  /**
   * Provides extra product factory types.
   *
   * See {@link DAFF_PRODUCT_TYPE_FACTORIES}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffProductExtraFactoryTypes(
   *     MyProductFactory
   *   )
   * ]
   * ```
   */
  provider: provideDaffProductExtraFactoryTypes,
} = createServicesInjectionToken<DaffModelFactory<DaffProduct>>(
  'DAFF_PRODUCT_TYPE_FACTORIES',
  { providedIn: 'root' },
);
