import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { DaffNewsletterState, reducer } from '@daffodil/newsletter/state';
import { Store, StoreModule, select } from '@ngrx/store';
import { selectDaffNewsletterLoading, DaffNewsletterFeatureState, selectDaffNewsletterSuccess, selectDaffNewsletterError } from './newsletter.selector';


describe('DaffNewsletterSelectors', () => {
  let store: Store<DaffNewsletterFeatureState>;
  let mockNewsletter: DaffNewsletterState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          newsletter: reducer
        })
      ]
    });
    mockNewsletter = {loading: false, success: false, error: null};
    store = TestBed.inject(Store);

  });
  describe('selectDaffNewsletterLoading', () =>{
    it('selects the loading property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterLoading));
      const expected = cold('a', {a: mockNewsletter.loading })
      expect(selector).toBeObservable(expected);
    });
  });
  describe('selectDaffNewsletterSuccess', () =>{
    it('selects the success property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterSuccess));
      const expected = cold('a', {a: mockNewsletter.success })
      expect(selector).toBeObservable(expected);
    });
  });
  describe('selectDaffNewsletterError', () =>{
    it('selects the error property of newsletter state', () => {
      const selector = store.pipe(select(selectDaffNewsletterError));
      const expected = cold('a', {a: mockNewsletter.error })
      expect(selector).toBeObservable(expected);
    });
  });
});
