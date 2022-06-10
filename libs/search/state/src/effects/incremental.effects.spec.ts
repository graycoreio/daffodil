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
  DaffSearchIncremental,
  DaffSearchIncrementalFailure,
  DaffSearchIncrementalSuccess,
  DAFF_SEARCH_STATE_CONFIG,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchIncrementalEffects } from './incremental.effects';

describe('@daffodil/search/state | DaffSearchIncrementalEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffSearchIncrementalEffects<DaffSearchResult>;

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
        DaffSearchIncrementalEffects,
        provideMockActions(() => actions$),
        {
          provide: DAFF_SEARCH_STATE_CONFIG,
          useValue: {
            incrementalResultLimit: 10,
          },
        },
      ],
    });

    effects = TestBed.inject(DaffSearchIncrementalEffects);
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

  describe('when DaffSearchIncrementalAction is triggered', () => {
    let expected;
    let searchIncrementalAction: DaffSearchIncremental;

    beforeEach(() => {
      searchIncrementalAction = new DaffSearchIncremental(query, options);
    });

    describe('debouncing the request', () => {
      it('should call the driver', () => {
        const testScheduler = new TestScheduler((actual, ex) => {
          expect(actual).toEqual(ex);
        });

        const searchResultIncrementalSuccessAction = new DaffSearchIncrementalSuccess(mockResponse);

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a-a-a-a-a', { a: searchIncrementalAction });

          const expectedMarble = '310ms a';
          const expectedValue = {
            a: searchResultIncrementalSuccessAction,
          };

          expectObservable(
            effects.incremental$(300, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });
      });
    });

    it('should call the driver with the query and the limit', done => {
      const testScheduler = new TestScheduler((actual, ex) => {
        expect(actual).toEqual(ex);
      });

      const searchResultIncrementalSuccessAction = new DaffSearchIncrementalSuccess({
        collection: mockCollection,
        metadata: {},
      });

      testScheduler.run(({ hot, expectObservable }) => {
        actions$ = hot('--a', { a: searchIncrementalAction });

        const expectedMarble = '--a';
        const expectedValue = {
          a: searchResultIncrementalSuccessAction,
        };

        expectObservable(
          effects.incremental$(0, testScheduler).pipe(
            tap(() => {
              expect(driverSearchSpy).toHaveBeenCalledWith(query, {
                ...options,
                limit: 10,
              });
              done();
            }),
          ),
        ).toBe(expectedMarble, expectedValue);
      });
    });

    describe('and the call to SearchDriver is successful', () => {
      it('should return a DaffSearchIncrementalSucess action', () => {
        const testScheduler = new TestScheduler((actual, ex) => {
          expect(actual).toEqual(ex);
        });

        const searchResultIncrementalSuccessAction = new DaffSearchIncrementalSuccess({
          collection: mockCollection,
          metadata: {},
        });

        testScheduler.run(({ hot, expectObservable }) => {
          actions$ = hot('--a', { a: searchIncrementalAction });

          const expectedMarble = '--a';
          const expectedValue = {
            a: searchResultIncrementalSuccessAction,
          };

          expectObservable(
            effects.incremental$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });
      });
    });

    describe('and the call to SearchDriver fails', () => {
      let searchResultIncrementalFailureAction: DaffSearchIncrementalFailure;

      it('should return a DaffSearchIncrementalFailure action', () => {
        const testScheduler = new TestScheduler((actual, ex) => {
          expect(actual).toEqual(ex);
        });

        testScheduler.run(({ hot, expectObservable, cold }) => {
          const error = new DaffSearchInvalidAPIResponseError('Failed to search');
          const response = cold<DaffSearchDriverResponse>('#', {}, error);
          driverSearchSpy.and.returnValue(response);
          searchResultIncrementalFailureAction = new DaffSearchIncrementalFailure(daffTransformErrorToStateError(error));
          actions$ = hot('--a', { a: searchIncrementalAction });

          const expectedMarble = '--a';
          const expectedValue = {
            a: searchResultIncrementalFailureAction,
          };

          expectObservable(
            effects.incremental$(0, testScheduler),
          ).toBe(expectedMarble, expectedValue);
        });
      });
    });
  });
});
