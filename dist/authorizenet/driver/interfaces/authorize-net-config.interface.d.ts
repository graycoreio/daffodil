import { InjectionToken } from '@angular/core';
export declare const DaffAuthorizeNetConfigToken: InjectionToken<unknown>;
/**
 * An interface for providing @daffodil/authorizenet with needed configurations specific to your authorizenet
 * endpoint.
 */
export interface DaffAuthorizeNetConfig {
    clientKey: string;
    apiLoginID: string;
}
