import { Observable } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';

export interface DaffAuthServiceInterface {
  /**
   * Checks the validity of an auth token.
   */
  check(): Observable<void>;
}

export const {
  token: DaffAuthDriver,
  provider: daffProvideAuthDriver,
} = createSingleInjectionToken<DaffAuthServiceInterface>('DaffAuthDriver');
