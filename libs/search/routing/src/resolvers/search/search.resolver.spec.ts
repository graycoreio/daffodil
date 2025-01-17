import {
  ɵPLATFORM_BROWSER_ID,
  ɵPLATFORM_SERVER_ID,
} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  ActionsSubject,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffSearchDriverOptions } from '@daffodil/search/driver';
import {
  DaffSearchRoutingOptionBuilder,
  DAFF_SEARCH_ROUTING_OPTIONS_BUILDER,
} from '@daffodil/search/routing';
import {
  daffSearchReducers,
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
  DaffSearchStateRootSlice,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '@daffodil/search/state';

import { DaffSearchPageResolver } from './search.resolver';

describe('@daffodil/search/routing | DaffSearchPageResolver', () => {
  let actions$: ActionsSubject;
  let searchResolver: DaffSearchPageResolver;
  let store: Store<DaffSearchStateRootSlice>;
  let route: ActivatedRoute;
  let query: string;
  let options: DaffSearchDriverOptions;
  let builder: DaffSearchRoutingOptionBuilder;

  beforeEach(() => {
    query = 'query';
    options = {
      limit: 5,
    };
    builder = r => options;
  });

  describe('resolve - on server', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
          }),
          RouterTestingModule,
        ],
      });

      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      actions$ = new ActionsSubject();
      searchResolver = new DaffSearchPageResolver(
        ɵPLATFORM_SERVER_ID,
        store,
        actions$,
        builder,
      );

      spyOn(store, 'dispatch');
    }));

    describe('when the query is defined', () => {
      let snapshot: ActivatedRouteSnapshot;

      beforeEach(() => {
        snapshot = <ActivatedRouteSnapshot><unknown>{
          ...route.snapshot,
          queryParams: {
            query,
          },
        };
      });

      it('should dispatch a DaffSearchLoad action with the correct search query', () => {
        searchResolver.resolve(snapshot).subscribe();
        expect(<any>store.dispatch).toHaveBeenCalledWith(
          new DaffSearchLoad(query, options),
        );
      });

      it('should resolve when DaffSearchLoadSuccess is dispatched', done => {
        searchResolver.resolve(snapshot).subscribe(value => {
          expect(value).toEqual(true);
          done();
        });

        actions$.next(new DaffSearchLoadSuccess({
          collection: {},
          metadata: {},
        }));
      });

      it('should resolve when DaffCartLoadFailure is dispatched', done => {
        searchResolver.resolve(snapshot).subscribe(value => {
          expect(value).toEqual(true);
          done();
        });

        actions$.next(new DaffSearchLoadFailure(null));
      });

      it('should not resolve without a search load success or failure', () => {
        searchResolver.resolve(snapshot).subscribe(() => {
          fail();
        });
        expect(true).toBeTruthy();
      });
    });

    describe('when the query is not defined', () => {
      it('should return true immediately', (done) => {
        searchResolver.resolve(route.snapshot).subscribe((res) => {
          expect(res).toBeTrue();
          done();
        });
      });

      it('should not initiate a search', (done) => {
        searchResolver.resolve(route.snapshot).subscribe((res) => {
          expect(store.dispatch).not.toHaveBeenCalled();
          done();
        });
      });
    });
  });

  describe('resolve - in the browser', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_SEARCH_STORE_FEATURE_KEY]: combineReducers(daffSearchReducers),
          }),
          RouterTestingModule,
        ],
      });

      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      actions$ = new ActionsSubject();
      searchResolver = new DaffSearchPageResolver(
        ɵPLATFORM_BROWSER_ID,
        store,
        actions$,
        builder,
      );

      spyOn(store, 'dispatch');
    });

    it('should dispatch a DaffSearchLoad action with the correct search query and options', () => {
      searchResolver.resolve(<ActivatedRouteSnapshot><unknown>{
        ...route.snapshot,
        queryParams: {
          query,
        },
      }).subscribe();
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffSearchLoad(query, options),
      );
    });

    it('should resolve without a search load success or failure', done => {
      searchResolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toBeTruthy();
        done();
      });
    });
  });
});
