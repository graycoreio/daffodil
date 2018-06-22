import { ShippingAddress } from '../models/shipping-address';
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { initialState, reducer, getShippingInfo } from "../reducers/shipping.reducer";
import { UpdateShippingInfo } from "../actions/shipping.actions";


describe('Shipping | Shipping Reducer', () => {

  let shippingFactory: ShippingFactory;
  let shippingInfo: ShippingAddress;

  beforeEach(() => {
    shippingFactory = new ShippingFactory();

    shippingInfo = shippingFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when UpdateShippingInfo action is triggered', () => {

    let result;

    beforeEach(() => {
      let shippingListLoadSuccess = new UpdateShippingInfo(shippingInfo);
      
      result = reducer(initialState, shippingListLoadSuccess);
    });

    it('sets shippingInfo from action.payload', () => {
      expect(result.shippingInfo).toEqual(shippingInfo)
    });
  });

  describe('getShippingInfo', () => {
    
    it('returns shippingInfo state', () => {
      expect(getShippingInfo(initialState)).toEqual(initialState.shippingInfo);
    });
  });
});
