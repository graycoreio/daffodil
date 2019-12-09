import { Store, StoreModule, select } from '@ngrx/store';
import { reducer, DaffContactState } from '../reducers/contact.reducer';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { selectDaffContactLoading, selectDaffContactSuccess, selectDaffContactError, DaffContactReducerState } from './contact.selector';

describe('the contact selectors', () => {

  let store: Store<DaffContactReducerState>;
  let mockContactState: DaffContactState;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          contact: reducer
        })
      ]
    });
    mockContactState= { loading: false, success: false, errors: null }
    store = TestBed.get(Store);
  });
  describe('the selectDaffContactLoading', () => {
    it('should select the loading property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactLoading));
      const expected = cold('a', {a: mockContactState.loading});

      expect(selector).toBeObservable(expected);
    });
  })
  describe('the selectDaffContactSuccess', () => {
    it('should select the success property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactSuccess));
      const expected = cold('a', {a: mockContactState.success});

      expect(selector).toBeObservable(expected);
    });
  })
  describe('the selectDaffContactError', () => {
    it('should select the error property of the contact state', () =>{
      const selector = store.pipe(select(selectDaffContactError));
      const expected = cold('a', {a: mockContactState.errors});

      expect(selector).toBeObservable(expected);
    });
  })

});