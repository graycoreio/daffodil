import { Observable } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffContactDriver,
  provider: daffProvideContactDriver,
} = createSingleInjectionToken<DaffContactServiceInterface<any, any>>('DaffContactDriver');
export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}
