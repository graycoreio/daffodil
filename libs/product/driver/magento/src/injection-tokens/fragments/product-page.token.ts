import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { DocumentNode } from 'graphql';

/**
 * A multi-provider injection token for providing extra GraphQL fragments that will be spread into product queries.
 * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
 *
 * Fragment structure is platform-specific and this feature should be used with care.
 *
 * This can increase query complexity above the Magento default of 300.
 * Daffodil only guarantees that stock queries don't exceed the limit of 300.
 * Apps using this token should therefore increase the query complexity limit
 * to accommodate the extra complexity contributed by the provided fragments.
 */
export const DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS = new InjectionToken<DocumentNode[]>(
  'DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS',
  { factory: () => []},
);

/**
 * Provides extra GraphQL fragments for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideProductMagentoExtraProductPageFragments(
 *     myExtraProductFragment
 *   )
 * ]
 * ```
 */
export function daffProvideProductMagentoExtraProductPageFragments(...fragments: DocumentNode[]): Provider[] {
  return fragments.map(fragment => ({
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
    useValue: fragment,
    multi: true,
  }));
}
