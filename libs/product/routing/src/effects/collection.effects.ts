import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import {
  switchMap,
  map,
  withLatestFrom,
  tap,
} from 'rxjs/operators';

import {
  DaffCollectionRequest,
  daffFiltersToRequests,
} from '@daffodil/core';
import { DaffCollectionFacadeInterface } from '@daffodil/core/state';

import { DaffProductGetQueryParamsFromRequest } from '../services/public_api';

/**
 * An abstract class that provides an effect for modifying the browser URL.
 */
export abstract class DaffProductRoutingCollectionEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private actionTypes: string[],
    private facade: DaffCollectionFacadeInterface,
    private getQueryParams: DaffProductGetQueryParamsFromRequest,
    private route: ActivatedRoute,
  ) {}

  /**
   * Updates the URL according to the product collection request in state.
   */
  update$ = createEffect(() => this.actions$.pipe(
    ofType(...this.actionTypes),
    withLatestFrom(this.facade.metadata$),
    map(([action, metadata]): [Action, DaffCollectionRequest] => [
      action,
      {
        filterRequests: daffFiltersToRequests(metadata.filters),
        appliedSortOption: metadata.appliedSortOption,
        appliedSortDirection: metadata.appliedSortDirection,
        currentPage: metadata.currentPage,
        pageSize: metadata.pageSize,
      },
    ]),
    tap(([action, request]) => this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.getQueryParams.getQueryParams(request),
        queryParamsHandling: 'merge',
      },
    )),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
