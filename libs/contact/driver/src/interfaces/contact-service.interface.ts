import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';

export const {
  token: DaffContactDriver,
  provider: daffProvideContactDriver,
} = createSingletonInjectionToken<DaffContactServiceInterface<any, any>>('DaffContactDriver');
export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}
