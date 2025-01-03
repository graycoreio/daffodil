import { inject } from '@angular/core';

import { createServicesInjectionToken } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchResultFactory } from '../../factories/public_api';

export const {
  /**
   * A multi-provider injection token for providing extra search result kind factories.
   * These factories correspond to different types of search results that may be added by other packages.
   * This is useful for backend mocks (such as the testing driver) to generate an accurate representation
   * of the variety of results that an application can receive in production.
   */
  token: DAFF_SEARCH_RESULT_KIND_FACTORIES,

  /**
   * Provides extra search result factory kinds.
   *
   * See {@link DAFF_SEARCH_RESULT_KIND_FACTORIES}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffSearchResultKindFactories(
   *     MySearchResultFactory
   *   )
   * ]
   * ```
   */
  provider: provideDaffSearchResultKindFactories,
} = createServicesInjectionToken<DaffModelFactory<DaffSearchResult>>(
  'DAFF_SEARCH_RESULT_KIND_FACTORIES',
  { factory: () => [inject(DaffSearchResultFactory)], providedIn: 'root' },
);
