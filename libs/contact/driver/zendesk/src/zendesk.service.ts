import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactServiceInterface } from '@daffodil/contact';

import {
  DaffContactZendeskDriverConfigToken,
  DaffContactZendeskDriverConfig,
} from './config';

/**
 * The concrete implementation of the @daffodil/contact driver for Zendesk.
 */
@Injectable()
export class DaffContactZendeskDriverService
implements DaffContactServiceInterface<any, any> {
	/**
	 * The anonymous request resource endpoint of Zendesk.
	 */
	readonly ENDPOINT: string = '/api/v2/requests.json';

	constructor(
		private httpClient: HttpClient,
		@Inject(DaffContactZendeskDriverConfigToken)
		private config: DaffContactZendeskDriverConfig,
	) {}

	/**
	 * Sends a contact form submission to zendesk
	 */
	send(form: any): Observable<any> {
	  return this.httpClient.post(this.config.domain + this.ENDPOINT, {
	    request: {
	      requester: {
	        name: form.name,
	        email: form.email,
	      },
	      subject: 'Contact Form Request',
	      comment: { body: form.message },
	    },
	  });
	}
}
