import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { DaffNewsletterResponse } from "../newsletter_response";
// TODO: add documentation
export const DaffNewsletterDriver: InjectionToken<DaffNewsletterServiceInterface> = new InjectionToken('DaffNewsletterDriver');
// TODO: add documentation
export interface DaffNewsletterServiceInterface {
  send(email: DaffNewsletterSubmission): Observable<DaffNewsletterResponse>;
}
