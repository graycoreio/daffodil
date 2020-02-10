import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import {
  reducer,
  DaffContactSuccessSubmit, 
  DaffContactSubmit, 
  DaffContactFailedSubmit
} from '@daffodil/contact';

import { DaffContactFeatureState } from '../selectors/contact.selector';
import { DaffContactFacade } from './contact.facade';

describe('the DaffContactFacade', () => {
  let store: MockStore<Partial<DaffContactFeatureState>>;
  let facade: DaffContactFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          contact: reducer
        })
      ],
      providers: [
        DaffContactFacade
      ]
    })
    store = TestBed.get(Store);
    facade = TestBed.get(DaffContactFacade);
  });
  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'Type' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
  describe('success$ observable', () => {
    it('should intially be false', () => {
      const expected = cold('a', {a: false});
      expect(facade.success$).toBeObservable(expected);
    });
    it('should return true after a successful submission', () => {
      const expected = cold('a', {a: true});
      store.dispatch(new DaffContactSuccessSubmit());
      expect(facade.success$).toBeObservable(expected);
    });
  });
  describe('loading$ observable', () => {
    it('should intially be false', () => {
      const expected = cold('a', {a: false})
      expect(facade.loading$).toBeObservable(expected);
    });
    it('should be true if a submit action is sent', () => {
      const expected = cold('a', {a: true});
      const payload = {email: 'email@email.com'};
      store.dispatch(new DaffContactSubmit(payload));
      expect(facade.loading$).toBeObservable(expected);
    });
  });
  describe('error$ observable', () => {
    it('should intially be null', () => {
      const expected = cold('a', {a: null})
      expect(facade.error$).toBeObservable(expected);
    });
    it('should return an error when it fails', () => {
      const error_messages = ['failed to submit']
      const expected = cold('a', {a: error_messages});
      store.dispatch(new DaffContactFailedSubmit(error_messages));
      expect(facade.error$).toBeObservable(expected);
    });
  });
})