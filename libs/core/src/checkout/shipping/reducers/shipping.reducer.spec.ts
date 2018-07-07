import { ShippingAddress } from '../models/shipping-address';
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { initialState, reducer, getShippingInfo, getShippingOption, isShippingInfoValid, State } from "../reducers/shipping.reducer";
import { UpdateShippingInfo, UpdateShippingOption } from "../actions/shipping.actions";


describe('Shipping | Shipping Reducer', () => {

  let shippingFactory: ShippingFactory;
  let shippingInfo: ShippingAddress;
  let shippingOption: string;

  beforeEach(() => {
    shippingFactory = new ShippingFactory();

    shippingInfo = shippingFactory.create();
    shippingOption = 'shippingOption';
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
      let updateShippingInfoAction = new UpdateShippingInfo(shippingInfo);
      
      result = reducer(initialState, updateShippingInfoAction);
    });

    it('sets shippingInfo from action.payload', () => {
      expect(result.shippingInfo).toEqual(shippingInfo)
    });
  });

  describe('when UpdateShippingOption action is triggered', () => {

    let result;

    beforeEach(() => {
      let updateShippingOptionAction = new UpdateShippingOption(shippingOption);
      
      result = reducer(initialState, updateShippingOptionAction);
    });

    it('sets shippingOption from action.payload', () => {
      expect(result.shippingOption).toEqual(shippingOption)
    });
  });

  describe('getShippingInfo', () => {
    
    it('returns shippingInfo state', () => {
      expect(getShippingInfo(initialState)).toEqual(initialState.shippingInfo);
    });
  });

  describe('getShippingOption', () => {
    
    it('returns shippingOption state', () => {
      expect(getShippingOption(initialState)).toEqual(initialState.shippingOption);
    });
  });

  describe('isShippingInfoValid', () => {

    describe('when shippingInfo is defined', () => {

      let result: State;

      beforeEach(() => {
        let updateShippingInfoAction = new UpdateShippingInfo(shippingInfo);

        result = reducer(initialState, updateShippingInfoAction);
      });
      
      it('should return true', () => {
        expect(isShippingInfoValid(result.shippingInfo)).toBeTruthy();
      });
    });
    
    describe('when shippingInfo is null', () => {
      
      let result: State;

      beforeEach(() => {
        let updateShippingInfoAction = new UpdateShippingInfo(null);

        result = reducer(initialState, updateShippingInfoAction);
      });

      it('should return false', () => {
        expect(isShippingInfoValid(result.shippingInfo)).toBeFalsy();
      });
    });
  });
});
