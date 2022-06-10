import {
  daffSearchPageReducer,
  daffSearchIncrementalReducer,
} from '@daffodil/search/state';

import { daffSearchReducers } from './reducers';

describe('@daffodil/search/state | daffSearchReducers', () => {
  it('should return a reducer map with daffSearchIncrementalReducer', () => {
    expect(daffSearchReducers.incremental).toEqual(daffSearchIncrementalReducer);
  });

  it('should return a reducer map with daffSearchPageReducer', () => {
    expect(daffSearchReducers.search).toEqual(daffSearchPageReducer);
  });
});
