import { InjectionToken } from '@angular/core';

export const DaffAuthorizeNetConfigToken = new InjectionToken('DaffAuthorizeNetConfigToken');

/**
 * An interface for providing @daffodil/authorizenet with needed configurations specific to your authorizenet
 * endpoint. The production flag will switch between the sandbox and production endpoint depending on the value
 * given.
 */
export interface DaffAuthorizeNetConfig {
	clientKey: string;
	apiLoginID: string;
	production: boolean;
}
