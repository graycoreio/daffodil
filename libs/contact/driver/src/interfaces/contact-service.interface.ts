import { InjectionToken } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffContactRequest } from '../model/contact-request';
import { DaffContactResponse } from '../model/contact-response';

/**
 * The injection token that holds the reference to the DaffContactDriver.
 */
export const DaffContactDriver = new InjectionToken<DaffContactServiceInterface>('DaffContactDriver');

/**
 * The interface that a contact driver must implement.
 */
export interface DaffContactServiceInterface {
  send(payload: DaffContactRequest): Observable<DaffContactResponse>;
}
