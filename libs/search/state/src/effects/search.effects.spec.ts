import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

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
} from '@daffodil/search/driver';
import { DaffSearchTestingDriverModule } from '@daffodil/search/driver/testing';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchEffects } from './search.effects';

describe('@daffodil/search/state | DaffSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffSearchEffects<DaffSearchResult>;

  let mockSearchResults: DaffSearchResult[];

  let searchResultFactory: DaffGeneralSearchResultFactory;

  let daffDriver: DaffSearchDriverInterface;
  let driverSearchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSearchTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffSearchEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject<DaffSearchEffects<DaffSearchResult>>(DaffSearchEffects);
    daffDriver = TestBed.inject<DaffSearchDriverInterface>(DaffSearchDriver);
    searchResultFactory = TestBed.inject<DaffGeneralSearchResultFactory>(DaffGeneralSearchResultFactory);

    mockSearchResults = searchResultFactory.createMany(5);

    driverSearchSpy = spyOn(daffDriver, 'search');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffSearchLoadAction is triggered', () => {
    let expected;
    let mockCollection: DaffSearchResultCollection;
    const searchResultLoadAction = new DaffSearchLoad('cartId');

    describe('and the call to SearchDriver is successful', () => {
      beforeEach(() => {
        mockCollection = daffSearchTransformResultsToCollection(mockSearchResults);
        driverSearchSpy.and.returnValue(of(mockCollection));
        const searchResultLoadSuccessAction = new DaffSearchLoadSuccess(mockCollection);
        actions$ = hot('--a', { a: searchResultLoadAction });
        expected = cold('--b', { b: searchResultLoadSuccessAction });
      });

      it('should return a DaffSearchLoadSucess action', () => {
        expect(effects.search$).toBeObservable(expected);
      });
    });

    describe('and the call to SearchDriver fails', () => {
      beforeEach(() => {
        const error = new DaffSearchInvalidAPIResponseError('Failed to search the searchResults');
        const response = cold('#', {}, error);
        driverSearchSpy.and.returnValue(response);
        const searchResultLoadFailureAction = new DaffSearchLoadFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: searchResultLoadAction });
        expected = cold('--b', { b: searchResultLoadFailureAction });
      });

      it('should return a DaffSearchLoadFailure action', () => {
        expect(effects.search$).toBeObservable(expected);
      });
    });
  });
});
