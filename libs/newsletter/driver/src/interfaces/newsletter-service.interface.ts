import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export const {
  token: DaffNewsletterDriver,
  provider: daffProvideNewsletterDriver,
} = createSingletonInjectionToken<DaffNewsletterServiceInterface<DaffNewsletterSubmission, unknown>>('DaffNewsletterDriver');

export interface DaffNewsletterServiceInterface<T extends DaffNewsletterSubmission, V> {
  send(email: T): Observable<V>;
}
