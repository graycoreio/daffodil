import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { Cart } from '@daffodil/core';
import { DaffCartFactory } from '@daffodil/core/testing';

import { CartContainer } from './cart.component';
import { CartLoad, AddToCart } from '../../actions/cart.actions';
import * as fromCart from '../../reducers/index';

describe('CartContainer', () => {
  let component: CartContainer;
  let fixture: ComponentFixture<CartContainer>;
  let store;
  let initialLoading: boolean;
  let initialCart: Cart;
  let cartFactory: DaffCartFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      declarations: [ CartContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.get(DaffCartFactory);
    fixture = TestBed.createComponent(CartContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialCart = cartFactory.create();

    spyOn(fromCart, 'selectCartLoadingState').and.returnValue(initialLoading);
    spyOn(fromCart, 'selectCartValueState').and.returnValue(initialCart);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a CartLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new CartLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes cart$', () => {
      component.cart$.subscribe((cart) => {
        expect(cart).toEqual(initialCart);
      });
    });
  });

  describe('addToCart', () => {
    
    it('should call store.dispatch', () => {
      const qty = 3;
      const payload = {productId: '', qty: qty};
      component.addToCart(payload);

      expect(store.dispatch).toHaveBeenCalledWith(new AddToCart(payload));
    });
  });
});
