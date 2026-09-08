import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the country is loading', () => {
      store.dispatch(new DaffCountryLoad(countryId));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });

    it('should contain an error upon a failed load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      store.dispatch(new DaffCountryLoadFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('countries$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countries$).toBe('a', { a: []});
      });
    });

    it('should be the countries upon a successful load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countries$).toBe('a', { a: [jasmine.objectContaining(mockCountry)]});
      });
    });
  });

  describe('countryIds$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryIds$).toBe('a', { a: []});
      });
    });

    it('should contain the country id upon a successful country load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryIds$).toBe('a', { a: [countryId]});
      });
    });
  });

  describe('countryCount$', () => {
    it('should initially be zero', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryCount$).toBe('a', { a: 0 });
      });
    });

    it('should be one upon a successful country load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryCount$).toBe('a', { a: 1 });
      });
    });
  });

  describe('countryEntities$', () => {
    it('should initially be an empty object', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryEntities$).toBe('a', { a: {}});
      });
    });

    it('should contain the country upon a successful country load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.countryEntities$).toBe('a', { a: { [countryId]: jasmine.objectContaining(mockCountry) }});
      });
    });
  });

  describe('getCountry | getting a specific country by ID', () => {
    it('should initially be undefined', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCountry(countryId)).toBe('a', { a: undefined });
      });
    });

    it('should be the country upon a successful country load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCountry(countryId)).toBe('a', { a: jasmine.objectContaining(mockCountry) });
      });
    });
  });

  describe('getCountrySubdivisions | getting a specific country\'s subdivisions by country ID', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCountrySubdivisions(countryId)).toBe('a', { a: []});
      });
    });

    it('should be the country\'s subdivisions upon a successful country load', () => {
      store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCountrySubdivisions(countryId)).toBe('a', { a: mockCountry.subdivisions });
      });
    });
  });

  describe('selectIsCountryFullyLoaded', () => {
    beforeEach(() => {
      store.dispatch(new DaffCountryListSuccess([mockCountry]));
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isCountryFullyLoaded(countryId)).toBe('a', { a: false });
      });
    });

    describe('when a country is loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCountryLoadSuccess(mockCountry));
      });

      it('should be true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.isCountryFullyLoaded(countryId)).toBe('a', { a: true });
        });
      });
    });
  });
});
