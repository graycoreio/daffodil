import { TestBed } from '@angular/core/testing';

import { DaffNewsletterFacade } from './newsletter.facade';
import { MockStore } from '@ngrx/store/testing';
import { State } from '../selectors/newsletter.selector';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { reducer } from '../reducers/newsletter.reducer';
import { cold } from 'jasmine-marbles';
import { DaffNewsletterSubscribe, DaffNewsletterFailedSubscribe, DaffNewsletterSuccessSubscribe } from '../actions/newsletter.actions';
import { DaffNewsletter } from '../models/newsletter.model';

describe('DaffNewsletterFacade', () => {

  let store: MockStore<Partial<State>>;
  let facade: DaffNewsletterFacade;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          newsletter: reducer,
        })
      ],
      providers: [
        DaffNewsletterFacade
      ]
    })
    store = TestBed.get(Store);
    facade = TestBed.get(DaffNewsletterFacade);
  });
  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
  it('should be able to dispatch an action to the store', () => {
      spyOn(store, 'dispatch');
      const action = {type: 'Type'};

      facade.dispatch(action);
      expect(store.dispatch).toHaveBeenCalledWith(action);
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
      const msg: string = 'Failed to subscribe';
      const expected = cold('a', { a: msg });
      store.dispatch(new DaffNewsletterFailedSubscribe(msg));
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
      const payload: DaffNewsletter = { email: 'yes@gmail.com'}
      store.dispatch(new DaffNewsletterSubscribe(payload))
      expect(facade.loading$).toBeObservable(expected);
    });
  });
});