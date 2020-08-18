import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetUpdatePaymentSuccess, DaffAuthorizeNetUpdatePaymentFailure, DaffAuthorizeNetUpdatePayment, DaffLoadAcceptJsSuccess, DaffLoadAcceptJsFailure } from '../../actions/authorizenet.actions';
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
			isAcceptLoaded: false,
			loading: false,
			paymentError: null,
			acceptJsLoadError: null
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
		
		it('clears the payment error message', () => {
			expect(result.paymentError).toBeNull();
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

    it('sets payment error state to the action payload', () => {
      expect(result.paymentError).toEqual('error');
		});
	});
	
	describe('when DaffLoadAcceptJsSuccess is triggered', () => {
		
		let result;
		
		beforeEach(() => {
      const acceptJsLoaded: DaffLoadAcceptJsSuccess = new DaffLoadAcceptJsSuccess();
			result = daffAuthorizeNetReducer(initialState, acceptJsLoaded);
		});
		
		it('should indicate that accept js has loaded', () => {
			expect(result.isAcceptLoaded).toEqual(true);
		});

    it('clears the acceptJsLoad error state', () => {
      expect(result.acceptJsLoadError).toEqual(null);
		});
	});

  describe('when DaffLoadAcceptJsFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const loadAcceptJsFailure: DaffLoadAcceptJsFailure = new DaffLoadAcceptJsFailure('error');

      result = daffAuthorizeNetReducer(initialState, loadAcceptJsFailure);
    });
		
		it('indicates that nothing is loading', () => {
			expect(result.loading).toBeFalsy();
		});

    it('sets acceptJsLoad error state to the action payload', () => {
      expect(result.acceptJsLoadError).toEqual('error');
		});
	});
});
