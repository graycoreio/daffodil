import {
  daffSearchReducer,
  daffSearchEntitiesReducer,
} from '@daffodil/search/state';

import { daffSearchReducers } from './reducers';

describe('@daffodil/search/state | daffSearchReducers', () => {

  it('should return a reducer map with daffSearchReducer', () => {
    expect(daffSearchReducers.search).toEqual(daffSearchReducer);
  });

  it('should return a reducer map with daffSearchEntitiesReducer', () => {
    expect(daffSearchReducers.searchResults).toEqual(daffSearchEntitiesReducer);
  });
});
