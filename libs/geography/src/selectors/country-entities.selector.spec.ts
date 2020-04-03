import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import {
  DaffCountryEntityState,
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY
} from '../reducers/public_api';
import {
  selectAllCountries,
  selectCountryEntities,
  selectCountryIds,
  selectCountryTotal,
} from './country-entities.selector';
import { DaffCountryListSuccess } from '../actions/public_api';

describe('Geography | Selector | CountryEntities', () => {
  let store: Store<DaffCountryEntityState>;

  let countryFactory: DaffCountryFactory

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers)
        })
      ]
    });

    store = TestBed.get(Store);
    countryFactory = TestBed.get(DaffCountryFactory);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;

    store.dispatch(new DaffCountryListSuccess([mockCountry]));
  });

  describe('selectAllCountries', () => {
    it('should select all of the countries', () => {
      const selector = store.pipe(select(selectAllCountries));
      const expected = cold('a', {a: [mockCountry]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryEntities', () => {
    it('should select all of the countries', () => {
      const selector = store.pipe(select(selectCountryEntities));
      const expected = cold('a', {a: {[countryId]: mockCountry}});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryIds', () => {
    it('should select all of the country IDs', () => {
      const selector = store.pipe(select(selectCountryIds));
      const expected = cold('a', {a: [countryId]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryTotal', () => {
    it('should select the total number of countries', () => {
      const selector = store.pipe(select(selectCountryTotal));
      const expected = cold('a', {a: 1});

      expect(selector).toBeObservable(expected);
    });
  });
});
