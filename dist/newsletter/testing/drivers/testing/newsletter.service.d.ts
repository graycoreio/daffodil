import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { Observable } from 'rxjs';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter';
export declare class DaffTestingNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
    send(payload: DaffNewsletterUnion): Observable<any>;
}
