import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Cart } from '@daffodil/core';
import { DaffCartItemFactory, DaffCartFactory, DaffMockCurrencyPipe } from '@daffodil/core/testing';

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
  let currencyPipe;
  const cartFactory = new DaffCartFactory();
  const cartItemFactory = new DaffCartItemFactory();

  const itemTaxValue = 3.00;

  const mockCart = cartFactory.create({
    items: cartItemFactory.createMany(2, {
      tax_amount: itemTaxValue
    })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        CartTotalsComponent,
        DaffMockCurrencyPipe
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
    currencyPipe = spyOn(DaffMockCurrencyPipe.prototype, 'transform');
    
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
  
    it('should call the angular CurrencyPipe.transform with cartTax', () => {
      expect(currencyPipe).toHaveBeenCalledWith(cartTotalsComponent.cartTax);
    });
  });

  describe('on subtotal <demo-cart-totals-item>', () => {
    
    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Subtotal');
    });
    
    it('should call the angular CurrencyPipe.transform with cart subtotal', () => {  
      expect(currencyPipe).toHaveBeenCalledWith(mockCart.subtotal);
    });
  });

  describe('on estimated total <demo-cart-totals-item>', () => {
    
    beforeEach(() => {
      cartTotalsItemComponent = fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[3].nativeElement;
    });
  
    it('should set label', () => {
      expect(cartTotalsItemComponent.innerHTML).toContain('Estimated Total');
    });

    it('should call the angular CurrencyPipe.transform with cart grand_total', () => {
      expect(currencyPipe).toHaveBeenCalledWith(cartTotalsComponent.cart.grand_total);
    });
  });
});
