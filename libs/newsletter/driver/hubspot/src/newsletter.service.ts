import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffHubspotFormsInterface } from '@daffodil/driver/hubspot';
import { HubspotResponse } from '@daffodil/driver/hubspot/models/hubspot-response';
import {
  DaffNewsletterResponse,
  DaffNewsletterSubmission,
} from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

/**
 * @inheritdoc
 */
@Injectable()
export class DaffNewsletterHubspotService implements DaffNewsletterServiceInterface {

  constructor(@Inject(DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsInterface) {}

  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse> {
    return this.hubspotService.submit({
      email: payload,
    }).pipe(
      map((response: HubspotResponse): DaffNewsletterResponse => ({
        message: response.inlineMessage,
      }),
      ));
  }
}
