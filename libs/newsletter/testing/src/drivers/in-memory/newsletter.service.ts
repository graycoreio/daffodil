import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffNewsletterServiceInterface, DaffNewsletterSubmission } from '@daffodil/newsletter';
import { DaffNewsletterUnion } from 'libs/newsletter/src/models/newsletter-union';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 * 
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, DaffNewsletterUnion>{ 
  constructor() {}

  send(email: DaffNewsletterUnion): Observable<DaffNewsletterUnion> {
    return of(email);
  }
}