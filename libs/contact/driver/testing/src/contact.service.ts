import { Injectable } from '@angular/core';
import {
  of,
  Observable,
} from 'rxjs';
import { delay } from 'rxjs/operators';

import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffTestingContactService implements DaffContactServiceInterface<DaffContactUnion, any>{
  send(payload: DaffContactUnion): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}
