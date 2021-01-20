import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
export declare const DaffContactDriver: InjectionToken<unknown>;
export interface DaffContactServiceInterface<T, V> {
    send(payload: T): Observable<V>;
}
