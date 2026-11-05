import { DocumentNode } from 'graphql';

import { createMultiInjectionToken } from '@daffodil/core';

export const {
  /**
   * A multi-provider injection token for providing extra GraphQL fragments that will be spread into product preview queries.
   * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
   * Fragments provided here will also be included in the {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS}.
   * The same fragment should not be provided for both of these tokens.
   *
   * See {@link MagentoProductPreview} for more info.
   *
   * Fragment structure is platform-specific and this feature should be used with care.
   *
   * This can increase query complexity above the Magento default of 300.
   * Daffodil only guarantees that stock queries don't exceed the limit of 300.
   * Apps using this token should therefore increase the query complexity limit
   * to accommodate the extra complexity contributed by the provided fragments.
   */
  token: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,

  /**
   * Provides extra GraphQL fragments for the Magento product preview query.
   *
   * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffProductMagentoExtraProductPreviewFragments(
   *     myExtraProductPreviewFragment
   *   )
   * ]
   * ```
   */
  provider: provideDaffProductMagentoExtraProductPreviewFragments,
} = createMultiInjectionToken<DocumentNode>('DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS');
