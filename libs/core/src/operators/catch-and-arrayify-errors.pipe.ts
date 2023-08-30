import {
  Observable,
  pipe,
  OperatorFunction,
  catchError,
} from 'rxjs';

import { DaffError } from '../errors/public_api';

/**
 * Catches errors and invokes the callback with an array of errors.
 */
export const catchAndArrayifyErrors = <TReturn, TError extends DaffError = DaffError>(transformError: (errors: TError[]) => Observable<TReturn>) => pipe<Observable<unknown>, Observable<TReturn>>(
  <OperatorFunction<unknown, TReturn>>catchError((err: TError | TError[]) => transformError(Array.isArray(err) ? err : [err])),
);
