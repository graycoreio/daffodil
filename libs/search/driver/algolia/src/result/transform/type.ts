import { Hit } from '@algolia/client-search';

import { DaffSearchResult } from '@daffodil/search';

export type AlgoliaSearchResultTransform<T = unknown> = (hit: Hit<T>) => DaffSearchResult & T;

export interface AlgoliaSearchResultTransformInjection<T = unknown> {
  kind: string;
  transform: AlgoliaSearchResultTransform<T>;
}
