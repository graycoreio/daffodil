import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  DaffContactRequest,
  DaffContactResponse,
  DaffContactServiceInterface,
} from '@daffodil/contact/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingContactService implements DaffContactServiceInterface {
  send(payload: DaffContactRequest): Observable<DaffContactResponse> {
    return of({ message: 'success' }).pipe(delay(10));
  }
}
