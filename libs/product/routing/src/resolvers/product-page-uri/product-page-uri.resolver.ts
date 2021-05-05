import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ofType } from '@ngrx/effects';
import {
  ActionsSubject,
  Store,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  mapTo,
  take,
} from 'rxjs/operators';

import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';
import {
  DaffProductReducersState,
  DaffProductPageLoadByUrl,
  DaffProductPageActionTypes,
} from '@daffodil/product/state';

/**
 * Resolves product data for product pages, and will only resolve the url
 * after a product request succeeds or fails. This resolver will take a full
 * a url of the form `some/url.html(secondary:outlet)?query=param#fragment` and attempt to resolve a product from it.
 * Assumes that the URL to be resolved is the primary outlet.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageUriResolver implements Resolve<Observable<boolean>> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffProductReducersState>,
    private dispatcher: ActionsSubject,
    private urlNormalizer: DaffRoutingUriNormalizer,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(
      new DaffProductPageLoadByUrl(this.urlNormalizer.normalize(state.url)),
    );

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffProductPageActionTypes.ProductPageLoadSuccessAction, DaffProductPageActionTypes.ProductPageLoadFailureAction),
      mapTo(true),
      take(1),
    );
  }
}
