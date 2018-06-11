import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CartAsyncWrapperComponent } from './cart-async-wrapper.component';

import { Cart, CartFactory } from '@daffodil/core';

let cartFactory = new CartFactory();
let cart = cartFactory.create();

@Component({template: '<cart-async-wrapper [cart]="cartValue | async" [loading]="loadingValue | async"></cart-async-wrapper>'})
class TestCartAsyncWrapper {
  cartValue: Observable<Cart>;
  loadingValue: Observable<boolean>;
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

@Component({
  selector: 'continue-shopping',
  template: ''
})
class ContinueShoppingMock {}

describe('TestCartAsyncWrapper', () => {
  let component: TestCartAsyncWrapper;
  let fixture: ComponentFixture<TestCartAsyncWrapper>;
  let cartAsyncWrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestCartAsyncWrapper,
        CartMock,
        CartSummaryMock,
        ProceedToCheckoutMock,
        ContinueShoppingMock,
        CartAsyncWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartAsyncWrapper);
    component = fixture.componentInstance;
    component.cartValue = of(cart);
    component.loadingValue = of(false);
    
    cartAsyncWrapperComponent = fixture.debugElement.query(By.css('cart-async-wrapper'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take cart as input', () => {
    expect(cartAsyncWrapperComponent.componentInstance.cart).toEqual(cart);
  });

  it('should be able to take loading as input', () => {
    expect(cartAsyncWrapperComponent.componentInstance.loading).toEqual(false);
  });

  describe('on <cart>', () => {
    
    it('should set cart to value passed by cart-container directive', () => {
      let cartElement = fixture.debugElement.query(By.css('cart'));
      
      expect(cartElement.componentInstance.cart).toEqual(cart);
    });
  });

  describe('on <cart-summary>', () => {
    
    it('should set cart to value passed by the cart-container directive', () => {
      let cartSummaryElement = fixture.debugElement.query(By.css('cart-summary'));

      expect(cartSummaryElement.componentInstance.cart).toEqual(cart);
    });
  });

  describe('when CartContainer.$loading is false', () => {
    
    it('should render <cart>', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart'));

      expect(cartComponent).not.toBeNull();
    });

    it('should render <cart-summary>', () => {
      let cartSummary = fixture.debugElement.query(By.css('cart-summary'));
    
      expect(cartSummary).not.toBeNull();
    });

    it('should not render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.cart-container__loading-icon'));
      
      expect(loadingIcon).toBeNull();
    });

    describe('and cart is empty', () => {
      
      it('should not render <proceed-to-checkout>', () => {
        let proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
      
        expect(proceedToCheckoutComponent).toBeNull();
      });

      it('should render cart-async-wrapper__continue-shopping-wrapper', () => {
        let continueShoppingComponent = fixture.debugElement.query(By.css('.cart-async-wrapper__continue-shopping-wrapper'));

        expect(continueShoppingComponent).not.toBeNull();
      });
    });

    describe('and cart has at least one item', () => {
      
      beforeEach(() => {
        cart.items.push(cartFactory.createCartItem());
        component.cartValue = of(cart);

        fixture.detectChanges();
      });

      it('should render <proceed-to-checkout>', () => {
        let proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
        
        expect(proceedToCheckoutComponent).not.toBeNull();
      });

      it('should not render continue-shopping', () => {
        let continueShoppingComponent = fixture.debugElement.query(By.css('continue-shopping'));

        expect(continueShoppingComponent).toBeNull();
      });
    });
  });

  describe('when CartContainer.$loading is true', () => {

    beforeEach(() => {
      component.loadingValue = of(true);
      fixture.detectChanges();
    });
    
    it('should not render <cart>', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart'));

      expect(cartComponent).toBeNull();
    });

    it('should not render <cart-summary>', () => {
      let cartSummary = fixture.debugElement.query(By.css('cart-summary'));
    
      expect(cartSummary).toBeNull();
    });

    it('should not render <proceed-to-checkout>', () => {
      let proceedToCheckoutComponent = fixture.debugElement.query(By.css('proceed-to-checkout'));
      
      expect(proceedToCheckoutComponent).toBeNull();
    });

    it('should not render <continue-shopping>', () => {
      let continueShoppingComponent = fixture.debugElement.query(By.css('continue-shopping'));
      
      expect(continueShoppingComponent).toBeNull();
    });

    it('should render loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('.cart-async-wrapper__loading-icon'));
      
      expect(loadingIcon).not.toBeNull();
    });
  });
});
