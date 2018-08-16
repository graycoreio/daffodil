import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Cart, CartItem, CartFactory } from '@daffodil/core';

import { CartComponent } from './cart.component';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();
mockCart.items.push(cartFactory.createCartItem());
mockCart.items.push(cartFactory.createCartItem());
let stubSubtitle = 'subtitle';

@Component({template: '<cart [cart]="cartValue" [subtitle]="subtitleValue"></cart>'})
class TestCartWrapper {
  cartValue: Cart;
  subtitleValue: string;
}

@Component({selector: 'cart-item', template: ''})
class MockCartItemComponent {
  @Input() item: CartItem;
}

describe('CartComponent', () => {
  let component: TestCartWrapper;
  let fixture: ComponentFixture<TestCartWrapper>;
  let cartItems;
  let cart: CartComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        TestCartWrapper,
        MockCartItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;
    component.subtitleValue = stubSubtitle;

    fixture.detectChanges();
    cartItems = fixture.debugElement.queryAll(By.css('cart-item'));
    cart = fixture.debugElement.query(By.css('cart')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart', () => {
    expect(fixture.debugElement.query(By.css('.cart'))).not.toBeNull();
  });

  it('can be passed a Cart object', () => {
    expect(cart.cart).toEqual(mockCart);
  });

  it('can be passed a subtitle as input', () => {
    expect(cart.subtitle).toEqual(stubSubtitle);
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
        expect(cart.hasOneItem).toBeFalsy();
      });
    });

    describe('when number of cartItems is one', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(TestCartWrapper);
        component = fixture.componentInstance;
        mockCart.items.splice(1);

        component.cartValue = mockCart;

        fixture.detectChanges();
        cart = fixture.debugElement.query(By.css('cart')).componentInstance;
      });

      it('should set hasOneItem to true', () => {
        expect(cart.hasOneItem).toBeTruthy();
      });
    });
  });

  describe('when subtitle is null', () => {
    
    it('should not render .cart__title', () => {
      cart.subtitle = null;
      fixture.detectChanges();

      let cartTitleElement = fixture.debugElement.query(By.css('.cart__title'));

      expect(cartTitleElement).toBeNull();
    });
  });

  describe('when subtitle is defined', () => {
    
    it('should render .cart__title', () => {
      let cartTitleElement = fixture.debugElement.query(By.css('.cart__title'));

      expect(cartTitleElement).not.toBeNull();
    });
  });

  describe('getItemText', () => {
    
    describe('when hasOneItem is false', () => {
      
      beforeEach(() => {
        cart.hasOneItem = false;
      });

      it('should return Items', () => {
        expect(cart.itemText).toEqual('Items');
      });
    });
    
    describe('when hasOneItem is true', () => {
      
      beforeEach(() => {
        cart.hasOneItem = true;
      });

      it('should return Item', () => {
        expect(cart.itemText).toEqual('Item');
      });
    });
  });
});
