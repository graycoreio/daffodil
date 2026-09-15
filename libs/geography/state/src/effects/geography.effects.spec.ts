import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';
import {
  DaffGeographyServiceInterface,
  DaffGeographyDriver,
  DaffCountryNotFoundError,
} from '@daffodil/geography/driver';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';
import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure,
} from '@daffodil/geography/state';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffGeographyEffects } from './geography.effects';

describe('Daffodil | Geography | GeographyEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffGeographyEffects<DaffCountry>;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

  let countryFactory: DaffCountryFactory;

  let daffDriver: DaffGeographyServiceInterface<DaffCountry>;
  let driverGetSpy: jasmine.Spy;
  let driverListSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffGeographyTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffGeographyEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject<DaffGeographyEffects<DaffCountry>>(DaffGeographyEffects);
    daffDriver = TestBed.inject(DaffGeographyDriver);
    countryFactory = TestBed.inject(DaffCountryFactory);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;

    driverGetSpy = spyOn(daffDriver, 'get');
    driverListSpy = spyOn(daffDriver, 'list');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCountryLoadAction is triggered', () => {
    const countryLoadAction = new DaffCountryLoad(countryId);

    describe('and the call to GeographyService is successful', () => {
      it('should dispatch a DaffCountryLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCountry));
          const countryLoadSuccessAction = new DaffCountryLoadSuccess(mockCountry);
          actions$ = helpers.hot('--a', { a: countryLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: countryLoadSuccessAction });
        });
      });
    });

    describe('and the call to GeographyService fails', () => {
      it('should dispatch a DaffCountryLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCountryNotFoundError('Failed to load country');
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const countryLoadFailureAction = new DaffCountryLoadFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: countryLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: countryLoadFailureAction });
        });
      });
    });
  });

  describe('when DaffCountryListAction is triggered', () => {
    const countryListAction = new DaffCountryList();

    describe('and the call to GeographyService is successful', () => {
      it('should return a DaffCountryListSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockCountry]));
          const countryListSuccessAction = new DaffCountryListSuccess([mockCountry]);
          actions$ = helpers.hot('--a', { a: countryListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: countryListSuccessAction });
        });
      });
    });

    describe('and the call to GeographyService fails', () => {
      it('should return a DaffCountryListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = new DaffCountryNotFoundError('Failed to list the countries');
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const countryListFailureAction = new DaffCountryListFailure(daffTransformErrorToStateError(error));
          actions$ = helpers.hot('--a', { a: countryListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: countryListFailureAction });
        });
      });
    });
  });
});
