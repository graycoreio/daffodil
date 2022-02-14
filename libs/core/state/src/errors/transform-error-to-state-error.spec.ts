import { DaffError } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';

import { daffTransformErrorToStateError } from './transform-error-to-state-error';

class TestError extends Error implements DaffError {
  constructor(public code: string, public message: string, public recoverable: boolean) {
    super(message);
  }
}

describe('@daffodil/core/state | daffTransformErrorToStateError', () => {
  let error: TestError;
  let stateError: DaffStateError;

  let message: string;
  let code: string;
  let recoverable: boolean;

  beforeEach(() => {
    code = 'code';
    message = 'message';
    recoverable = true;
    error = new TestError(code, message, recoverable);

    stateError = daffTransformErrorToStateError(error);
  });

  it('should transform the code', () => {
    expect(stateError.code).toEqual(code);
  });

  it('should transform the message', () => {
    expect(stateError.message).toEqual(message);
  });

  it('should transform recoverable', () => {
    expect(stateError.recoverable).toEqual(recoverable);
  });
});
