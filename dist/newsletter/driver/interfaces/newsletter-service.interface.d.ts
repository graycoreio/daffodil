import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { DaffNewsletterSubmission } from '../../models/newsletter.model';
export declare const DaffNewsletterDriver: InjectionToken<unknown>;
export interface DaffNewsletterServiceInterface<T extends DaffNewsletterSubmission, V> {
    send(email: T): Observable<V>;
}
