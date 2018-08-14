import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CheckoutCartAsyncWrapperComponent } from './checkout-cart-async-wrapper.component';

import { Cart, CartFactory } from '@daffodil/core';

let cartFactory = new CartFactory();
let cart = cartFactory.create();
let stubCartTitle = 'cartTitle';

@Component({template: '<checkout-cart-async-wrapper [cartTitle]="cartTitleValue" [cart]="cartValue$ | async" [loading]="loadingValue$ | async"><div class="transcluded-content"></div></checkout-cart-async-wrapper>'})
class TestCheckoutCartAsyncWrapper {
  cartValue$: Observable<Cart>;
  loadingValue$: Observable<boolean>;
  cartTitleValue: string;
}

@Component({
  selector: 'checkout-cart',
  template: ''
})
class CheckoutCartMock { 
  @Input() cart: Cart;
  @Input() subtitle: string;
}

@Component({
  selector: 'promotion',
  template: ''
})
class PromotionMock {}

@Component({
  selector: 'cart-summary',
  template: ''
})
class CartSummaryMock {
  @Input() cart: Cart;
}

@Component({
  selector: 'help-box',
  template: ''
})
class HelpBoxMock {}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

@Component({
  selector: 'continue-shopping',
  template: ''
})
class ContinueShoppingMock {}

describe('CheckoutCartAsyncWrapper', () => {
  let component: TestCheckoutCartAsyncWrapper;
  let fixture: ComponentFixture<TestCheckoutCartAsyncWrapper>;
  let checkoutCartAsyncWrapperComponent: CheckoutCartAsyncWrapperComponent;
  let cartComponent;
  let promotionComponent;
  let cartSummaryComponent;
  let helpBoxComponent;
  let proceedToCheckoutComponent;
  let continueShoppingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestCheckoutCartAsyncWrapper,
        CheckoutCartMock,
        CartSummaryMock,
        HelpBoxMock,
        ProceedToCheckoutMock,
        ContinueShoppingMock,
        PromotionMock,
        CheckoutCartAsyncWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckoutCartAsyncWrapper);
    component = fixture.componentInstance;
    component.cartValue$ = of(cart);
    component.loadingValue$ = of(false);
    component.cartTitleValue = stubCartTitle;
    
    checkoutCartAsyncWrapperComponent = fixture.debugElement.query(By.css('checkout-cart-async-wrapper')).componentInstance;

    fixture.detectChanges();

    cartComponent = fixture.debugElement.query(By.css('checkout-cart'));
    promotionComponent = fixture.debugElement.query(By.css('promotion'));
    cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary'));
    helpBoxComponent = fixture.debugElement.query(By.css('help-box'));
    proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
    continueShoppingComponent = fixture.debugElement.query(By.css('continue-shopping'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take cart as input', () => {
    expect(checkoutCartAsyncWrapperComponent.cart).toEqual(cart);
  });

  it('should be able to take loading as input', () => {
    expect(checkoutCartAsyncWrapperComponent.loading).toEqual(false);
  });

  it('should be able to take cartTitle as input', () => {
    expect(checkoutCartAsyncWrapperComponent.cartTitle).toEqual(stubCartTitle);
  });

  it('should be able to take transcluded content', () => {
    expect(fixture.debugElement.query(By.css('.transcluded-content'))).not.toBeNull();
  });

  describe('on <checkout-cart>', () => {
    
    it('should set cart to value passed by cart-container directive', () => {
      expect(cartComponent.componentInstance.cart).toEqual(cart);
    });

    it('should set subtitle', () => {
      expect(cartComponent.componentInstance.subtitle).toEqual(stubCartTitle);
    });
  });

  describe('on <cart-summary>', () => {
    
    it('should set cart to value passed by the cart-container directive', () => {
      expect(cartSummaryComponent.componentInstance.cart).toEqual(cart);
    });
  });

  describe('when CartContainer.$loading is false', () => {
    
    it('should render <checkout-cart>', () => {
      expect(cartComponent).not.toBeNull();
    });

    it('should render <cart-summary>', () => {
      let cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary'))
      expect(cartSummaryComponent).not.toBeNull();
    });

    it('should render <help-box>', () => {
      expect(helpBoxComponent).not.toBeNull();
    });

    it('should not render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.cart-container__loading-icon'));
      
      expect(loadingIcon).toBeNull();
    });
  });

  describe('when CartContainer.$loading is true', () => {

    beforeEach(() => {
      component.loadingValue$ = of(true);
      fixture.detectChanges();
    });
    
    it('should not render <checkout-cart>', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart'));

      expect(cartComponent).toBeNull();
    });

    it('should not render <cart-summary>', () => {
      let cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary'));
      expect(cartSummaryComponent).toBeNull();
    });

    it('should not render <help-box>', () => {
      let helpBoxComponent = fixture.debugElement.query(By.css('help-box'));
      expect(helpBoxComponent).toBeNull();
    });

    it('should render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.checkout-cart-async-wrapper__loading-icon'));
      
      expect(loadingIcon).not.toBeNull();
    });
  });
});
