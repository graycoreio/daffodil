import { Component, Input, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

import { DaffCart } from '@daffodil/cart';
import { DaffCartTestingModule, MockDaffCartFacade } from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { CartComponent } from './cart.component';

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
	let daffCartFacade: MockDaffCartFacade;

  let cartItemsElement: DebugElement;
  let cartItemsComponent: MockCartItemsComponent

  let cartSidebarElement: DebugElement;
  let cartSidebarComponent: MockCartSidebarComponent;

  let cartItemCountElement: DebugElement;
  let cartItemCountComponent: MockCartItemCountComponent;

  const cartFactory = new DaffCartFactory();
  const cart = cartFactory.create();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCartTestingModule
      ],
      declarations: [
        WrapperComponent,
        MockCartItemsComponent,
        MockCartSidebarComponent,
        MockCartItemCountComponent,
        CartComponent
      ],
      providers: [
				provideMockStore({}),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
		daffCartFacade = TestBed.inject(MockDaffCartFacade);
		daffCartFacade.items$ = new BehaviorSubject(cart.items);
		daffCartFacade.isCartEmpty$ = new BehaviorSubject(true);
    wrapper.cartValue = cart;
    component = fixture.debugElement.query(By.css('demo-cart')).componentInstance;

    cartItemsElement = fixture.debugElement.query(By.css('demo-cart-items'));
    cartItemsComponent = cartItemsElement.componentInstance;

    cartItemCountElement = fixture.debugElement.query(By.css('demo-cart-item-count'));
    cartItemCountComponent = cartItemCountElement.componentInstance;

    cartSidebarElement = fixture.debugElement.query(By.css('demo-cart-sidebar'));
    cartSidebarComponent = cartSidebarElement.componentInstance;

    fixture.detectChanges();
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

    it('should set isCartEmpty from the daffCartFacade', () => {
      const val = true;
      daffCartFacade.isCartEmpty$.next(val);
      fixture.detectChanges();

      expect(cartSidebarComponent.isCartEmpty).toEqual(val);
    });
  });

  describe('on <demo-cart-item-count>', () => {
    it('should set itemCount from the daffCartFacade', () => {
      expect(cartItemCountComponent.itemCount).toEqual(cart.items.length);
    });
  });
});
