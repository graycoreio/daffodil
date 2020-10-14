import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffContactServiceInterface } from '@daffodil/contact';
import { DaffContactZendeskConfigService } from './config.service';

@Injectable()
export class DaffContactZendeskService
	implements DaffContactServiceInterface<any, any> {

	/**
	 * The anonymous request resource endpoint of Zendesk.
	 */
	readonly ENDPOINT: string = '/api/v2/requests.json';

	/**
	 * A method to determine the final URI to request to.
	 */
	private getEndpoint() {
		return this.config.getEndpoint() + this.ENDPOINT;
	}

	constructor(
		private httpClient: HttpClient,
		private config: DaffContactZendeskConfigService,
	) {}

	/**
	 * Sends a contact form submission to zendesk 
	 */
	send(form: any): Observable<any> {
		return this.httpClient.post(this.getEndpoint(), {
			request: {
				requester: { 
					name: form.name,
					email: form.email
				},
				subject: 'Contact Form Request',
				comment: { body: form.message },
			},
		});
	}
}
