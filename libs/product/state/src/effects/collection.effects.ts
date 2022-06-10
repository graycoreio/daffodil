import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  Observable,
  asyncScheduler,
  SchedulerLike,
} from 'rxjs';
import {
  switchMap,
  map,
  throttleTime,
  withLatestFrom,
} from 'rxjs/operators';

import {
  DaffProductCollectionRequest,
  daffProductFiltersToRequests,
} from '@daffodil/product';

import { DaffProductCollectionFacadeInterface } from '../facades/public_api';
import { DaffProductCollectionActionTypes } from '../models/collection-action-types.type';
import {
  DaffProductCollectionActionKinds,
  DaffProductCollectionActions,
} from '../models/public_api';

/**
 * A function that invokes the appropriate driver and returns either a success or failure action.
 */
export type DaffProductCollectionDriverCall<
  TActions extends DaffProductCollectionActionKinds = DaffProductCollectionActionKinds,
> = (action: DaffProductCollectionActions<TActions>, request: DaffProductCollectionRequest) => Observable<TActions['success'] | TActions['failure']>;

/**
 * An abstract class that provides an effect for sending product collection requests.
 * It is configurable through the constructor arguments and can be adapted to any piece of state
 * that contains or manages a product collection.
 */
export abstract class DaffProductCollectionEffects<
  TActions extends DaffProductCollectionActionKinds = DaffProductCollectionActionKinds
> {

  constructor(
    private actions$: Actions,
    private driverCall: DaffProductCollectionDriverCall,
    private actionTypes: DaffProductCollectionActionTypes,
    private facade: DaffProductCollectionFacadeInterface,
  ) {}

  /**
   * Updates the product collection according to the action.
   * It will take the request metedata, including currently
   * applied filters, from state, form them into a request,
   * and pass that into the {@link DaffProductCollectionDriverCall} provided to this class.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  update$ = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType(...[
      this.actionTypes.replaceFilters,
      this.actionTypes.applyFilters,
      this.actionTypes.clearFilters,
      this.actionTypes.removeFilters,
      this.actionTypes.toggleFilter,
      this.actionTypes.changePage,
      this.actionTypes.changeSize,
      this.actionTypes.changeSort,
    ].flat()),
    withLatestFrom(this.facade.metadata$),
    map(([action, metadata]): [DaffProductCollectionActions<TActions>, DaffProductCollectionRequest] => [
      action,
      {
        filter_requests: daffProductFiltersToRequests(metadata.filters),
        applied_sort_option: metadata.applied_sort_option,
        applied_sort_direction: metadata.applied_sort_direction,
        current_page: metadata.current_page,
        page_size: metadata.page_size,
      },
    ]),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(([action, request]) => this.driverCall(action, request)),
  ));
}
