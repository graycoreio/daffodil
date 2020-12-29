import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';
import {
  daffGeographyReducers,
  DaffGeographyFeatureState,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffCountryListSuccess
} from '@daffodil/geography/state';

import {
  getGeographySelectors,
} from './geography.selector';

describe('Geography | Selector | Geography', () => {
  let store: Store<DaffGeographyFeatureState>;

  let countryFactory: DaffCountryFactory

  let loading: boolean;
  let errors: string[];
  let mockCountry: DaffCountry;

  const {
    selectGeographyLoading,
    selectGeographyErrors,
  } = getGeographySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers)
        })
      ]
    });

    store = TestBed.inject(Store);
    countryFactory = TestBed.inject(DaffCountryFactory);

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
