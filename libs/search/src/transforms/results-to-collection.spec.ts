import { TestBed } from '@angular/core/testing';

import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '../models/public_api';
import { daffSearchTransformResultsToCollection } from './results-to-collection';

describe('@daffodil/search | daffSearchTransformResultsToCollection', () => {
  let results: DaffSearchResult[];
  let resultFactory: DaffGeneralSearchResultFactory;
  let collection: DaffSearchResultCollection;

  beforeEach(() => {
    resultFactory = TestBed.inject(DaffGeneralSearchResultFactory);
    results = resultFactory.createMany(5);

    collection = daffSearchTransformResultsToCollection(results);
  });

  it('should create and return a collection from the search results', () => {
    results.forEach(result => {
      expect(collection[result.kind]).toContain(result);
    });
  });
});
