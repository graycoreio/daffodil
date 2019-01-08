import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Cart, CartItem } from '@daffodil/core';
import { DaffCartFactory, DaffCartItemFactory, DaffCoreTestingModule } from '@daffodil/core/testing';

import { CheckoutCartComponent } from './checkout-cart.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({template: '<demo-checkout-cart [cart]="cartValue" [subtitle]="subtitleValue"></demo-checkout-cart>'})
class WrapperComponent {
  cartValue: Cart;
  subtitleValue: string;
}

@Component({selector: 'demo-checkout-cart-item', template: ''})
class MockCheckoutCartItemComponent {
  @Input() item: CartItem;
}

describe('CheckoutCartComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let checkoutCartItems;
  let checkoutCart: CheckoutCartComponent;
  let router;
  let cartFactory: DaffCartFactory ;
  let cartItemFactory: DaffCartItemFactory;
  let mockCart: Cart;
  const stubSubtitle = 'subtitle';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffCoreTestingModule
      ],
      declarations: [
        CheckoutCartComponent,
        WrapperComponent,
        MockCheckoutCartItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create({
      items: cartItemFactory.createMany(2)
    });

    wrapper.cartValue = mockCart;
    wrapper.subtitleValue = stubSubtitle;

    fixture.detectChanges();

    checkoutCartItems = fixture.debugElement.queryAll(By.css('demo-checkout-cart-item'));
    checkoutCart = fixture.debugElement.query(By.css('demo-checkout-cart')).componentInstance;
  });

  it('should create', () => {
    expect(checkoutCart).toBeTruthy();
  });

  it('can be passed a Cart object', () => {
    expect(checkoutCart.cart).toEqual(mockCart);
  });

  it('can be passed a subtitle as input', () => {
    expect(checkoutCart.subtitle).toEqual(stubSubtitle);
  });

  it('renders a <demo-checkout-cart-item> for every checkoutCart.items', () => {
    expect(checkoutCartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <demo-checkout-cart-item>', () => {
    it('should set item', () => {
      expect(checkoutCartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });

  describe('when subtitle is null', () => {
    
    it('should not render .checkout-cart__title', () => {
      checkoutCart.subtitle = null;
      fixture.detectChanges();

      const cartTitleElement = fixture.debugElement.query(By.css('.checkout-cart__title'));

      expect(cartTitleElement).toBeNull();
    });
  });

  describe('when subtitle is defined', () => {
    
    it('should render .checkout-cart__title', () => {
      const cartTitleElement = fixture.debugElement.query(By.css('.checkout-cart__title'));

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
});
