import { Component, Input, Directive, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, combineReducers, MemoizedSelector, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffCartFactory } from '@daffodil/cart/testing';
import { fromCart, DaffCart } from '@daffodil/cart';

import { CartComponent } from './cart.component';
import * as cartSelector from '../../selectors/cart-selector';

@Component({ template: '<demo-cart [cart]="cartValue"></demo-cart>' })
class WrapperComponent {
  cartValue: DaffCart;
}

@Component({
  selector: 'demo-cart-items',
  template: ''
})
class MockCartItemsComponent {
  @Input() cart: DaffCart;
}

@Component({
  selector: 'demo-cart-sidebar',
  template: ''
})
class MockCartSidebarComponent {
  @Input() cart: DaffCart;
  @Input() isCartEmpty: boolean;
}

@Component({
  selector: 'demo-cart-item-count',
  template: ''
})
class MockCartItemCountComponent {
  @Input() itemCount: number;
}


describe('Cart', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: CartComponent;

  let cartItemsElement: DebugElement;
  let cartItemsComponent: MockCartItemsComponent

  let cartSidebarElement: DebugElement;
  let cartSidebarComponent: MockCartSidebarComponent;

  let cartItemCountElement: DebugElement;
  let cartItemCountComponent: MockCartItemCountComponent;

  let store: MockStore<any>;
  let cartItemCountSelector: MemoizedSelector<object, number>;
  let cartEmptySelector: MemoizedSelector<object, boolean>;

  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();
  const stubSelectCartItemCount = 0;
  const stubIsCartEmpty = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        MockCartItemsComponent,
        MockCartSidebarComponent,
        MockCartItemCountComponent,
        CartComponent
      ],
      providers: [
        provideMockStore({})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    wrapper.cartValue = cart;
    component = fixture.debugElement.query(By.css('demo-cart')).componentInstance;

    cartItemCountSelector = store.overrideSelector(cartSelector.selectCartItemCount, stubSelectCartItemCount);
    cartEmptySelector = store.overrideSelector(cartSelector.isCartEmpty, stubIsCartEmpty);

    cartItemsElement = fixture.debugElement.query(By.css('demo-cart-items'));
    cartItemsComponent = cartItemsElement.componentInstance;

    cartItemCountElement = fixture.debugElement.query(By.css('demo-cart-item-count'));
    cartItemCountComponent = cartItemCountElement.componentInstance;

    cartSidebarElement = fixture.debugElement.query(By.css('demo-cart-sidebar'));
    cartSidebarComponent = cartSidebarElement.componentInstance;

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take cart as input', () => {
    expect(component.cart).toEqual(cart);
  });

  describe('on <demo-cart-items>', () => {
    it('should pass down the cart', () => {
      expect(cartItemsComponent.cart).toEqual(cart);
    });
  });

  describe('on <demo-cart-sidebar>', () => {
    it('should pass down the cart', () => {
      expect(cartSidebarComponent.cart).toEqual(cart);
    });

    it('should set isCartEmpty to true', () => {
      const val = true;
      cartEmptySelector.setResult(val);
      store.setState({});
      fixture.detectChanges();

      expect(cartSidebarComponent.isCartEmpty).toEqual(val);
    });
  });

  describe('on <demo-cart-item-count>', () => {
    it('should set itemCount to value grabbed from store during init', () => {
      cartItemCountSelector.setResult(15);
      store.setState({});
      fixture.detectChanges();

      expect(cartItemCountComponent.itemCount).toEqual(15);
    });
  });
});
