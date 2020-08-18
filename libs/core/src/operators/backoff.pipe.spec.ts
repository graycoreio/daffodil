import { of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { backoff } from './backoff.pipe';

describe('Core | Operators | Backoff', () => {
	let testScheduler: TestScheduler;

	beforeEach(() => {
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it(`should throw the error if the maximum tries is exceeded
			 should retry attempts with delays in powers of 2`, () => {
		testScheduler.run(({expectObservable}) => {
			const expectedMarble = '10ms 20ms 40ms 80ms #';
			const expectedValue = null;
			const expectedError = new Error('error message');
			const source$ = of(null).pipe(
				switchMap(() => throwError(expectedError)),
				backoff(4, 10)
			);
			expectObservable(source$).toBe(expectedMarble, expectedValue, expectedError);
		})
	});

	it('should succeed if the stream is successful after a backoff retry', () => {
		let count = 0;
		testScheduler.run(({expectObservable}) => {
			const value = 'b';
			const expectedMarble = '20ms 40ms (a|)';
			const expectedValue = { a: value };
			const expectedError = new Error('error message');
			const source$ = of(value).pipe(
				tap(() => count++),
				switchMap(() => count < 3 ? throwError(expectedError) : of(value)),
				backoff(4, 20)
			);
			expectObservable(source$).toBe(expectedMarble, expectedValue, expectedError);
		});
	});

	it('should pass through a successful stream', () => {
		testScheduler.run(({expectObservable}) => {
			const value = 'b';
			const expectedMarble = '(a|)';
			const expectedValue = { a: value };
			const source$ = of(value).pipe(
				backoff(3, 10)
			);
			expectObservable(source$).toBe(expectedMarble, expectedValue);
		});
	});
});
