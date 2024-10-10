import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffContactStateReducer,
  DaffContactState,
  DAFF_CONTACT_STORE_FEATURE_KEY,
  DaffContactStateRootSlice,
} from '@daffodil/contact/state';

import { selectDaffContactSuccess } from './contact.selector';
import { daffContactReducerInitialState } from '../reducers/contact.reducer';

describe('the contact selectors', () => {

  let store: Store<DaffContactStateRootSlice>;
  let mockContactState: DaffContactState;
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
  });

  describe('the selectDaffContactSuccess', () => {
    it('should select the success property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactSuccess));
      const expected = cold('a', { a: mockContactState.success });

      expect(selector).toBeObservable(expected);
    });
  });
});
