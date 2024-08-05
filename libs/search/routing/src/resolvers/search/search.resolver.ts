import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
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

import {
  DaffSearchLoad,
  DaffSearchStateRootSlice,
} from '@daffodil/search/state';
import { DaffSearchActionTypes } from '@daffodil/search/state';

import { DaffSearchRoutingOptionBuilder } from '../../injection-tokens/public_api';
import { DAFF_SEARCH_ROUTING_OPTIONS_BUILDER } from '../../injection-tokens/search-options/builder.token';

const getQuery = (route: ActivatedRouteSnapshot): string => route.queryParams.q || route.queryParams.query;

/**
 * Resolves search data for search pages, and will only resolve the url after a search request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the search id.
 */
@Injectable()
export class DaffSearchPageResolver  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<DaffSearchStateRootSlice>,
    private dispatcher: ActionsSubject,
    @Inject(DAFF_SEARCH_ROUTING_OPTIONS_BUILDER) private builder: DaffSearchRoutingOptionBuilder,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const query = getQuery(route);
    if (query) {
      this.store.dispatch(new DaffSearchLoad(query, this.builder(route)));

      return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(
        ofType(
          DaffSearchActionTypes.SearchLoadSuccessAction,
          DaffSearchActionTypes.SearchLoadFailureAction,
        ),
        map(() => true),
        take(1),
      );
    }

    return of(true);
  }
}
