import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Cart } from '@daffodil/core';
import { CartFactory } from '@daffodil/core/testing';

import { CartTotalsComponent } from './cart-totals.component';
import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';
import { CartTotalsItemComponent } from '../cart-totals-item/cart-totals-item.component';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
let tax1 = 3;
let tax2 = 4;
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());
mockCart.items[0].tax_amount = tax1;
mockCart.items[1].tax_amount = tax2;

@Component({template: '<cart-totals [cart]="cartValue"></cart-totals>'})
class TestCartTotalsWrapper {
  @Input() cartValue: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class MockProceedToCheckoutComponent {}

describe('CartTotalsComponent', () => {
  let component: TestCartTotalsWrapper;
  let fixture: ComponentFixture<TestCartTotalsWrapper>;
  let cartTotalsComponent: CartTotalsComponent;
  let cartTotalsItemComponent: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalsComponent,
        TestCartTotalsWrapper,
        MockProceedToCheckoutComponent
      ],
      imports: [
        CartTotalsItemModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartTotalsWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
    cartTotalsComponent = fixture.debugElement.query(By.css('cart-totals')).componentInstance;
  });

  it('can be passed a Cart object', () => {
    expect(cartTotalsComponent.cart).toEqual(mockCart);
  });

  describe('ngOnInit', () => {

    let expectedTax: number;
    
    beforeEach(() => {
      expectedTax = tax1 + tax2;
    });

    it('should set cartTax to the aggregated tax of all cart items', () => {
      expect(cartTotalsComponent.cartTax).toEqual(expectedTax);
    });
  });

  describe('on first <cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('cart-totals-item'))[0].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Subtotal');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('$' + mockCart.subtotal);
    });
  });

  describe('on second <cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('cart-totals-item'))[1].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Shipping');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('FREE (HC)');
    });
  });

  describe('on third <cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('cart-totals-item'))[2].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Tax');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('$' + cartTotalsComponent.cartTax);
    });
  });

  describe('on fourth <cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('cart-totals-item'))[3].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Total');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('$' + cartTotalsComponent.cart.grand_total);
    });
  });
});
