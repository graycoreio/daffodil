import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export const DaffNewsletterDriver = new InjectionToken<DaffNewsletterServiceInterface<DaffNewsletterSubmission, unknown>>('DaffNewsletterDriver');

export interface DaffNewsletterServiceInterface<T extends DaffNewsletterSubmission, V> {
	send(email: T): Observable<V>;
}
