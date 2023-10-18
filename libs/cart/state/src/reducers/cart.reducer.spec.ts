import { daffCartReducerInitialState as initialState } from './cart-initial-state';
import { daffCartReducer } from '../reducers/cart.reducer';

describe('Cart | Reducer | Cart', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};
      const result = daffCartReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
});
