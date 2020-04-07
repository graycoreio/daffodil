import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartContainer } from './cart.component';
import { DaffCartLoad, DaffAddToCart, DaffCartLoadSuccess } from '../../actions/public_api';
import { DaffCart } from '../../models/cart';
import { daffCartReducers } from '../../reducers/public_api';

describe('CartContainer', () => {
  let component: DaffCartContainer<DaffCart>;
  let fixture: ComponentFixture<DaffCartContainer<DaffCart>>;
  let store: MockStore<any>;
  let initialCart: DaffCart;
  let cartFactory: DaffCartFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				})
			],
      declarations: [ DaffCartContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.get(DaffCartFactory);
    fixture = TestBed.createComponent(DaffCartContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialCart = cartFactory.create();

		store.dispatch(new DaffCartLoadSuccess(initialCart));

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('dispatches a CartLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new DaffCartLoad());
    });

    it('initializes loading$', () => {
      const expected = cold('a', { a: false});
			
			expect(component.loading$).toBeObservable(expected);
    });

    it('initializes cart$', () => {
      const expected = cold('a', { a: initialCart });

			expect(component.cart$).toBeObservable(expected);
    });
  });

  describe('addToCart', () => {

    it('should call store.dispatch', () => {
      const qty = 3;
      const payload = {productId: '', qty: qty};
      component.addToCart(payload);

      expect(store.dispatch).toHaveBeenCalledWith(new DaffAddToCart(payload));
    });
  });
});
