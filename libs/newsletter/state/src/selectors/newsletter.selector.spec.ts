import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

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
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectDaffNewsletterSuccess', () =>{
    it('selects the success property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterSuccess));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockNewsletter.success });
      });
    });
  });
});
