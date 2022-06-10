import {
  inject,
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchResultFactory } from '../../factories/public_api';

/**
 * A multi-provider injection token for providing extra search result kind factories.
 * These factories correspond to different types of search results that may be added by other packages.
 * This is useful for backend mocks (such as the testing driver) to generate an accurate representation
 * of the variety of results that an application can receive in production.
 */
export const DAFF_SEARCH_RESULT_KIND_FACTORIES = new InjectionToken<DaffModelFactory<DaffSearchResult>[]>(
  'DAFF_SEARCH_RESULT_KIND_FACTORIES',
  { factory: () => [inject(DaffSearchResultFactory)], providedIn: 'root' },
);

/**
 * Provides extra search result factory kinds.
 *
 * See {@link DAFF_SEARCH_RESULT_KIND_FACTORIES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideSearchResultKindFactories(
 *     MySearchResultFactory
 *   )
 * ]
 * ```
 */
export function daffProvideSearchResultKindFactories<T extends DaffSearchResult = DaffSearchResult>(...factoryTypes: Type<DaffModelFactory<T>>[]): Provider[] {
  return factoryTypes.map(factoryType => ({
    provide: DAFF_SEARCH_RESULT_KIND_FACTORIES,
    useExisting: factoryType,
    multi: true,
  }));
}
