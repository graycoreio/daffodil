import {
  RunHelpers,
  TestScheduler,
} from 'rxjs/testing';

/**
 * Creates an RxJS `TestScheduler` that asserts frames with jasmine's `toEqual`.
 *
 * Prefer {@link runMarbles}. Use this only when the test needs a reference to the scheduler itself,
 * e.g. to pass it to the code under test.
 *
 * @example
 * ```ts
 * it('should debounce', () => {
 *   const testScheduler = createTestScheduler();
 *
 *   testScheduler.run(({ cold, expectObservable }) => {
 *     expectObservable(cold('a').pipe(debounceTime(3, testScheduler))).toBe('---a');
 *   });
 * });
 * ```
 */
export const createTestScheduler = (): TestScheduler => new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

/**
 * Runs the callback in a fresh RxJS `TestScheduler` that asserts frames with jasmine's `toEqual`.
 *
 * @example
 * ```ts
 * it('should emit', () => {
 *   runMarbles(({ expectObservable }) => {
 *     expectObservable(of(1)).toBe('(a|)', { a: 1 });
 *   });
 * });
 * ```
 */
export const runMarbles = <T>(callback: (helpers: RunHelpers) => T): T => createTestScheduler().run(callback);
