import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Observable,
  map,
  of,
  switchMap,
  throwError,
} from 'rxjs';

import {
  DaffAuthStorageService,
  DaffAuthMissingTokenError,
} from '@daffodil/auth';

import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '../interfaces/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffAuthDriverTokenCheck {
  constructor(
    private storage: DaffAuthStorageService,
    @Inject(DaffAuthDriver) private driver: DaffAuthServiceInterface,
  ) {}

  /**
   * Checks if the auth token in storage is valid.
   * If there is not an auth token in storage, the driver is not called
   * and an error is immediately thrown.
   */
  check(): Observable<void> {
    return of(null).pipe(
      switchMap(() => {
        const token = this.storage.getAuthToken();

        if (!token) {
          return throwError(() => new DaffAuthMissingTokenError('There is not an auth token in storage'));
        }

        return this.driver.check();
      }),
    );
  }
}
