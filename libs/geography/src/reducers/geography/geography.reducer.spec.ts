import { DaffCountryFactory } from '@daffodil/geography/testing';

import { daffGeographyInitialState as initialState } from './geography-initial-state';
import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountryList,
  DaffCountryListSuccess,
  DaffCountryListFailure
} from '../../actions/public_api';
import { daffGeographyReducer as reducer } from './geography.reducer';
import { DaffGeographyReducerState } from './geography-state.interface';
import { DaffCountry } from '../../models/country';


describe('Geography | Reducer | Geography', () => {
  let countryFactory: DaffCountryFactory;
  let country: DaffCountry;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    countryFactory = new DaffCountryFactory();

    country = countryFactory.create();
    countryId = country.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

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
        loading: true
      }

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
    const error = 'error message';
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          ...initialState.errors,
          'firstError'
        ]
      }

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
        errors: ['an errorz']
      }

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
    const error = 'error message';
    let result;
    let state: DaffGeographyReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [
          ...initialState.errors,
          'firstError'
        ]
      }

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
