import { Observable } from 'rxjs';

export interface DaffContactServiceInterface<T, V> {
  send(payload: T): Observable<V>;
}