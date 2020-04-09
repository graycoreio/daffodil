import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffGeographyEffects } from './geography.effects';
import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure,
} from '../actions/public_api';
import { DaffGeographyServiceInterface, DaffGeographyDriver } from '../drivers/interfaces/geography-service.interface';

describe('Daffodil | Geography | GeographyEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffGeographyEffects<DaffCountry>;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

  let countryFactory: DaffCountryFactory;

  let daffDriverSpy: jasmine.SpyObj<DaffGeographyServiceInterface<DaffCountry>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffGeographyEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffGeographyDriver,
          useValue: jasmine.createSpyObj('DaffGeographyDriver', ['get', 'list'])
        }
      ]
    });

    effects = TestBed.get<DaffGeographyEffects<DaffCountry>>(DaffGeographyEffects);
    daffDriverSpy = TestBed.get<DaffGeographyServiceInterface<DaffCountry>>(DaffGeographyDriver);
    countryFactory = TestBed.get<DaffCountryFactory>(DaffCountryFactory);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffCountryLoadAction is triggered', () => {
    let expected;
    const countryLoadAction = new DaffCountryLoad(countryId);

    describe('and the call to GeographyService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.get.and.returnValue(of(mockCountry));
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
        const error = 'Failed to load country';
        const response = cold('#', {}, error);
        daffDriverSpy.get.and.returnValue(response);
        const countryLoadFailureAction = new DaffCountryLoadFailure(error);
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
        daffDriverSpy.list.and.returnValue(of([mockCountry]));
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
        const error = 'Failed to list the countries';
        const response = cold('#', {}, error);
        daffDriverSpy.list.and.returnValue(response);
        const countryListFailureAction = new DaffCountryListFailure(error);
        actions$ = hot('--a', { a: countryListAction });
        expected = cold('--b', { b: countryListFailureAction });
      });
      it('should return a DaffCountryListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });
});
