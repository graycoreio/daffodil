import { Injectable, Inject } from '@angular/core';
import {
	DaffContactZendeskConfigToken,
	DaffContactZendeskConfig,
} from './config';

@Injectable()
export class DaffContactZendeskConfigService {
	readonly ENDPOINT_PATTERN: string = 'https://{subdomain}.zendesk.com';

	constructor(
		@Inject(DaffContactZendeskConfigToken)
		private config: DaffContactZendeskConfig,
	) {}

	getEndpoint() {
		return this.ENDPOINT_PATTERN.replace('{subdomain}', this.config.subdomain);
	}
}
