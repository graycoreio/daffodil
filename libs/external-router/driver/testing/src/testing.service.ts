import {
  Injectable,
  Inject,
} from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  Observable,
  of,
} from 'rxjs';

import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
  DaffExternalRouterDriverInterface,
} from '@daffodil/external-router/driver';

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

    if (!this.testingConfiguration[truncatedUrl]) {
      return of(DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION);
    }

    if((typeof this.testingConfiguration[truncatedUrl]) === 'string') {
      return of({
        id: faker.datatype.uuid(),
        url: truncatedUrl,
        type: <string>this.testingConfiguration[truncatedUrl],
        code: 200,
      });
    }

    return of(<DaffExternallyResolvableUrl>this.testingConfiguration[truncatedUrl]);
  }
}
