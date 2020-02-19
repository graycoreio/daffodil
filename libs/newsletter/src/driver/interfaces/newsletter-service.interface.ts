import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { DaffNewsletterSubmission } from '../../models/newsletter.model';

export const DaffNewsletterDriver = new InjectionToken('DaffNewsletterDriver');
export interface DaffNewsletterServiceInterface<T extends DaffNewsletterSubmission, V> {
	send(email: T): Observable<V>;
}