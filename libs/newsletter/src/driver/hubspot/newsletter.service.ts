import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DaffNewsletterUnion } from '../../models/newsletter-union';
import { DaffNewsletterServiceInterface } from '../interfaces/newsletter-service.interface';

export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
  
  constructor(private hubspotService: DaffHubspotFormsService) {}
  
  send(payload: DaffNewsletterUnion): Observable<any> {
    return this.hubspotService.submit(payload)
  }  
}
