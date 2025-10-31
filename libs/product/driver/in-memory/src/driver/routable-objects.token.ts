import { inject } from '@angular/core';


import { DaffInMemoryBackendProductService } from '../backend/product.service';

/**
 * A factory function that provides routable product objects for the in-memory driver.
 *
 * Returns a function that provides all product entities with their URL properties.
 * Used internally by {@link provideDaffProductInMemoryDriver} with
 * {@link provideDaffInMemoryRoutableObjects} to enable automatic URL resolution for products.
 *
 * @docs-private
 */
export const daffProductInMemoryRoutableObjects = () => {
  const service = inject(DaffInMemoryBackendProductService);
  return service.products.map((p) => ({ url: p.url }));
};
