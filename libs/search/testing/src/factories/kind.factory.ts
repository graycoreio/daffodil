import {
  Injectable,
  Inject,
} from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_RESULT_KIND_FACTORIES } from '../injection-tokens/public_api';
import { MockSearchResult } from './search-result.factory';

/**
 * Factory for creating DaffSearchResults.
 * This will create a search result of random kind.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchResultKindFactory extends DaffModelFactory<DaffSearchResult> {
  constructor(
    @Inject(DAFF_SEARCH_RESULT_KIND_FACTORIES) private kindFactories: DaffModelFactory<DaffSearchResult>[],
  ) {
    super(MockSearchResult);
  }

  private get _randomFactory(): DaffModelFactory<DaffSearchResult> {
    return sample(this.kindFactories);
  }

  /**
   * Creates a search result of random kind.
   */
  create(partial = {}): DaffSearchResult {
    return this._randomFactory.create(partial);
  }
}
