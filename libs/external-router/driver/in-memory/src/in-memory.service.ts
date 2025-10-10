import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import {
  DaffExternallyResolvableUrl,
  DaffExternalRouterNotFoundError,
} from '@daffodil/external-router';
import {
  DaffExternalRouterDriverInterface,
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
    const truncatedUrl = daffUriTruncateQueryFragment(url);
    const resolvedUrl = this.configuration.resolver(truncatedUrl);

    if (!resolvedUrl?.url) {
      return throwError(() => new DaffExternalRouterNotFoundError());
    }

    return of({
      ...resolvedUrl,
      url: daffUriTruncateLeadingSlash(resolvedUrl.url),
    });
  }
}
