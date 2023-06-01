import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffNewsletterSubmission,
  DaffNewsletterResponse,
} from '@daffodil/newsletter';
// TODO: add documentation
export const DaffNewsletterDriver: InjectionToken<DaffNewsletterServiceInterface> = new InjectionToken('DaffNewsletterDriver');
// TODO: add documentation
export interface DaffNewsletterServiceInterface {
  send(email: DaffNewsletterSubmission): Observable<DaffNewsletterResponse>;
}
