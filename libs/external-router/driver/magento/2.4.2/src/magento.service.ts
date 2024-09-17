import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { MagentoUrlResolverResponse } from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv242 } from './graphql/queries/resolve-url-v2.4.2';
import { transformResolutionToResolvableUrlv242 } from './transforms/resolution-to-resolvable-url';


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
      .query<MagentoUrlResolverResponse>({
        query: MagentoResolveUrlv242,
        variables: {
          url,
        },
      })
      .pipe(map(response => transformResolutionToResolvableUrlv242(response.data.urlResolver)));
  }
}
