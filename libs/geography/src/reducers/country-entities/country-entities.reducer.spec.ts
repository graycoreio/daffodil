import { DaffCountry, DaffSubdivision } from '@daffodil/geography';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';

import {
  DaffCountryLoadSuccess,
  DaffCountryListSuccess,
} from '../../actions/public_api';
import {
  daffCountryEntitiesReducer as reducer,
} from './country-entities.reducer';
import { daffCountryEntitiesInitialState as initialState } from './country-entities-initial-state';

describe('Geography | Reducer | CountryEntities', () => {
  let countryFactory: DaffCountryFactory;
  let subdivisionFactory: DaffSubdivisionFactory;
  let mockCountry: DaffCountry;
  let mockSubdivision: DaffSubdivision;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    countryFactory = new DaffCountryFactory();
    subdivisionFactory = new DaffSubdivisionFactory();

    mockCountry = countryFactory.create();
    mockSubdivision = subdivisionFactory.create();
    countryId = mockCountry.id;
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
      const countryLoadSuccess = new DaffCountryLoadSuccess<DaffCountry>(mockCountry);

      result = reducer(initialState, countryLoadSuccess);
    });

    it('should set country from action.payload', () => {
      expect(result.entities[countryId]).toEqual(jasmine.objectContaining(mockCountry))
    });

    it('should indicate that the country has been fully loaded', () => {
      expect(result.entities[countryId].loaded).toBeTruthy();
    });
  });

  describe('when CountryListSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const countryListSuccess = new DaffCountryListSuccess([mockCountry]);

      result = reducer(initialState, countryListSuccess);
    });

    it('should set countries from action.payload', () => {
      expect(result.entities).toEqual({[countryId]: jasmine.objectContaining(mockCountry)})
    });

    describe('when a country has previously been fully loaded', () => {
      beforeEach(() => {
        const countryLoadSuccess = new DaffCountryLoadSuccess({
          ...mockCountry,
          subdivisions: [mockSubdivision]
        });
        const countryListSuccess = new DaffCountryListSuccess([mockCountry]);

        const inter = reducer(initialState, countryLoadSuccess);

        result = reducer(inter, countryListSuccess);
      });

      it('should not overwrite the subdivisions', () => {
        expect(result.entities[mockCountry.id].subdivisions).toEqual([mockSubdivision]);
      });

      it('should not overwrite the loaded state', () => {
        expect(result.entities[mockCountry.id].loaded).toBeTruthy();
      });
    });
  });
});
