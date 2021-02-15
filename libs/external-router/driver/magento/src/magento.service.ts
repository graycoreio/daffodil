import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import { DaffResolvableRoute } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';

import { MagentoResolveUrl } from './graphql/queries/resolve-url';
import { transformResolutionToResolvableRoute } from './transforms/resolution-to-resolvable-route';
import { MagentoResolution } from './model/resolution';

/**
 * The DaffExternalRouterMagentoDriver is responsible for translating an
 * arbitrary URI into a DaffResolvableRoute with Magento environments.
 */
@Injectable({
	providedIn: 'root',
})
export class DaffExternalRouterMagentoDriver
	implements DaffExternalRouterDriverInterface {
	constructor(private apollo: Apollo) {}

	resolve(url: string): Observable<DaffResolvableRoute> {
		return this.apollo
			.query<MagentoResolution>({
				query: MagentoResolveUrl,
				variables: {
					url: url,
				},
			})
			.pipe(
				map(response => transformResolutionToResolvableRoute(response.data)),
			);
	}
}
