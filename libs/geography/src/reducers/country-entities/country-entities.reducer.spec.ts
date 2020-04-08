import { DaffCountryFactory } from '@daffodil/geography/testing';

import {
  DaffCountryLoadSuccess,
  DaffCountryListSuccess,
} from '../../actions/public_api';
import {
  daffCountryEntitiesReducer as reducer,
} from './country-entities.reducer';
import { daffCountryEntitiesInitialState as initialState } from './country-entities-initial-state';
import { DaffCountry } from '../../models/country';

describe('Geography | Reducer | CountryEntities', () => {
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

      expect(result).toBe(initialState);
    });
  });

  describe('when CountryLoadSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const countryLoadSuccess = new DaffCountryLoadSuccess<DaffCountry>(country);

      result = reducer(initialState, countryLoadSuccess);
    });

    it('should set country from action.payload', () => {
      expect(result.entities[countryId]).toEqual(country)
    });
  });

  describe('when CountryListSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const countryListSuccess = new DaffCountryListSuccess([country]);

      result = reducer(initialState, countryListSuccess);
    });

    it('should set countries from action.payload', () => {
      expect(result.entities).toEqual({[countryId]: country})
    });
  });
});
