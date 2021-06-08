import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCountry } from '@daffodil/geography';
import {
  DaffCountryEntityState,
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffCountryLoadSuccess,
  DaffCountryListSuccess,
  DaffCountryList,
} from '@daffodil/geography/state';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { getDaffCountryEntitySelectors } from './country-entities.selector';

describe('Geography | Selector | CountryEntities', () => {
  let store: Store<DaffCountryEntityState<DaffCountry>>;

  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

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
      const expected = cold('a', { a: [jasmine.objectContaining(mockCountry)]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryEntities', () => {
    it('should select all of the countries', () => {
      const selector = store.pipe(select(selectCountryEntities));
      const expected = cold('a', { a: { [countryId]: jasmine.objectContaining(mockCountry) }});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryIds', () => {
    it('should select all of the country IDs', () => {
      const selector = store.pipe(select(selectCountryIds));
      const expected = cold('a', { a: [countryId]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountryTotal', () => {
    it('should select the total number of countries', () => {
      const selector = store.pipe(select(selectCountryTotal));
      const expected = cold('a', { a: 1 });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCountry', () => {
    it('should select a specific country by ID', () => {
      const selector = store.pipe(select(selectCountry(mockCountry.id)));
      const expected = cold('a', { a: jasmine.objectContaining(mockCountry) });

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: mockCountry.subdivisions });

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
