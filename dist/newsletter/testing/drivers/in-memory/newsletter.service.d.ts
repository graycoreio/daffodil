import { Observable } from 'rxjs';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { HttpClient } from '@angular/common/http';
/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * @Param HttpClient
 */
export declare class DaffInMemoryNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, DaffNewsletterUnion> {
    private http;
    url: string;
    constructor(http: HttpClient);
    /**
     * Sends your newsletter submission data.
     *
     * @param payload DaffNewsletterUnion
     * @returns An Observable of DaffNewsletterUnion
     */
    send(payload: DaffNewsletterUnion): Observable<DaffNewsletterUnion>;
}
