import { InjectionToken } from '@angular/core';
import { DocumentNode } from 'graphql';

/**
 * An multi-provider injection token for providing extra GraphQL fragments that will be spread into cart queries.
 * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
 * The data will appear in DaffCart#extra_attributes.
 *
 * Fragment structure is platform-specific and this feature should be used with care.
 */
export const DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS = new InjectionToken<DocumentNode[]>('DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS');
