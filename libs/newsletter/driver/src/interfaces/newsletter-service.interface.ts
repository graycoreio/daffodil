import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffNewsletterSubmission,
  DaffNewsletterResponse,
} from '@daffodil/newsletter';

/**
 * The token for the newsletter driver.
 */
export const DaffNewsletterDriver: InjectionToken<DaffNewsletterServiceInterface> = new InjectionToken('DaffNewsletterDriver');

/**
 * The interface responsible for sending newsletter submissions.
 */
export interface DaffNewsletterServiceInterface {
  /**
   * Sends a newsletter submission and returns a response.
   *
   * @param email The email to store for the newsletter subscription.
   *
   * @returns The response from the newsletter submission.
   */
  send(email: DaffNewsletterSubmission): Observable<DaffNewsletterResponse>;
}
