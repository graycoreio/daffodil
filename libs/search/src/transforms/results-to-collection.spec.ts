import { TestBed } from '@angular/core/testing';

import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { daffSearchTransformResultsToCollection } from './results-to-collection';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '../models/public_api';

describe('@daffodil/search | daffSearchTransformResultsToCollection', () => {
  let results: DaffSearchResult[];
  let resultFactory: DaffSearchResultFactory;
  let collection: DaffSearchResultCollection;

  beforeEach(() => {
    resultFactory = TestBed.inject(DaffSearchResultFactory);
    results = resultFactory.createMany(5);

    collection = daffSearchTransformResultsToCollection(results);
  });

  it('should create and return a collection from the search results', () => {
    results.forEach(result => {
      expect(collection[result.kind]).toContain(result);
    });
  });
});
