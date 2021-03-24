import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, DaffNewsletterUnion>{
  url = '/api/newsletters/';

  constructor(private http: HttpClient) { }

  /**
   * Sends your newsletter submission data.
   *
   * @param payload DaffNewsletterUnion
   * @returns An Observable of DaffNewsletterUnion
   */
  send(payload: DaffNewsletterUnion): Observable<DaffNewsletterUnion> {
    return this.http.post<DaffNewsletterUnion>(this.url, payload);
  }

}
