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

import { DaffCategoryRequestKind } from '@daffodil/category';
import {
  DaffCategoryReducersState,
  DaffCategoryPageActionTypes,
  DaffCategoryPageLoadByUrl,
} from '@daffodil/category/state';
import { DaffRoutingUriNormalizer } from '@daffodil/core/routing';

const getPage = (route: ActivatedRouteSnapshot): string => route.queryParams.p || route.queryParams.page;

/**
 * Resolves category data for category pages, and will only resolve the url
 * after a category request succeeds or fails. This resolver will take a full
 * a url of the form `some/url.html(secondary:outlet)?query=param#fragment` and attempt to resolve a product from it.
 * Assumes that the URL to be resolved is the primary outlet.
 *
 * Will check the `p` and `page` query params for a page number value.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryPageUrlResolver implements Resolve<Observable<boolean>> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
    private urlNormalizer: DaffRoutingUriNormalizer,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const currentPage = getPage(route);

    this.store.dispatch(new DaffCategoryPageLoadByUrl({
      url: this.urlNormalizer.normalize(state.url),
      kind: DaffCategoryRequestKind.URL,
      ...(currentPage ? { current_page: Number(currentPage) } : {}),
    }));

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction, DaffCategoryPageActionTypes.CategoryPageLoadFailureAction),
      mapTo(true),
      take(1),
    );
  }
}
