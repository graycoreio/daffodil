import { DocumentNode } from 'graphql';

import { createMultiInjectionToken } from '@daffodil/core';

export const {
  /**
   * A multi-provider injection token for providing extra GraphQL fragments that will be spread into order queries.
   * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
   *
   * Fragment structure is platform-specific and this feature should be used with care.
   *
   * This can increase query complexity above the Magento default of 300.
   * Daffodil only guarantees that stock queries don't exceed the limit of 300.
   * Apps using this token should therefore increase the query complexity limit
   * to accommodate the extra complexity contributed by the provided fragments.
   */
  token: DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_FRAGMENTS,

  /**
   * Provides extra GraphQL fragments for the Magento order driver.
   *
   * See {@link DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_FRAGMENTS}.
   *
   * ```ts
   * providers: [
   *   ...daffProvideCustomerOrderMagentoExtraOrderFragments(
   *     myExtraOrderFragment
   *   )
   * ]
   * ```
   */
  provider: daffProvideCustomerOrderMagentoExtraOrderFragments,
} = createMultiInjectionToken<DocumentNode>('DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_FRAGMENTS');
