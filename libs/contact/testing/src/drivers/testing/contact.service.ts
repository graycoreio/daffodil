import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DaffContactServiceInterface } from '@daffodil/contact';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingContactService implements DaffContactServiceInterface<string, any>{
  send(payload: string): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}