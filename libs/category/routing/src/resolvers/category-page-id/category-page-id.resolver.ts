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
  map,
  take,
} from 'rxjs/operators';

import { DaffCategoryRequestKind } from '@daffodil/category';
import {
  DaffCategoryReducersState,
  DaffCategoryPageLoad,
  DaffCategoryPageActionTypes,
} from '@daffodil/category/state';

import { DaffCategoryRoutingRequestBuilder } from '../../injection-tokens/public_api';
import { DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER } from '../../injection-tokens/request/builder.token';

/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
@Injectable()
export class DaffCategoryPageIdResolver implements Resolve<Observable<boolean>> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER) private requestBuilder: DaffCategoryRoutingRequestBuilder,
    private store: Store<DaffCategoryReducersState>,
    private dispatcher: ActionsSubject,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.requestBuilder(route, state).pipe(
      take(1),
    ).subscribe((request) => {
      this.store.dispatch(new DaffCategoryPageLoad({
        ...request,
        id: route.paramMap.get('id'),
        kind: DaffCategoryRequestKind.ID,
      }));
    });

    return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
      ofType(DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction, DaffCategoryPageActionTypes.CategoryPageLoadFailureAction),
      map(() => true),
      take(1),
    );
  }
}
