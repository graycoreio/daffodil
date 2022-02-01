import { DaffError } from './error.interface';
import { DaffInheritableError } from './inheritable-error';
import { daffIsError } from './is-error';

class MockError extends DaffInheritableError implements DaffError {
  code = 'MockError';
}

describe('@daffodil/core | daffIsError', () => {
  let daffError: MockError;
  let notDaffError: Error;
  let result: boolean;

  beforeEach(() => {
    daffError = new MockError('A Daffodil error');
    notDaffError = new Error('Not a Daffodil error');
  });

  describe('when the error is a daffodil error', () => {
    beforeEach(() => {
      result = daffIsError(daffError);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the error is not a daffodil error', () => {
    beforeEach(() => {
      result = daffIsError(notDaffError);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });
});
