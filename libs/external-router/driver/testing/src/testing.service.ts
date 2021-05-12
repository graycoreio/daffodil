import {
  Injectable,
  Inject,
} from '@angular/core';
import * as faker from 'faker/locale/en_US';
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
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverTestingConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
} from './config';

/**
 * The DaffExternalRouterTestingDriver is responsible for translating an
 * arbitrary URI into a DaffExternallyResolvableUrl in testing environments.
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

    if (!this.testingConfiguration[truncatedUrl]) {
      return throwError(`\
The route '${truncatedUrl}' wasn't provided with a matching type by the testing driver. \
Did you configure the available route types with DaffExternalRouterDriverTestingModule.forRoot(config)`);
    }

    return of({
      id: faker.random.uuid(),
      url: truncatedUrl,
      type: this.testingConfiguration[truncatedUrl],
      code: 200,
    });
  }
}
