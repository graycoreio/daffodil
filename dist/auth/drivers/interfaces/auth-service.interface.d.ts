import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export interface DaffAuthServiceInterface {
    /**
     * Checks the validity of an auth token.
     */
    check(): Observable<void>;
}
export declare const DaffAuthDriver: InjectionToken<DaffAuthServiceInterface>;
