import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const DaffContactDriver = new InjectionToken('DaffContactDriver');
export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}