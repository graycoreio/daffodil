import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterSubscribe,
  DaffNewsletterFailedSubscribe,
  DaffNewsletterSuccessSubscribe,
  DaffNewsletterStateRootSlice,
  DAFF_NEWSLETTER_STORE_FEATURE_KEY,
  reducer,
} from '@daffodil/newsletter/state';

import { DaffNewsletterFacade } from './newsletter.facade';

describe('DaffNewsletterFacade', () => {

  let store: Store<DaffNewsletterStateRootSlice>;
  let facade: DaffNewsletterFacade;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: reducer,
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
      const expected = cold('a', { a: false });
      expect(facade.success$).toBeObservable(expected);
    });

    it('should return true after a successful subscription', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffNewsletterSuccessSubscribe());
      expect(facade.success$).toBeObservable(expected);
    });
  });

  describe('error$', () => {
    it('should intially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.error$).toBeObservable(expected);
    });

    it('should return an error message when it fails to subscribe', () => {
      const error = { code: 'code', message: 'Failed to subscribe to newsletter' };
      const expected = cold('a', { a: error });
      store.dispatch(new DaffNewsletterFailedSubscribe(error));
      expect(facade.error$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the newsletter is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('it should be true if the newsletter is loading', () => {
      const expected = cold('a', { a: true });
      const payload: DaffNewsletterSubmission = { email: 'yes@gmail.com' };
      store.dispatch(new DaffNewsletterSubscribe(payload));
      expect(facade.loading$).toBeObservable(expected);
    });
  });
});
