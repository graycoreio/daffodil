import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffNewsletterSubmission,
  DaffNewsletterResponse,
} from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface {
  url = '/api/newsletters/';

  constructor(private http: HttpClient) { }

  /**
   * Sends your newsletter submission data.
   *
   * @param payload DaffNewsletterSubmission
   * @returns An Observable of DaffNewsletterResponse
   */
  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse> {
    return this.http.post<DaffNewsletterResponse>(this.url, payload);
  }

}
