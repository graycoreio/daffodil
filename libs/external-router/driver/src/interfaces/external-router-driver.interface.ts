import { DaffResolvableRoute } from '@daffodil/external-router';
import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

/**
 * The token for the `@daffodil/external-router` driver.
 */
export const DaffExternalRouterDriver = new InjectionToken<
	DaffExternalRouterDriverInterface
>('DaffExternalRouterDriver');

export interface DaffExternalRouterDriverInterface {
	resolve(url: string): Observable<DaffResolvableRoute>;
}
