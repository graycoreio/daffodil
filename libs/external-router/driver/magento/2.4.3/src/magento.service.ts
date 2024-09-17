import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { MagentoRouteResponse } from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv243 } from './graphql/queries/resolve';
import { transformResolutionToResolvableUrlv243 } from './transforms/resolution-to-resolvable-url';


/**
 * The DaffExternalRouterMagentoDriver is responsible for translating an
 * arbitrary URI into a DaffExternallyResolvableUrl with Magento environments.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterMagentoDriver
implements DaffExternalRouterDriverInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.apollo
      .query<MagentoRouteResponse>({
        query: MagentoResolveUrlv243,
        variables: {
          url,
        },
      })
      .pipe(map(response => transformResolutionToResolvableUrlv243(response.data.route)));
  }
}
