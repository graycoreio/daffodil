import { TestBed } from '@angular/core/testing';

import { DaffSearchResult } from '@daffodil/search';

import { DaffGeneralSearchResultFactory } from './search-result.factory';

describe('@daffodil/search/testing | DaffGeneralSearchResultFactory', () => {
  let searchResultFactory: DaffGeneralSearchResultFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffGeneralSearchResultFactory],
    });

    searchResultFactory = TestBed.inject(DaffGeneralSearchResultFactory);
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
      expect(result.name).toBeDefined();
      expect(result.kind).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });
});
