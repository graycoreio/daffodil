import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Actions } from '@ngrx/effects';

import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryProductCollectionFacade,
} from '@daffodil/category/state';
import {
  DaffProductGetQueryParamsFromRequest,
  DaffProductRoutingCollectionEffects,
} from '@daffodil/product/routing';

@Injectable()
export class DaffCategoryRoutingCollectionEffects extends DaffProductRoutingCollectionEffects {
  constructor(
    actions$: Actions,
    router: Router,
    collectionFacade: DaffCategoryProductCollectionFacade,
    getQueryParams: DaffProductGetQueryParamsFromRequest,
    route: ActivatedRoute,
  ) {
    super(
      actions$,
      router,
      Object.values(DaffCategoryPageProductCollectionActionTypes),
      collectionFacade,
      getQueryParams,
      route,
    );
  }
}
