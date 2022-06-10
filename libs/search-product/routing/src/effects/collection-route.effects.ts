import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Actions } from '@ngrx/effects';

import {
  DaffProductGetQueryParamsFromRequest,
  DaffProductRoutingCollectionEffects,
} from '@daffodil/product/routing';
import {
  DaffSearchProductCollectionActionTypes,
  DaffSearchProductCollectionFacade,
} from '@daffodil/search-product/state';

@Injectable()
export class DaffSearchProductRoutingCollectionEffects extends DaffProductRoutingCollectionEffects {
  constructor(
    actions$: Actions,
    router: Router,
    collectionFacade: DaffSearchProductCollectionFacade,
    getQueryParams: DaffProductGetQueryParamsFromRequest,
    route: ActivatedRoute,
  ) {
    super(
      actions$,
      router,
      Object.values(DaffSearchProductCollectionActionTypes),
      collectionFacade,
      getQueryParams,
      route,
    );
  }
}
