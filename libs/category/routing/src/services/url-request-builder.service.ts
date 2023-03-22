import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import {
  DaffCategoryRequestKind,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';

import { DaffCategoryRoutingRequestBuilder } from '../injection-tokens/public_api';
import { DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER } from '../injection-tokens/request/builder.token';

@Injectable({
  providedIn: 'any',
})
export class DaffCategoryRoutingUrlRequestBuilder {
  constructor(
    @Inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER) private requestBuilder: DaffCategoryRoutingRequestBuilder,
    private urlNormalizer: DaffRoutingUriNormalizer,
  ) { }

  /**
   * Builds a category URL request from the provided route and router state that
   * is suitable for passing to {@link DaffCategoryPageLoadByUrl}.
   */
  build(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): DaffCategoryUrlRequest {
    return {
      ...this.requestBuilder(route),
      url: this.urlNormalizer.normalize(state.url),
      kind: DaffCategoryRequestKind.URL,
    };
  }
}
