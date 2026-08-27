import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeServiceInterface } from '@daffodil/product/driver';

/**
 * Shopify's Storefront API has no concept of a catalog-wide list of custom attribute
 * definitions - metafields can only be queried by explicit identifier against a specific
 * product, and defining/discovering those identifiers is only possible via the Admin API.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyProductCustomAttributeService implements DaffProductCustomAttributeServiceInterface {
  list(): Observable<DaffProductCustomAttribute[]> {
    return of([]);
  }
}
