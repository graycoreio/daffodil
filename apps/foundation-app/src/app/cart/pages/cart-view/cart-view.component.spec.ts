import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CartViewComponent } from './cart-view.component';

import { Cart, CartItem, CartFactory } from '@daffodil/core';

let cartFactory = new CartFactory();
let cart$ = of(cartFactory.create());

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class CartContainerMock {
  cart$: Observable<Cart> = cart$;
}

@Component({
  selector: 'cart',
  template: ''
})
class CartMock { 
  @Input() cart: Cart;
}

@Component({
  selector: 'cart-summary',
  template: ''
})
class CartSummaryMock {
  @Input() cart: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CartViewComponent,
        CartContainerMock,
        CartMock,
        CartSummaryMock,
        ProceedToCheckoutMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <cart>', () => {
    
    it('should set cart to value passed by cart-container directive', () => {
      let cartElement = fixture.debugElement.query(By.css('cart'));
      
      cart$.subscribe((cart) => {
        expect(cartElement.componentInstance.cart).toEqual(cart);
      });
    });
  });

  describe('on <cart-summary>', () => {
    
    it('should set cart to value passed by the cart-container directive', () => {
      let cartSummaryElement = fixture.debugElement.query(By.css('cart-summary'));

      cart$.subscribe((cart) => {
        expect(cartSummaryElement.componentInstance.cart).toEqual(cart);
      });
    });
  });
});
