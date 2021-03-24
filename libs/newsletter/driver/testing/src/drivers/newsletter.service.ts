import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';
import { delay } from 'rxjs/operators';

import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

@Injectable({
  providedIn: 'root',
})

export class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any>{
  send(payload: DaffNewsletterUnion): Observable<any>{
    return of('Success').pipe(delay(10));
  }
}
