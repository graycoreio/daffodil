import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { DaffNewsletterServiceInterface, DaffNewsletterSubmission } from '@daffodil/newsletter';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { catchError, map } from 'rxjs/operators';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 * 
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, DaffNewsletterUnion>{
  constructor() { }

  send(payload: DaffNewsletterUnion): Observable<DaffNewsletterUnion> {
    if (payload == undefined) {
      return throwError('Failed to subscribe');
    }
    return of(payload);
  }

}