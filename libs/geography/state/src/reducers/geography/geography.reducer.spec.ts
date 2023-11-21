import { TestBed } from '@angular/core/testing';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';
import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure,
  daffGeographyInitialState as initialState,
  DaffGeographyReducerState,
} from '@daffodil/geography/state';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { daffGeographyReducer as reducer } from './geography.reducer';

describe('@daffodil/geography/state | daffGeographyReducer', () => {
  let countryFactory: DaffCountryFactory;
  let country: DaffCountry;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    countryFactory = TestBed.inject(DaffCountryFactory);

    country = countryFactory.create();
    countryId = country.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CountryLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const countryLoadAction: DaffCountryLoad<DaffCountry> = new DaffCountryLoad<DaffCountry>(countryId);

      const result = reducer(initialState, countryLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CountryLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      };

      const countryLoadSuccess = new DaffCountryLoadSuccess<DaffCountry>(country);

      result = reducer(state, countryLoadSuccess);
    });

    it('should indicate that the country is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors to an empty array', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CountryLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          ...initialState.errors,
          { code: 'firstError', message: 'firstErrorMessage' },
        ],
      };

      const countryLoadFailure = new DaffCountryLoadFailure(error);

      result = reducer(state, countryLoadFailure);
    });

    it('should indicate that the country is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the country section of state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CountryListAction is triggered', () => {
    it('should set loading state to true', () => {
      const countryListAction: DaffCountryList = new DaffCountryList();

      const result = reducer(initialState, countryListAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CountryListSuccessAction is triggered', () => {
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstError', message: 'firstErrorMessage' },
        ],
      };

      const countryListSuccess = new DaffCountryListSuccess([country]);

      result = reducer(state, countryListSuccess);
    });

    it('should indicate that the country is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset the errors in the country section of state.errors to an empty array', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CountryListFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          ...initialState.errors,
          { code: 'firstError', message: 'firstErrorMessage' },
        ],
      };

      const countryListFailure = new DaffCountryListFailure(error);

      result = reducer(state, countryListFailure);
    });

    it('should indicate that the country is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the country section of state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
