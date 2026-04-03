import { searchClient } from '@algolia/client-search';
import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  from,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';

import {
  DaffSearchAlgoliaDriverConfig,
  DAFF_SEARCH_ALGOLIA_CONFIG_TOKEN,
} from './config/public_api';
import { AlgoliaSearchCollectionTransformer } from './transformers/collection.service';
import { algoliaSearchCollectionTransform } from './transforms/metadata';

/**
 * A service for searching an Algolia index.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchAlgoliaDriver implements DaffSearchDriverInterface {
  private _client = searchClient(this.config.appId, this.config.apiKey);

  constructor(
    @Inject(DAFF_SEARCH_ALGOLIA_CONFIG_TOKEN) private config: DaffSearchAlgoliaDriverConfig,
    private collectionTransformer: AlgoliaSearchCollectionTransformer,
  ) {}

  search(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchDriverResponse> {
    return from(this._client.searchSingleIndex({
      indexName: this.config.indexName,
      searchParams: {
        query,
        length: options.limit,
      },
    })).pipe(
      map(response => ({
        collection: this.collectionTransformer.transform(response),
        metadata: algoliaSearchCollectionTransform(response),
      })),
    );
  }

  incremental(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchResultCollection> {
    return from(this._client.searchSingleIndex({
      indexName: this.config.indexName,
      searchParams: {
        query,
        length: options.limit,
      },
    })).pipe(
      map(response => this.collectionTransformer.transform(response)),
    );
  }
}
