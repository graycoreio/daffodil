import {
  Type,
  Injectable,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';


import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';
import { MockSearchResult } from '@daffodil/search/testing';

import {
  daffProvideSearchResultKindFactories,
  DAFF_SEARCH_RESULT_KIND_FACTORIES,
} from './kind.token';

class TestMockSearchResult extends MockSearchResult {}

@Injectable({
  providedIn: 'root',
})
class TestSearchResultFactory extends DaffModelFactory<DaffSearchResult> {
  constructor() {
    super(TestMockSearchResult);
  }
}

describe('@daffodil/search/testing | daffProvideSearchResultKindFactories', () => {
  let factories: Type<DaffModelFactory<DaffSearchResult>>[];
  let result: DaffModelFactory<DaffSearchResult>[];

  beforeEach(() => {
    factories = [
      TestSearchResultFactory,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideSearchResultKindFactories(...factories),
      ],
    });

    result = TestBed.inject(DAFF_SEARCH_RESULT_KIND_FACTORIES);
  });

  it('should provide the factories to the token', () => {
    factories.forEach(factory => {
      expect(result).toContain(jasmine.any(factory));
    });
  });
});
