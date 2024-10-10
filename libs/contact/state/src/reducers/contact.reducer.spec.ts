import {
  DaffContactSubmit,
  DaffContactRetry,
  DaffContactCancel,
  DaffContactSubmitFailure,
  DaffContactSubmitSuccess,
  DaffContactReset,
} from '@daffodil/contact/state';
import { DaffState } from '@daffodil/core/state';

import {
  DaffContactState,
  daffContactStateReducer as reducer,
  daffContactReducerInitialState as initialState,
} from './contact.reducer';

describe('the contact reducer', () => {
  it('should create an initial state', () => {
    const action = <any>{};
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should start loading when a submit action occurs', () => {
    const payload = { email: '', firstName: '', lastName: '' };
    const action = new DaffContactSubmit(payload);

    expect(reducer(undefined, action).daffState).toEqual(DaffState.Updating);
  });

  it('should start loading when a retry action occurs', () => {
    const payload = { email: '', firstName: '', lastName: '' };
    const action = new DaffContactRetry(payload);

    expect(reducer(undefined, action).daffState).toEqual(DaffState.Updating);
  });

  it('should stop loading when a cancel action occurs', () => {
    const action = new DaffContactCancel();

    expect(reducer(undefined, action).daffState).toEqual(DaffState.Stable);
  });

  it('should return an error and stop loading if a failure action occurs', () => {
    const error = { code: 'code', message: 'Failed to submit' };
    const action = new DaffContactSubmitFailure([error]);
    const result = reducer(undefined, action);

    expect(result.daffErrors).toContain(error);
    expect(result.daffState).toContain(DaffState.Error);
  });

  it('should set success to equal true and stop loading after a success action occurs', () => {
    const action = new DaffContactSubmitSuccess();
    const result = reducer(undefined, action);

    expect(result.success).toBeTrue();
    expect(result.daffState).toContain(DaffState.Stable);
  });

  it('it should reset to the intialState when a reset action occurs', () => {
    const action = new DaffContactReset();

    expect(reducer(undefined, action)).toEqual(initialState);
  });
});
