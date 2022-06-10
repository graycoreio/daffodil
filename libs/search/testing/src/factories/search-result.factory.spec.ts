import { TestBed } from '@angular/core/testing';

import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchResultFactory } from './search-result.factory';

describe('@daffodil/search/testing | DaffSearchResultFactory', () => {
  let searchResultFactory: DaffSearchResultFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffSearchResultFactory],
    });

    searchResultFactory = TestBed.inject(DaffSearchResultFactory);
  });

  it('should be created', () => {
    expect(searchResultFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSearchResult;

    beforeEach(() => {
      result = searchResultFactory.create();
    });

    it('should return a Search', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.kind).toBeDefined();
    });
  });
});
