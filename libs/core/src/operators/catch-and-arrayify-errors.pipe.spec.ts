import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { catchAndArrayifyErrors } from './catch-and-arrayify-errors.pipe';

class TestError extends DaffInheritableError implements DaffError {
  public readonly code = 'test';

  constructor(message?: string) {
    super(message);
  }
}

describe('@daffodil/core | catchAndArrayifyErrors', () => {
  let result: Observable<any>;
  let cb: jasmine.Spy;

  beforeEach(() => {
    cb = jasmine.createSpy();
    cb.and.returnValue(of(null));
  });

  describe('when an error is thrown into the stream', () => {
    let error: DaffError;

    beforeEach(() => {
      error = new TestError('message');
      result = throwError(() => error).pipe(
        catchAndArrayifyErrors(cb),
      );
    });

    it('should invoke the callback with an array of that error', (done) => {
      result.subscribe(() => {
        expect(cb).toHaveBeenCalledWith([error]);
        done();
      });
    });
  });

  describe('when an array of errors is thrown into the stream', () => {
    let errors: DaffError[];

    beforeEach(() => {
      errors = [new TestError('message1'), new TestError('message2')];
      result = throwError(() => errors).pipe(
        catchAndArrayifyErrors(cb),
      );
    });

    it('should invoke the callback with that array', (done) => {
      result.subscribe(() => {
        expect(cb).toHaveBeenCalledWith(errors);
        done();
      });
    });
  });

  describe('when nothing is thrown into the stream', () => {
    beforeEach(() => {
      result = of('test').pipe(
        catchAndArrayifyErrors(cb),
      );
    });

    it('should not invoke the callback ', (done) => {
      result.subscribe(() => {
        expect(cb).not.toHaveBeenCalled();
        done();
      });
    });
  });
});
