import { InjectionToken } from '@angular/core';

/**
 * A token that represents the version to use for Accept.JS calls
 * By default, we assume you're using the sandbox (false) for safety purposes.
 */
export const DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION = new InjectionToken<
	boolean
>('DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION', {
	providedIn: 'root',
	factory: () => false,
});
