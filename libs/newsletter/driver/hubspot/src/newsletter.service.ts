import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffNewsletterResponse, DaffNewsletterSubmission } from "@daffodil/newsletter";
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

@Injectable()
export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface {

  constructor(@Inject(DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsService) {}

  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse> {
    return this.hubspotService.submit(payload);
  }
}
