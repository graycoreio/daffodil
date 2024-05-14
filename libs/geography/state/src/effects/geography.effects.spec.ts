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
    let expected;
    const countryLoadAction = new DaffCountryLoad(countryId);

    describe('and the call to GeographyService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCountry));
        const countryLoadSuccessAction = new DaffCountryLoadSuccess(mockCountry);
        actions$ = hot('--a', { a: countryLoadAction });
        expected = cold('--b', { b: countryLoadSuccessAction });
      });

      it('should dispatch a DaffCountryLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to GeographyService fails', () => {
      beforeEach(() => {
        const error = new DaffCountryNotFoundError('Failed to load country');
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const countryLoadFailureAction = new DaffCountryLoadFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: countryLoadAction });
        expected = cold('--b', { b: countryLoadFailureAction });
      });

      it('should dispatch a DaffCountryLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when DaffCountryListAction is triggered', () => {
    let expected;
    const countryListAction = new DaffCountryList();

    describe('and the call to GeographyService is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockCountry]));
        const countryListSuccessAction = new DaffCountryListSuccess([mockCountry]);
        actions$ = hot('--a', { a: countryListAction });
        expected = cold('--b', { b: countryListSuccessAction });
      });

      it('should return a DaffCountryListSucess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to GeographyService fails', () => {
      beforeEach(() => {
        const error = new DaffCountryNotFoundError('Failed to list the countries');
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
        const countryListFailureAction = new DaffCountryListFailure(daffTransformErrorToStateError(error));
        actions$ = hot('--a', { a: countryListAction });
        expected = cold('--b', { b: countryListFailureAction });
      });

      it('should return a DaffCountryListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
