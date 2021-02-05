import { InjectionToken } from '@angular/core';

/**
 * A multi-provider injection token of the operation names of apollo queries that should 
 * be cached. This is needed because platforms (e.g. Magento, Shopify, etc.) typically do not cache queries by default. 
 * This token should be used by daffodil driver platform modules to register operation names that are cacheable, and is
 * intended for internal daffodil use only.
 */
export const DAFF_APOLLO_CACHEABLE_OPERATIONS = new InjectionToken<string[]>('DAFF_APOLLO_CACHEABLE_OPERATIONS', { factory: () => []});
