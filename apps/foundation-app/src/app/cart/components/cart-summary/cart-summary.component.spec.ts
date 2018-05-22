import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartSummaryComponent } from './cart-summary.component';
import { Component, Input } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart-summary [cart]="cartValue"></cart-summary>'})
class TestCartSummaryWrapper {
  @Input() cartValue: Cart;
}

@Component({
  selector: 'promotion',
  template: ''
})
class PromotionComponentMock {}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

@Component({selector: 'cart-subtotal', template: ''})
class TestCartSubtotalWrapper {
  @Input() cart: Cart;
}

@Component({selector: 'cart-shipping', template: ''})
class TestCartShippingWrapper {
  @Input() cart: Cart;
}

@Component({selector: 'cart-tax', template: ''})
class TestCartTaxWrapper {
  @Input() cart: Cart;
}

@Component({selector: 'cart-total', template: ''})
class TestCartTotalWrapper {
  @Input() cart: Cart;
}

describe('CartSummaryComponent', () => {
  let component: TestCartSummaryWrapper;
  let fixture: ComponentFixture<TestCartSummaryWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartSummaryComponent,
        TestCartSummaryWrapper,
        PromotionComponentMock,
        ProceedToCheckoutMock,
        TestCartSubtotalWrapper,
        TestCartShippingWrapper,
        TestCartTaxWrapper,
        TestCartTotalWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartSummaryWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('can be passed a Cart object', () => {
    let cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary'));

    expect(cartSummaryComponent.componentInstance.cart).toEqual(mockCart);
  });

  describe('on <cart-subtotal>', () => {
  
    it('should set cart', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart-subtotal'));

      expect(cartComponent.componentInstance.cart).toEqual(mockCart);
    });
  });

  describe('on <cart-shipping>', () => {
  
    it('should set cart', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart-shipping'));

      expect(cartComponent.componentInstance.cart).toEqual(mockCart);
    });
  });

  describe('on <cart-tax>', () => {
  
    it('should set cart', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart-tax'));

      expect(cartComponent.componentInstance.cart).toEqual(mockCart);
    });
  });

  describe('on <cart-total>', () => {
  
    it('should set cart', () => {
      let cartComponent = fixture.debugElement.query(By.css('cart-total'));

      expect(cartComponent.componentInstance.cart).toEqual(mockCart);
    });
  });
});
