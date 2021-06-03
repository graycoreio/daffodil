import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { daffUriTruncateQueryFragment } from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { MagentoUrlResolverResponse } from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv241 } from './graphql/queries/resolve-url-v2.4.1';
import { transformResolutionToResolvableUrlv241 } from './transforms/resolution-to-resolvable-url';

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
  constructor(private apollo: Apollo) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.apollo
      .query<MagentoUrlResolverResponse>({
        query: MagentoResolveUrlv241,
        variables: {
          url: daffUriTruncateQueryFragment(url),
        },
      })
      .pipe(map(response => transformResolutionToResolvableUrlv241(response.data.urlResolver)));
  }
}
