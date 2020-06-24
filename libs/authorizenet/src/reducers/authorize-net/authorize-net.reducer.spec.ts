import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { DaffAuthorizeNetReducerState } from './authorize-net-reducer.interface';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure, DaffAuthorizeNetGenerateToken } from '../../actions/authorizenet.actions';

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

  describe('when DaffAuthorizeNetGenerateToken is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoad: DaffAuthorizeNetGenerateToken = new DaffAuthorizeNetGenerateToken({
				creditCard: {
					name: 'name',
					cardnumber: '1234123412341234',
					month: 'month',
					year: 'year',
					securitycode: '123'
				}
			});

      result = daffAuthorizeNetReducer(initialState, tokenLoad);
    });
		
		it('indicates that the request is loading', () => {
			expect(result.loading).toBeTruthy();
		});
  });

  describe('when DaffAuthorizeNetGenerateTokenSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoadSuccess: DaffAuthorizeNetGenerateTokenSuccess = new DaffAuthorizeNetGenerateTokenSuccess();

      result = daffAuthorizeNetReducer(initialState, tokenLoadSuccess);
    });
		
		it('indicates that the request has finished loading', () => {
			expect(result.loading).toBeFalsy();
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
		
		it('indicates that the request has finished loading', () => {
			expect(result.loading).toBeFalsy();
		});

    it('sets error state to the action payload', () => {
      expect(result.error).toEqual('error');
		});
  });
});
