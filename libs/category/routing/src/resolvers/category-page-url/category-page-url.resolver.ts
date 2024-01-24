import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
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
  map,
  take,
} from 'rxjs/operators';

import {
  DaffCategoryReducersState,
  DaffCategoryPageActionTypes,
  DaffCategoryPageLoadByUrl,
} from '@daffodil/category/state';

import { DaffCategoryRoutingUrlRequestBuilder } from '../../services/public_api';

/**
 * Resolves category data for category pages, and will only resolve the url
 * after a category request succeeds or fails. This resolver will take a full
 * a url of the form `some/url.html(secondary:outlet)?query=param#fragment` and attempt to resolve a product from it.
 * Assumes that the URL to be resolved is the primary outlet.
 */
@Injectable()
export class DaffCategoryPageUrlResolver  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
    private requestBuilder: DaffCategoryRoutingUrlRequestBuilder,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(new DaffCategoryPageLoadByUrl(this.requestBuilder.build(route, state)));

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction, DaffCategoryPageActionTypes.CategoryPageLoadFailureAction),
      map(() => true),
      take(1),
    );
  }
}
