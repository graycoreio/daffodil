import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart, CartItem } from '@daffodil/core';

import { CartComponent } from './cart.component';
import { Component, Input } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());

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
    
    describe('when number of cartItems is not one', () => {
      
      it('should set hasOneItem to false', () => {
        expect(cart.componentInstance.hasOneItem).toBeFalsy();
      });
    });

    describe('when number of cartItems is one', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(TestCartWrapper);
        component = fixture.componentInstance;
        mockCart.items.splice(1);

        component.cartValue = mockCart;

        fixture.detectChanges();
        cart = fixture.debugElement.query(By.css('cart'));
      });

      it('should set hasOneItem to true', () => {
        expect(cart.componentInstance.hasOneItem).toBeTruthy();
      });
    });
  });

  describe('getItemText', () => {
    
    describe('when hasOneItem is false', () => {
      
      beforeEach(() => {
        cart.componentInstance.hasOneItem = false;
      });

      it('should return Items', () => {
        expect(cart.componentInstance.itemText).toEqual('Items');
      });
    });
    
    describe('when hasOneItem is true', () => {
      
      beforeEach(() => {
        cart.componentInstance.hasOneItem = true;
      });

      it('should return Item', () => {
        expect(cart.componentInstance.itemText).toEqual('Item');
      });
    });
  });
});
