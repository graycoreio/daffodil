import { InjectionToken } from '@angular/core';

/**
 * A multi-provider injection token of the operation names of magento queries that should 
 * be cached. This is needed because queries need to be converted into GET queries in order for Magento
 * to cache them. This token should be used by daffodil driver platform modules to register operation names that are cacheable.
 */
export const DAFF_MAGENTO_CACHEABLE_OPERATIONS = new InjectionToken<string[]>('DAFF_MAGENTO_CACHEABLE_OPERATIONS', { factory: () => []});
