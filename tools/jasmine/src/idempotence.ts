import MatchersUtil = jasmine.MatchersUtil;

/**
 * A matcher for jasmine that allows you to test whether or not a function
 * is idempotent.
 *
 * For higher arity functions, see the specs for this matcher.
 *
 * @example
 * ```ts
 * it('should return true if the function is idempotent', () => {
 *     expect((idempotentArg?: number) => (anArityOneIdempotentFunction(idempotentArg || 2))).toBeIdempotent();
 * });
 * ```
 */
export const idempotenceMatcher = <T>(matchersUtil: MatchersUtil) => ({
  compare: (actual: (arg?: T) => T, expected: void) => {
    const result = {
      pass: false,
      message: '',
    };
    result.pass = matchersUtil.equals(actual(), actual(actual()));
    if(!result.pass){
      result.message = 'Expected function to be idempotent';
    };
    return result;
  },
});
