import { Address } from "../../../interfaces/models/address";
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { initialState, reducer, getShipping } from "../reducers/shipping.reducer";
import { UpdateShipping } from "../actions/shipping.actions";


describe('Shipping | Shipping List Reducer', () => {

  let shippingFactory: ShippingFactory;
  let shipping: Address;

  beforeEach(() => {
    shippingFactory = new ShippingFactory();

    shipping = shippingFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when UpdateShipping action is triggered', () => {

    let result;

    beforeEach(() => {
      let shippingListLoadSuccess = new UpdateShipping(shipping);
      
      result = reducer(initialState, shippingListLoadSuccess);
    });

    it('sets shipping from action.payload', () => {
      expect(result.shipping).toEqual(shipping)
    });
  });

  describe('getShipping', () => {
    
    it('returns shipping state', () => {
      expect(getShipping(initialState)).toEqual(initialState.shipping);
    });
  });
});
