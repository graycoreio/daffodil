import {
  daffOperationInitialState,
  DaffState,
} from '@daffodil/core/state';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterRetry,
  DaffNewsletterCancel,
  DaffNewsletterSubscribeFailure,
  DaffNewsletterSubscribeSuccess,
  DaffNewsletterReset,
  DaffNewsletterState,
} from '@daffodil/newsletter/state';

import {
  daffNewsletterStateReducer as reducer,
  daffNewsletterReducerInitialState as initialState,
} from './newsletter.reducer';


describe('@daffodil/newsletter/state | reducer', () => {
  it('should create an initial state', () => {
    const expectedInitialState: DaffNewsletterState = {
      ...daffOperationInitialState,
      success: false,
    };
    const action = <any>{};
    expect(reducer(undefined, action)).toEqual(expectedInitialState);
  });

  it('should start loading when a subscription attempt occurs', () =>{
    const payload: DaffNewsletterSubmission = 'yes@gmail.com';
    const action = new DaffNewsletterSubscribe(payload);
    expect(reducer(undefined, action).daffState).toEqual(DaffState.Updating);
  });

  it('should start loading when a retry occurs', () =>{
    const payload: DaffNewsletterSubmission = 'yes@gmail.com';
    const action = new DaffNewsletterRetry(payload);
    expect(reducer(undefined, action).daffState).toEqual(DaffState.Updating);
  });

  it('should cancel loading the newsletter', () => {
    const action = new DaffNewsletterCancel();
    const loadingState: DaffNewsletterState = {
      ...initialState,
      daffState: DaffState.Updating,
    };
    expect(reducer(loadingState, action).daffState).toEqual(DaffState.Stable);
  });

  it('should cancel loading and have an error message if the subscribe fails', () =>{
    const error = { code: 'code', message: 'Failed to subscribe to newsletter' };
    const action = new DaffNewsletterSubscribeFailure([error]);
    const state: DaffNewsletterState = {
      ...initialState,
      success: false,
    };
    const result = reducer(state, action);
    expect(result.success).toBeFalse();
    expect(result.daffState).toEqual(DaffState.Error);
    expect(result.daffErrors).toContain(error);
  });

  it('should set success to true after a successful subscription', () =>{
    const action = new DaffNewsletterSubscribeSuccess();
    const preSuccessState: DaffNewsletterState = {
      ...initialState,
      success: false,
    };
    const result = reducer(preSuccessState, action);
    expect(result.success).toBeTrue();
    expect(result.daffState).toEqual(DaffState.Stable);
  });

  it('should return to the intialState when reset', () => {
    const action = new DaffNewsletterReset();
    const successState = {
      ...initialState,
      success: true,
    };
    expect(reducer(successState, action)).toEqual(initialState);
  });
});
