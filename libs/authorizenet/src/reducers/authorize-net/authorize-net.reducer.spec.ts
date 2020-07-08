import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetUpdatePaymentSuccess, DaffAuthorizeNetUpdatePaymentFailure, DaffAuthorizeNetUpdatePayment } from '../../actions/authorizenet.actions';
import { DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

describe('AuthorizeNet | AuthorizeNet Reducer', () => {

	let stubPaymentNonce;
	let initialState: DaffAuthorizeNetReducerState;
	let stubAddress: DaffCartAddress;

  beforeEach(() => {
		stubAddress = new DaffCartAddressFactory().create();
		stubPaymentNonce = 'tokenResponse';
		initialState = {
			loading: false,
			error: null
		};
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffAuthorizeNetReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffAuthorizeNetUpdatePayment is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoad: DaffAuthorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment({
				creditCard: {
					name: 'name',
					cardnumber: '1234123412341234',
					month: 'month',
					year: 'year',
					securitycode: '123'
				}
			}, stubAddress);

      result = daffAuthorizeNetReducer(initialState, tokenLoad);
    });
		
		it('indicates that the request is loading', () => {
			expect(result.loading).toBeTruthy();
		});
  });

  describe('when DaffAuthorizeNetUpdatePaymentSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoadSuccess: DaffAuthorizeNetUpdatePaymentSuccess = new DaffAuthorizeNetUpdatePaymentSuccess();

      result = daffAuthorizeNetReducer(initialState, tokenLoadSuccess);
    });
		
		it('indicates that the request has finished loading', () => {
			expect(result.loading).toBeFalsy();
		});
		
		it('clears the error message', () => {
			expect(result.error).toBeNull();
		});
  });

  describe('when DaffAuthorizeNetUpdatePaymentFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenResponseLoadFailure: DaffAuthorizeNetUpdatePaymentFailure = new DaffAuthorizeNetUpdatePaymentFailure('error');

      result = daffAuthorizeNetReducer(initialState, tokenResponseLoadFailure);
    });
		
		it('indicates that the request has finished loading', () => {
			expect(result.loading).toBeFalsy();
		});

    it('sets error state to the action payload', () => {
      expect(result.error).toEqual('error');
		});
  });
});
