import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import {
  daffGeographyReducers,
  DaffGeographyFeatureState,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY
} from '../reducers/public_api';
import {
  daffGeographySelectors,
} from './geography.selector';
import { DaffCountryListSuccess } from '../actions/public_api';

describe('Geography | Selector | Geography', () => {
  let store: Store<DaffGeographyFeatureState<DaffCountry>>;

  let countryFactory: DaffCountryFactory

  let loading: boolean;
  let errors: string[];
  let mockCountry: DaffCountry;

  const {
    selectGeographyLoading,
    selectGeographyErrors,
  } = daffGeographySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers())
        })
      ]
    });

    store = TestBed.get(Store);
    countryFactory = TestBed.get(DaffCountryFactory);

    mockCountry = countryFactory.create();
    loading = false;
    errors = [];

    store.dispatch(new DaffCountryListSuccess([mockCountry]));
  });

  describe('selectGeographyLoading', () => {
    it('should select the loading property of the geography state', () => {
      const selector = store.pipe(select(selectGeographyLoading));
      const expected = cold('a', {a: loading});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectGeographyErrors', () => {
    it('should select the error property of the geography state', () => {
      const selector = store.pipe(select(selectGeographyErrors));
      const expected = cold('a', {a: errors});

      expect(selector).toBeObservable(expected);
    });
  });
});
