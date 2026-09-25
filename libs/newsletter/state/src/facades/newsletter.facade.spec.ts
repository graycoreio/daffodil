import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterSubscribeFailure,
  DaffNewsletterSubscribeSuccess,
  DaffNewsletterStateRootSlice,
  DAFF_NEWSLETTER_STORE_FEATURE_KEY,
  daffNewsletterStateReducer,
} from '@daffodil/newsletter/state';

import { DaffNewsletterFacade } from './newsletter.facade';

describe('DaffNewsletterFacade', () => {

  let store: Store<DaffNewsletterStateRootSlice>;
  let facade: DaffNewsletterFacade;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: daffNewsletterStateReducer,
        }),
      ],
      providers: [
        DaffNewsletterFacade,
      ],
    });
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffNewsletterFacade);
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

  describe('success$', () => {
    it('should intially be false', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.success$).toBe('a', { a: false });
      });
    });

    it('should return true after a successful subscription', () => {
      store.dispatch(new DaffNewsletterSubscribeSuccess());
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.success$).toBe('a', { a: true });
      });
    });
  });

  describe('error$', () => {
    it('should intially be an empty array', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.error$).toBe('a', { a: []});
      });
    });

    it('should return an error message when it fails to subscribe', () => {
      const error = { code: 'code', message: 'Failed to subscribe to newsletter' };
      store.dispatch(new DaffNewsletterSubscribeFailure([error]));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.error$).toBe('a', { a: [error]});
      });
    });
  });

  describe('loading$', () => {
    it('should be false if the newsletter is not loading', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('it should be true if the newsletter is loading', () => {
      const payload: DaffNewsletterSubmission = 'yes@gmail.com';
      store.dispatch(new DaffNewsletterSubscribe(payload));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });
});
