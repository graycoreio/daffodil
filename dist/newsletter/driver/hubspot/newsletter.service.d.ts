import { Observable } from 'rxjs';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffNewsletterUnion } from '../../models/newsletter-union';
import { DaffNewsletterServiceInterface } from '../interfaces/newsletter-service.interface';
export declare class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
    private hubspotService;
    constructor(hubspotService: DaffHubspotFormsService);
    send(payload: DaffNewsletterUnion): Observable<any>;
}
