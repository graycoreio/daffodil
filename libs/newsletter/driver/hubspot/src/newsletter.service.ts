import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

@Injectable({
  providedIn: 'root',
})
export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {

  constructor(@Inject(DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsService) {}

  send(payload: DaffNewsletterUnion): Observable<any> {
    return this.hubspotService.submit(payload);
  }
}
