import { daffSearchDocsCollectionReducer } from '@daffodil/search-docs/state';

import { daffSearchDocsReducers } from './reducers';

describe('@daffodil/search-docs/state | daffSearchDocsReducers', () => {

  it('should return a reducer map with daffSearchDocsCollectionReducer', () => {
    expect(daffSearchDocsReducers.docsCollection).toEqual(daffSearchDocsCollectionReducer);
  });
});
