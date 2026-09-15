import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  daffContactStateReducer,
  DaffContactSubmitSuccess,
  DaffContactSubmit,
  DaffContactSubmitFailure,
  DaffContactStateRootSlice,
  DAFF_CONTACT_STORE_FEATURE_KEY,
} from '@daffodil/contact/state';

import { DaffContactFacade } from './contact.facade';

describe('@daffodil/contact/state | DaffContactFacade', () => {
  let store: Store<DaffContactStateRootSlice>;
  let facade: DaffContactFacade;

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONTACT_STORE_FEATURE_KEY]: daffContactStateReducer,
        }),
      ],
      providers: [DaffContactFacade],
    });
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffContactFacade);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'Type' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('success$ observable', () => {
    it('should intially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.success$).toBe('a', { a: false });
      });
    });

    it('should return true after a successful submission', () => {
      store.dispatch(new DaffContactSubmitSuccess());
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.success$).toBe('a', { a: true });
      });
    });
  });

  describe('loading$ observable', () => {
    it('should intially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if a submit action is sent', () => {
      const payload = { email: 'email@email.com' };
      store.dispatch(new DaffContactSubmit(payload));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('error$ observable', () => {
    it('should intially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.error$).toBe('a', { a: []});
      });
    });

    it('should return an error when it fails', () => {
      const error = [{ code: 'code', message: 'Failed to submit' }];
      store.dispatch(new DaffContactSubmitFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.error$).toBe('a', { a: error });
      });
    });
  });
});
