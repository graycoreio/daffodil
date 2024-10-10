import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffNewsletterState,
  daffNewsletterStateReducer,
  DAFF_NEWSLETTER_STORE_FEATURE_KEY,
  DaffNewsletterStateRootSlice,
  daffNewsletterReducerInitialState,
} from '@daffodil/newsletter/state';

import { selectDaffNewsletterSuccess } from './newsletter.selector';


describe('DaffNewsletterSelectors', () => {
  let store: Store<DaffNewsletterStateRootSlice>;
  let mockNewsletter: DaffNewsletterState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: daffNewsletterStateReducer,
        }),
      ],
    });

    mockNewsletter = daffNewsletterReducerInitialState;
    store = TestBed.inject(Store);
  });

  describe('selectDaffNewsletterSuccess', () =>{
    it('selects the success property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterSuccess));
      const expected = cold('a', { a: mockNewsletter.success });
      expect(selector).toBeObservable(expected);
    });
  });
});
