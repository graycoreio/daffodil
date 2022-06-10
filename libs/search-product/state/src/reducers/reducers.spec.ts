import { daffSearchProductCollectionReducer } from '@daffodil/search-product/state';

import { daffSearchProductReducers } from './reducers';

describe('@daffodil/search-product/state | daffSearchProductReducers', () => {

  it('should return a reducer map with daffSearchProductCollectionReducer', () => {
    expect(daffSearchProductReducers.productCollection).toEqual(daffSearchProductCollectionReducer);
  });
});
