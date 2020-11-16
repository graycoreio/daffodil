import { InjectionToken } from '@angular/core';

/**
 * The zendesk driver configuration object
 */
export interface DaffContactZendeskDriverConfig {
	/**
	 * The fully-qualified domain to the Zendesk account,
	 * e.g. https://daffodil.zendesk.com
	 */
	domain: string;
}
/**
 * The dock
 */
export const DaffContactZendeskDriverConfigToken = new InjectionToken<
	DaffContactZendeskDriverConfig
>('DaffContactZendeskDriverConfigToken');
