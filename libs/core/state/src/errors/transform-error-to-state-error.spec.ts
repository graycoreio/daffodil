import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';

import { daffTransformErrorToStateError } from './transform-error-to-state-error';

class TestError extends DaffInheritableError implements DaffError {
  constructor(public code: string, public message: string) {
    super(message);
  }
}

describe('Core | State | Errors | daffTransformErrorToStateError', () => {
  let error: TestError;
  let stateError: DaffStateError;

  let message: string;
  let code: string;

  beforeEach(() => {
    code = 'code';
    message = 'message';
    error = new TestError(code, message);

    stateError = daffTransformErrorToStateError(error);
  });

  it('should transform the code', () => {
    expect(stateError.code).toEqual(code);
  });

  it('should transform the message', () => {
    expect(stateError.message).toEqual(message);
  });
});
