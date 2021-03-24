import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffNewsletterState,
  reducer,
  DAFF_NEWSLETTER_STORE_FEATURE_KEY,
} from '@daffodil/newsletter/state';

import {
  selectDaffNewsletterLoading,
  State,
  selectDaffNewsletterSuccess,
  selectDaffNewsletterError,
} from './newsletter.selector';


describe('DaffNewsletterSelectors', () => {
  let store: Store<State>;
  let mockNewsletter: DaffNewsletterState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: reducer,
        }),
      ],
    });
    mockNewsletter = { loading: false, success: false, error: null };
    store = TestBed.inject(Store);

  });

  describe('selectDaffNewsletterLoading', () =>{
    it('selects the loading property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterLoading));
      const expected = cold('a', { a: mockNewsletter.loading });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectDaffNewsletterSuccess', () =>{
    it('selects the success property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterSuccess));
      const expected = cold('a', { a: mockNewsletter.success });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectDaffNewsletterError', () =>{
    it('selects the error property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterError));
      const expected = cold('a', { a: mockNewsletter.error });
      expect(selector).toBeObservable(expected);
    });
  });
});
