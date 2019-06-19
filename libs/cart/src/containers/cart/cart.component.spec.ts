import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffCartContainer } from './cart.component';
import { DaffCartLoad, DaffAddToCart } from '../../actions/cart.actions';
import * as fromCart from '../../reducers/index';
import { DaffCart } from '../../models/cart';
import { DaffCartFactory } from '../../../testing/src/factories/cart.factory';

describe('CartContainer', () => {
  let component: DaffCartContainer;
  let fixture: ComponentFixture<DaffCartContainer>;
  let store;
  let initialLoading: boolean;
  let initialCart: DaffCart;
  let cartFactory: DaffCartFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
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
      expect(store.dispatch).toHaveBeenCalledWith(new DaffCartLoad());
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

      expect(store.dispatch).toHaveBeenCalledWith(new DaffAddToCart(payload));
    });
  });
});
