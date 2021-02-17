import { DaffResolvableRoute } from '@daffodil/external-router';
import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

/**
 * The token for the `@daffodil/external-router` driver.
 */
export const DaffExternalRouterDriver = new InjectionToken<
	DaffExternalRouterDriverInterface
>('DaffExternalRouterDriver');

/**
 * The interface for a @daffodil/external-router driver.
 * 
 * This driver is responsible for translating a URL into a Route consumable by 
 * Daffodil.
 */
export interface DaffExternalRouterDriverInterface {
	resolve(url: string): Observable<DaffResolvableRoute>;
}
