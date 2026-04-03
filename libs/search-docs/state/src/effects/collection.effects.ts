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
  DaffCollectionRequest,
  DaffError,
  daffCollectionBuildRequestFromMetadata,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffSearchDriver ,
  DaffSearchDriverInterface,
} from '@daffodil/search/driver';
import {
  DaffSearchPageFacade,
  DaffSearchLoadFailure,
  DaffSearchLoadSuccess,
  DAFF_SEARCH_ERROR_MATCHER,
} from '@daffodil/search/state';
import { DaffSearchDocsResult } from '@daffodil/search-docs';

import { DaffSearchDocsCollectionActionTypes } from '../actions/collection.actions';
import { DaffSearchDocsCollectionFacade } from '../facades/public_api';

export const DAFF_SEARCH_DOCS_COLLECTION_ACTION_TYPES = [
  DaffSearchDocsCollectionActionTypes.SearchDocsApplyFiltersAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsRemoveFiltersAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsReplaceFiltersAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsToggleFiltersAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsChangeCurrentPageAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsChangePageSizeAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsChangeSortingOptionAction,
  DaffSearchDocsCollectionActionTypes.SearchDocsClearFiltersAction,
];

@Injectable()
export class DaffSearchDocsCollectionEffects<
  T extends DaffSearchDocsResult = DaffSearchDocsResult,
> {
  constructor(
    private actions$: Actions,
    private collectionFacade: DaffSearchDocsCollectionFacade,
    private searchFacade: DaffSearchPageFacade,
    // TODO: should we reference the docs kind driver here?
    @Inject(DaffSearchDriver) private driver: DaffSearchDriverInterface<T>,
    @Inject(DAFF_SEARCH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Updates the docs collection according to the action.
   * It will take the request metedata, including currently
   * applied filters, from state, form them into a request,
   * and pass that into the {@link DaffDocsCollectionDriverCall} provided to this class.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  update$ = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType(...DAFF_SEARCH_DOCS_COLLECTION_ACTION_TYPES),
    withLatestFrom(
      this.collectionFacade.metadata$,
      this.searchFacade.recent$,
    ),
    map(([action, metadata, recent]): [string, DaffCollectionRequest] => [
      recent[0],
      daffCollectionBuildRequestFromMetadata(metadata),
    ]),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(([recent, request]) => this.driver.search(recent, request).pipe(
      map(resp => new DaffSearchLoadSuccess<T>(resp)),
      catchError((error: DaffError) => of(new DaffSearchLoadFailure(this.errorMatcher(error)))),
    )),
  ));
}
