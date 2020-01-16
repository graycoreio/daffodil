import { authorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../../actions/authorizenet.actions';

describe('AuthorizeNet | AuthorizeNet Reducer', () => {

	let stubPaymentNonce;
	let initialState: DaffAuthorizeNetReducerState;

  beforeEach(() => {
		stubPaymentNonce = 'paymentNonce';
		initialState = {
			paymentNonce: null,
			error: null
		};
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = authorizeNetReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffAuthorizeNetGenerateTokenSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const paymentNonceLoadSuccess: DaffAuthorizeNetGenerateTokenSuccess = new DaffAuthorizeNetGenerateTokenSuccess(stubPaymentNonce);

      result = authorizeNetReducer(initialState, paymentNonceLoadSuccess);
    });

    it('sets paymentNonce state to the action payload', () => {
      expect(result.paymentNonce).toEqual(stubPaymentNonce);
		});
		
		it('clears the error message', () => {
			expect(result.error).toBeNull();
		});
  });

  describe('when DaffAuthorizeNetGenerateTokenFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const paymentNonceLoadFailure: DaffAuthorizeNetGenerateTokenFailure = new DaffAuthorizeNetGenerateTokenFailure('error');

      result = authorizeNetReducer(initialState, paymentNonceLoadFailure);
    });

    it('sets error state to the action payload', () => {
      expect(result.error).toEqual('error');
		});
		
		it('clears the paymentNonce', () => {
			expect(result.paymentNonce).toBeNull();
		});
  });
});
