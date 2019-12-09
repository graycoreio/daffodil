import { DaffContactState, reducer } from './contact.reducer';
import { DaffContactSubmit, DaffContactRetry, DaffContactCancel, DaffContactFailedSubmit, DaffContactSuccessSubmit, DaffContactReset } from '../actions/contact.actions';

describe('the contact reducer', () => {
  it('should create an initial state', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: false,
      success: false
    };

    const action = {} as any;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it('should start loading when a submit action occurs', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: true,
      success: false
    };
    const payload = { email: '', firstName: '', lastName: '' };
    const action = new DaffContactSubmit(payload);

    expect(reducer(undefined, action)).toEqual(expectedState)
  });
  it('should start loading when a retry action occurs', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: true,
      success: false
    };
    const payload = { email: '', firstName: '', lastName: '' };
    const action = new DaffContactRetry(payload);

    expect(reducer(undefined, action)).toEqual(expectedState)
  });
  it('should stop loading when a cancel action occurs', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: false,
      success: false
    };
    const action = new DaffContactCancel

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it('should return an error and stop loading if a failure action occurs', () => {
    const error_message = ['Failed to submit contact forum'];
    const expectedState: DaffContactState = {
      errors: error_message,
      loading: false,
      success: false
    };
    const action = new DaffContactFailedSubmit(error_message);

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it('should set success to equal true and stop loading after a success action occurs', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: false,
      success: true
    };
    const action = new DaffContactSuccessSubmit

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it('it should reset to the intialState when a reset action occurs', () => {
    const expectedState: DaffContactState = {
      errors: null,
      loading: false,
      success: false
    };
    const action = new DaffContactReset

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});