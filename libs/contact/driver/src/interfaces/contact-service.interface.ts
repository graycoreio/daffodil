import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const DaffContactDriver = new InjectionToken<DaffContactServiceInterface<any, any>>('DaffContactDriver');
export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}
