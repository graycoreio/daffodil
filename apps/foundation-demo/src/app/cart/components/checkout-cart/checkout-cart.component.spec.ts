import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart, CartItem } from '@daffodil/core';

import { CheckoutCartComponent } from './checkout-cart.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());
let stubSubtitle = 'subtitle';

@Component({template: '<checkout-cart [cart]="cartValue" [subtitle]="subtitleValue"></checkout-cart>'})
class TestCheckoutCartWrapper {
  cartValue: Cart;
  subtitleValue: string;
}

@Component({selector: 'checkout-cart-item', template: ''})
class CheckoutCartItemMock {
  @Input() item: CartItem;
}

describe('CheckoutCartComponent', () => {
  let component: TestCheckoutCartWrapper;
  let fixture: ComponentFixture<TestCheckoutCartWrapper>;
  let checkoutCartItems;
  let checkoutCart: CheckoutCartComponent;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CheckoutCartComponent,
        TestCheckoutCartWrapper,
        CheckoutCartItemMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckoutCartWrapper);
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    component = fixture.componentInstance;

    component.cartValue = mockCart;
    component.subtitleValue = stubSubtitle;

    fixture.detectChanges();
    checkoutCartItems = fixture.debugElement.queryAll(By.css('checkout-cart-item'));
    checkoutCart = fixture.debugElement.query(By.css('checkout-cart')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can be passed a Cart object', () => {
    expect(checkoutCart.cart).toEqual(mockCart);
  });

  it('can be passed a subtitle as input', () => {
    expect(checkoutCart.subtitle).toEqual(stubSubtitle);
  });

  it('renders a <checkout-cart-item> for every checkoutCart.items', () => {
    expect(checkoutCartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <checkout-cart-item>', () => {
    
    it('should set item', () => {
      expect(checkoutCartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });

  describe('when subtitle is null', () => {
    
    it('should not render .checkout-cart__title', () => {
      checkoutCart.subtitle = null;
      fixture.detectChanges();

      let cartTitleElement = fixture.debugElement.query(By.css('.checkout-cart__title'));

      expect(cartTitleElement).toBeNull();
    });
  });

  describe('when subtitle is defined', () => {
    
    it('should render .checkout-cart__title', () => {
      let cartTitleElement = fixture.debugElement.query(By.css('.checkout-cart__title'));

      expect(cartTitleElement).not.toBeNull();
    });
  });

  describe('when Edit Cart is clicked', () => {

    beforeEach(() => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
    });
    
    it('should call router.navigateByUrl', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });

  describe('when cart is empty', () => {
    
    beforeEach(() => {
      let fixture = TestBed.createComponent(TestCheckoutCartWrapper);
      component = fixture.componentInstance;

      component.cartValue = mockCart;
      component.cartValue.items = [];
      fixture.detectChanges();
    });
    
    it('should navigate to the /cart page', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});
