import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  reducer,
  DaffContactState,
  DAFF_CONTACT_STORE_FEATURE_KEY,
} from '@daffodil/contact/state';

import {
  selectDaffContactLoading,
  selectDaffContactSuccess,
  selectDaffContactError,
  DaffContactFeatureState,
} from './contact.selector';

describe('the contact selectors', () => {

  let store: Store<DaffContactFeatureState>;
  let mockContactState: DaffContactState;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONTACT_STORE_FEATURE_KEY]: reducer,
        }),
      ],
    });
    mockContactState= { loading: false, success: false, errors: null };
    store = TestBed.inject(Store);
  });

  describe('the selectDaffContactLoading', () => {
    it('should select the loading property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactLoading));
      const expected = cold('a', { a: mockContactState.loading });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('the selectDaffContactSuccess', () => {
    it('should select the success property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactSuccess));
      const expected = cold('a', { a: mockContactState.success });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('the selectDaffContactError', () => {
    it('should select the error property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactError));
      const expected = cold('a', { a: mockContactState.errors });

      expect(selector).toBeObservable(expected);
    });
  });

});
