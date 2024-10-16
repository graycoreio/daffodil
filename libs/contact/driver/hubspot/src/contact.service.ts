import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DAFF_CONTACT_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffContactHubspotService
implements DaffContactServiceInterface<DaffContactUnion, any> {
  constructor(@Inject(DAFF_CONTACT_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsService) {}

  send(payload: DaffContactUnion): Observable<any> {
    return this.hubspotService.submit(payload);
  }
}
