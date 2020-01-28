import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';

describe('AuthorizeNet | AuthorizeNet Reducer', () => {

	let stubPaymentNonce;
	let initialState: DaffAuthorizeNetReducerState<DaffAuthorizeNetTokenResponse>;

  beforeEach(() => {
		stubPaymentNonce = 'tokenResponse';
		initialState = {
			tokenResponse: null,
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
    let result: DaffAuthorizeNetReducerState<DaffAuthorizeNetTokenResponse>;

    beforeEach(() => {
      const tokenLoadSuccess: DaffAuthorizeNetGenerateTokenSuccess<DaffAuthorizeNetTokenResponse> = new DaffAuthorizeNetGenerateTokenSuccess(stubPaymentNonce);

      result = daffAuthorizeNetReducer(initialState, tokenLoadSuccess);
    });

    it('sets tokenResponse state to the action payload', () => {
      expect(result.tokenResponse).toEqual(stubPaymentNonce);
		});
		
		it('clears the error message', () => {
			expect(result.error).toBeNull();
		});
  });

  describe('when DaffAuthorizeNetGenerateTokenFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState<DaffAuthorizeNetTokenResponse>;

    beforeEach(() => {
      const tokenResponseLoadFailure: DaffAuthorizeNetGenerateTokenFailure = new DaffAuthorizeNetGenerateTokenFailure('error');

      result = daffAuthorizeNetReducer(initialState, tokenResponseLoadFailure);
    });

    it('sets error state to the action payload', () => {
      expect(result.error).toEqual('error');
		});
		
		it('clears the tokenResponse', () => {
			expect(result.tokenResponse).toBeNull();
		});
  });
});
