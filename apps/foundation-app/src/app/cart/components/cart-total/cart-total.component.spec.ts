import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartTotalComponent } from './cart-total.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart-total [cart]="cartValue"></cart-total>'})
class TestCartTotalWrapper {
  cartValue: Cart;
}

@Component({
  selector: 'proceed-to-checkout',
  template: ''
})
class ProceedToCheckoutMock {}

describe('CartTotalComponent', () => {
  let component: TestCartTotalWrapper;
  let fixture: ComponentFixture<TestCartTotalWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalComponent,
        TestCartTotalWrapper,
        ProceedToCheckoutMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartTotalWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('can be passed a Cart object', () => {
    let cartTotalComponent = fixture.debugElement.query(By.css('cart-total'));

    expect(cartTotalComponent.componentInstance.cart).toEqual(mockCart);
  });
});
