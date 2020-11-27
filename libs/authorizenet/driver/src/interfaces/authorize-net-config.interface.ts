import { InjectionToken } from '@angular/core';

export const DaffAuthorizeNetConfigToken = new InjectionToken('DaffAuthorizeNetConfigToken');

/**
 * An interface for providing @daffodil/authorizenet with needed configurations specific to your authorizenet
 * endpoint.
 */
export interface DaffAuthorizeNetConfig {
	clientKey: string;
	apiLoginID: string;
}
