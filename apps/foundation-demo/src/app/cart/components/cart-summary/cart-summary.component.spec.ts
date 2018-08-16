import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { CartFactory, Cart } from '@daffodil/core';

import { CartSummaryComponent } from './cart-summary.component';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
let tax1 = 3;
let tax2 = 4;
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());
mockCart.items[0].tax_amount = tax1;
mockCart.items[1].tax_amount = tax2;

@Component({template: '<cart-summary [cart]="cartValue"></cart-summary>'})
class TestCartSummaryWrapper {
  @Input() cartValue: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class MockProceedToCheckoutComponent {}

@Component({selector: 'cart-subtotal', template: ''})
class MockCartSubtotalComponent {
  @Input() title: string;
  @Input() value: string;
}

@Component({selector: 'cart-grand-total', template: ''})
class MockCartGrandTotalComponent {
  @Input() title: string;
  @Input() value: string;
}

describe('CartSummaryComponent', () => {
  let component: TestCartSummaryWrapper;
  let fixture: ComponentFixture<TestCartSummaryWrapper>;
  let cartSummaryComponent: CartSummaryComponent;
  let cartSubtotalComponent: MockCartSubtotalComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartSummaryComponent,
        TestCartSummaryWrapper,
        MockProceedToCheckoutComponent,
        MockCartSubtotalComponent,
        MockCartGrandTotalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartSummaryWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
    cartSummaryComponent = fixture.debugElement.query(By.css('cart-summary')).componentInstance;
  });

  it('can be passed a Cart object', () => {
    expect(cartSummaryComponent.cart).toEqual(mockCart);
  });

  describe('ngOnInit', () => {

    let expectedTax: number;
    
    beforeEach(() => {
      expectedTax = tax1 + tax2;
    });

    it('should set cartTax to the aggregated tax of all cart items', () => {
      expect(cartSummaryComponent.cartTax).toEqual(expectedTax);
    });
  });

  describe('on first <cart-subtotal>', () => {

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[0].componentInstance;
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.title).toEqual('subtotal');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.value).toEqual('$' + mockCart.subtotal);
    });
  });

  describe('on second <cart-subtotal>', () => {

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[1].componentInstance;
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.title).toEqual('estimated shipping');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.value).toEqual('FREE (HC)');
    });
  });

  describe('on third <cart-subtotal>', () => {

    beforeEach(() => {
      cartSubtotalComponent = fixture.debugElement.queryAll(By.css('cart-subtotal'))[2].componentInstance;
    });
  
    it('should set title', () => {
      expect(cartSubtotalComponent.title).toEqual('estimated tax');
    });
  
    it('should set value', () => {
      expect(cartSubtotalComponent.value).toEqual('$' + cartSummaryComponent.cartTax);
    });
  });

  describe('on <cart-grand-total>', () => {
  
    let cartGrandTotalComponent: MockCartGrandTotalComponent;

    beforeEach(() => {
      cartGrandTotalComponent = fixture.debugElement.query(By.css('cart-grand-total')).componentInstance;      
    });

    it('should set title', () => {
      expect(cartGrandTotalComponent.title).toEqual('estimated total');
    });

    it('should set value', () => {
      expect(cartGrandTotalComponent.value).toEqual('$' + mockCart.grand_total);
    });
  });
});
