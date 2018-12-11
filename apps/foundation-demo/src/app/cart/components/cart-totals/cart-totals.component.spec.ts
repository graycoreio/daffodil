import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Cart, DaffCartItemFactory, DaffCartFactory } from '@daffodil/cart';

import { CartTotalsComponent } from './cart-totals.component';
import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';

@Component({template: '<cart-totals [cart]="cartValue"></cart-totals>'})
class TestCartTotalsWrapper {
  @Input() cartValue: Cart;
}

describe('CartTotalsComponent', () => {
  let component: TestCartTotalsWrapper;
  let fixture: ComponentFixture<TestCartTotalsWrapper>;
  let cartTotalsComponent: CartTotalsComponent;
  let cartTotalsItemComponent: any;

  let cartFactory = new DaffCartFactory();
  let cartItemFactory = new DaffCartItemFactory();

  let itemTaxValue = 3.00;

  let mockCart = cartFactory.create({
    items: cartItemFactory.createMany(2, {
      tax_amount: itemTaxValue
    })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalsComponent,
        TestCartTotalsWrapper
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
      expectedTax = 2 * itemTaxValue;
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
