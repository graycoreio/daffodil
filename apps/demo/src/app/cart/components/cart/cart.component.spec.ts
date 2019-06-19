import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { DaffCart, DaffCartItem } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { CartComponent } from './cart.component';

@Component({template: '<demo-cart [cart]="cartValue"></demo-cart>'})
class WrapperComponent {
  cartValue: DaffCart;
}

@Component({selector: 'demo-cart-item', template: ''})
class MockCartItemComponent {
  @Input() item: DaffCartItem;
}

describe('CartComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItems;
  let cart: CartComponent;

  const cartFactory = new DaffCartFactory();
  const mockCart = cartFactory.create({
    items: new DaffCartItemFactory().createMany(2)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        WrapperComponent,
        MockCartItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    wrapper.cartValue = mockCart;

    fixture.detectChanges();
    cartItems = fixture.debugElement.queryAll(By.css('demo-cart-item'));
    cart = fixture.debugElement.query(By.css('demo-cart')).componentInstance;
  });

  it('should create', () => {
    expect(cart).toBeTruthy();
  });

  it('renders a cart', () => {
    expect(fixture.debugElement.query(By.css('.cart'))).not.toBeNull();
  });

  it('can be passed a Cart object', () => {
    expect(cart.cart).toEqual(mockCart);
  });

  it('renders a <demo-cart-item> for every cart.items', () => {
    expect(cartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <demo-cart-item>', () => {
    
    it('should set item', () => {
      expect(cartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });
});
