import {
  Observable,
  isObservable,
  from,
} from 'rxjs';

import { MaybeAsync } from '../async/maybe.type';

/**
 * Converts a value to an observable.
 * If the value is an observable, just returns that observable.
 * If the value is a promise, converts it to an observable (see rxjs `from`).
 * If the value is neither, just returns an observable that immediately emits the value.
 */
export function observe<T>(val: MaybeAsync<T>): Observable<T> {
  return isObservable(val) ? val : from(Promise.resolve(val));
}
