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
  send(email: DaffNewsletterSubmission): Observable<DaffNewsletterResponse>;
}
