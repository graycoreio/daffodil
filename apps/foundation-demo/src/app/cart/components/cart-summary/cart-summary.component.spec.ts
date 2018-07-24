import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartSummaryComponent } from './cart-summary.component';
import { Component, Input } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());

@Component({template: '<cart-summary [cart]="cartValue"><div class="transcluded"></div></cart-summary>'})
class TestCartSummaryWrapper {
  @Input() cartValue: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

@Component({selector: 'cart-subtotal', template: ''})
class CartSubtotalMock {
  @Input() title: string;
  @Input() value: string;
}

@Component({selector: 'cart-grand-total', template: ''})
class CartGrandTotalMock {
  @Input() title: string;
  @Input() value: string;
}

describe('CartSummaryComponent', () => {
  let component: TestCartSummaryWrapper;
  let fixture: ComponentFixture<TestCartSummaryWrapper>;
  let cartSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartSummaryComponent,
        TestCartSummaryWrapper,
        ProceedToCheckoutMock,
        CartSubtotalMock,
        CartGrandTotalMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartSummaryWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
    cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary'));
  });

  it('can be passed a Cart object', () => {

    expect(cartSummaryComponent.componentInstance.cart).toEqual(mockCart);
  });

  it('should render the transcluded element', () => {
    expect(fixture.debugElement.query(By.css('.transcluded'))).not.toBeNull();
  });

  describe('calculateTotalTax', () => {

    let expectedTax: number;
    
    beforeEach(() => {
      let tax1 = 3;
      let tax2 = 4;

      mockCart.items[0].tax_amount = tax1;
      mockCart.items[1].tax_amount = tax2;
      expectedTax = tax1 + tax2;
    });

    it('should return the aggregated tax of all cart items', () => {
      expect(cartSummaryComponent.componentInstance.calculateTotalTax(mockCart)).toEqual(expectedTax);
    });
  });

  describe('on first <cart-subtotal>', () => {

    let cartSubtotalComponent;

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[0]
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.componentInstance.title).toEqual('subtotal');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.componentInstance.value).toEqual('$' + mockCart.subtotal);
    });
  });

  describe('on second <cart-subtotal>', () => {

    let cartSubtotalComponent;

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[1]
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.componentInstance.title).toEqual('estimated shipping');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.componentInstance.value).toEqual('FREE (HC)');
    });
  });

  describe('on third <cart-subtotal>', () => {

    let cartSubtotalComponent;

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[2]
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.componentInstance.title).toEqual('estimated tax');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.componentInstance.value).toEqual('$' + cartSummaryComponent.componentInstance.cartTax);
    });
  });

  describe('on <cart-grand-total>', () => {
  
    let cartComponent;

    beforeEach(() => {
      cartComponent = fixture.debugElement.query(By.css('cart-grand-total'));      
    });

    it('should set title', () => {
      expect(cartComponent.componentInstance.title).toEqual('estimated total');
    });

    it('should set value', () => {
      expect(cartComponent.componentInstance.value).toEqual('$' + mockCart.grand_total);
    });
  });

  describe('when there are no cart items in the cart', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(TestCartSummaryWrapper);
      component = fixture.componentInstance;
      let noItemsCart = mockCart;
      noItemsCart.items = [];
      component.cartValue = noItemsCart;
      fixture.detectChanges();
    });
    
    it('should not render cart-summary', () => {
      let cartSummary = fixture.debugElement.query(By.css('.cart-summary'));

      expect(cartSummary).toBeNull();
    });
  });
});
