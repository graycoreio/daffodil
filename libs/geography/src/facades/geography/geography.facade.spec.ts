import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffCountry,
  DaffGeographyFeatureState,
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY
} from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffGeographyFacade } from './geography.facade';

describe('DaffGeographyFacade', () => {
  let store: MockStore<{ [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: Partial<DaffGeographyFeatureState<DaffCountry>> }>;
  let facade: DaffGeographyFacade<DaffCountry>;
  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];
  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers),
        })
      ],
      providers: [
        DaffGeographyFacade,
      ]
    });

    store = TestBed.get(Store);
    facade = TestBed.get(DaffGeographyFacade);
    countryFactory = TestBed.get(DaffCountryFactory);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;
    errors = [];
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the country is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the country is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCountryLoad(countryId));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      store.dispatch(new DaffCountryLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    })
  });

  describe('countries$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.countries$).toBeObservable(expected);
    });

    it('should be the countries upon a successful load', () => {
      const expected = cold('a', { a: [mockCountry] });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countries$).toBeObservable(expected);
    });
  });

  describe('ids$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.ids$).toBeObservable(expected);
    });

    it('should contain the country id upon a successful country load', () => {
      const expected = cold('a', { a: [countryId] });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.ids$).toBeObservable(expected);
    });
  });

  describe('countryCount$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.countryCount$).toBeObservable(expected);
    });

    it('should be one upon a successful country load', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countryCount$).toBeObservable(expected);
    });
  });

  describe('countryEntities$', () => {
    it('should initially be an empty object', () => {
      const expected = cold('a', { a: {} });
      expect(facade.countryEntities$).toBeObservable(expected);
    });

    it('should contain the country upon a successful country load', () => {
      const expected = cold('a', { a: {[countryId]: mockCountry} });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countryEntities$).toBeObservable(expected);
    });
  });
});
