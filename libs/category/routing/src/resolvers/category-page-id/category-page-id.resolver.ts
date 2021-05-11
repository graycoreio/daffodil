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

import { DaffCategoryRequestKind } from '@daffodil/category';
import {
  DaffCategoryReducersState,
  DaffCategoryPageLoad,
  DaffCategoryPageActionTypes,
} from '@daffodil/category/state';

/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryPageIdResolver implements Resolve<Observable<boolean>> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(new DaffCategoryPageLoad({
      id: route.paramMap.get('id'),
      kind: DaffCategoryRequestKind.ID,
    }));

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction, DaffCategoryPageActionTypes.CategoryPageLoadFailureAction),
      mapTo(true),
      take(1),
    );
  }
}
