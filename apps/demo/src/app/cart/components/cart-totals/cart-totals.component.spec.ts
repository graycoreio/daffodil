import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Cart } from '@daffodil/core';
import { DaffCartItemFactory, DaffCartFactory } from '@daffodil/core/testing';

import { CartTotalsComponent } from './cart-totals.component';
import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';

@Component({template: '<demo-cart-totals [cart]="cartValue"></demo-cart-totals>'})
class WrapperComponent {
  @Input() cartValue: Cart;
}

describe('CartTotalsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartTotalsComponent: CartTotalsComponent;
  let cartTotalsItemComponent: any;

  const cartFactory = new DaffCartFactory();
  const cartItemFactory = new DaffCartItemFactory();

  const itemTaxValue = 3.00;

  let mockCart = cartFactory.create({
    grand_total: 100,
    subtotal: 100,
    items: cartItemFactory.createMany(2, {
      tax_amount: itemTaxValue
    })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalsComponent,
        WrapperComponent
      ],
      imports: [
        CartTotalsItemModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    wrapper.cartValue = mockCart;

    fixture.detectChanges();
    cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals')).componentInstance;
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

  describe('on estimated shipping <demo-cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[1].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Shipping');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('FREE (HC)');
    });
  });

  describe('on estimated tax on <demo-cart-totals-item>', () => {

    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[2].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Tax');
    });
  
    it('should set value', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('$' + cartTotalsComponent.cartTax);
    });
  });

  describe('on subtotal <demo-cart-totals-item>', () => {
    
    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Subtotal');
    });
    
    describe('when subtotal is less than 4 digits', () => {

      beforeEach(() => {
        mockCart = cartFactory.create({
          grand_total: 100,
          subtotal: 100,
          items: cartItemFactory.createMany(2, {
            tax_amount: itemTaxValue
          })
        });

        wrapper.cartValue = mockCart;
        fixture.detectChanges();

        cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement;
      });
    
      it('should set value with proper formatting', () => {  
        expect(cartTotalsItemComponent.innerHTML).toContain('$' + mockCart.subtotal);
      });
    });

    describe('when subtotal is at least 4 digits', () => {
      
      beforeEach(() => {
        mockCart = cartFactory.create({
          grand_total: 1000,
          subtotal: 1000,
          items: cartItemFactory.createMany(2, {
            tax_amount: itemTaxValue
          })
        });
        wrapper.cartValue = mockCart;
        fixture.detectChanges();

        cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement;
      });
        
      it('should set value with proper formatting', () => {  
        expect(cartTotalsItemComponent.innerHTML).toContain('$1,000');
      });
    });
  });

  describe('on estimated total <demo-cart-totals-item>', () => {
    
    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[3].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Total');
    });

    describe('when grand_total is less than 4 digits', () => {
      
      beforeEach(() => {
        mockCart = cartFactory.create({
          grand_total: 100,
          subtotal: 100,
          items: cartItemFactory.createMany(2, {
            tax_amount: itemTaxValue
          })
        });
        wrapper.cartValue = mockCart;
        fixture.detectChanges();
      });
  
      it('should set value', () => {
        expect(cartTotalsItemComponent.innerHTML).toContain('$' + cartTotalsComponent.cart.grand_total);
      });
    });

    describe('when grand_total is at least 4 digits', () => {
      
      beforeEach(() => {
        mockCart = cartFactory.create({
          grand_total: 1000,
          subtotal: 1000,
          items: cartItemFactory.createMany(2, {
            tax_amount: itemTaxValue
          })
        });
        wrapper.cartValue = mockCart;
        fixture.detectChanges();
      });
  
      it('should set value', () => {
        expect(cartTotalsItemComponent.innerHTML).toContain('$1,000');
      });
    });
  });
});
