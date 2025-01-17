import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';
import {
  DaffCountryLoad,
  DaffCountryLoadSuccess,
  DaffCountryLoadFailure,
  DaffGeographyStateRootSlice,
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
  DaffCountryListSuccess,
} from '@daffodil/geography/state';
import {
  DaffCountryFactory,
  DaffSubdivisionFactory,
} from '@daffodil/geography/testing';

import { DaffGeographyFacade } from './geography.facade';

describe('DaffGeographyFacade', () => {
  let store: Store<DaffGeographyStateRootSlice>;
  let facade: DaffGeographyFacade;
  let countryFactory: DaffCountryFactory;
  let subdivisionFactory: DaffSubdivisionFactory;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];
  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: combineReducers(daffGeographyReducers),
        }),
      ],
      providers: [
        DaffGeographyFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffGeographyFacade);
    countryFactory = TestBed.inject(DaffCountryFactory);
    subdivisionFactory = TestBed.inject(DaffSubdivisionFactory);

    mockCountry = countryFactory.create();
    mockCountry.subdivisions = subdivisionFactory.createMany(3);
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
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
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
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCountryLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('countries$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.countries$).toBeObservable(expected);
    });

    it('should be the countries upon a successful load', () => {
      const expected = cold('a', { a: [jasmine.objectContaining(mockCountry)]});
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countries$).toBeObservable(expected);
    });
  });

  describe('countryIds$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.countryIds$).toBeObservable(expected);
    });

    it('should contain the country id upon a successful country load', () => {
      const expected = cold('a', { a: [countryId]});
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countryIds$).toBeObservable(expected);
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
      const expected = cold('a', { a: {}});
      expect(facade.countryEntities$).toBeObservable(expected);
    });

    it('should contain the country upon a successful country load', () => {
      const expected = cold('a', { a: { [countryId]: jasmine.objectContaining(mockCountry) }});
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.countryEntities$).toBeObservable(expected);
    });
  });

  describe('getCountry | getting a specific country by ID', () => {
    it('should initially be undefined', () => {
      const expected = cold('a', { a: undefined });
      expect(facade.getCountry(countryId)).toBeObservable(expected);
    });

    it('should be the country upon a successful country load', () => {
      const expected = cold('a', { a: jasmine.objectContaining(mockCountry) });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.getCountry(countryId)).toBeObservable(expected);
    });
  });

  describe('getCountrySubdivisions | getting a specific country\'s subdivisions by country ID', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.getCountrySubdivisions(countryId)).toBeObservable(expected);
    });

    it('should be the country\'s subdivisions upon a successful country load', () => {
      const expected = cold('a', { a: mockCountry.subdivisions });
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      expect(facade.getCountrySubdivisions(countryId)).toBeObservable(expected);
    });
  });

  describe('selectIsCountryFullyLoaded', () => {
    beforeEach(() => {
      store.dispatch(new DaffCountryListSuccess([mockCountry]));
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });

      expect(facade.isCountryFullyLoaded(countryId)).toBeObservable(expected);
    });

    describe('when a country is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });

        expect(facade.isCountryFullyLoaded(countryId)).toBeObservable(expected);
      });
    });
  });
});
