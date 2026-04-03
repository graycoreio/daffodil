import { Hit } from '@algolia/client-search';

export type AlgoliaSearchResultGetKind<T = unknown> = (hit: Hit<T>) => string;
