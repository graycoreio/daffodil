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
 * The DaffExternalRouterDriverInterface describes the interface that a service must
 * meet to be considered a driver for `@daffodil/external-router`.
 */
export interface DaffExternalRouterDriverInterface {
	resolve(url: string): Observable<DaffResolvableRoute>;
}
