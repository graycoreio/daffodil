import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
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

import {
  DaffProductPageLoad,
  DaffProductPageActionTypes,
} from '../../actions/public_api';
import { DaffProductReducersState } from '../../reducers/public_api';

/**
 * Resolves product data for product pages, and will only resolve the url after a product request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the product id.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageIdResolver implements Resolve<Observable<boolean>> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffProductReducersState>,
    private dispatcher: ActionsSubject,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(new DaffProductPageLoad(route.paramMap.get('id')));

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffProductPageActionTypes.ProductPageLoadSuccessAction, DaffProductPageActionTypes.ProductPageLoadFailureAction),
      mapTo(true),
      take(1),
    );
  }
}
