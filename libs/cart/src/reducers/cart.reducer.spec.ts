import { daffCartReducer, composeReducers } from '../reducers/cart.reducer';
import { initialState } from './cart-initial-state';

describe('Cart | Reducer | Cart', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;
      const result = daffCartReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('composeReducers', () => {
    let action;

    beforeEach(() => {
      action = {} as any;
    });

    it('should return state when there are no reducers', () => {
      const result = composeReducers(initialState, action, []);

      expect(result).toEqual(initialState);
    });

    it('should pass the return from the first reducer into the second reducer', () => {
      const firstReturn = {state: 'thing'};
      const firstReducer = jasmine.createSpy();
      const secondReducer = jasmine.createSpy();

      firstReducer.withArgs(initialState, action).and.returnValue(firstReturn);

      composeReducers(initialState, action, [firstReducer, secondReducer]);

      expect(secondReducer).toHaveBeenCalledWith(firstReturn, action);
    });
  });
});
