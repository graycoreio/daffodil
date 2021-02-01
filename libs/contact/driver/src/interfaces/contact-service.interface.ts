import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const DaffContactDriver = new InjectionToken<DaffContactServiceInterface<any, any>>('DaffContactDriver');
export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}
