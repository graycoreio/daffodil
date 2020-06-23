import { InjectionToken } from '@angular/core';

export const DaffAuthorizeNetConfigToken = new InjectionToken('DaffAuthorizeNetConfigToken');

export interface DaffAuthorizeNetConfig {
	clientKey: string;
	apiLoginID: string;
	acceptJsUrl: string;
}
