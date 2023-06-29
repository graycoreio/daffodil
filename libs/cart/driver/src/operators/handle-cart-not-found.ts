import {
  Observable,
  catchError,
  pipe,
  throwError,
} from 'rxjs';

import { DaffCartStorageService } from '@daffodil/cart';

import { DaffCartNotFoundError } from '../errors/public_api';

/**
 * If a {@link DaffCartNotFoundError} is thrown into the stream,
 * the cart ID is removed from storage.
 * All errors are thrown back into the stream.
 */
export const daffCartDriverHandleCartNotFound = <T>(storage: DaffCartStorageService) => pipe<Observable<T>, Observable<T>>(
  catchError((error) => {
    switch (true) {
      case error instanceof DaffCartNotFoundError:
        storage.removeCartId();
        return throwError(() => error);

      default:
        return throwError(() => error);
    }
  }),
);
