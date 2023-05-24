import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffNewsletterResponse, DaffNewsletterSubmission } from "@daffodil/newsletter";
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';
import { HubspotResponse } from '@daffodil/driver/hubspot/models/hubspot-response';
import { map } from "rxjs/operators";

@Injectable()
export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface {

  constructor(@Inject(DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsService) {}

  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse> {
    if (typeof payload === 'string') {
      payload = {
        email: payload
      }
    }

    return this.hubspotService.submit(payload).pipe(
      map((response: HubspotResponse): DaffNewsletterResponse => {
        return {
          message: response.inlineMessage
        }
      }
    ));
  }
}
