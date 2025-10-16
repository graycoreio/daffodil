
import {
  Inject,
  Injectable,
  DOCUMENT,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import {
  DaffExternallyResolvableUrl,
  DaffExternalRouterClientError,
  DaffExternalRouterNotFoundError,
  DaffExternalRouterServerError,
} from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { MagentoRouteResponse } from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv243 } from './graphql/queries/resolve';
import { transformResolutionToResolvableUrlv243 } from './transforms/resolution-to-resolvable-url';
import { transformClientUrls } from './transforms/transform-client-urls';


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
    @Inject(DOCUMENT) private document: Document,
  ) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return this.apollo
      .query<MagentoRouteResponse>({
        query: MagentoResolveUrlv243,
        variables: {
          url,
        },
      })
      .pipe(
        map((response) => response.data.route),
        map((route) => transformClientUrls(route, this.document.location.origin)),
        map(route => transformResolutionToResolvableUrlv243(route)),
        map((resolution) => {
          if (!resolution || resolution.code === 404) {
            throw new DaffExternalRouterNotFoundError();
          }

          if (resolution.code >= 400 && resolution.code < 500) {
            throw new DaffExternalRouterClientError();
          }

          if (resolution.code >= 500) {
            throw new DaffExternalRouterServerError();
          }

          return resolution;
        }),
      );
  }
}
