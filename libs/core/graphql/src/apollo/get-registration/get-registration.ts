import { InjectionToken } from '@angular/core';

/**
 * A multi-provider injection token of the operation names of apollo queries that should 
 * be GETs instead of POSTs. This is needed because apollo sends POST requests by default and daffodil
 * defines all of the operation names. Each daffodil package will automatically register the requests
 * that should be GETs when its driver package is loaded into the app. Simply filter on these provided
 * request names for each outgoing request.
 */
export const DAFF_APOLLO_GET_REQUESTS = new InjectionToken<string>('DAFF_APOLLO_GET_REQUESTS', {
	factory: () => ''
});
