import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';

import { DaffProductPageIdResolver } from '../product-page-id/product-page-id.resolver';

/**
 * Resolves product data for product pages, and will only resolve the url after a product page request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the product id.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageResolver implements Resolve<Observable<boolean>> {
  constructor(
    private productPageIdResolver: DaffProductPageIdResolver,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.productPageIdResolver.resolve(route);
  }
}
