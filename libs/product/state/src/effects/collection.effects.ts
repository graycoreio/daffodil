import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
  asyncScheduler,
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

/**
 * A function that invokes the appropriate driver and returns either a success or failure action.
 */
export type DaffProductCollectionDriverCall = (action: Action, request: DaffProductCollectionRequest) => Observable<Action>;

/**
 * An abstract class that provides an effect for sending product collection requests.
 * It is configurable through the constructor arguments and can be adapted to any piece of state
 * that contains or manages a product collection.
 */
export abstract class DaffProductCollectionEffects {
  constructor(
    private actions$: Actions,
    private driverCall: DaffProductCollectionDriverCall,
    private actionTypes: string[],
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
    ofType(...this.actionTypes),
    withLatestFrom(this.facade.metadata$),
    map(([action, metadata]): [Action, DaffProductCollectionRequest] => [
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
