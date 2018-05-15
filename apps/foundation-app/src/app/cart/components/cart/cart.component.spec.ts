import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart, CartItem } from '@daffodil/core';

import { CartComponent } from './cart.component';
import { Component, Input } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart [cart]="cartValue"></cart>'})
class TestCartWrapper {
  cartValue: Cart;
}

@Component({selector: 'cart-item', template: ''})
class CartItemMock {
  @Input() item: CartItem;
}

describe('CartComponent', () => {
  let component: TestCartWrapper;
  let fixture: ComponentFixture<TestCartWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        TestCartWrapper,
        CartItemMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart', () => {
    expect(fixture.debugElement.query(By.css('.cart'))).not.toBeNull();
  });

  it('can be passed a Cart object', () => {
    let cartComponent = fixture.debugElement.query(By.css('cart'));

    expect(cartComponent.componentInstance.cart).toEqual(mockCart);
  });

  it('renders a <cart-item> for every cart.items', () => {
    let cartItems = fixture.debugElement.queryAll(By.css('cart-item'));

    expect(cartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <cart-item>', () => {
    
    it('should set item', () => {
      let cartItems = fixture.debugElement.queryAll(By.css('cart-item'));
      
      expect(cartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });
});
