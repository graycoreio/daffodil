import { daffCartReducer } from '../reducers/cart.reducer';
import { initialState } from './cart-initial-state';

describe('Cart | Reducer | Cart', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};
      const result = daffCartReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
});
