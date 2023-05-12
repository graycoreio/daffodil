import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
  DaffProductCompositeRoutingConfig,
} from '../config/public_api';

@Injectable()
export class DaffProductCompositeQueryParamService {

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG) private config: DaffProductCompositeRoutingConfig) {
  }

  /**
   * Get the value of the configured composite selection query param.
   */
  public get(): string {
    return (
      new URL((<any>this.document).location.toString())
    ).searchParams.get(this.config.compositeSelectionQueryParam);
  }
}
