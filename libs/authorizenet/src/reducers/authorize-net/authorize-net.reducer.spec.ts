import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../../actions/authorizenet.actions';

describe('AuthorizeNet | AuthorizeNet Reducer', () => {

	let stubPaymentNonce;
	let initialState: DaffAuthorizeNetReducerState;

  beforeEach(() => {
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

  describe('when DaffAuthorizeNetGenerateTokenSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoadSuccess: DaffAuthorizeNetGenerateTokenSuccess = new DaffAuthorizeNetGenerateTokenSuccess(stubPaymentNonce);

      result = daffAuthorizeNetReducer(initialState, tokenLoadSuccess);
    });
		
		it('clears the error message', () => {
			expect(result.error).toBeNull();
		});
  });

  describe('when DaffAuthorizeNetGenerateTokenFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenResponseLoadFailure: DaffAuthorizeNetGenerateTokenFailure = new DaffAuthorizeNetGenerateTokenFailure('error');

      result = daffAuthorizeNetReducer(initialState, tokenResponseLoadFailure);
    });

    it('sets error state to the action payload', () => {
      expect(result.error).toEqual('error');
		});
  });
});
