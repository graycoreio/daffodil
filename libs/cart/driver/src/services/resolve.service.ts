import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  of,
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffDriverResponse } from '@daffodil/driver';

import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '../interfaces/public_api';
import { daffCartDriverHandleCartNotFound } from '../operators/public_api';

/**
 * A service for resolving the cart in a way that is tolerant of errors and invalid or missing cart IDs in storage.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartDriverResolveService<T extends DaffCart = DaffCart> {
  constructor(
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}

  /**
   * Resolves the cart, creating if no ID is in storage.
   * If the cart cannot be found, removes the ID from storage.
   * If the cart cannot be resolved, throws an error.
   */
  getCartOrFail(): Observable<DaffDriverResponse<T>> {
    return this.getCartIdOrFail().pipe(
      switchMap((cartId) => this.driver.get(cartId)),
      daffCartDriverHandleCartNotFound(this.storage),
    );
  }

  /**
   * Retrieves the cart ID, creating if no ID is in storage.
   */
  getCartIdOrFail(): Observable<DaffCart['id']> {
    const cartId = this.storage.getCartId();
    return cartId
      ? of(cartId)
      : this.driver.create().pipe(
        map(({ id }) => id),
        tap((id) => this.storage.setCartId(id)),
      );
  }
}
