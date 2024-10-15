import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';

export interface DaffAuthServiceInterface {
  /**
   * Checks the validity of an auth token.
   */
  check(): Observable<void>;
}

export const {
  token: DaffAuthDriver,
  provider: daffProvideAuthDriver,
} = createSingletonInjectionToken<DaffAuthServiceInterface>('DaffAuthDriver');
