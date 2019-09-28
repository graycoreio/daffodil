import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffNewsletterServiceInterface, DaffNewsletterSubmission } from '@daffodil/newsletter';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 * 
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterSubmission, DaffNewsletterSubmission>{
  url = 'api/submissions/submission';

  constructor(private http: HttpClient) {}

  send(email: DaffNewsletterSubmission): Observable<DaffNewsletterSubmission> {
    return this.http.post<DaffNewsletterSubmission>(this.url + 'submission', email)
  }

}