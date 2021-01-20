import { Observable } from 'rxjs';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
export declare class DaffContactHubspotService implements DaffContactServiceInterface<DaffContactUnion, any> {
    private hubspotService;
    constructor(hubspotService: DaffHubspotFormsService);
    send(payload: DaffContactUnion): Observable<any>;
}
