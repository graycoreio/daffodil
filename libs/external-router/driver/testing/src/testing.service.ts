import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

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
    if (!this.testingConfiguration[url]) {
      return throwError(`\
The route '${url}' wasn't provided with a matching type by the testing driver. \
Did you configure the available route types with DaffExternalRouterDriverTestingModule.forRoot(config)`);
    }

    return of({
      url,
      type: this.testingConfiguration[url],
    });
  }
}
