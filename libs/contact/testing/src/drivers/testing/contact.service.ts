import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DaffContactServiceInterface, DaffContactUnion } from '@daffodil/contact';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingContactService implements DaffContactServiceInterface<DaffContactUnion, any>{
  send(payload: DaffContactUnion): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}