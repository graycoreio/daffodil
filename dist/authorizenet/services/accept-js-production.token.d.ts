import { InjectionToken } from '@angular/core';
/**
 * A token that represents the version to use for Accept.JS calls.
 * A "true" value configures the package to use the production AcceptJs endpoint,
 * and a "false" value configures it to use the Sandbox AcceptJs endpoint.
 * By default, we assume you're using the sandbox (false).
 */
export declare const DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION: InjectionToken<boolean>;
