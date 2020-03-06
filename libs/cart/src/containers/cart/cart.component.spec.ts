import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartContainer } from './cart.component';
import { DaffCartLoad, DaffAddToCart } from '../../actions';
import { DaffCart } from '../../models/cart';
import {
  selectCartLoading,
  selectCartValue
} from '../../selectors';

describe('CartContainer', () => {
  let component: DaffCartContainer;
  let fixture: ComponentFixture<DaffCartContainer>;
  let store: MockStore<any>;
  let initialLoading: boolean;
  let initialCart: DaffCart;
  let cartFactory: DaffCartFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ DaffCartContainer ],
      providers:[
        provideMockStore({})
      ]
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

    store.overrideSelector(selectCartLoading, initialLoading);
    store.overrideSelector(selectCartValue, initialCart);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  })

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
