import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  daffContactStateReducer,
  DaffContactState,
  DAFF_CONTACT_STORE_FEATURE_KEY,
  DaffContactStateRootSlice,
} from '@daffodil/contact/state';

import { selectDaffContactSuccess } from './contact.selector';
import { daffContactReducerInitialState } from '../reducers/contact.reducer';

describe('@daffodil/contact/state | Selectors', () => {

  let store: Store<DaffContactStateRootSlice>;
  let mockContactState: DaffContactState;
  let scheduler: TestScheduler;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONTACT_STORE_FEATURE_KEY]: daffContactStateReducer,
        }),
      ],
    });
    mockContactState = daffContactReducerInitialState;
    store = TestBed.inject(Store);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('the selectDaffContactSuccess', () => {
    it('should select the success property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactSuccess));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockContactState.success });
      });
    });
  });
});
