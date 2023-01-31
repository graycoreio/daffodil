import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  asyncScheduler,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  throttleTime,
  withLatestFrom,
} from 'rxjs/operators';

import {
  daffCollectionBuildRequestFromMetadata,
  DaffError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffOrder,
  DAFF_ORDER_ERROR_MATCHER,
} from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderDriver,
} from '@daffodil/order/driver';

import {
  DaffOrderCollectionActions,
  DaffOrderCollectionActionTypes,
  DaffOrderListFailure,
  DaffOrderListSuccess,
} from '../actions/public_api';
import { DaffOrderCollectionFacade } from '../facades/public_api';

export const DAFF_ORDER_COLLECTION_ACTION_TYPES = [
  DaffOrderCollectionActionTypes.ChangeCurrentPageAction,
  DaffOrderCollectionActionTypes.ChangePageSizeAction,
  DaffOrderCollectionActionTypes.ChangeSortingAction,
  DaffOrderCollectionActionTypes.ChangeFilterAction,
];

@Injectable()
export class DaffOrderCollectionEffects<
  T extends DaffOrder = DaffOrder,
> {
  constructor(
    private actions$: Actions,
    private collectionFacade: DaffOrderCollectionFacade,
    @Inject(DaffOrderDriver) private driver: DaffOrderServiceInterface<T>,
    @Inject(DAFF_ORDER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Updates the order collection according to the action.
   * It will take the request metedata, including currently
   * applied filters, from state, form them into a request,
   * and pass that into the {@link DaffProductCollectionDriverCall} provided to this class.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  update$ = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType<DaffOrderCollectionActions>(...DAFF_ORDER_COLLECTION_ACTION_TYPES),
    withLatestFrom(
      this.collectionFacade.metadata$,
    ),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(([action, metadata]) => this.driver.list(
      action.cartId,
      daffCollectionBuildRequestFromMetadata(metadata),
    ).pipe(
      map(resp => new DaffOrderListSuccess<T>(resp)),
      catchError((error: DaffError) => of(new DaffOrderListFailure(this.errorMatcher(error)))),
    )),
  ));
}
