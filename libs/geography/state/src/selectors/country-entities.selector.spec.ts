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
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffCountryLoadSuccess,
  DaffCountryListSuccess,
  DaffCountryList,
  DaffGeographyStateRootSlice,
} from '@daffodil/geography/state';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { getDaffCountryEntitySelectors } from './country-entities.selector';

describe('Geography | Selector | CountryEntities', () => {
  let store: Store<DaffGeographyStateRootSlice>;

  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

  let scheduler: TestScheduler;

  const {
    selectAllCountries,
    selectCountryEntities,
    selectCountryIds,
    selectCountryTotal,
    selectCountry,
    selectCountrySubdivisions,
    selectIsCountryFullyLoaded,
  } = getDaffCountryEntitySelectors();

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
    countryId = mockCountry.id;

    store.dispatch(new DaffCountryListSuccess([mockCountry]));
  });

  describe('selectAllCountries', () => {
    it('should select all of the countries', () => {
      const selector = store.pipe(select(selectAllCountries));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [jasmine.objectContaining(mockCountry)]});
      });
    });
  });

  describe('selectCountryEntities', () => {
    it('should select all of the countries', () => {
      const selector = store.pipe(select(selectCountryEntities));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: { [countryId]: jasmine.objectContaining(mockCountry) }});
      });
    });
  });

  describe('selectCountryIds', () => {
    it('should select all of the country IDs', () => {
      const selector = store.pipe(select(selectCountryIds));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [countryId]});
      });
    });
  });

  describe('selectCountryTotal', () => {
    it('should select the total number of countries', () => {
      const selector = store.pipe(select(selectCountryTotal));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: 1 });
      });
    });
  });

  describe('selectCountry', () => {
    it('should select a specific country by ID', () => {
      const selector = store.pipe(select(selectCountry(mockCountry.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: jasmine.objectContaining(mockCountry) });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCountry(mockCountry.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCountryList());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectCountrySubdivisions', () => {
    it('should select a specific country\'s subdivisions by ID', () => {
      const selector = store.pipe(select(selectCountrySubdivisions(mockCountry.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockCountry.subdivisions });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCountrySubdivisions(mockCountry.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCountryList());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectIsCountryFullyLoaded', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectIsCountryFullyLoaded(mockCountry.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCountrySubdivisions(mockCountry.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCountryList());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('when a country is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      });

      it('should be true', () => {
        const selector = store.pipe(select(selectIsCountryFullyLoaded(mockCountry.id)));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });
});
