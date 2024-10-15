import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';
import {
  MockSearchResult,
  provideDaffSearchResultKindFactories,
} from '@daffodil/search/testing';

import { DaffSearchResultKindFactory } from './kind.factory';

class TestMockSearchResult extends MockSearchResult {
  extraField = 'extraField';
}

@Injectable({
  providedIn: 'root',
})
class TestSearchResultFactory extends DaffModelFactory<DaffSearchResult> {
  constructor() {
    super(TestMockSearchResult);
  }
}

describe('@daffodil/search/testing | DaffSearchResultKindFactory', () => {
  let searchResultFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffSearchResultKindFactory,
        ...provideDaffSearchResultKindFactories(
          TestSearchResultFactory,
        ),
      ],
    });

    searchResultFactory = TestBed.inject(DaffSearchResultKindFactory);
  });

  it('should be created', () => {
    expect(searchResultFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSearchResult;

    beforeEach(() => {
      result = searchResultFactory.create();
    });

    it('should include extra factory types', () => {
      expect((<TestMockSearchResult>result).extraField).toBeDefined();
    });
  });
});
