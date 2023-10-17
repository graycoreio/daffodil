import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Observable,
  map,
  switchMap,
} from 'rxjs';

import {
  DaffBase64Service,
  DaffBase64ServiceToken,
} from '@daffodil/core';
import { DaffProductPageFacade } from '@daffodil/product/state';
import {
  DaffProductCompositeSelectionPayload,
  daffProductCompositeBuildSelectionPayload,
} from '@daffodil/product-composite';
import { DaffCompositeProductFacade } from '@daffodil/product-composite/state';

import {
  DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
  DaffProductCompositeRoutingConfig,
} from '../config/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffProductCompositeRoutingShareCodeService {
  /**
   * The current configuration share code set to the configured query parameter.
   * This is URI encoded and can be interpolated directly into a link.
   * It is of the form `query_param=value`.
   *
   * See {@link DaffProductCompositeRoutingShareCodeService#shareCode$}.
   */
  queryParam$: Observable<string>;

  /**
   * Gets the base64 encoded selection payload which,
   * when set to the appropriate query param in the product page URL,
   * will preselect item options.
   * Note that this is *not* URI encoded.
   *
   * See {@link DaffProductCompositeSelectionPayload}.
   */
  shareCode$: Observable<string>;

  constructor(
    protected facade: DaffProductPageFacade,
    protected compositeFacade: DaffCompositeProductFacade,
    @Inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG) protected config: DaffProductCompositeRoutingConfig,
    @Inject(DaffBase64ServiceToken) protected base64: DaffBase64Service,
  ) {
    this.shareCode$ = this.facade.product$.pipe(
      switchMap((product) => this.compositeFacade.getAppliedOptions(product.id)),
      map((appliedOptions) => this.base64.encode(JSON.stringify(daffProductCompositeBuildSelectionPayload(appliedOptions)))),
    );
    this.queryParam$ = this.shareCode$.pipe(
      map(shareCode => `${this.config.compositeSelectionQueryParam}=${encodeURIComponent(shareCode)}`),
    );
  }
}
