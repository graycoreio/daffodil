import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import {
  DaffNewsletterResponse,
  DaffNewsletterSubmission,
} from '@daffodil/newsletter';

export const {
  /**
   * The token for the newsletter driver.
   */
  token: DaffNewsletterDriver,
  /**
   * Provider function for {@link DaffNewsletterDriver}.
   */
  provider: provideDaffNewsletterDriver,
} = createSingletonInjectionToken<DaffNewsletterServiceInterface>('DaffNewsletterDriver');

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
