import {
  Injectable,
  Inject,
} from '@angular/core';
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
  DaffExternalRouterDriverInterface,
  DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
} from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverInMemoryConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG,
} from './config';

/**
 * The DaffExternalRouterInMemoryDriver is responsible for resolving
 * a URL using the resolver in the provided configuration.
 *
 * @inheritdoc
 *
 * @see {@link DaffExternalRouterInMemoryDriver}
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalRouterInMemoryDriver
implements DaffExternalRouterDriverInterface {
  constructor(
		@Inject(DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG)
		private configuration: DaffExternalRouterDriverInMemoryConfig,
  ) {}

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    const truncatedUrl = daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(url));

    return of(this.configuration.resolver(truncatedUrl) || DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION);
  }
}
