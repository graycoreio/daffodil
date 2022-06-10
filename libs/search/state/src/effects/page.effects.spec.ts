import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
  tap,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriver,
  DaffSearchInvalidAPIResponseError,
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';
import { DaffSearchTestingDriverModule } from '@daffodil/search/driver/testing';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
  DAFF_SEARCH_STATE_CONFIG,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchPageEffects } from './page.effects';

describe('@daffodil/search/state | DaffSearchPageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffSearchPageEffects<DaffSearchResult>;

  let mockSearchResults: DaffSearchResult[];
  let mockCollection: DaffSearchResultCollection;
  let mockResponse: DaffSearchDriverResponse;
  let query: string;
  let options: DaffSearchDriverOptions;

  let searchResultFactory: DaffSearchResultFactory;

  let daffDriver: DaffSearchDriverInterface;
  let driverSearchSpy: jasmine.Spy<DaffSearchDriverInterface['search']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSearchTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffSearchPageEffects,
        provideMockActions(() => actions$),
        {
          provide: DAFF_SEARCH_STATE_CONFIG,
          useValue: {
            incrementalResultLimit: 10,
          },
        },
      ],
    });

    effects = TestBed.inject(DaffSearchPageEffects);
    daffDriver = TestBed.inject<DaffSearchDriverInterface>(DaffSearchDriver);
    searchResultFactory = TestBed.inject(DaffSearchResultFactory);

    mockSearchResults = searchResultFactory.createMany(5);
    mockCollection = daffSearchTransformResultsToCollection(mockSearchResults);
    mockResponse = {
      collection: mockCollection,
      metadata: {},
    };
    query = 'query';
    options = <DaffSearchDriverOptions>{
      thing: 'thing',
    };

    driverSearchSpy = spyOn(daffDriver, 'search');
    driverSearchSpy.and.returnValue(of(mockResponse));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffSearchLoadAction is triggered', () => {
    let expected;
    let searchLoadAction: DaffSearchLoad;

    beforeEach(() => {
      searchLoadAction = new DaffSearchLoad(query, options);
    });

    it('should call the driver with the query', done => {
      const testScheduler = new TestScheduler((actual, ex) => {
        expect(actual).toEqual(ex);
      });

      const searchResultLoadSuccessAction = new DaffSearchLoadSuccess({
        collection: mockCollection,
        metadata: {},
      });

      testScheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: searchLoadAction });

        const expectedMarble = '--a';
        const expectedValue = {
          a: searchResultLoadSuccessAction,
        };

        expectObservable(
          effects.search$.pipe(
            tap(() => {
              expect(driverSearchSpy).toHaveBeenCalledWith(query, options);
              done();
            }),
          ),
        ).toBe(expectedMarble, expectedValue);
      });
    });

    describe('and the call to SearchDriver is successful', () => {
      it('should return a DaffSearchLoadSucess action', () => {
        const testScheduler = new TestScheduler((actual, ex) => {
          expect(actual).toEqual(ex);
        });

        const searchResultLoadSuccessAction = new DaffSearchLoadSuccess({
          collection: mockCollection,
          metadata: {},
        });

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: searchLoadAction });

          const expectedMarble = '--a';
          const expectedValue = {
            a: searchResultLoadSuccessAction,
          };

          expectObservable(
            effects.search$,
          ).toBe(expectedMarble, expectedValue);
        });
      });
    });

    describe('and the call to SearchDriver fails', () => {
      let searchResultLoadFailureAction: DaffSearchLoadFailure;

      it('should return a DaffSearchLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, ex) => {
          expect(actual).toEqual(ex);
        });

        testScheduler.run(({ hot, expectObservable, cold }) => {
          const error = new DaffSearchInvalidAPIResponseError('Failed to search');
          const response = cold<DaffSearchDriverResponse>('#', {}, error);
          driverSearchSpy.and.returnValue(response);
          searchResultLoadFailureAction = new DaffSearchLoadFailure(daffTransformErrorToStateError(error));
          actions$ = hot('--a', { a: searchLoadAction });

          const expectedMarble = '--a';
          const expectedValue = {
            a: searchResultLoadFailureAction,
          };

          expectObservable(
            effects.search$,
          ).toBe(expectedMarble, expectedValue);
        });
      });
    });
  });
});
