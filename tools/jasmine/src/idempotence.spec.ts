import { setup } from './index';

describe('@daffodil/core/testing/jasmine | idempotenceMatcher', () => {
  const anArityOneIdempotentFunction = (a: number) => a;
  const anArityOneNonIdempotentFunction =  (a: number) => a * 2;
  const anArityTwoIdempotentFunctionOverTheSecondArgument = (a: number, b: number) => a * 2;

  setup();

  describe('testing the idempotence of an arity 1 function', () => {
    it('should return true if the function is idempotent', () => {
      expect((idempotentArg?: number) => (anArityOneIdempotentFunction(idempotentArg || 2))).toBeIdempotent();
    });

    it('should return false if the function is not idempotent', () => {
      expect((idempotentArg?: number) => (anArityOneNonIdempotentFunction(idempotentArg || 2))).not.toBeIdempotent();
    });
  });

  describe('testing the idempotence of an arity 2 function', () => {
    it('should return true if the function is idempotent over the specified argument', () => {
      expect((idempotentArg?: number) => (anArityTwoIdempotentFunctionOverTheSecondArgument(2, idempotentArg || 2))).toBeIdempotent();
    });

    it('should return false if the function is not idempotent over the specified argument', () => {
      expect((idempotentArg?: number) => (anArityTwoIdempotentFunctionOverTheSecondArgument(idempotentArg || 2, 2))).not.toBeIdempotent();
    });
  });
});
