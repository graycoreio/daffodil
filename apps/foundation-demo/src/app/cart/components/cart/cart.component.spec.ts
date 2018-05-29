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
  let cartItems;
  let cart;

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
    cartItems = fixture.debugElement.queryAll(By.css('cart-item'));
    cart = fixture.debugElement.query(By.css('cart'));
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
    expect(cartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <cart-item>', () => {
    
    it('should set item', () => {
      expect(cartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });

  describe('ngOnInit', () => {
    
    describe('when number of cartItems is greater than 1', () => {
      
      it('should set hasMultipleItems to true', () => {
        expect(cart.componentInstance.hasMultipleItems).toBeTruthy();
      });
    });

    describe('when number of cartItems is less than or equal to 1', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(TestCartWrapper);
        component = fixture.componentInstance;
        mockCart.items.splice(1);

        component.cartValue = mockCart;

        fixture.detectChanges();
        cart = fixture.debugElement.query(By.css('cart'));
      });

      it('should not set hasMultipleItems to true', () => {
        expect(cart.componentInstance.hasMultipleItems).toBeFalsy();
      });
    });
  });

  describe('getItemText', () => {
    
    describe('when hasMultipleItems is true', () => {
      
      beforeEach(() => {
        cart.componentInstance.hasMultipleItems = true;
      });

      it('should return Items', () => {
        expect(cart.componentInstance.getItemText()).toEqual('Items');
      });
    });
    
    describe('when hasMultipleItems is false', () => {
      
      beforeEach(() => {
        cart.componentInstance.hasMultipleItems = false;
      });

      it('should return Item', () => {
        expect(cart.componentInstance.getItemText()).toEqual('Item');
      });
    });
  });
});
