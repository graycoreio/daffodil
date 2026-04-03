import { SearchResponse } from '@algolia/client-search';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffSearchDriverResponse } from '@daffodil/search/driver';

import {
  ALGOLIA_SEARCH_RESULT_GET_KIND,
  AlgoliaSearchResultGetKind,
} from '../result/get-kind/public_api';
import { AlgoliaSearchResultTransform } from '../result/transform/public_api';
import { ALGOLIA_SEARCH_RESULT_TRANSFORM_MAP } from '../result/transform/transforms.type';

@Injectable()
export class AlgoliaSearchCollectionTransformer {
  constructor(
    @Inject(ALGOLIA_SEARCH_RESULT_GET_KIND) private getKind: AlgoliaSearchResultGetKind,
    @Inject(ALGOLIA_SEARCH_RESULT_TRANSFORM_MAP) private transformMap: Record<string, AlgoliaSearchResultTransform>,
  ) {}

  transform(response: SearchResponse): DaffSearchDriverResponse['collection'] {
    return response.hits.reduce((acc, val) => {
      const kind = this.getKind(val);
      if (!acc[kind]) {
        acc[kind] = [];
      }
      acc[kind].push(this.transformMap[kind](val));
      return acc;
    }, <DaffSearchDriverResponse['collection']>{});
  }
}
