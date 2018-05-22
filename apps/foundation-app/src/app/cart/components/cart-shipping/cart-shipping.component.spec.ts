import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartShippingComponent } from './cart-shipping.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart-shipping [cart]="cartValue"></cart-shipping>'})
class TestCartShippingWrapper {
  cartValue: Cart;
}

describe('CartShippingComponent', () => {
  let component: TestCartShippingWrapper;
  let fixture: ComponentFixture<TestCartShippingWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartShippingComponent,
        TestCartShippingWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartShippingWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('can be passed a Cart object', () => {
    let cartShippingComponent = fixture.debugElement.query(By.css('cart-shipping'));

    expect(cartShippingComponent.componentInstance.cart).toEqual(mockCart);
  });
});
