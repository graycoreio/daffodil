import { pipe, timer, throwError } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';

/**
 * Retries failed Observables
 * @param maxTries The maximum number of tries the observable will be tried
 * @param ms The initial amount of time 
 */
export function backoff(maxTries: number, ms: number) {
	return pipe(
		retryWhen(attempt => attempt.pipe(
			mergeMap((shadowedAttempt: Error, i) => {
				if(i >= maxTries) return throwError(shadowedAttempt);
				return timer(ms*Math.pow(2,i));
			})
		))
	);
}
