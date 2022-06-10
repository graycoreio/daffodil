import { daffIdentityReducer } from '@daffodil/core/state';
import {
  daffSearchProductEntitiesReducer,
  daffSearchProductProductReducer,
} from '@daffodil/search-product/state';

import { daffSearchProductProductReducers } from './reducers';

describe('@daffodil/search-product-product/state | daffSearchProductProductReducers', () => {
  it('should return a reducer map with daffSearchProductEntitiesReducer', () => {
    expect(daffSearchProductProductReducers.products).toEqual(daffSearchProductEntitiesReducer);
  });

  it('should return a reducer map with daffSearchProductProductReducer', () => {
    expect(daffSearchProductProductReducers.product).toEqual(daffSearchProductProductReducer);
  });

  it('should stub out productGrid and bestSellers with daffIdentityReducer', () => {
    expect(daffSearchProductProductReducers.productGrid).toEqual(daffIdentityReducer);
    expect(daffSearchProductProductReducers.bestSellers).toEqual(daffIdentityReducer);
  });
});
