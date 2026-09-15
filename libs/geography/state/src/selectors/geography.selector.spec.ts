import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCountry } from '@daffodil/geography';
import {
  daffGeographyReducers,
  DaffGeographyStateRootSlice,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffCountryListSuccess,
} from '@daffodil/geography/state';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { getGeographySelectors } from './geography.selector';

describe('Geography | Selector | Geography', () => {
  let store: Store<DaffGeographyStateRootSlice>;

  let countryFactory: DaffCountryFactory;

  let loading: boolean;
  let errors: string[];
  let mockCountry: DaffCountry;

  let scheduler: TestScheduler;

  const {
    selectGeographyLoading,
    selectGeographyErrors,
  } = getGeographySelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers),
        }),
      ],
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

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: loading });
      });
    });
  });

  describe('selectGeographyErrors', () => {
    it('should select the error property of the geography state', () => {
      const selector = store.pipe(select(selectGeographyErrors));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors });
      });
    });
  });
});
