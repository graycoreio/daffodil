import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffContactRequest,
  DaffContactResponse,
  DaffContactServiceInterface,
} from '@daffodil/contact/driver';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DAFF_CONTACT_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffContactHubspotService implements DaffContactServiceInterface {
  constructor(@Inject(DAFF_CONTACT_HUBSPOT_FORMS_TOKEN) private hubspotService: DaffHubspotFormsService) {}

  send(payload: DaffContactRequest): Observable<DaffContactResponse> {
    return this.hubspotService.submit(payload).pipe(map((r) => ({ message: r.inlineMessage })));
  }
}
