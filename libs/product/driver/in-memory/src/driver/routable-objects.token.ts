import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffInMemoryRoutableObjectsResolver } from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendProductService } from '../backend/product.service';

/**
 * Injection token that provides routable product objects for the in-memory driver.
 *
 * This token returns a function that, when called, provides all product entities
 * with their URL properties. It is used with {@link provideDaffInMemoryRoutableObjects}
 * to enable automatic URL resolution for products.
 *
 * @usageNotes
 *
 * This token is automatically provided when using {@link provideDaffProductInMemoryDriver}.
 * You typically don't need to use this token directly unless you're customizing
 * the product in-memory driver configuration.
 */
export const _DAFF_PRODUCT_INMEMORY_ROUTABLE_OBJECTS = new InjectionToken<DaffInMemoryRoutableObjectsResolver>(
  '_DAFF_PRODUCT_INMEMORY_ROUTABLE_OBJECTS',
  {
    providedIn: 'root',
    factory: () => {
      const service = inject(DaffInMemoryBackendProductService);
      return () => service.products.map((p) => ({ url: p.url }));
    },
  },
);
