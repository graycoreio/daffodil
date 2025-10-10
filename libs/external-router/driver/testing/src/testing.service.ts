import {
  Injectable,
  Inject,
} from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  DaffExternalRouterClientError,
  DaffExternalRouterNotFoundError,
  DaffExternalRouterServerError,
} from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverTestingConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
} from './config';

/**
 * The DaffExternalRouterTestingDriver is responsible for translating an
 * arbitrary URI into a DaffExternallyResolvableUrl in testing environments.
 *
 * @inheritdoc
 *
 * @see {@link DaffExternalRouterTestingDriver}
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterTestingDriver
implements DaffExternalRouterDriverInterface {
  constructor(
    @Inject(DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG)
    private testingConfiguration: DaffExternalRouterDriverTestingConfig = {},
  ) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    const truncatedUrl = daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(url));

    const configuredResolution = this.testingConfiguration[truncatedUrl];

    if (!configuredResolution) {
      return throwError(() => new DaffExternalRouterNotFoundError());
    }

    const resolution: DaffExternallyResolvableUrl = typeof configuredResolution === 'string'
      ? {
        id: faker.string.uuid(),
        url: truncatedUrl,
        type: configuredResolution,
        code: 200,
      }
      : configuredResolution;

    if (resolution.code === 404) {
      return throwError(() => new DaffExternalRouterNotFoundError());
    }

    if (resolution.code >= 400 && resolution.code < 500) {
      return throwError(() => new DaffExternalRouterClientError());
    }

    if (resolution.code >= 500) {
      return throwError(() => new DaffExternalRouterServerError());
    }

    return of(resolution);
  }
}
