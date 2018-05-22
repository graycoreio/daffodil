import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartSubtotalComponent } from './cart-subtotal.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart-subtotal [cart]="cartValue"></cart-subtotal>'})
class TestCartSubtotalWrapper {
  cartValue: Cart;
}

describe('CartSubtotalComponent', () => {
  let component: TestCartSubtotalWrapper;
  let fixture: ComponentFixture<TestCartSubtotalWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartSubtotalComponent,
        TestCartSubtotalWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartSubtotalWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('can be passed a Cart object', () => {
    let cartSubtotalComponent = fixture.debugElement.query(By.css('cart-subtotal'));

    expect(cartSubtotalComponent.componentInstance.cart).toEqual(mockCart);
  });
});
