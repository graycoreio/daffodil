import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';
import { DaffNewsletterUnion } from '@daffodil/newsletter';

@Injectable()
export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
  
  constructor(private hubspotService: DaffHubspotFormsService) {}
  
  send(payload: DaffNewsletterUnion): Observable<any> {
    return this.hubspotService.submit(payload)
  }  
}
